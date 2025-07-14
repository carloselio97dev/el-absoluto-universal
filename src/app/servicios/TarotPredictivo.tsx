'use client'
import Image from "next/image";
import { JSX } from "react";
import {
  FaMagic,
  FaHeart,
  FaEye,
  FaBalanceScale,
  FaWhatsapp,
  FaUserCheck,
} from "react-icons/fa";

export default function TarotPredictivo() {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-pink-50 min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Encabezado */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 leading-tight">
            Enfoque Terapéutico
          </h1>
          <p className="text-lg italic text-gray-600 mt-4 max-w-xl mx-auto">
            El Tarot no dicta tu destino, te muestra cómo estás creándolo, para que puedas transformarlo.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-xl w-full max-w-xl">
            <Image
              src="/images/tarot-consulta.jpg" // Asegúrate de tener esta imagen en /public/images/
              alt="Tarot terapéutico"
              width={800}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid gap-8">
          <Item
            icon={<FaMagic className="text-pink-500 text-2xl" />}
            title="Detección de patrones, bucles y bloqueos"
            text="Identifica energías emocionales repetitivas que interfieren en tu vida y evita repetir errores o ciclos inconscientes."
          />
          <Item
            icon={<FaBalanceScale className="text-pink-500 text-2xl" />}
            title="Fortalecimiento del libre albedrío"
            text="El tarot no impone un destino, te muestra escenarios y te empodera para transformarlos."
          />
          <Item
            icon={<FaHeart className="text-pink-500 text-2xl" />}
            title="Acompañamiento emocional"
            text="El Tarot te muestra; la psicoterapia te sostiene. Si emergen heridas o tensiones, se abordan con técnicas psicológicas."
          />
          <Item
            icon={<FaEye className="text-pink-500 text-2xl" />}
            title="Visión clara del presente y escenarios futuros"
            text="Explora opciones, caminos y obstáculos para tomar decisiones con claridad."
          />
          <Item
            icon={<FaUserCheck className="text-pink-500 text-2xl" />}
            title="Identificación de patrones internos y sucesos externos"
            text="Desde un enfoque Junguiano y Gestáltico, comprende cómo tu mundo interno influye en tu realidad."
          />
        </div>

        {/* Sección: ¿Para quién es esta lectura? */}
        <div className="relative bg-white/90 backdrop-blur-md border border-pink-100 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto text-center space-y-6 mt-12">
          <h2 className="text-3xl font-bold text-pink-600">¿Para quién es esta lectura?</h2>
          <ul className="grid gap-4 text-left text-gray-700">
            <ListItem text="Frente a una decisión importante (relación, trabajo, cambio de vida)" />
            <ListItem text="Si sientes incertidumbre sobre tu futuro" />
            <ListItem text="Estás repitiendo situaciones sin entender por qué" />
            <ListItem text="Buscas claridad sin desconectarte de tu proceso emocional y espiritual" />
          </ul>
        </div>

        {/* Botón */}


        <a
          href="https://wa.me/51987654321?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20de%20Psico%20Tarot%20con%20enfoque%20terap%C3%A9utico."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 text-center"
        >
          <FaWhatsapp className="text-xl" />
          Quiero una Sesion Psico Tarot
        </a>


      </div>
    </section>
  );
}

// Subcomponente para ítems con ícono a la izquierda
function Item({ icon, title, text }: { icon: JSX.Element, title: string, text: string }) {
  return (
    <div className="flex items-start">
      <div className="text-pink-500 mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-pink-500">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

// Subcomponente para ítems de lista final con ícono personalizado
function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start space-x-3">
      <span className="text-pink-500 mt-1">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm0 6a1 1 0 10-2 0 1 1 0 002 0z" />
        </svg>
      </span>
      <span>{text}</span>
    </li>
  );
}
