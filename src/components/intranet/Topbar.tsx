'use client';

export default function Topbar() {
  return (
    <header className="h-14 flex items-center gap-4 px-6 border-b border-pink-200/40 bg-white/70 backdrop-blur">
      <input
        disabled
        placeholder="Buscar… (futuro)"
        className="w-72 rounded-lg border border-pink-200/60 bg-white/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300/40"
      />
      <div className="ml-auto flex items-center gap-3">
        <button className="rounded-full bg-pink-600 text-white h-9 w-9 text-sm font-semibold">A</button>
      </div>
    </header>
  );
}
