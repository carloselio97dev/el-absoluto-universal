import { JSX } from 'react';
import {
  FaUserCircle,
  FaCheckCircle,
  FaRegHeart,
  FaPuzzlePiece,
  FaHandsHelping,
  FaGift,
} from 'react-icons/fa';

export interface Etapa {
  icon: JSX.Element;
  titulo: string;
  descripcion: string;
}

export const etapasTratamientoBase: Etapa[] = [
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
    titulo: 'Protocolo Personal',
    descripcion:
      'Sesión personalizada según lo detectado en la entrevista inicial.',
  },
  {
    icon: <FaGift className="text-pink-600 text-3xl" />,
    titulo: 'Sesión de obsequio',
    descripcion:
      'Es la 1ra sesión del protocolo personalizado que surge de la entrevista inicial. Sesión de obsequio que da inicio al tratamiento personalizado.',
  },
];
