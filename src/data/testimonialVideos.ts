export interface ITestimonialVideo {
  id: string;
  titulo: string;
  autor?: string;
  descripcion?: string;
  youtubeUrl: string;
  fecha?: string;
  coverOverride?: string;
}

export const testimonialVideos: ITestimonialVideo[] = [
  {
    id: 'testimonio-ana',
    titulo: 'Recuperé mi calma interior',
    autor: 'Ana P.',
    descripcion:
      'Ana cuenta cómo, tras varias sesiones, redujo el estrés laboral y mejoró su descanso nocturno.',
    youtubeUrl: 'https://www.youtube.com/embed/1sq8H8fVwzY', // tu link
    fecha: 'JUL 2025',
  },
  {
    id: 'testimonio-luis',
    titulo: 'Mayor claridad y enfoque diario',
    autor: 'Luis R.',
    descripcion:
      'Luis describe el cambio en su concentración y energía emocional después del acompañamiento.',
    youtubeUrl: 'https://www.youtube.com/embed/1sq8H8fVwzY',
    fecha: 'JUL 2025',
  },
  {
    id: 'testimonio-mariela',
    titulo: 'Liberación emocional profunda',
    autor: 'Mariela S.',
    descripcion:
      'Mariela explica cómo las sesiones le ayudaron a soltar cargas emocionales y sentirse más ligera.',
    youtubeUrl: 'https://www.youtube.com/embed/1sq8H8fVwzY',
    fecha: 'JUN 2025',
  },
];
