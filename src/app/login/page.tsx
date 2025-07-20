import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/auth/LoginForm';

export default async function LoginPage() {
  const jar = await cookies();
  if (jar.get('session')) {
    redirect('/intranet');
  }
  return <LoginForm />;
}
