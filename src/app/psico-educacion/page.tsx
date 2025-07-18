// src/app/psico-educacion/page.tsx
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/components/ui/Pagination'

interface Props {
  searchParams: Promise<{ page?: string }>
}

export const dynamic = 'force-dynamic'

export default async function PsicoEducacionPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const currentPage = parseInt(resolvedSearchParams.page ?? '1', 10)
  const itemsPerPage = 4
  // traemos 4 por página

  const [noticias, totalNoticias] = await Promise.all([
    prisma.blog.findMany({
      orderBy: { fecha: 'desc' },
      skip: (currentPage - 1) * itemsPerPage,
      take: itemsPerPage,
    }),
    prisma.blog.count(),
  ])

  const totalPages = Math.ceil(totalNoticias / itemsPerPage)

  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        Noticias y Artículos
      </h1>

      {/*
        Grid:
        - móvil: grid-cols-1 (pero ocultamos índices ≥2)
        - md+ : grid-cols-2 ⇒ 2 columnas x 2 filas
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {noticias.map((noticia, i) => (
          <div
            key={noticia.id}
            className={`
              border rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col
              ${i >= 2 ? 'hidden md:flex' : 'flex'}
            `}
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
                <Link
                  href={`/psico-educacion/${noticia.slug}`}
                  className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-sm"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación con flechas y números */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/psico-educacion"
      />
    </section>
  )
}