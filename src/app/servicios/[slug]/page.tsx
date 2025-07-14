// app/servicios/[slug]/page.tsx

import React from "react";
import TerapiaIntegrativaHolistica from "@/components/servicios/TerapiaIntegrativaHolistica";
import RegistrosAkashicos from "@/components/servicios/RegistrosAkashicos";
import TarotPredictivo from "@/components/servicios/TarotPredictivo";
import Cosmobiologia from "@/components/servicios/Cosmobiologia";

const servicios: Record<string, React.ComponentType> = {
  "psicoterapia-integrativa": TerapiaIntegrativaHolistica,
  "registros-akashicos": RegistrosAkashicos,
  "tarot-predictivo": TarotPredictivo,
  "cosmobiologia": Cosmobiologia,
};

// Genera todas las rutas estáticas a build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(servicios).map((slug) => ({ slug }));
}

interface PageProps {
  // Ahora Next.js pasa params como una Promise
  params: Promise<{ slug: string }>;
}

export default async function ServicioIndividual({ params }: PageProps) {
  // 1. Resolvemos el Promise para obtener el slug
  const { slug } = await params;

  // 2. Seleccionamos el componente según el slug
  const Componente = servicios[slug];

  // 3. Si no existe, mostramos un mensaje de “no encontrado”
  if (!Componente) {
    return <div className="text-center py-20">Servicio no encontrado</div>;
  }

  // 4. Renderizamos la UI
  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Componente />
      </div>
    </div>
  );
}
