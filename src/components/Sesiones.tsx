// src/components/Sesiones.jsx
import Image from 'next/image'

const terapias = [
  {
    titulo: 'Terapia Gestalt',
    descripcion:
      'Un enfoque humanista que permite tomar conciencia de lo que sentimos, pensamos y hacemos en el aquí y ahora. Ayuda a responsabilizarnos de nuestra vida, sanar vínculos y expresar lo que necesitamos.',
    imagen: '/images/gestalt.jpg',
  },
  {
    titulo: 'Psicotarot',
    descripcion:
      'Uso el tarot como herramienta simbólica y terapéutica, no predictiva. Las cartas funcionan como espejos del inconsciente, abriendo espacio al diálogo interno y a la comprensión profunda de los procesos personales.',
    imagen: '/images/psicotarot.jpg',
  },
  {
    titulo: 'Radiestesia con Péndulo Hebreo',
    descripcion:
      'Terapia bioenergética que utiliza etiquetas en hebreo para identificar y armonizar bloqueos energéticos en el campo áurico. Favorece la liberación emocional y la restauración del equilibrio energético.',
    imagen: '/images/pendulo.jpg',
  },
  {
    titulo: 'Lectura de Registros Akáshicos',
    descripcion:
      'Canalización de información del alma para comprender aprendizajes, patrones y caminos de evolución. Aporta claridad, sentido y guía espiritual en momentos clave de la vida.',
    imagen: '/images/akashicos.jpg',
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
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-pink-700 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-700">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
