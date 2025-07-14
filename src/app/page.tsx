import Hero from "@/app/home/Hero";
import Servicios from "@/app/home/Servicios";
import TarotConsulta from "@/app/home/TarotConsulta";
import HeroBienvenida from "./home/HeroBienvenida";

 

export default function Home() {
  return (
  <>
    <HeroBienvenida/>
    <Servicios/>
    <TarotConsulta/>
     <Hero/>
  </>
  );
}
