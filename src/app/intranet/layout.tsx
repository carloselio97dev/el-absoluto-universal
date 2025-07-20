import Shell from '@/components/intranet/Shell';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = { title: 'Intranet' };

export default async function IntranetLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  if (!jar.get('session')) redirect('/intranet/login');

  // Solo devuelve un contenedor (div / Shell) – nada de <html> ni <body>.
  return <Shell>{children}</Shell>;
}

