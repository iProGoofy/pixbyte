import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import Cards from "@/components/cards";
import Services from "@/components/diensten";

export default function Home() {
  return (
 <>

<HeroSection />
<Cards />
<Services />

 </>
  );
}
