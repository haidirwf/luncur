import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LayananSection } from "@/components/LayananSection";
import { PricelistSection } from "@/components/PricelistSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags are handled in index.html */}
      <Navbar />
      <main>
        <HeroSection />
        <LayananSection />
        <PricelistSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
