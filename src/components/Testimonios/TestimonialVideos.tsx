'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { extractYouTubeId, getYouTubeThumbnail } from '@/lib/youtube';
import type { ITestimonialVideo } from '@/data/testimonialVideos';

interface TestimonialVideosProps {
  videos: ITestimonialVideo[];
  titulo?: string;
  subtitulo?: string;
  accentClass?: string; // gradiente para separador
  className?: string;
  useNoCookieDomain?: boolean; // para usar youtube-nocookie.com
  autoPlay?: boolean;
}

export default function TestimonialVideos({
  videos,
  titulo = 'Videos de Testimonios',
  subtitulo = 'Escucha de primera mano las experiencias.',
  accentClass = 'from-pink-500 to-fuchsia-500',
  className = '',
  useNoCookieDomain = true,
  autoPlay = true,
}: TestimonialVideosProps) {
  const [active, setActive] = useState<ITestimonialVideo | null>(null);
  const open = useCallback((v: ITestimonialVideo) => setActive(v), []);
  const close = useCallback(() => setActive(null), []);

  // Cerrar con ESC
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [active, close]);

  // Bloquear scroll body cuando modal está abierto
  useLockBodyScroll(!!active);

  return (
    <section className={`relative py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Fondo glass / degradado coherente */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-slate-900 dark:via-slate-950 dark:to-fuchsia-950" />
        <div className="absolute -top-40 -left-44 w-96 h-96 rounded-full bg-pink-300/30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full bg-fuchsia-300/30 blur-[170px]" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {subtitulo}
            </p>
          )}
          <div className="mt-6 flex justify-center">
            <span className={`h-1 w-32 rounded-full bg-gradient-to-r ${accentClass}`} />
          </div>
        </header>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => {
            const thumb = v.coverOverride || getYouTubeThumbnail(v.youtubeUrl);
            const youId = extractYouTubeId(v.youtubeUrl);
            return (
              <motion.article
                key={v.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="group relative rounded-3xl overflow-hidden bg-white/55 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/60 dark:ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(255,0,128,0.28)] transition"
              >
                <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/0 via-fuchsia-400/0 to-pink-400/0 opacity-0 group-hover:opacity-100 group-hover:from-pink-400/40 group-hover:via-fuchsia-400/30 group-hover:to-pink-400/40 transition" />

                <div className="relative aspect-video w-full">
                  <Image
                    src={thumb}
                    alt={`Miniatura de ${v.titulo}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    priority={i < 2}
                  />
                  <button
                    onClick={() => open(v)}
                    aria-label={`Reproducir video: ${v.titulo}`}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-md ring-2 ring-white shadow-lg transition group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8 fill-pink-600"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                  <span className="absolute top-2 right-2 rounded-full bg-black/60 text-white text-[11px] px-2 py-0.5 font-medium backdrop-blur">
                    YouTube
                  </span>
                </div>

                <div className="p-5 flex flex-col">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg leading-snug">
                    {v.titulo}
                  </h3>
                  {(v.autor || v.fecha) && (
                    <p className="mt-1 text-sm text-pink-600 dark:text-pink-400 font-medium">
                      {v.autor}
                      {v.autor && v.fecha && ' · '}
                      {v.fecha}
                    </p>
                  )}
                  {v.descripcion && (
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {v.descripcion}
                    </p>
                  )}
                  <div className="mt-5">
                    <button
                      onClick={() => open(v)}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm font-medium px-5 py-2.5 shadow hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
                    >
                      Ver video
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M5 12h12l-5-5 1.4-1.4L21.8 13l-8.4 7.4L12 19l5-5H5z" />
                      </svg>
                    </button>
                  </div>
                  {youId && (
                    <span className="mt-4 text-[10px] tracking-wide uppercase text-gray-400">
                      ID: {youId}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <VideoModal
            video={active}
            onClose={close}
            useNoCookieDomain={useNoCookieDomain}
            autoPlay={autoPlay}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Modal ---------------- */

function VideoModal({
  video,
  onClose,
  useNoCookieDomain,
  autoPlay,
}: {
  video: ITestimonialVideo;
  onClose: () => void;
  useNoCookieDomain: boolean;
  autoPlay: boolean;
}) {
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const id = extractYouTubeId(video.youtubeUrl);
  const base = useNoCookieDomain
    ? 'https://www.youtube-nocookie.com/embed/'
    : 'https://www.youtube.com/embed/';
  const params = `?rel=0&modestbranding=1${autoPlay ? '&autoplay=1' : ''}`;
  const iframeSrc = id ? `${base}${id}${params}` : video.youtubeUrl;

  const handleClickBackdrop = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <motion.div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onMouseDown={handleClickBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${video.titulo}`}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        className="relative w-full max-w-4xl rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/30 shadow-2xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition focus:outline-none focus:ring-2 focus:ring-pink-400"
          aria-label="Cerrar video"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="aspect-video w-full relative bg-black">
          <iframe
            src={iframeSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.titulo}
            className="absolute inset-0 h-full w-full"
            loading="eager"
          />
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-b from-white/40 to-white/20 dark:from-slate-900/60 dark:to-slate-900/30 backdrop-blur">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {video.titulo}
          </h3>
          {(video.autor || video.fecha) && (
            <p className="mt-2 text-sm text-pink-600 dark:text-pink-400 font-medium">
              {video.autor}
              {video.autor && video.fecha && ' · '}
              {video.fecha}
            </p>
          )}
          {video.descripcion && (
            <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {video.descripcion}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------ Hook: bloquear scroll body ------------ */
function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);
}
