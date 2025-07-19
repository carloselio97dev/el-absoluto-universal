'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useId, useState, useRef, useEffect } from 'react';
import { ITestimonialsProps } from '../../types/testimonios';

// Utilidad -----------------------------
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

function Stars({ value = 0 }: { value?: number }) {
  const filled = clamp(Math.round(value), 0, 5);
  return (
    <div className="flex gap-0.5" aria-label={`Valoración ${filled} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < filled ? 'text-pink-500' : 'text-gray-300 dark:text-gray-600'
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0L6.715 16.283c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.08 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Componente principal -----------------
export default function Testimonials({
  testimonios,
  titulo = 'Lo que dicen nuestros clientes',
  subtitulo = 'Experiencias reales y resultados tangibles',
  className = '',
  mostrarRating = true,
  variant = 'grid',
  autoPlayMs = 6000,
  accentColorClass = 'from-pink-500 to-fuchsia-500'
}: ITestimonialsProps) {
  const headingId = useId();
  const isCarousel = variant === 'carousel';
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const total = testimonios.length;

  // AutoPlay sólo en carousel
  useEffect(() => {
    if (!isCarousel || total <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    intervalRef.current = setInterval(
      () => setIndex(prev => (prev + 1) % total),
      autoPlayMs
    );
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isCarousel, total, autoPlayMs]);

  // Accesibilidad teclado (carousel)
  useEffect(() => {
    if (!isCarousel) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % total);
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + total) % total);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isCarousel, total]);

  const mobileListRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      aria-labelledby={headingId}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      {/* Fondo base degradado + blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-slate-900 dark:via-slate-950 dark:to-fuchsia-950" />
        <div className="absolute -top-40 -left-44 w-96 h-96 rounded-full bg-pink-300/30 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full bg-fuchsia-300/30 blur-[170px]" />
      </div>

      {/* Fades top/bottom solo mobile */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-12 bg-gradient-to-b from-pink-50 via-pink-50/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 sm:hidden" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-pink-50 via-pink-50/70 to-transparent dark:from-slate-900 dark:via-slate-900/70 sm:hidden" />

      <div className="mx-auto max-w-7xl relative">
        {/* Cabecera */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2
            id={headingId}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-600 to-pink-600"
          >
            {titulo}
          </h2>
          {subtitulo && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {subtitulo}
            </p>
          )}
          <div className="mt-6 flex justify-center">
            <span
              className={`h-1 w-32 rounded-full bg-gradient-to-r ${accentColorClass}`}
            />
          </div>
        </div>

        {/* GRID con Scroll Snap en mobile */}
        {!isCarousel && (
          <div
            ref={mobileListRef}
            className="
              flex flex-col gap-14
              snap-y snap-mandatory
              overflow-y-auto
              max-h-[calc(100vh-320px)]
              pb-8 pr-2
              sm:grid sm:gap-10 sm:grid-cols-2 xl:grid-cols-3
              sm:overflow-visible sm:max-h-none sm:pb-0 sm:pr-0
            "
          >
            {testimonios.map((t, i) => (
              <motion.figure
                key={t.id ?? i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                viewport={{ once: true, amount: 0.25 }}
                className="
                  group relative flex flex-col rounded-3xl p-8
                  bg-white/55 dark:bg-white/10 backdrop-blur-xl
                  ring-1 ring-white/60 dark:ring-white/10
                  shadow-[0_8px_24px_-6px_rgba(0,0,0,0.06)]
                  hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(255,0,128,0.25)]
                  transition
                  snap-start
                  before:content-[''] before:absolute before:-top-8 before:left-6 before:right-6 before:h-px
                  before:bg-gradient-to-r before:from-transparent before:via-pink-300/40 before:to-transparent
                  first:before:hidden
                "
              >
                {/* Borde degradado emergente */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/0 via-fuchsia-400/0 to-pink-400/0 opacity-0 group-hover:opacity-100 group-hover:from-pink-400/40 group-hover:via-fuchsia-400/30 group-hover:to-pink-400/40 transition" />

                <QuoteMark />
                <blockquote className="relative z-10 text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
                  {t.contenido}
                </blockquote>
                <figcaption className="relative z-10 mt-auto flex items-center gap-4">
                  <Avatar nombre={t.nombre} src={t.avatar} />
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      {t.nombre}
                    </span>
                    {t.rol && (
                      <span className="text-xs text-pink-600 dark:text-pink-400 font-medium">
                        {t.rol}
                      </span>
                    )}
                    {mostrarRating && t.rating && <Stars value={t.rating} />}
                    {t.fecha && (
                      <span className="text-[10px] uppercase tracking-wide text-gray-400 mt-1">
                        {t.fecha}
                      </span>
                    )}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}

        {/* CAROUSEL (sin cambios respecto a versión previa) */}
        {isCarousel && (
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: 'spring', stiffness: 70, damping: 20 }}
                style={{ width: `${total * 100}%` }}
              >
                {testimonios.map((t, i) => (
                  <div key={t.id ?? i} className="w-full flex-shrink-0 px-1">
                    <motion.figure
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55 }}
                      className="group relative mx-auto max-w-2xl flex flex-col rounded-3xl p-10 bg-white/55 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/60 dark:ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/0 via-fuchsia-400/0 to-pink-400/0 opacity-0 group-hover:opacity-100 group-hover:from-pink-400/40 group-hover:via-fuchsia-400/30 group-hover:to-pink-400/40 transition" />

                      <QuoteMark large />
                      <blockquote className="relative z-10 text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-8">
                        {t.contenido}
                      </blockquote>
                      <figcaption className="relative z-10 mt-auto flex items-center gap-5">
                        <Avatar nombre={t.nombre} src={t.avatar} size={64} />
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900 dark:text-gray-100 text-base">
                            {t.nombre}
                          </span>
                          {t.rol && (
                            <span className="text-sm text-pink-600 dark:text-pink-400 font-medium">
                              {t.rol}
                            </span>
                          )}
                          {mostrarRating && t.rating && (
                            <div className="mt-1">
                              <Stars value={t.rating} />
                            </div>
                          )}
                          {t.fecha && (
                            <span className="text-[11px] uppercase tracking-wide text-gray-400 mt-1">
                              {t.fecha}
                            </span>
                          )}
                        </div>
                      </figcaption>
                    </motion.figure>
                  </div>
                ))}
              </motion.div>
            </div>

            {total > 1 && (
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonios.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Ir al testimonio ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === i
                          ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIndex(i => (i - 1 + total) % total)}
                    className="rounded-full border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur-xl px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:shadow"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndex(i => (i + 1) % total)}
                    className="rounded-full border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur-xl px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:shadow"
                  >
                    →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Subcomponentes ------------------------
function Avatar({
  nombre,
  src,
  size = 52
}: {
  nombre: string;
  src?: string;
  size?: number;
}) {
  if (src) {
    return (
      <div
        className="relative shrink-0 rounded-full ring-2 ring-pink-400/40 overflow-hidden bg-white"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={`Avatar de ${nombre}`}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      style={{ width: size, height: size }}
      className="shrink-0 rounded-full bg-gradient-to-br from-pink-200 to-fuchsia-200 dark:from-fuchsia-700 dark:to-pink-700 flex items-center justify-center text-pink-700 dark:text-pink-100 font-semibold"
      aria-hidden="true"
    >
      {nombre.charAt(0).toUpperCase()}
    </div>
  );
}

function QuoteMark({ large = false }: { large?: boolean }) {
  return (
    <div
      className="mb-4 text-pink-500/80 dark:text-pink-400/80"
      aria-hidden="true"
    >
      <svg
        className={large ? 'h-20 w-20' : 'h-16 w-16'}
        viewBox="0 0 80 80"
        fill="none"
      >
        <text
          x="0"
          y="65"
          fontSize="72"
          fontFamily="serif"
          fill="currentColor"
          style={{ fontWeight: 700 }}
        >
          “
        </text>
      </svg>
    </div>
  );
}
