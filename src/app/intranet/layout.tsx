import Shell from '@/components/intranet/Shell';

export const metadata = { title: 'Intranet' };

export default function IntranetLayout({ children }: { children: React.ReactNode }) {
  return <Shell>{children}</Shell>;
}
