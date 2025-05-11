
import HeroSection from "@/components/hero";
import Cards from "@/components/cards";
import Services from "@/components/diensten";
import Testimonial from "@/components/testimonial";
import Pricing from "@/components/pricing";
import Clients from "@/components/clienten";
import Contact from "@/components/contact";

export default function Home() {
  return (
 <>
<HeroSection />
<Cards />
<Services />
<Pricing />
<Testimonial />
<Clients />
<Contact />
 </>
  );
}
