import SocialSidebar from "@/components/SocialSidebar";

export const metadata = {
  title: 'Psico Educación',
};

export default function PsicoEducacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contenido principal ocupa 3/4 en pantallas grandes */}
        <main className="lg:col-span-3 order-first">
          {children}
        </main>

        {/* Sidebar: debajo en móvil, al lado en desktop */}
        <div className="lg:col-span-1 order-last lg:order-none">
          <SocialSidebar />
        </div>
      </div>
    </div>
  );
}