'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function EntretenimientoSocialDestacado() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center animate-fade-up">
        
        {/* Imagen */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/gestalt.jpg"
            alt="Tarot para eventos sociales"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Tarot para Eventos Sociales
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            ¿Tienes una celebración, cumpleaños o reunión especial? Agrega un toque mágico con lecturas
            de tarot lúdicas y reveladoras para entretener a tus invitados. Una experiencia diferente y
            memorable con un enfoque cálido, divertido y espiritual.
          </p>

          <Link
            href="/servicios/entretenimiento"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold text-base px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Conoce más sobre esta experiencia
          </Link>
        </div>
      </div>
    </section>
  );
}
