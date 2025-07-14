'use client'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/51962305362?text=Hola%20.%C2%BFQuisiera%20agendar%20una%20sesion%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  )
}