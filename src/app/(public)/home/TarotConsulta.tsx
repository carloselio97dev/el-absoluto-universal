import Image from "next/image";

export default function TarotConsulta() {
  return (
    <section className="bg-pink-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Imagen decorativa */}
        <div className="hidden md:block">
          <Image
            src="/images/tarot-consulta.jpg"
            alt="Consulta de tarot"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Introducción */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-pink-700 mb-4">
              ¿Qué puedes esperar de una lectura de tarot?
            </h2>
            <p className="text-gray-700 mb-3">
              Con la lectura de cartas del tarot, puedes planificar o anticiparte a decisiones importantes.
              Las cartas se convierten en una herramienta terapéutica para guiarte con claridad.
            </p>
            <p className="text-gray-700 mb-3">
              Puedes hacer todas las preguntas que necesites sobre cualquier tema que te preocupe.
              Estoy aquí para ayudarte.
            </p>
            <p className="text-gray-700">
              Ofrezco sesiones presenciales y por videollamada, con profesionalismo y total discreción.
            </p>
          </div>

          {/* A quién va dirigido */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              ¿A quién va dirigido este acompañamiento?
            </h2>
            <p className="text-gray-700 mb-4">
              Para personas que desean sanar sus desafíos de salud física, psicológica y espiritual desde una mirada profunda e integral.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Sesiones individuales (presenciales u online)</li>
              <li>Encuentros de una hora o procesos continuos</li>
              <li>Espacio personalizado según tus necesidades</li>
            </ul>
          </div>

          {/* Cómo reservar */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 uppercase mb-4">
              ¿Cómo conseguir una consulta conmigo?
            </h2>
            <p className="text-gray-700">
              Escríbeme y agendaremos la fecha y hora. Una vez confirmado el depósito por la sesión,
              te enviaré los datos necesarios para concretar tu consulta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}