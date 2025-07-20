// components/intranet/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BlogIcon, CalendarIcon, SettingsIcon, MenuIcon } from '@/components/intranet/icons';

const items = [
  { label: 'Dashboard', href: '/intranet', icon: <MenuIcon className="h-5 w-5" /> },
  { label: 'Blog', href: '/intranet/blog', icon: <BlogIcon className="h-5 w-5" /> },
  { label: 'Citas & Pagos', href: '#', icon: <CalendarIcon className="h-5 w-5" />, disabled: true },
  { label: 'Configuración', href: '#', icon: <SettingsIcon className="h-5 w-5" />, disabled: true },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      id="sidebar-debug"
      className="
        fixed left-0 top-0 z-[120]
        flex h-screen w-60 flex-col
        bg-white shadow-lg
        border-r border-pink-200/60
      "
      style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}
    >
      {/* HEADER */}
      <div className="h-16 flex items-center px-5 font-bold text-pink-600 tracking-wide border-b border-pink-100">
        INTRANET
      </div>

      {/* NAV SCROLLABLE */}
      <nav className="flex-1 min-h-0 overflow-y-auto px-3 py-3 space-y-1">
        {items.map(it => {
          const active = pathname === it.href || pathname.startsWith(it.href + '/');
          const cls =
            'flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ' +
            (it.disabled
              ? 'cursor-not-allowed text-gray-400'
              : active
              ? 'bg-pink-600 text-white shadow'
              : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600');
          return it.disabled ? (
            <div key={it.label} className={cls}>
              <span className={active ? 'text-white' : 'text-pink-600'}>{it.icon}</span>
              <span>{it.label}</span>
            </div>
          ) : (
            <Link key={it.label} href={it.href} className={cls}>
              <span className={active ? 'text-white' : 'text-pink-600'}>{it.icon}</span>
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER (BOTÓN) */}
      <div className="border-t border-pink-200/60 p-3">
        <form action="/intranet/login/logout" method="post">
          <button
            type="submit"
            className="
              w-full h-10 rounded-xl bg-pink-600 text-white text-xs font-semibold
              hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400
            "
          >
            Salir
          </button>
        </form>
      </div>
    </aside>
  );
}
