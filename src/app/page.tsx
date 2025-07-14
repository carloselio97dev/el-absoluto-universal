import Hero from "@/components/Hero";
import Sesiones from "@/components/Sesiones";
import TarotConsulta from "@/components/TarotConsulta";
import Terapias from "@/components/Terapias";

 

export default function Home() {
  return (
  <>
    <Terapias/>
    <Sesiones/>
    <TarotConsulta/>
     <Hero/>
  </>
  );
}
