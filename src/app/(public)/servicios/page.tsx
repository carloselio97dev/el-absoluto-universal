// app/servicios/page.tsx

import ServicioCard from "@/components/ServiciosCard";
import { servicios } from "@/data/servicios";

export default function ServiciosPage() {
  return (
    <main className="bg-pink-50 min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-pink-700 mb-10">
        Herramientas que integro en las sesiones
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicios.map((servicio) => (
          <ServicioCard
            key={servicio.slug}
            title={servicio.title}
            slug={servicio.slug}
            image={servicio.image}
            description={servicio.description}
          />
        ))}
      </div>
    </main>
  );
}
