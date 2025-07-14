import Image from "next/image";
import TratamientoBase from "../home/TratamientoBase";

export default function TerapiaIntegrativaHolistica() {
  return (
    <section className="bg-pink-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Encabezado */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
            Psicoterapia Integrativa Holística
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un proceso de sanación profunda combinando técnicas psicológicas con terapias energéticas.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/pendulo.jpg"
              alt="Consulta terapéutica"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/terapia1.jpg"
              alt="Terapia con péndulo"
              fill
              className="object-cover"
            />
          </div>
        </div>


        <TratamientoBase/>

      </div>
    </section>
  );
}
