"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO + NOMBRE */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Logo El Absoluto Universal"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
          <span className="text-xl font-display text-purple-700">
            El Absoluto Universal
          </span>
        </Link>

        {/* MENÚ DESKTOP */}
        <nav className="hidden md:flex space-x-8 text-lg text-gray-800 font-semibold tracking-wide">
          <Link href="/" className="hover:text-purple-700 transition">Inicio</Link>
          <Link href="/sobre-mi" className="hover:text-purple-700 transition">Sobre mí</Link>
          <Link href="/servicios" className="hover:text-purple-700 transition">Servicios</Link>
          <Link href="/contacto" className="hover:text-purple-700 transition">Contacto</Link>
        </nav>

        {/* BOTÓN HAMBURGUESA EN MÓVIL */}
        <button
          className="md:hidden text-purple-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center px-6 pb-4 text-lg text-gray-800 font-semibold tracking-wide bg-white">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2 rounded hover:bg-purple-100 hover:text-purple-700 transition"
          >
            Inicio
          </Link>
          <Link
            href="/sobre-mi"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2 rounded hover:bg-purple-100 hover:text-purple-700 transition"
          >
            Sobre mí
          </Link>
          <Link
            href="/servicios"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2 rounded hover:bg-purple-100 hover:text-purple-700 transition"
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-2 rounded hover:bg-purple-100 hover:text-purple-700 transition"
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}
