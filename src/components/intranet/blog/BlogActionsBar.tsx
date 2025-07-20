'use client';

interface BlogActionsBarProps {
  onCreate: () => void;
  onRefresh: () => void;
  onSearch: (q: string) => void;
  searchValue: string;
  loading?: boolean;
}

export default function BlogActionsBar({
  onCreate,
  onRefresh,
  onSearch,
  searchValue,
  loading = false
}: BlogActionsBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-2">
        <button
          onClick={onCreate}
          className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700 disabled:opacity-50"
          disabled={loading}
        >
          Nueva
        </button>
        <button
          onClick={onRefresh}
          className="rounded-lg border border-pink-300 px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-50 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Actualizando...' : 'Refrescar'}
        </button>
      </div>

      <div>
        <input
          value={searchValue}
          onChange={e => onSearch(e.target.value)}
          placeholder="Buscar..."
          className="rounded-lg border border-pink-300 bg-white/60 px-4 py-2 text-sm shadow-sm outline-none focus:border-pink-500"
        />
      </div>
    </div>
  );
}
