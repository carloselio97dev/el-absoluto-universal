import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Definir los tipos correctos para los parámetros
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetallePage({ params }: PageProps) {
  // Await the params since they're now a Promise
  const { slug } = await params;
  
  const noticia = await prisma.blog.findUnique({
    where: { slug }
  });

  if (!noticia) return notFound();

  const fechaFormateada = new Date(noticia.fecha).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-4xl font-extrabold text-pink-700">{noticia.titulo}</h1>
      <p className="inline-block bg-pink-100 text-pink-600 font-semibold px-3 py-1 rounded-md">
        {fechaFormateada}
      </p>
      <div className="relative w-full h-96 rounded-lg overflow-hidden">
        <Image
          src={noticia.imagen}
          alt={noticia.titulo}
          fill
          className="object-cover"
        />
      </div>
      <div className="prose prose-p:text-gray-800 leading-relaxed">
        <p>{noticia.resumen}</p>
        <p>{noticia.descripcion}</p>
      </div>
    </article>
  );
}

// generateStaticParams debe devolver Promise<Array<{ slug: string }>>
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const noticias = await prisma.blog.findMany({
    select: { slug: true }
  });

  return noticias.map(noticia => ({
    slug: noticia.slug,
  }));
}