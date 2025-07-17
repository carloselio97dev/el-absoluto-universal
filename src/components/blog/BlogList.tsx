import { obtenerEntradasBlog } from '@/lib/blog'; // función que creamos
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogList() {
  const noticias = await obtenerEntradasBlog();

  return (
    <section className="bg-pink-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-pink-700">Novedades del Alma</h1>
          <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
            Reflexiones, talleres y mensajes espirituales para tu camino de sanación y conciencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="relative h-64">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  fill
                  className="object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl" />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-sm font-semibold text-gray-600">
                  {new Date(noticia.fecha).toLocaleDateString()}
                </p>
                <h2 className="text-2xl font-bold text-pink-600">{noticia.titulo}</h2>
                <p className="text-gray-700">{noticia.resumen}</p>
                <Link
                  href={`/blog/${noticia.slug}`}
                  className="mt-2 inline-block text-sm text-pink-600 hover:underline transition"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
