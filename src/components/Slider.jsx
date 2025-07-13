'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/images/terapia1.jpg', alt: 'Terapia 1' },
  { src: '/images/terapia2.jpg', alt: 'Terapia 2' },
  { src: '/images/terapia3.jpg', alt: 'Terapia 3' },
]

export default function Slider() {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % length)
    }, 5000)
    return () => clearInterval(timer)
  }, [length])

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)

  if (!length) return null

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-4xl h-80 md:h-[26rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden rounded-2xl shadow-lg">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {idx === current && (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            )}
          </div>
        ))}

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? 'bg-pink-500' : 'bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
