'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterestP,
} from 'react-icons/fa'

export default function Terapias() {
  return (
    <>
      {/* Hero de bienvenida sin fondo blanco */}
      <section className="bg-pink-100 py-20">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">

          {/* Texto de bienvenida */}
          <div className="w-full md:w-1/2 text-center md:text-left text-black">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bienvenido a tu espacio de bienestar
            </h1>
            <p className="text-lg mb-6">
              Terapias personalizadas, Comienza tu transformación hoy.
            </p>
            <Link
              href="/servicios"
              className="inline-block bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition"
            >
              Conoce más
            </Link>
          </div>

          {/* Imagen del péndulo */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <Image
              src="/images/pendulo.jpg"
              alt="Psicoterapia con péndulo"
              width={320}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sección de presentación y redes */}
      <section className="bg-gradient-to-b from-pink-50 via-white to-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur rounded-xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Foto + nombre + redes */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/terapeuta.jpg"
                alt="Psicoterapeuta Dahiana"
                width={180}
                height={180}
                className="rounded-full shadow-lg object-cover"
              />
              <p className="mt-4 text-center font-semibold text-gray-800">
                Lic Psic. Dahiana Velásquez G <br /> Psicóloga y psicoterapeuta holística <br />
                <span className="text-black font-bold">
                  Soy Dahiana Velasquez de Lima – Perú
                </span>
              </p>

              {/* Redes sociales */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a href="https://www.facebook.com/TU-PAGINA" target="_blank" rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow transition">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/TU-PERFIL" target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90 text-white p-2 rounded-full shadow transition">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@TU-CANAL" target="_blank" rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow transition">
                  <FaYoutube />
                </a>
                <a href="https://www.tiktok.com/@TU-USUARIO" target="_blank" rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white p-2 rounded-full shadow transition">
                  <FaTiktok />
                </a>
                <a href="https://www.pinterest.com/TU-PERFIL" target="_blank" rel="noopener noreferrer"
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow transition">
                  <FaPinterestP />
                </a>
              </div>
            </div>

            {/* Contenido derecho */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
                Encuentra equilibrio y bienestar en tu vida
              </h2>

              <p className="text-gray-700 mb-6">
                Mi trabajo se basa en una visión integrativa y transpersonal que combina la profundidad de la Terapia Gestalt, el poder simbólico del Psicotarot, la limpieza energética del Péndulo Hebreo, la sabiduría del alma a través de los Registros Akáshicos y la cosmobiología.
              </p>

              {/* Botón WhatsApp */}
              <a
                href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
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
                <li>Psicoterapia Integrativa Holística</li>
                <li>Registros akáshicos</li>
                <li>Cosmobiología</li>
                <li>Tarot predictivo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
