import { FC, JSX } from "react";
import TerapiaIntegrativaHolistica from "@/components/servicios/TerapiaIntegrativaHolistica";
import RegistrosAkashicos from "@/components/servicios/RegistrosAkashicos";
import TarotPredictivo from "@/components/servicios/TarotPredictivo";
import Cosmobiologia from "@/components/servicios/Cosmobiologia";

interface ServicioIndividualProps {
  params: {
    slug: string;
  };
}

type ServicioComponent = FC;

const servicios: Record<string, ServicioComponent> = {
  "psicoterapia-integrativa": TerapiaIntegrativaHolistica,
  "registros-akashicos": RegistrosAkashicos,
  "tarot-predictivo": TarotPredictivo,
  "cosmobiologia": Cosmobiologia,
};

// ✅ Solución al error:
export async function generateStaticParams() {
  return Object.keys(servicios).map((slug) => ({ slug }));
}

export default async function ServicioIndividual(props: ServicioIndividualProps): Promise<JSX.Element> {
  const { params } = props;
  const { slug } = await Promise.resolve(params); // 👈 simulando espera

  const Componente = servicios[slug];

  if (!Componente)
    return <div className="text-center py-20">Servicio no encontrado</div>;

  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Componente />
      </div>
    </div>
  );
}
