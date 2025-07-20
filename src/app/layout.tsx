import './globals.css';

export const metadata = {
  title: 'El Absoluto Universal',
  description: 'Terapias personalizadas para tu bienestar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
