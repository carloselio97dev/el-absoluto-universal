'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPinterestP,
  FaArrowRight,
} from 'react-icons/fa';

export default function HeroBienvenida() {
  return (
    <>
      {/* Hero de bienvenida con diseño moderno */}
      <section className="bg-pink-100 py-20">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">

          {/* Texto de bienvenida con tarjeta blanca */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Bienvenido a tu espacio de bienestar
              </h1>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed text-justify">
                Un lugar para reconectar contigo, sanar desde la raíz y transformar tu vida desde la consciencia y el corazón.
              </p>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
              >
                Conoce más
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Imagen del logo con efecto hover */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/logo.jpeg"
                alt="Psicoterapia con péndulo"
                width={320}
                height={400}
                className="object-cover"
              />
            </div>
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
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
  Estás a un paso de transformar tu vida
</h1>
<p className="text-gray-700 text-lg mb-6 leading-relaxed text-justify">
  El cambio empieza dentro de ti. Escucha a tu alma, honra tu proceso y permítete sanar con amor y conciencia.
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
                <li>Psico Educación</li>
                <li>Tarot Predictivo con Enfoque Terapéutico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
