import {
  FaCheckCircle,
  FaUserCircle,
  FaRegHeart,
  FaPuzzlePiece,
  FaHandsHelping,
  FaWhatsapp,
} from 'react-icons/fa';

export default function TratamientoBase() {
  const etapas = [
    {
      icon: <FaUserCircle className="text-pink-600 text-3xl" />,
      titulo: 'Entrevista inicial',
      descripcion:
        'Evaluación para conocer los desafíos, necesidades, síntomas y aspiraciones del consultante.',
    },
    {
      icon: <FaCheckCircle className="text-pink-600 text-3xl" />,
      titulo: 'Reprogramación energética celular',
      descripcion:
        'Testeo, detección y limpieza del campo electromagnético.',
    },
    {
      icon: <FaRegHeart className="text-pink-600 text-3xl" />,
      titulo: 'Desbloqueo energético',
      descripcion:
        'Activación y fortalecimiento de los centros energéticos principales.',
    },
    {
      icon: <FaPuzzlePiece className="text-pink-600 text-3xl" />,
      titulo: 'Reparación energética',
      descripcion:
        'Sellado áurico y reparación de grietas del campo electromagnético.',
    },
    {
      icon: <FaHandsHelping className="text-pink-600 text-3xl" />,
      titulo: 'Protocolo personal',
      descripcion:
        'Una sesión adaptada a las necesidades detectadas en la entrevista inicial.',
    },
  ];

  return (
    <section className="bg-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-pink-700 pb-3">
          Tratamiento Base: Camino hacia el Equilibrio Interior
        </h2>
        <h2 className="text-2xl font-semibold text-pink-600">
          ¿Qué incluye este Tratamiento Base? <br /> Incluye 5 Etapas
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Un proceso holístico dividido en cinco etapas para tu bienestar emocional, mental y espiritual.
        </p>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-semibold text-xl">
          La primera sesión es completamente gratuita. ¡Comienza hoy tu camino hacia la sanación!
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {etapas.map((etapa, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left transition hover:shadow-lg"
          >
            <div className="mb-4">{etapa.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {etapa.titulo}
            </h3>
            <p className="text-gray-600 text-sm">{etapa.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Botón centrado */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow transition"
        >
          <FaWhatsapp className="text-xl" />
          Agenda una Sesión
        </a>
      </div>
    </section>
  );
}
