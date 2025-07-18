// src/components/SocialSidebar.tsx
'use client';

import Image from 'next/image';
import {
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

export default function SocialSidebar() {
  return (
    <aside className="space-y-8">
      {/* ---- 1. Foto + Bio ---- */}
      <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow">
        <div className="w-24 h-24 mb-3 rounded-full overflow-hidden">
          <Image
            src="/images/terapeuta.jpg"
            alt="Mi Foto"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold   text-pink-700">  Lic Psic. Dahiana Velásquez G</h3>
        <p className="text-sm text-gray-800 mt-5 ">
          Coach espiritual y creador de contenido.<br />
          Comparte tips de sanación y crecimiento personal.
        </p>
      </div>

      {/* ---- 2. Enlaces a Redes como botones ---- */}
      <div className="p-4 bg-white rounded-xl shadow space-y-4">
        <h4 className="text-lg font-medium mb-4 text-center">Sígueme en</h4>
        <div className="grid grid-cols-1 gap-3">
          <a
            href="https://www.youtube.com/@Instituto_internacional_psicoc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
          >
            <FaYoutube size={20} /> YouTube
          </a>
          <a
            href="https://www.tiktok.com/@tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            <FaTiktok size={20} /> TikTok
          </a>
          <a
            href="https://instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            <FaInstagram size={20} /> Instagram
          </a>
          <a
            href="https://facebook.com/tu_pagina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            <FaFacebook size={20} /> Facebook
          </a>
          <a
            href="https://twitter.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
          >
            <FaTwitter size={20} /> Twitter
          </a>
          <a
            href="https://linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>

      {/* ---- 3. Vídeo destacado de YouTube ---- */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <h4 className="p-4 font-medium">Vídeo destacado</h4>
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/1sq8H8fVwzY?start=1&rel=0"
            title="Vídeo destacado"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </aside>
  );
}
