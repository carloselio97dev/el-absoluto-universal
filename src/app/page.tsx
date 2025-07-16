import Hero from "@/app/home/Hero";
import Servicios from "@/app/home/Servicios";
import HeroBienvenida from "./home/HeroBienvenida";
import EntretenimientoSocialDestacado from "@/components/servicios/EntretenimientoSocialDestacado";

 

export default function Home() {
 return (
    <>
      <HeroBienvenida />
      <Servicios />
      <Hero />
      
      {/* Contenedor de tarjetas en grid */}
     <div className="flex justify-center mt-12">
       <EntretenimientoSocialDestacado />
    </div>

    </>
  );
}
