import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ValueProp from "@/components/site/ValueProp";
import MenuHighlights from "@/components/site/MenuHighlights";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import useReveal from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  useEffect(() => {
    document.title =
      "Asadero El Gordo Feliz · Pollo asado y frito en Guadalupe, N.L.";
  }, []);

  return (
    <main data-testid="home-page" className="bg-[#FAFAFA] text-stone-900">
      <Navbar />
      <Hero />
      <ValueProp />
      <MenuHighlights />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
