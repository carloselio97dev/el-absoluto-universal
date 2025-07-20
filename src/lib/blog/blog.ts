// src/lib/blog.ts

export interface EntradaBlog {
  id: string;
  slug: string;
  titulo: string;
  resumen: string;
  descripcion?: string;
  contenido?: string;
  imagen: string;
  fecha: string; // ISO
}

const MOCK_DATA: EntradaBlog[] = [
  {
    id: '1',
    slug: 'sanacion-interior',
    titulo: 'Sanación interior y conciencia',
    resumen: 'Cómo iniciar un proceso de sanación desde el amor propio.',
    descripcion: 'Detalle...',
    contenido: 'Contenido completo (luego lo reemplazas por Markdown/DB).',
    imagen: '/images/blog/sanacion.jpg', // asegúrate que exista en /public/images/blog
    fecha: '2025-07-20'
  },
  {
    id: '2',
    slug: 'energia-femenina',
    titulo: 'Equilibrando la energía femenina',
    resumen: 'Reflexión sobre el balance energético en la vida cotidiana.',
    descripcion: 'Detalle...',
    contenido: 'Contenido completo...',
    imagen: '/images/blog/energia-femenina.jpg',
    fecha: '2025-07-15'
  },
  {
    id: '3',
    slug: 'respiracion-consciente',
    titulo: 'Respiración consciente para el día a día',
    resumen: 'Técnicas simples para regular tu sistema nervioso.',
    descripcion: 'Detalle...',
    contenido: 'Contenido...',
    imagen: '/images/blog/respiracion.jpg',
    fecha: '2025-07-10'
  }
];

export async function obtenerEntradasBlog(): Promise<EntradaBlog[]> {
  // Aquí en el futuro: fetch a tu DB / Prisma / API, caching, etc.
  // Simulamos un retardo leve (opcional):
  // await new Promise(r => setTimeout(r, 100));
  return MOCK_DATA
    .slice() // copia
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
}

export async function obtenerEntradaPorSlug(slug: string): Promise<EntradaBlog | null> {
  const all = await obtenerEntradasBlog();
  return all.find(e => e.slug === slug) ?? null;
}
