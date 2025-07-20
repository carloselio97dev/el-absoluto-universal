'use client';

import { useState, useCallback, useMemo, useRef } from 'react';
import BlogActionsBar from './BlogActionsBar';
import PostCard from './PostCard';
import EmptyState from './EmptyState';

export interface Post {
  id: string | number;
  slug: string;
  titulo: string;
  resumen: string | null;
  descripcion?: string | null;
  fecha?: string;              // ISO
  imagen?: string | null;
  estado?: 'draft' | 'published';
  autor?: string | null;
}

interface BlogViewProps {
  initialPosts: Post[];
  /** Callback opcional para crear nuevo post (abre modal / navega). */
  onCreatePost?: () => void;
  /** Si true, cada cambio en la búsqueda consulta al backend. */
  serverSearch?: boolean;
  /** Milisegundos de debounce para la búsqueda en servidor. */
  serverSearchDelay?: number;
}

export default function BlogView({
  initialPosts,
  onCreatePost,
  serverSearch = false,
  serverSearchDelay = 350,
}: BlogViewProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<number | undefined>(undefined);

  /** Normaliza un string para búsqueda básica (case + tildes). */
  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .trim();

  const handleCreate = useCallback(() => {
    if (onCreatePost) return onCreatePost();
    console.log('Crear nueva entrada');
  }, [onCreatePost]);

  /** Refresca desde el backend (usa query actual). */
  const fetchRemote = useCallback(
    async (currentQuery: string) => {
      try {
        // Cancelar petición previa si existe
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setLoading(true);
        setErrorMsg(null);

        const url =
          '/api/intranet/blog/search?q=' + encodeURIComponent(currentQuery);
        const res = await fetch(url, {
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        const data = (await res.json()) as Post[];
        setPosts(data);
      } catch (e: unknown) {
        // Ignorar abort
        if (e instanceof DOMException && e.name === 'AbortError') return;

        const msg =
          e instanceof Error
            ? e.message
            : typeof e === 'string'
              ? e
              : 'Error inesperado';

        setErrorMsg(msg);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  /** Acción manual del botón "Refrescar". */
  const handleRefresh = useCallback(() => {
    fetchRemote(query);
  }, [fetchRemote, query]);

  /** Al cambiar la búsqueda. */
  const handleSearch = useCallback(
    (q: string) => {
      const cleaned = q;
      setQuery(cleaned);
      if (serverSearch) {
        // Debounce para evitar spam al backend
        if (debounceRef.current) {
          clearTimeout(debounceRef.current);
        }
        debounceRef.current = window.setTimeout(
          () => fetchRemote(cleaned),
          serverSearchDelay
        );
      }
    },
    [serverSearch, serverSearchDelay, fetchRemote]
  );

  /** Búsqueda local (cuando NO usamos serverSearch). */
  const filtered = useMemo(() => {
    if (serverSearch) {
      // Si la búsqueda es en servidor, mostramos `posts` tal cual llegan.
      return posts;
    }
    const q = norm(query);
    if (!q) return posts;
    return posts.filter((p) => {
      const blob = norm(
        [p.titulo ?? '', p.resumen ?? '', p.descripcion ?? ''].join(' ')
      );
      return blob.includes(q);
    });
  }, [posts, query, serverSearch]);

  return (
    <div className="space-y-6">
      <BlogActionsBar
        onCreate={handleCreate}
        onRefresh={handleRefresh}
        onSearch={handleSearch}
        searchValue={query}
        loading={loading}
      />

      {errorMsg && (
        <div
          role="alert"
          className="rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700"
        >
          {errorMsg}{' '}
          <button
            onClick={() => handleRefresh()}
            className="underline font-medium hover:text-red-800 ml-2"
          >
            Reintentar
          </button>
        </div>
      )}

      {filtered.length === 0 && !loading ? (
        <EmptyState
          title={query ? 'Sin resultados' : 'Sin publicaciones'}
          description={
            query
              ? 'No se encontraron entradas que coincidan con tu búsqueda.'
              : 'Crea tu primera entrada para comenzar.'
          }
          actionLabel="Nueva entrada"
          onAction={handleCreate}
        />
      ) : (
        <div
          className={`grid gap-6 sm:grid-cols-2 xl:grid-cols-3 ${
            loading ? 'opacity-60 pointer-events-none' : ''
          }`}
        >
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {loading && (
        <p className="text-sm text-neutral-500 animate-pulse">Cargando…</p>
      )}
    </div>
  );
}
