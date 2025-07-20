'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const DEMO_USER = { username: 'admin', password: '123456' };

export interface LoginState {
  ok: boolean;
  error?: string;
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = String(formData.get('username') || '').trim();
  const password = String(formData.get('password') || '').trim();

  if (!username || !password) {
    return { ok: false, error: 'Campos requeridos' };
  }

  if (username === DEMO_USER.username && password === DEMO_USER.password) {
    const cookieStore = await cookies();          // <--- AWAIT
    cookieStore.set('session', username, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8,
    });

    redirect('/intranet');
  }

  return { ok: false, error: 'Credenciales inválidas' };
}
