import { ReactNode } from "react";

export interface PenduloHebreoFaq {
  question: string;
  image: string;
  answer: ReactNode;
}

export const penduloHebreoFaqs: PenduloHebreoFaq[] = [
  {
    question: '¿Para qué sirve el péndulo hebreo?',
    image: '/images/pendulo4.png',
    answer: (
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
  // Puedes seguir agregando más ítems aquí...
];
