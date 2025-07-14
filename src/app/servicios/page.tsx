export const metadata = {
  title: 'El Absoluto Universal',
  description: 'Terapias personalizadas para tu bienestar',
  icons: {
    icon: '/logo.png',
  },
}

import ServicioCard from "@/components/ServiciosCard";

const servicios = [
  {
    title: "Psicoterapia Integrativa Holística",
    slug: "psicoterapia-integrativa",
    image: "/images/pendulo.jpg",
    description: "Combina las técnicas psicológicas tradicionales con la terapia de radiestesia con péndulo hebreo y el Tarot terapéutico.",
  },
  {
    title: "Lectura de Registros Akáshicos",
    slug: "registros-akashicos",
    image: "/images/akashicos.jpg",
    description: "Conecta con tu alma para comprender tus aprendizajes y caminos.",
  },
  {
    title: "Tarot Predictivo",
    slug: "tarot-predictivo",
    image: "/images/psicotarot.jpg",
    description: "Sesiones de Tarot para orientación, toma de decisiones y guía espiritual.",
  },
  {
    title: "Cosmobiología",
    slug: "cosmobiologia",
    image: "/images/cosmobiologia.jpg",
    description: "Conexión con el ciclo cósmico y comprensión de la unidad universal.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="bg-pink-50 min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">
        Herramientas que integro en las sesiones
      </h1>
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {servicios.map((servicio) => (
          <ServicioCard key={servicio.slug} {...servicio} />
        ))}
      </div>
    </main>
  );
}