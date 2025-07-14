'use client';

import { etapasTratamientoBase } from '@/data/etapasTratamientoBase';

export default function TratamientoBase() {
  return (
    <section className="bg-pink-50 py-16 px-6">
      {/* Encabezado */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-pink-700">
          Tratamiento terapéutico base
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Compuesto por 5 sesiones enfocadas en restaurar tu bienestar emocional,
          mental, energético y espiritual.
        </p>
      </div>

      {/* Tarjetas de etapas */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {etapasTratamientoBase.map((etapa, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition hover:shadow-lg"
          >
            <div className="mb-4">{etapa.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {etapa.titulo}
            </h3>
            <p className="text-gray-600 text-sm">{etapa.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
