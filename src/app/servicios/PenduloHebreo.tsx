import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/ui/accordion';
import { FaWhatsapp } from 'react-icons/fa';
import { penduloHebreoFaqs } from '../../data/penduloHebreoFaqs';

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
          {penduloHebreoFaqs.map((item, idx) => (
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
            href="https://wa.me/51987654321?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20de%20Psico%20Tarot%20con%20enfoque%20terap%C3%A9utico."
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
