'use client';

import Image from 'next/image';

const noticias = [
  {
    id: 1,
    titulo: 'Taller de Limpieza Energética con Péndulo Hebreo',
    resumen: 'Descubre cómo armonizar tu campo energético con el uso del péndulo hebreo y palabras sagradas.',
    fecha: '15 de Julio 2025',
    imagen: '/images/taller-pendulo.jpg',
  },
  {
    id: 2,
    titulo: 'La influencia de la Luna Llena en tus emociones',
    resumen: 'Conoce cómo trabajar con la energía de la luna para sanar tus patrones inconscientes.',
    fecha: '5 de Julio 2025',
    imagen: '/images/luna-llena.jpg',
  },
];

export default function BlogList() {
  return (
    <section className="bg-pink-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">Blog</h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Encuentra reflexiones, novedades, talleres y mensajes espirituales para tu camino de sanación y conciencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-60 relative">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <p className="text-sm text-gray-500">{noticia.fecha}</p>
                <h2 className="text-xl font-bold text-pink-600">{noticia.titulo}</h2>
                <p className="text-gray-700">{noticia.resumen}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
