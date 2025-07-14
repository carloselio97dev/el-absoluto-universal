import Link from "next/link";
import Image from "next/image";

type ServicioCardProps = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export default function ServicioCard({
  title,
  slug,
  description,
  image,
}: ServicioCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300">
      {/* Imagen */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-bold text-pink-700 mb-2">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
        <Link
          href={`/servicios/${slug}`}
          className="text-sm text-pink-600 font-semibold hover:underline mt-4 inline-block"
        >
          Ver más información →
        </Link>
      </div>
    </div>
  );
}
