// src/data/noticias.ts

export interface Noticia {
  id: number;
  slug: string;
  titulo: string;
  resumen: string;
  descripcion: string;
  fecha: string;
  imagen: string;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    slug: 'taller-limpieza-energetica-pendulo-hebreo',
    titulo: 'Taller de Limpieza Energética con Péndulo Hebreo',
    resumen: 'Descubre cómo armonizar tu campo energético con el uso del péndulo hebreo y palabras sagradas.',
    descripcion: `Este taller está diseñado para quienes desean liberar bloqueos energéticos utilizando el poder del péndulo hebreo.\n\nAprenderás a identificar interferencias en el campo áurico y aplicar etiquetas sagradas para restaurar la armonía.`,
    fecha: '15 de Julio 2025',
    imagen: '/images/cosmobiologia.jpg',
  },
  {
    id: 2,
    slug: 'influencia-luna-llena-emociones',
    titulo: 'La influencia de la Luna Llena en tus emociones',
    resumen: 'Conoce cómo trabajar con la energía de la luna para sanar tus patrones inconscientes.',
    descripcion: `La luna llena intensifica nuestras emociones y nos invita a mirar hacia adentro.\n\nEn este artículo exploramos rituales simples, prácticas de journaling y meditaciones para aprovechar esta energía y liberar cargas emocionales.`,
    fecha: '5 de Julio 2025',
    imagen: '/images/pendulo2.png',
  },
  {
    id: 3,
    slug: 'meditacion-guiada-sanacion-emocional',
    titulo: 'Meditación Guiada para la Sanación Emocional',
    resumen: 'Explora una práctica profunda para liberar bloqueos emocionales y reconectar con tu paz interior.',
    descripcion: `Esta meditación guiada te llevará por un viaje interno para reconocer y liberar emociones retenidas.\n\nIncluye visualización, respiración consciente y afirmaciones que ayudan a restaurar tu equilibrio interior.`,
    fecha: '22 de Junio 2025',
    imagen: '/images/pendulo3.png',
  },
  {
    id: 4,
    slug: 'sabiduria-tarot-espejo-del-alma',
    titulo: 'La Sabiduría del Tarot como Espejo del Alma',
    resumen: 'Aprende a usar el tarot como herramienta terapéutica para descubrir tu mundo interno.',
    descripcion: `El tarot es más que adivinación: es un espejo simbólico que nos permite entender nuestras emociones, creencias y desafíos.\n\nTe enseñaremos cómo interpretar los arquetipos y conectar con tu intuición para una lectura más profunda.`,
    fecha: '10 de Junio 2025',
    imagen: '/images/tarot-consulta.jpg',
  },
  {
    id: 5,
    slug: 'cosmobiologia-proposito-de-vida',
    titulo: 'Cómo la Cosmobiología ilumina tu propósito de vida',
    resumen: 'Descubre cómo la posición de los astros al nacer influye en tu camino evolutivo.',
    descripcion: `La cosmobiología combina astrología y psicología para revelar patrones inconscientes y talentos naturales.\n\nConocer tu carta natal desde esta visión te brinda claridad sobre tu misión de vida y las pruebas que vienes a trascender.`,
    fecha: '28 de Mayo 2025',
    imagen: '/images/terapia1.jpg',
  },
];
