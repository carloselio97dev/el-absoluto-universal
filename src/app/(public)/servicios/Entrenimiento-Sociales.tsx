"use client";

import TarotParaFiestas from "./entretenimiento/tarot-fiestas-eventos/page";
import CafeTarot from "./entretenimiento/cafe-tarot/page";

export default function EntretenimientoSociales() {
  return (
    <section className="bg-pink-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Encabezado principal */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-700">ENTRETENIMIENTO & SOCIALES</h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
            Experiencias únicas para eventos, celebraciones y reuniones íntimas que conectan lo místico con lo humano.
          </p>
       
        </div>

        {/* Tarot para Fiestas */}
        <TarotParaFiestas />

        {/* Separador visual */}
        <hr className="border-t border-pink-200" />

        {/* Café Tarot / Té Esotérico */}
        <CafeTarot />
      </div>
    </section>
  );
}
