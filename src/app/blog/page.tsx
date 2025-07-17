// src/app/blog/page.tsx

// Fuerza SSR en cada request
export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogPage() {
  const noticias = await prisma.blog.findMany({
    orderBy: { fecha: 'desc' },
  });

  return (
    <section className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        Últimas Entradas
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="relative h-60 w-full">
              <Image
                src={noticia.imagen}
                alt={noticia.titulo}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-semibold text-pink-700">
                  {noticia.titulo}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {noticia.resumen}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(noticia.fecha).toLocaleDateString()}
                </p>
              </div>
              <div className="mt-4">
                <Link href={`/blog/${noticia.slug}`}>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-sm">
                    Leer más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
