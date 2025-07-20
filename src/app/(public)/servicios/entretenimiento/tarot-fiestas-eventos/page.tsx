"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function TarotParaFiestas() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-xl ring-1 ring-pink-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-pink-700">Tarot para Fiestas</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg">
          Vive una experiencia mágica y reveladora en tu evento especial.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Video embebido */}
        <div className="rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-200">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1sq8H8fVwzY"
              title="Tarot para fiestas y eventos en Lima Perú"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Texto + Botón */}
        <div className="text-gray-700 text-base leading-relaxed space-y-4">
          <p>
            Sorprende a tus invitados con una experiencia única. En bodas, cumpleaños, eventos corporativos o encuentros íntimos,
            el tarot en vivo es un toque inolvidable que une misterio, reflexión y conexión.
          </p>
          <p>
            Creamos un espacio acogedor con decoración esotérica, velas e incienso, donde cada persona podrá hacer
            una o dos preguntas y recibir un mensaje revelador del tarot.
          </p>
          <p className="text-sm text-gray-600 italic">
            💡 Ideal para grupos de todas las edades y perfiles.
          </p>
          <p className="font-semibold text-pink-700">
            Duración máxima: 3 horas.
          </p>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow transition"
          >
            <FaWhatsapp className="text-xl" />
            Reserva tu evento por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
