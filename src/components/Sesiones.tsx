'use client'

import Image from 'next/image'

const terapias = [
  {
    titulo: 'Psicoterapia Integrativa Holística',
    descripcion:
      'Combina las técnicas psicológicas tradicionales con la terapia de radiestesia con péndulo hebreo y el Tarot terapéutico.',
    imagen: '/images/pendulo.jpg',
  },
  {
    titulo: 'Lectura de Registros Akáshicos',
    descripcion:
      'Canalización de información del alma para comprender aprendizajes, patrones y caminos de evolución. Aporta claridad, sentido y guía espiritual en momentos clave de la vida.',
    imagen: '/images/akashicos.jpg',
  },
  {
    titulo: 'Tarot Predictivo',
    descripcion:
      'Lectura de Tarot predictivo, con sesiones presenciales o virtuales para orientación y toma de decisiones.',
    imagen: '/images/psicotarot.jpg',
  },
  {
    titulo: 'Cosmobiología',
    descripcion:
      'La conciencia del pensamiento orientada a que el consultante comprenda su conciencia de unidad.',
    imagen: '/images/cosmobiologia.jpg',
  },
]

export default function Sesiones() {
  return (
    <section className="bg-pink-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">
          Herramientas que integro en las sesiones
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {terapias.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-[1.02] transition"
            >
              <div className="h-48 relative">
                <Image
                  src={item.imagen}
                  alt={item.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-pink-700 mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    {item.descripcion}
                  </p>
                </div>
                <button className="mt-auto self-start text-sm text-pink-600 font-semibold hover:underline">
                  Ver más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
