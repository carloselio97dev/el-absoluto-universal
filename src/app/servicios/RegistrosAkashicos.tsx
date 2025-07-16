'use client';

import Image from 'next/image';
import { FaBookOpen, FaHeart, FaInfinity, FaWhatsapp } from 'react-icons/fa';

export default function RegistrosAkashicos() {
  return (
    <section className="bg-pink-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Encabezado */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-pink-700 mb-4">
            Lectura de Registros Akáshicos
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conecta con tu alma para comprender tus aprendizajes, bloqueos y misión de vida.
          </p>
        </div>

        {/* Imagen destacada */}
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/akashicos.jpg"
            alt="Libro de luz - Registros Akáshicos"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido principal */}
        <div className="bg-white shadow-md rounded-xl p-6 md:p-10 text-gray-700 space-y-6 text-justify leading-relaxed">
          <p>
            Los <strong>Registros Akáshicos</strong> son una biblioteca energética donde se almacena toda la
            información del alma: vidas pasadas, presente y potencial futuro. A través de esta
            lectura, es posible acceder a mensajes profundos que guían tu evolución espiritual,
            emocional y mental.
          </p>
          <p>
            Esta experiencia te ayuda a comprender por qué repites ciertos patrones, cómo sanar
            heridas de esta o de otras vidas, y qué decisiones alineadas puedes tomar para tu
            bienestar y crecimiento.
          </p>
          <p>
            Durante la sesión recibirás orientación canalizada con claridad y empatía desde tus guías y seres de luz , para ayudarte a recordar quién eres , y cómo volver a tu centro .
          </p>
        </div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md text-center space-y-4">
            <FaBookOpen className="text-4xl text-pink-600 mx-auto" />
            <h3 className="text-lg font-semibold text-pink-700">Claridad espiritual</h3>
            <p className="text-sm text-gray-600">Comprenderás el origen de tus bloqueos y tu propósito de alma, y la misión de tu ser en la tierra  y  cómo volver a tu centro</p>
    
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center space-y-4">
            <FaHeart className="text-4xl text-pink-600 mx-auto" />
            <h3 className="text-lg font-semibold text-pink-700">Sanación emocional</h3>
            <p className="text-sm text-gray-600">Libera memorias dolorosas y transforma heridas en aprendizaje.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center space-y-4">
            <FaInfinity className="text-4xl text-pink-600 mx-auto" />
            <h3 className="text-lg font-semibold text-pink-700">Conexión con tu esencia</h3>
            <p className="text-sm text-gray-600">Reconecta con tu alma y toma decisiones alineadas a tu verdad interior.</p>
          </div>
        </div>

        {/* Botón de acción con ícono */}
        <div className="text-center pt-4">
          <a
            href="https://wa.me/51962305362?text=Hola,%20quiero%20agendar%20una%20lectura%20de%20Registros%20Ak%C3%A1shicos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md transition-all"
          >
            <FaWhatsapp className="text-xl" />
            Agendar mi sesión por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
