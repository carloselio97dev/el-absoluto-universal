import {
  Lightbulb,
  Wind,
  BookOpen,
  Sparkles,
  Repeat,
  type LucideIcon, // 👈 tipo para el tipado
} from "lucide-react";


export interface Etapa {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
}

export const etapasTratamientoBase: Etapa[] = [
  {
    icon: Lightbulb,
    titulo: "Toma de conciencia",
    descripcion:
      "Identificamos los desafíos emocionales, mentales y energéticos desde una mirada profunda y compasiva.",
  },
  {
    icon: Wind,
    titulo: "Limpieza y liberación",
    descripcion:
      "Usamos herramientas de liberación emocional y energética para desbloquear lo que ya no necesitas cargar.",
  },
  {
    icon: BookOpen,
    titulo: "Educación y reflexión",
    descripcion:
      "Integramos conocimientos prácticos para ayudarte a entender tus patrones y transformarlos con conciencia.",
  },
  {
    icon: Sparkles,
    titulo: "Integración consciente",
    descripcion:
      "Desarrollas hábitos saludables, límites sanos y una nueva visión de ti mismo/a desde el equilibrio.",
  },
  {
    icon: Repeat,
    titulo: "Seguimiento y acompañamiento",
    descripcion:
      "Revisión amorosa del proceso. Opcionalmente puedes continuar con encuentros de refuerzo.",
  },
];
