interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-pink-200/50 bg-white/70 p-16 text-center">
      <h3 className="text-xl font-semibold text-pink-600">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-sm text-gray-600">{description}</p>}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="mt-6 rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
