export interface ITestimonialItem {
  id?: string | number;
  nombre: string;
  rol?: string;
  
  avatar?: string;
  contenido: string;
  rating?: number;
  fecha?: string;
}

export interface ITestimonialsProps {
  testimonios: ITestimonialItem[];
  titulo?: string;
  subtitulo?: string;
  className?: string;
  mostrarRating?: boolean;
  variant?: 'grid' | 'carousel';
  autoPlayMs?: number;
  accentColorClass?: string;
}