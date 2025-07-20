"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  isMobile: boolean;
  closeMenu?: () => void;
};

export default function Navbar({ isMobile, closeMenu }: Props) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-mi", label: "Sobre mí" },
    { href: "/servicios", label: "Servicios" },
    { href: "/psico-educacion", label: "Psico Educacion" },
    { href: "/tienda", label: "Tienda" },
     { href: "/intranet", label: "Intranet" },
  ];

  const baseClass = "transition font-semibold tracking-wide";
  const activeClass = "text-purple-700 border-b-2 border-purple-700";
  const inactiveClass = "text-gray-800 hover:text-purple-700";

  return isMobile ? (
    <nav className="md:hidden flex flex-col items-center px-6 pb-4 text-lg bg-white">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className={`w-full text-center py-2 rounded ${
            pathname === link.href ? "bg-purple-100 text-purple-700 font-bold" : "hover:bg-purple-100 hover:text-purple-700"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  ) : (
    <nav className="hidden md:flex space-x-8 text-lg">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${baseClass} ${
            pathname === link.href ? activeClass : inactiveClass
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
