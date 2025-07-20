import Link from 'next/link';
import Slider from './Slider';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="bg-pink-100 py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Bloque de texto con efecto vidrio */}
        <div className="w-full md:w-1/2 animate-fade-up">
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Estás a un paso de transformar tu vida
            </h1>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed text-justify">
              El cambio empieza dentro de ti. Escucha a tu alma, honra tu proceso y permítete sanar con amor y conciencia.
            </p>

            {/* Usar Link para navegación interna */}
            <Link href="/servicios" passHref>
              <div className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer">
                Conoce más
                <FaArrowRight className="text-sm" />
              </div>
            </Link>
          </div>
        </div>

        {/* Slider con efecto hover moderno */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 transition-transform duration-500 hover:scale-105 rounded-3xl shadow-2xl overflow-hidden">
          <Slider />
        </div>

      </div>
    </section>
  );
}
