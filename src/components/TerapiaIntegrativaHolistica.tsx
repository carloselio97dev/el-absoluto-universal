import Image from "next/image";

export default function TerapiaIntegrativaHolistica() {
  return (
    <main className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
          Terapia Integrativa Holística
        </h1>

        {/* Galería de imágenes */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Image
            src="/images/terapia2.jpg"
            alt="Psicóloga escribiendo"
            width={500}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
          <Image
            src="/images/terapia3.jpg"
            alt="Consultante en sesión"
            width={500}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Contenido */}
        <section className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Este tratamiento incluye 5 sesiones base basadas en la Psicoterapia Integrativa Holística. A través de herramientas energéticas, emocionales y espirituales, se guía al consultante en un proceso profundo de transformación y sanación.
          </p>

          <ol className="space-y-4 list-decimal list-inside text-gray-800 text-base leading-relaxed">
            <li>
              <span className="font-semibold text-pink-600">Entrevista inicial:</span> evaluación para conocer los desafíos, síntomas y aspiraciones del consultante.
            </li>
            <li>
              <span className="font-semibold text-pink-600">Reprogramación energética celular:</span> detección y limpieza del campo electromagnético.
            </li>
            <li>
              <span className="font-semibold text-pink-600">Desbloqueo energético:</span> potenciación de los centros energéticos principales.
            </li>
            <li>
              <span className="font-semibold text-pink-600">Reparación energética:</span> sellado áurico y reparación de grietas energéticas.
            </li>
            <li>
              <span className="font-semibold text-pink-600">Protocolo personal:</span> una sesión hecha a medida basada en el análisis inicial del consultante.
            </li>
          </ol>

          <p className="text-gray-700 leading-relaxed text-lg">
            Cada sesión es acompañada de una guía terapéutica personalizada, ayudando al consultante a lograr la sanación emocional, física y espiritual que necesita.
          </p>
        </section>
      </div>
    </main>
  );
}
