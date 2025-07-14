"use client";

import ServicioCard from "@/components/ServiciosCard";
import { servicios } from "@/data/servicios";


export default function Servicios() {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-2xl font-bold text-center text-pink-700 mb-8">
       Herramientas que integro en las sesiones

      </h2>

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
    </section>
  );
}
