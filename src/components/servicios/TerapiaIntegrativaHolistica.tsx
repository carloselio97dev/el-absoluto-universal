import Image from "next/image";
import WhatsappButton from "../WhatsappButton";

export default function TerapiaIntegrativaHolistica() {
  return (
    <section className="bg-pink-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Encabezado */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
            Psicoterapia Integrativa Holística
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un proceso de sanación profunda combinando técnicas psicológicas con terapias energéticas.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/pendulo.jpg"
              alt="Consulta terapéutica"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/terapia1.jpg"
              alt="Terapia con péndulo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Detalle de las sesiones */}
        <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-pink-600 text-center">¿Qué incluye este tratamiento?</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-4 text-base leading-relaxed">
            <li>
              <strong className="text-pink-600">Entrevista inicial:</strong> evaluación para conocer los desafíos, necesidades, síntomas y aspiraciones del consultante.
            </li>
            <li>
              <strong className="text-pink-600">Reprogramación energética celular:</strong> testeo, detección y limpieza del campo electromagnético.
            </li>
            <li>
              <strong className="text-pink-600">Desbloqueo energético:</strong> activación y fortalecimiento de los centros energéticos principales.
            </li>
            <li>
              <strong className="text-pink-600">Reparación energética:</strong> sellado áurico y reparación de grietas del campo electromagnético.
            </li>
            <li>
              <strong className="text-pink-600">Protocolo personal:</strong> una sesión adaptada a las necesidades detectadas en la entrevista inicial.
            </li>
          </ol>

          <p className="text-gray-700 text-center">
            Cada sesión está acompañada de guía, contención y soporte terapéutico para facilitar tu sanación física, emocional y espiritual.
          </p>
          <WhatsappButton/>
        </div>
      </div>
    </section>
  );
}
