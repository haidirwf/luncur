import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LayananSection } from "@/components/LayananSection";
import { PricelistSection } from "@/components/PricelistSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Enhanced SEO Meta Tags */}
        <html lang="id" />
        <meta name="keywords" content="jasa pembuatan website, website murah, landing page, company profile, toko online, website UMKM, web design Indonesia, jasa web developer" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        
        {/* Additional Open Graph */}
        <meta property="og:site_name" content="Luncur Site" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </Helmet>

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