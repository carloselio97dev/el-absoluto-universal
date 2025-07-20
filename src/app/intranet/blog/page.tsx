import BlogView, { Post } from '@/components/intranet/blog/BlogView';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let rows: {
    id: number | string;
    slug: string;
    titulo: string;
    resumen: string | null;
    descripcion: string | null;
    fecha: Date | null;
    imagen: string | null;
  }[] = [];

  try {
    rows = await prisma.blog.findMany({
      orderBy: { fecha: 'desc' },
      select: {
        id: true,
        slug: true,
        titulo: true,
        resumen: true,
        descripcion: true,
        fecha: true,
        imagen: true,
      },
      take: 60,
    });
  } catch (e) {
    console.error('[BlogPage] Error consultando prisma.blog:', e);
    notFound();
  }

  const serializable: Post[] = rows.map(r => ({
    id: r.id,
    slug: r.slug,
    titulo: r.titulo,
    resumen: r.resumen,
    descripcion: r.descripcion,
    fecha: r.fecha ? r.fecha.toISOString() : undefined,
    imagen: r.imagen,
  }));

  return (
    <div className="p-6 md:p-8">
      <BlogView initialPosts={serializable} />
    </div>
  );
}
