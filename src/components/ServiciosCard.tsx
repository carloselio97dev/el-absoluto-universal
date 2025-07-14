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
    <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/3">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between md:w-2/3">
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-2">{title}</h3>
          <p className="text-gray-700 mb-4 text-sm">{description}</p>
        </div>
        <Link
         href={`/servicios/${slug}`} 
          className="text-sm text-pink-600 font-semibold hover:underline"
        >
          Ver más información →
        </Link>
      </div>
    </div>
  );
}
