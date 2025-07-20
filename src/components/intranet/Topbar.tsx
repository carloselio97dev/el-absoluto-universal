'use client';

import { useState } from 'react';

export default function Topbar() {
  const [q, setQ] = useState('');

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-pink-200/40 bg-white/70 px-4 backdrop-blur">
      <div className="flex-1">
        <form
          onSubmit={e => {
            e.preventDefault();
            // future: route to search page
          }}
          className="max-w-sm"
        >
          <div className="relative">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Buscar… (futuro)"
              className="w-full rounded-xl border border-pink-200/70 bg-white/70 px-4 py-2 text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-xl border border-pink-200/70 bg-white/70 px-3 py-1.5 text-xs font-medium text-pink-600 hover:bg-pink-50"
        >
          Modo
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 text-white flex items-center justify-center text-sm font-bold">
          A
        </div>
      </div>
    </header>
  );
}
