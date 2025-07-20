'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export interface LoginState {
  ok: boolean;
  error?: string;
}

export async function loginAction(
  prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = (formData.get('username') || '').toString().trim();
  const password = (formData.get('password') || '').toString().trim();

  if (!username || !password) {
    return { ok: false, error: 'Campos requeridos' };
  }

  // Demo
  if (username !== 'admin' || password !== 'admin') {
    return { ok: false, error: 'Credenciales inválidas' };
  }

  const store = await cookies();
  store.set({
    name: 'session',
    value: '1',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60,
    secure: process.env.NODE_ENV === 'production',
  });

  redirect('/intranet');
}
