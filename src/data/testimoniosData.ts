import { ITestimonialItem } from '../types/testimonios';

// src/data/testimoniosData.ts

// Puedes importar el tipo para tener autocompletado y tipos
export const testimonios: ITestimonialItem[] = [
  {
    nombre: 'María López',
    rol: 'Estudiante de Terapias Holísticas',
    contenido: '¡Increíble experiencia! Salí de la sesión sintiéndome mucho más ligera y positiva. El acompañamiento fue muy empático y personalizado. ¡Recomiendo totalmente este servicio!',
    rating: 5,
    fecha: 'Jul 2025',
    avatar: '/avatars/avatar.png' 
  },
  {
    nombre: 'Lucas Ramírez',
    rol: 'Desarrollador Web',
    contenido: 'Tenía semanas de estrés por el trabajo y desde la primera sesión noté una diferencia enorme en mi concentración y estado de ánimo. Muy profesional y efectivo.',
    rating: 5,
    fecha: 'Jul 2025',
    avatar: '/avatars/avatar.png'
  },
  {
    nombre: 'Lucía Fernández',
    rol: 'Emprendedora',
    contenido: 'Fui escéptica al inicio, pero después de varias sesiones realmente pude sentir cambios internos profundos. Ahora manejo mejor mi ansiedad y duermo mucho mejor.',
    rating: 5,
    fecha: 'Jun 2025',
    avatar: '/avatars/avatar.png'
  },
  {
    nombre: 'Juan Pablo García',
    rol: 'Jugador de fútbol',
    contenido: 'El trabajo energético fue sorprendente, sentí una liberación de tensiones y más confianza en la cancha. Me ayudó mucho a superar bloqueos mentales antes de los partidos.',
    rating: 4,
    fecha: 'Jun 2025',
    avatar: '/avatars/avatar.png'
  },
  {
    nombre: 'Sofía Herrera',
    rol: 'Docente',
    contenido: 'Agradezco la paciencia y el profesionalismo. Las sesiones me han ayudado a ver la vida desde otra perspectiva y a soltar cargas emocionales del pasado.',
    rating: 5,
    fecha: 'May 2025',
    avatar: '/avatars/avatar.png'
  }
];
