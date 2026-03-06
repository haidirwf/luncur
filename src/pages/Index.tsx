import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

// Lazy load components below the fold
const LayananSection = lazy(() => import("@/components/LayananSection").then(m => ({ default: m.LayananSection })));
const PricelistSection = lazy(() => import("@/components/PricelistSection").then(m => ({ default: m.PricelistSection })));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection").then(m => ({ default: m.PortfolioSection })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const ContactSection = lazy(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })));

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

        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
          <LayananSection />
          <PricelistSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Index;