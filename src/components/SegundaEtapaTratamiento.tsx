'use client';

import Image from 'next/image';
import { GiCrystalBall } from 'react-icons/gi';

export default function SegundaEtapaTratamiento() {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white py-16 px-4 overflow-hidden">
      {/* Icono decorativo superior */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-pink-300 text-6xl opacity-20 pointer-events-none z-0">
        <GiCrystalBall />
      </div>

      {/* Tarjeta principal */}
      <div className="relative z-10 max-w-lg mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8 space-y-6 border border-pink-100">
        {/* Títulos */}
        <div className="text-center space-y-1">
          <h3 className="text-sm font-semibold text-pink-600 uppercase tracking-wide">
            Segunda etapa
          </h3>
          <h2 className="text-2xl font-bold text-pink-700 leading-snug">
            Tratamiento Personalizado de Profundización
          </h2>
        </div>

        {/* Imagen decorativa */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/pendelo-hebreo.png"
            alt="Péndulo energético"
            width={320}
            height={180}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Descripción */}
        <div className="text-gray-700 space-y-4 text-sm leading-relaxed">
          <p>
            Una vez completado el tratamiento base, estás preparado para iniciar
            un proceso más profundo y personalizado, orientado a trabajar un
            desafío específico que estés atravesando, ya sea de tipo físico,
            emocional o espiritual.
          </p>
          <p>
            En esta segunda etapa, se utiliza un{' '}
            <strong className="text-pink-700">
              péndulo auxiliar de cuarzo
            </strong>{' '}
            para testear qué necesitas irradiar en tu campo energético. Este proceso
            permite restaurar el equilibrio perdido en aspectos concretos de tu
            vida.
          </p>
        </div>

        {/* Botón */}
        <div className="flex justify-center pt-2">
          <a
            href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold text-base px-6 py-3 rounded-full shadow-md transition-all"
          >
            Solicitar mi sesión personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
