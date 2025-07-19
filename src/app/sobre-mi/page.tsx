import AboutMe from '@/components/AcercaDeMi/AboutMe'
import RedesSociales from '@/components/RedesSociales/RedesSociales'
import TestimonialVideos from '@/components/Testimonios/TestimonialVideos'
import Testimonials from '@/components/Testimonios/Testimonios'
import { testimonialVideos } from '@/data/testimonialVideos'
import { testimonios } from '@/data/testimoniosData'

import React from 'react'

export default function page() {
  return (
   <>
      <AboutMe />
      <RedesSociales />

      <Testimonials
        testimonios={testimonios}
        titulo="Lo que dicen nuestros clientes"
        subtitulo="Experiencias reales y resultados tangibles"
        variant="grid"
      />

      <TestimonialVideos
        videos={testimonialVideos}
        titulo="Videos de Testimonios"
        subtitulo="Escucha y observa experiencias reales de transformación."
        // accentClass="from-pink-500 to-fuchsia-500" // (opcional, ya hay default)
        // autoPlay={true} // (default true en modal)
        // useNoCookieDomain={true} // (default)
      />
    </>
   
  )
}
