// src/components/Terapias.jsx
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
export default function Terapias() {
  return (
   <section className="bg-gradient-to-b from-pink-50 via-white to-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur rounded-xl shadow-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Imagen + nombre */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/terapeuta.jpg"
              alt="Psicoterapeuta Dahiana"
              width={180}
              height={180}
              className="rounded-full shadow-lg object-cover"
            />
            <p className="mt-4 text-center font-semibold text-gray-800">
              Psicoterapia Integrativa Holística <br />
              <span className="text-black font-bold">
                Soy Dahiana Velasquez de Lima – Perú
              </span>
            </p>
          </div>

          {/* Contenido derecho */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
              Lectura y predicciones acertadas
            </h2>

            <p className="text-gray-700 mb-6">
              Mi trabajo se basa en una visión integrativa y transpersonal que combina la profundidad de la Terapia Gestalt, el poder simbólico del Psicotarot, la limpieza energética del Péndulo Hebreo, la sabiduría del alma a través de los Registros Akáshicos y la cosmobiología.
            </p>

            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow transition mb-6"
            >
              <FaWhatsapp className="text-xl" />
              Hablemos por WhatsApp
            </a>

            {/* Lista de terapias */}
            <h3 className="text-lg font-semibold text-pink-700 mb-2">
              Herramientas terapéuticas:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              <li>Terapia Gestalt</li>
              <li>Psicotarot</li>
              <li>Radiestesia con Péndulo Hebreo</li>
              <li>Lectura de Registros Akáshicos</li>
              <li>Cosmobiología</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
