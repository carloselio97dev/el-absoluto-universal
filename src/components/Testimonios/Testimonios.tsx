'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useId, useState, useRef, useEffect } from 'react';
import { ITestimonialsProps } from '../../types/testimonios';

/* Utilidad */
const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

/* Stars */
function Stars({ value = 0 }: { value?: number }) {
  const filled = clamp(Math.round(value), 0, 5);
  return (
    <div className="flex gap-0.5" aria-label={`Valoración ${filled} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 transition-colors duration-300 ${
            i < filled
              ? 'text-pink-500 group-hover:text-pink-600'
              : 'text-gray-300 dark:text-gray-600 group-hover:text-pink-300'
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

/* Botón navegación carrusel */
function NavBtn({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-white/60 dark:border-white/10
                 bg-white/80 dark:bg-white/10 backdrop-blur px-4 py-2 text-sm font-medium
                 text-gray-600 dark:text-gray-300
                 transition-colors transition-shadow duration-300
                 hover:text-pink-600 dark:hover:text-pink-300
                 hover:border-pink-300/70 dark:hover:border-pink-500/60
                 hover:bg-pink-50/80 dark:hover:bg-pink-500/10
                 hover:shadow-md hover:shadow-pink-200/50 dark:hover:shadow-pink-900/40
                 active:scale-[0.97]"
    >
      {children}
    </button>
  );
}

export default function Testimonials({
  testimonios,
  titulo = 'Lo que dicen nuestros clientes',
  subtitulo = 'Experiencias reales y resultados tangibles',
  className = '',
  mostrarRating = true,
  variant = 'grid',
  autoPlayMs = 6000,
  accentColorClass = 'from-pink-500 to-fuchsia-500',
  autoPlay = false
}: ITestimonialsProps & { autoPlay?: boolean }) {
  const headingId = useId();
  const isCarousel = variant === 'carousel';
  const [index, setIndex] = useState(0);
  const total = testimonios.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* Autoplay */
  useEffect(() => {
    if (!isCarousel || !autoPlay || total <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setIndex(prev => (prev + 1) % total),
      autoPlayMs
    );
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isCarousel, autoPlay, total, autoPlayMs]);

  /* Navegación con teclado */
  useEffect(() => {
    if (!isCarousel) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setIndex(i => (i + 1) % total);
      if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + total) % total);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isCarousel, total]);

  return (
    <section
      aria-labelledby={headingId}
      className={`relative py-16 ${className}`}
    >
      {/* Fondo full width */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-slate-900 dark:via-slate-950 dark:to-fuchsia-950" />
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-pink-300/15 blur-[90px]" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-fuchsia-300/15 blur-[110px]" />
      </div>

      {/* Contenedor central */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2
            id={headingId}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight
                       bg-clip-text text-transparent bg-gradient-to-r
                       from-pink-600 via-fuchsia-600 to-pink-600 leading-tight"
          >
            {titulo}
          </h2>
          {subtitulo && (
            <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400">
              {subtitulo}
            </p>
          )}
          <div className="mt-4 flex justify-center">
            <span
              className={`h-1 w-20 rounded-full bg-gradient-to-r ${accentColorClass}`}
            />
          </div>
        </div>

        {/* GRID */}
        {!isCarousel && (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {testimonios.map((t, i) => (
              <motion.figure
                key={t.id ?? i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                viewport={{ once: true, amount: 0.25 }}
                className="group relative flex flex-col rounded-2xl p-6
                           bg-white/80 dark:bg-white/10 backdrop-blur-md
                           ring-1 ring-pink-100/60 dark:ring-white/10 shadow-sm
                           transition-colors transition-shadow duration-300
                           hover:bg-pink-50/70 dark:hover:bg-pink-500/10
                           hover:ring-pink-300/70 dark:hover:ring-pink-400/50
                           hover:shadow-lg hover:shadow-pink-200/50 dark:hover:shadow-pink-900/30"
              >
                <QuoteMark small />
                <blockquote className="relative z-10 text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-5 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-100">
                  {t.contenido}
                </blockquote>
                <figcaption className="relative z-10 mt-auto flex items-center gap-4">
                  <Avatar nombre={t.nombre} src={t.avatar} />
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
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

        {/* CAROUSEL */}
        {isCarousel && (
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: 'spring', stiffness: 70, damping: 18 }}
                style={{ width: `${total * 100}%` }}
              >
                {testimonios.map((t, i) => (
                  <div
                    key={t.id ?? i}
                    className="w-full flex-shrink-0 px-1 flex justify-center"
                  >
                    <motion.figure
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="group relative w-full max-w-xl flex flex-col rounded-2xl p-8
                                 bg-white/85 dark:bg-white/10 backdrop-blur-lg
                                 ring-1 ring-pink-100/60 dark:ring-white/10 shadow-md
                                 transition-colors transition-shadow duration-300
                                 hover:bg-pink-50/70 dark:hover:bg-pink-500/10
                                 hover:ring-pink-300/70 dark:hover:ring-pink-400/50
                                 hover:shadow-xl hover:shadow-pink-200/50 dark:hover:shadow-pink-900/30"
                    >
                      <QuoteMark />
                      <blockquote className="relative z-10 text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-100">
                        {t.contenido}
                      </blockquote>
                      <figcaption className="relative z-10 mt-auto flex items-center gap-5">
                        <Avatar nombre={t.nombre} src={t.avatar} size={60} />
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900 dark:text-gray-100">
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
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonios.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Ir al testimonio ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                        index === i
                          ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 shadow shadow-pink-400/40'
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-pink-400 dark:hover:bg-pink-500 hover:shadow hover:shadow-pink-300/40'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <NavBtn onClick={() => setIndex(i => (i - 1 + total) % total)}>
                    ←
                  </NavBtn>
                  <NavBtn onClick={() => setIndex(i => (i + 1) % total)}>
                    →
                  </NavBtn>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* Subcomponentes */
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
        className="relative shrink-0 rounded-full ring-2 ring-pink-400/40 overflow-hidden bg-white
                   transition duration-300 group-hover:ring-pink-500/70"
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
      className="shrink-0 rounded-full bg-gradient-to-br from-pink-200 to-fuchsia-200 dark:from-fuchsia-700 dark:to-pink-700
                 flex items-center justify-center text-pink-700 dark:text-pink-100 font-semibold
                 transition-colors duration-300
                 group-hover:from-pink-300 group-hover:to-fuchsia-300
                 dark:group-hover:from-fuchsia-600 dark:group-hover:to-pink-600"
      aria-hidden="true"
    >
      {nombre.charAt(0).toUpperCase()}
    </div>
  );
}

function QuoteMark({ small = false }: { small?: boolean }) {
  return (
    <div className="mb-3 text-pink-500/70 dark:text-pink-400/70 transition-colors duration-300 group-hover:text-pink-600">
      <svg
        className={small ? 'h-12 w-12' : 'h-16 w-16'}
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
