// components/HeroStatic.jsx
"use client"
import Slider from './Slider';

export default function Hero() {
  return (
    <section className="bg-pink-100 py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* texto */}
       <div className="w-full md:w-1/2 text-center md:text-left text-black">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
    Bienvenido a tu espacio de bienestar
  </h1>
  <p className="text-lg mb-6 text-black">
    Terapias personalizadas y comienza tu transformación hoy.
  </p>
  <a
    href="#servicios"
    className="inline-block bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition"
  >
    Conoce más
  </a>
</div>

        {/* slider como componente */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Slider />
        </div>
      </div>
    </section>
  )
}
