'use client';

import { useActionState, useEffect, useRef, useId } from 'react';
import { loginAction, type LoginState } from '@/app/intranet/login/action';

const initialState: LoginState = { ok: false };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);
  const userId = useId();
  const passId = useId();
  const errorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (state.error && errorRef.current) errorRef.current.focus();
  }, [state.error]);

  return (
    <div className="relative mx-auto max-w-md rounded-3xl border border-white/60 bg-white/80 p-10 backdrop-blur-xl shadow-[0_4px_25px_-6px_rgba(240,60,180,0.25)] dark:border-white/10 dark:bg-zinc-900/70">
      {/* Halo */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink-400/20 before:to-fuchsia-400/10 before:opacity-60" />

      <form action={formAction} noValidate className="relative space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-pink-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
            Iniciar sesión
          </h1>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Accede al panel administrativo y gestiona tu contenido.
          </p>
        </header>

        {/* Campos */}
        <div className="space-y-6">
          {/* Usuario */}
          <div className="relative">
            <input
              id={userId}
              name="username"
              placeholder="Usuario"
              autoComplete="username"
              required
              className="peer w-full rounded-2xl border border-pink-200/60 bg-white/60 px-12 py-4 text-sm font-medium tracking-wide shadow-sm outline-none transition placeholder-transparent hover:border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200/60 dark:border-zinc-700 dark:bg-zinc-800/70 dark:hover:border-pink-400 dark:focus:border-pink-400 dark:focus:ring-pink-700/40"
            />
            <label
              htmlFor={userId}
              className="pointer-events-none absolute left-12 top-2.5 -translate-y-2 scale-75 select-none rounded px-1 text-[11px] font-semibold uppercase tracking-wide text-pink-600 opacity-90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-pink-600 dark:text-pink-300 dark:peer-placeholder-shown:text-gray-400"
            >
              Usuario
            </label>
            <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500/80 transition peer-focus:text-pink-600 dark:text-pink-300 dark:peer-focus:text-pink-200" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              id={passId}
              name="password"
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              required
              className="peer w-full rounded-2xl border border-pink-200/60 bg-white/60 px-12 py-4 text-sm font-medium tracking-wide shadow-sm outline-none transition placeholder-transparent hover:border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200/60 dark:border-zinc-700 dark:bg-zinc-800/70 dark:hover:border-pink-400 dark:focus:border-pink-400 dark:focus:ring-pink-700/40"
            />
            <label
              htmlFor={passId}
              className="pointer-events-none absolute left-12 top-2.5 -translate-y-2 scale-75 select-none rounded px-1 text-[11px] font-semibold uppercase tracking-wide text-pink-600 opacity-90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-pink-600 dark:text-pink-300 dark:peer-placeholder-shown:text-gray-400"
            >
              Contraseña
            </label>
            <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500/80 transition peer-focus:text-pink-600 dark:text-pink-300 dark:peer-focus:text-pink-200" />
            <div className="mt-2 pl-1">
              <button
                type="button"
                className="text-xs font-medium text-pink-600 hover:text-pink-700 hover:underline dark:text-pink-300"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </div>
        </div>

        {/* Error */}
        {state.error && (
          <div
            ref={errorRef}
            tabIndex={-1}
            aria-live="assertive"
            className="rounded-xl border border-red-300/70 bg-red-50/90 px-4 py-2 text-sm text-red-700 shadow-sm dark:border-red-700/60 dark:bg-red-900/30 dark:text-red-300"
          >
            {state.error}
          </div>
        )}

        {/* Botón */}
        <button
          type="submit"
          disabled={pending}
          className="relative inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-pink-600 bg-[length:200%_100%] bg-left px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-pink-400/30 transition-all hover:bg-right focus:outline-none focus:ring-4 focus:ring-pink-300/50 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending && (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          )}
          {pending ? 'Ingresando...' : 'Entrar'}
          <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" />
        </button>

        <footer className="pt-2 text-center text-[11px] text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} El Absoluto Universal
        </footer>
      </form>
    </div>
  );
}

function UserIcon(props: React.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.2-4 6.8-4 8-4s6.8 0 8 4" />
    </svg>
  );
}

function LockIcon(props: React.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
