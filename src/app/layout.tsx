import { Footer } from "@/components/Footer";
import Headers from "@/components/Headers";
import './globals.css'; 
import WhatsappButton from "@/components/WhatsappButton";

export const metadata = {
  title: "El Absoluto Universal",
  description: "Terapias holísticas y lectura espiritual",
};


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
