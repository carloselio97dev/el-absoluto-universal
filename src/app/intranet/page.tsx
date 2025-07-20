export default function DashboardPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-pink-700">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-pink-200/40 p-6 shadow-sm">
          <h2 className="font-semibold text-pink-600 mb-1">Entradas Blog</h2>
          <p className="text-sm text-gray-600">Resumen rápido del contenido.</p>
        </div>
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-pink-200/40 p-6 shadow-sm">
          <h2 className="font-semibold text-pink-600 mb-1">Citas</h2>
          <p className="text-sm text-gray-600">Estado de agendas (futuro).</p>
        </div>
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-pink-200/40 p-6 shadow-sm">
          <h2 className="font-semibold text-pink-600 mb-1">Pagos</h2>
          <p className="text-sm text-gray-600">Últimos pagos (futuro).</p>
        </div>
      </div>
    </div>
  );
}
