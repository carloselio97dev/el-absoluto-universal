import { Footer } from "@/components/Footer";
import Headers from "@/components/Headers";
import './globals.css'; 
import WhatsappButton from "@/components/WhatsappButton";

export const metadata = {
  title: 'El Absoluto Universal',
  description: 'Terapias personalizadas para tu bienestar',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Headers/>
        {children}
       <Footer/>
       <WhatsappButton/>
      </body>
        
    </html>
  );
}
