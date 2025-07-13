import { Footer } from "@/components/Footer";
import Headers from "@/components/Headers";
import './globals.css'; 

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
      </body>
        
    </html>
  );
}
