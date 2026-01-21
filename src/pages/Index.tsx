import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { KeunggulanSection } from "@/components/KeunggulanSection";
import { LayananSection } from "@/components/LayananSection";
import { PricelistSection } from "@/components/PricelistSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
