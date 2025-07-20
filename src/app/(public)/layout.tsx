// app/(public)/layout.tsx
import Headers from '@/components/ui/Headers';
import { Footer } from '@/components/ui/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';

export const metadata = { title: 'El Absoluto Universal' };

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Headers />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
