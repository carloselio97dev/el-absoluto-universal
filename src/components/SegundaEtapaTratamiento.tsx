'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function SegundaEtapaTratramiento() {
  return (
    <section className="bg-pink-50 py-4 px-6">
      <div className="max-w-4xl mx-auto text-center mb-1">
      
        <h2 className="text-2xl md:text-3xl font-extrabold text-pink-700">
        Segunda Etapa  Tratamiento Personalizado de Profundización
        </h2>
      </div>

      {/* Imagen decorativa */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/pendelo-hebreo.png" // 🔁 cambia la ruta a tu imagen real si es distinta
          alt="Péndulo cuarzo rosa"
          className="w-40 h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Contenido principal */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 mb-4">
          Una vez completado el tratamiento base, estás preparado para iniciar un proceso más profundo y personalizado,
          orientado a trabajar un desafío específico que estés atravesando, ya sea de tipo físico, emocional o espiritual.
        </p>
        <p className="text-gray-700">
          En esta segunda etapa, se utiliza un{' '}
          <span className="font-semibold text-gray-900">péndulo auxiliar de cuarzo</span>{' '}
          para testear qué necesita irradiar tu campo energético. Este proceso permite restaurar el equilibrio perdido en
          aspectos concretos de tu vida.
        </p>

        {/* Botón */}
        <div className="mt-8">
          <a
            href="https://wa.me/51962305362?text=Hola%20.%20Quisiera%20iniciar%20mi%20sesión%20personalizada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
          >
            <FaWhatsapp className="text-white" />
            Solicitar mi sesión personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
