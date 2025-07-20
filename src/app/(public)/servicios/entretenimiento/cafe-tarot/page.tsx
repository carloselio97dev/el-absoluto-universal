"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function CafeTarot() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-xl ring-1 ring-pink-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-pink-700">CAFÉ TAROT / TÉ ESOTÉRICO</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg">
          Una experiencia mágica en encuentros íntimos para conectar, compartir y sanar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200">
          <Image
            src="/images/terapia2.jpg"
            alt="Café Tarot"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>

        {/* Texto + Botón */}
        <div className="text-gray-700 text-base leading-relaxed text-justify space-y-4">
          <p>
            Esta experiencia mágica está diseñada para compartir con tus amigas(os) en un ambiente íntimo
            y acogedor. Comenzamos con una lectura grupal de tarot a partir de una pregunta común, y luego
            cada invitado tiene la oportunidad de realizar una o dos preguntas personales que serán respondidas
            con tiradas breves.
          </p>
          <p>
            Todo se realiza en un espacio energéticamente armonizado, acompañado de un delicioso té o café.
            Al finalizar, se ofrecen limpiezas energéticas y pequeños rituales simbólicos para apoyar la fluidez
            de la vida y la sanación personal.
          </p>
          <p className="font-semibold text-pink-700">
            Máximo: 5 personas. Duración: 2 horas.
          </p>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow transition"
          >
            <FaWhatsapp className="text-xl" />
            Reserva tu Café Tarot por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
