import Link from 'next/link';

interface Props {
  href?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  disabled?: boolean;
  accent?: 'pink' | 'violet' | 'blue' | 'green';
  badge?: string;
}

const accentMap: Record<string, string> = {
  pink: 'from-pink-500/20 to-fuchsia-500/20 text-pink-600',
  violet: 'from-violet-500/20 to-fuchsia-500/20 text-violet-600',
  blue: 'from-sky-500/20 to-indigo-500/20 text-sky-600',
  green: 'from-emerald-500/20 to-teal-500/20 text-emerald-600',
};

export function ModuleCard({
  href,
  title,
  description,
  icon,
  disabled,
  accent = 'pink',
  badge,
}: Props) {
  const content = (
    <div
      className={`relative h-full overflow-hidden rounded-2xl border border-pink-200/50 bg-white/70 p-5 backdrop-blur
                  shadow-sm transition-all
                  ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-1'} `}
    >
      <div className="flex items-start gap-4">
        <div
          className={`rounded-xl bg-gradient-to-br ${accentMap[accent]} p-3 shadow-inner`}
        >
          <div className="h-7 w-7">{icon}</div>
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-base font-semibold text-gray-800">{title}</h3>
          <p className="text-xs leading-snug text-gray-500">{description}</p>
        </div>
        {badge && (
            <span className="rounded-full bg-pink-600/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-pink-600">
              {badge}
            </span>
        )}
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-pink-300/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 left-1/3 h-40 w-40 rounded-full bg-fuchsia-300/10 blur-3xl" />
    </div>
  );

  if (disabled || !href) return content;

  return (
    <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-2xl">
      {content}
    </Link>
  );
}
