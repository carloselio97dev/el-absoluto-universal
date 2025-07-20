// src/components/intranet/blog/PostCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface PostCardProps {
  post: {
    id: string | number;
    titulo: string;
    resumen: string | null;
    fecha?: string | null;
    slug: string;
    imagen?: string | null;
    estado?: 'draft' | 'published';
    autor?: string | null;
  };
  onClick?: () => void;
  compact?: boolean;
}

export default function PostCard({ post, onClick, compact = false }: PostCardProps) {
  const {
    id, titulo, resumen, fecha, slug, imagen,
    estado = 'published', autor
  } = post;

  const fechaFmt = fecha
    ? new Date(fecha).toLocaleDateString('es-ES', {
        day: '2-digit', month: 'short', year: 'numeric'
      })
    : '—';

  return (
    <article
      data-id={id}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-pink-200/40 bg-white/70 backdrop-blur transition
                  hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/10 ${compact ? 'p-4' : 'p-5'}`}
      onClick={onClick}
    >
      {imagen && (
        <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-pink-100">
          <Image
            src={imagen}
            alt={titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-pink-600/20 via-fuchsia-500/10 to-transparent opacity-0 mix-blend-multiply transition group-hover:opacity-100" />
        </div>
      )}

      <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide">
        <span
          className={`rounded-full px-2 py-0.5 ${
            estado === 'draft'
              ? 'bg-amber-100 text-amber-700'
              : 'bg-pink-100 text-pink-600'
          }`}
        >
          {estado === 'draft' ? 'Borrador' : 'Publicado'}
        </span>
        <time className="text-gray-500">{fechaFmt}</time>
      </div>

      <h3 className="mb-1 line-clamp-2 text-lg font-semibold leading-snug text-gray-800 transition-colors group-hover:text-pink-600">
        <Link
          href={`/intranet/blog/${slug}`}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60 rounded"
        >
          {titulo}
        </Link>
      </h3>

      <p className={`mb-4 text-sm text-gray-600 ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
        {resumen ?? <span className="italic text-gray-400">Sin resumen.</span>}
      </p>

      <div className="mt-auto flex items-center justify-between pt-2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {autor && <span className="truncate">{autor}</span>}
        </div>
        <Link
          href={`/intranet/blog/${slug}`}
            className="text-sm font-medium text-pink-600 hover:text-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/60"
          onClick={(e) => e.stopPropagation()}
        >
          Leer →
        </Link>
      </div>
    </article>
  );
}
