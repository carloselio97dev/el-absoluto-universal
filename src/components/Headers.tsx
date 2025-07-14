"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar"; // importas el nuevo componente

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.jpeg"
            alt="Logo El Absoluto Universal"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain rounded-full"
            priority
          />
          <span className="text-xl font-display text-purple-700">
            EL ABSOLUTO UNIVERSAL
          </span>
        </Link>

        {/* NAVBAR DESKTOP */}
        <Navbar isMobile={false} />

        {/* HAMBURGUESA MÓVIL */}
        <button
          className="md:hidden text-purple-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* NAVBAR MÓVIL */}
      {isOpen && <Navbar isMobile={true} closeMenu={() => setIsOpen(false)} />}
    </header>
  );
}
