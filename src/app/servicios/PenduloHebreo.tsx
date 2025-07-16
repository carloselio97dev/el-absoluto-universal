import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/ui/accordion';
import { FaWhatsapp } from 'react-icons/fa';

// FAQS con imagenes (ajusta las rutas y alt si necesitas)
const faqs = [
  {
    question: '¿Para qué sirve el péndulo hebreo?',
    image: '/images/pendulo4.png',
    answer: (
      <>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Detecta y limpia el campo electromagnético (aura) de miasmas, larvas y parásitos energéticos.</li>
          <li>Reprograma el organismo a nivel celular, genético, metabólico y químico.</li>
          <li>Limpia y combate magia negra, mal de ojo, maldiciones, amarres y malas vibraciones.</li>
          <li>Desbloquea, limpia, activa y re-equilibra los chakras del cuerpo.</li>
          <li>Elimina creencias limitantes, reafirmando autoestima y confianza.</li>
          <li>Cancela contratos, votos y promesas de vidas pasadas y bloqueos ancestrales.</li>
          <li>Detecta y repara grietas en el aura, equilibrando y restaurando este campo.</li>
          <li>Corrige alteraciones físicas, mentales y emocionales.</li>
          <li>Ayuda a la desintoxicación y eliminación de adicciones.</li>
          <li>Desbloquea la conexión con la fuente divina, estimulando capacidades y dones.</li>
          <li>Alivia situaciones de alto estrés emocional (accidentes, depresión, duelos, ansiedad, etc.).</li>
        </ul>
      </>
    ),
  },
  {
    question: '¿Cómo se cura con el péndulo hebreo?',
    image: '/images/pendulo2.png',
    answer: (
      <p className="text-gray-700 leading-relaxed">
        Se testa cada centro energético para detectar desequilibrios en sus primeras fases, antes que se manifiesten en el cuerpo físico. Funciona gracias a la alta vibración que transmiten las letras hebreas, escritas en la etiqueta que se coloca alrededor del péndulo, permitiendo la sanación física, mental, emocional y espiritual.
      </p>
    ),
  },
  {
    question: '¿Qué es el tratamiento a distancia con el Péndulo Hebreo?',
    image: '/images/pendulo3.png',
    answer: (
      <p className="text-gray-700 leading-relaxed">
        La energía va donde la intención la lleva, sin las limitaciones de tiempo y espacio, como ha demostrado la física cuántica. El tratamiento a distancia se realiza siempre con el consentimiento del destinatario, respetando el libre albedrío. Cuando el tratamiento es presencial, el receptor se encuentra tumbado cómodamente sobre una camilla de masaje.
      </p>
    ),
  },
  {
    question: '¿Cuánto dura un tratamiento con el Péndulo Hebreo?',
    image: '/images/pendulo4.png',
    answer: (
      <p className="text-gray-700 leading-relaxed">
        Un tratamiento dura en promedio entre 1 hora 30 y 2 horas. Es recomendable recibir 3 tratamientos seguidos para potenciar los efectos, aunque desde el primero ya se sienten beneficios. <br /><br />
        <span className="font-medium text-pink-700">Nota:</span> Esta terapia es complementaria y no reemplaza el seguimiento médico o terapéutico tradicional.
      </p>
    ),
  },
  {
    question: 'Limpieza, Purificación y Armonización de los Lugares',
    image: '/images/pendulo2.png',
    answer: (
      <p className="text-gray-700 leading-relaxed">
        Purificar tu hogar o lugar de trabajo es fundamental para eliminar energías negativas y renovar el ambiente. La limpieza energética permite a los habitantes vivir mejor, liberarse de enfermedades físicas, dolores inexplicables, trastornos emocionales y del sueño. Se recomienda hacerlo regularmente o cada vez que te mudes.
      </p>
    ),
  },
  // ...Puedes agregar más items aquí
];

export default function PenduloHebreo() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Título */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 drop-shadow">
            Terapia Con Péndulo Hebreo
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            La terapia de péndulo hebreo es una técnica avanzada de radioestesia, permitiendo limpiar y equilibrar todos los niveles del ser humano: físico, mental, emocional y espiritual.
          </p>
        </header>

        {/* Imagen destacada */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto">
          <Image
            src="/images/pendelo-hebreo.png"
            alt="Péndulo Hebreo terapia"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Accordion moderno con imagen en cada item */}
        <Accordion type="multiple" className="space-y-6">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="rounded-2xl bg-white/95 shadow-lg border border-pink-100 overflow-hidden"
            >
              <AccordionTrigger className="text-pink-700 text-xl font-bold px-6 py-4 bg-pink-50 hover:bg-pink-100 transition-all">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-8 py-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-48 h-40 relative rounded-lg overflow-hidden shadow">
                    <Image
                      src={item.image}
                      alt={item.question}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full">{item.answer}</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Botón de WhatsApp */}
        <div className="flex justify-center mt-12">
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg transition"
          >
            <FaWhatsapp className="text-2xl" />
            Agenda tu sesión por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
