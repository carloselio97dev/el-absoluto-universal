'use client';
import Image from 'next/image';


export default function AboutMe() {
    return (
      <section className="bg-pink-50 py-16 px-6 md:px-12">
  <div className="max-w-5xl mx-auto">

    {/* Caja con glassmorphism */}
    <div className="bg-white/40 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12 space-y-12">
      
      {/* Título y subtítulo */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
          Biografía: Psíquica y Tarotista
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Integro la psicología, la espiritualidad y la intuición para acompañarte en tu camino de transformación interior.
        </p>
      </div>

      {/* Imagen */}
      <div className="flex justify-center">
        <div className="w-[250px] h-[250px] rounded-xl overflow-hidden shadow-lg border-2 border-white/60">
          <Image
            src="/images/teratamientopersoanlizado.jfif"
            alt="Foto de perfil"
            width={250}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Secciones con íconos */}
      <div className="space-y-8 text-gray-800 text-base leading-relaxed">
        <div className="flex items-start gap-3">
          <span className="text-pink-500 text-lg">✨</span>
          <div>
            <h3 className="text-xl font-semibold text-pink-600">Psíquica y Tarotista</h3>
            <p>
              Desde los 11 años descubrí mi capacidad psíquica. A través del tarot y la canalización, conecto con energías sutiles, emociones ocultas y mensajes del alma para guiar a otros en su camino de claridad y sanación.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-pink-500 text-lg">🧠</span>
          <div>
            <h3 className="text-xl font-semibold text-pink-600">Psicóloga clínica y Terapeuta Gestalt</h3>
            <p>
              Me formé como psicóloga y terapeuta Gestalt para acompañar desde una base científica y humanista. Trabajo desde el aquí y el ahora, ayudando a sanar heridas, reconectar con el cuerpo, y reconfigurar patrones emocionales desde el amor y la conciencia.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-pink-500 text-lg">💫</span>
          <div>
            <h3 className="text-xl font-semibold text-pink-600">Sanación con Péndulo Hebreo</h3>
            <p>
              Identifico bloqueos energéticos y canalizo la vibración de palabras sagradas para armonizar cuerpo, mente y alma.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="text-pink-500 text-lg">💖</span>
          <div>
            <h3 className="text-xl font-semibold text-pink-600">Acompañamiento con amor y propósito</h3>
            <p>
              Mi enfoque integra el alma, la ciencia y la sabiduría ancestral. Acompaño procesos de transformación personal con herramientas psicológicas y espirituales, para que cada persona encuentre su verdad y su poder interior.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    );
}
