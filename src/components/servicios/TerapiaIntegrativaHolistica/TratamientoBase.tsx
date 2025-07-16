'use client';

import {
    FaUserCircle,
    FaCheckCircle,
    FaRegHeart,
    FaPuzzlePiece,
    FaHandsHelping
} from 'react-icons/fa';

export default function TratamientoBase() {
    const etapas = [
        {
            icon: <FaUserCircle className="text-pink-600 text-3xl" />,
            titulo: 'Entrevista inicial',
            descripcion:
                'Evaluación para conocer los desafíos, síntomas y necesidades particulares del consultante, así como sus aspiraciones y expectativas acerca del tratamiento.',
        },
        {
            icon: <FaCheckCircle className="text-pink-600 text-3xl" />,
            titulo: 'Reprogramación energética',
            descripcion:
                'Testeo y detección de bloqueos energéticos y energías densas, seguido de la limpieza del campo electromagnético.',
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
            titulo: 'Sesión de obsequio',
            descripcion:
                'Es la 1ra sesión del protocolo personalizado que surge de la entrevista inicial. Sesión de obsequio que da inicio al tratamiento personalizado.',
        },
    ];

    return (
        <section className="bg-pink-50 py-16 px-6">
            {/* Tratamiento base */}
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-pink-700">
                    Tratamiento terapéutico base
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Compuesto por 5 sesiones enfocadas en restaurar tu bienestar emocional,
                    mental, energético y espiritual.
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
        </section>
    );
}
