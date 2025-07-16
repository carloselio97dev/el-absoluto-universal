"use client";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    platform: "Facebook",
    url: "https://www.facebook.com",
    icon: <FaFacebook size={28} />,
    bgColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: 2,
    platform: "Instagram",
    url: "https://www.instagram.com",
    icon: <FaInstagram size={28} />,
    bgColor: "bg-pink-500",
    textColor: "text-white",
  },
  {
    id: 3,
    platform: "Twitter",
    url: "https://www.twitter.com",
    icon: <FaTwitter size={28} />,
    bgColor: "bg-blue-400",
    textColor: "text-white",
  },
  {
    id: 4,
    platform: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: <FaLinkedin size={28} />,
    bgColor: "bg-blue-700",
    textColor: "text-white",
  },
  {
    id: 5,
    platform: "WhatsApp",
    url: "https://wa.me/51999999999", // Cambia al número real
    icon: <FaWhatsapp size={28} />,
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
  {
    id: 6,
    platform: "YouTube",
    url: "https://www.youtube.com/@tucanal", // cambia al canal real
    icon: <FaYoutube size={28} />,
    bgColor: "bg-red-600",
    textColor: "text-white",
  },
];

export default function RedesSociales() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Conéctate con Nosotros
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Síguenos en nuestras redes sociales y mantente al tanto de todas las novedades, actividades y mensajes para tu crecimiento personal y espiritual.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl shadow-lg p-4 flex flex-col items-center justify-center hover:scale-105 transition transform duration-300 ${link.bgColor} ${link.textColor}`}
            >
              {link.icon}
              <span className="mt-2 font-semibold">{link.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
