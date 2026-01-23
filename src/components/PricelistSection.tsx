import { useState, useEffect } from "react";
import { Check, Star, Rocket, Building2, Palmtree, ShoppingBag, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pricingData = {
  landing: {
    planA: ["1 Halaman Landing Page", "Desain Responsif", "Form Kontak Sederhana", "Hosting Basic 1 Tahun", "Subdomain Gratis", "SSL Gratis", "SEO Basic Setup", "2x Revisi Minor"],
    planB: ["1 Halaman + Sections Lengkap", "Custom Desain Premium", "Form + Integrasi WhatsApp", "Domain .com Gratis 1 Tahun", "Hosting Cepat 1 Tahun", "SSL + Security Extra", "SEO Optimasi Lengkap", "Free Maintenance 1 Bulan", "Revisi Fleksibel"],
  },
  company: {
    planA: ["Bebas Halaman Website", "Desain Responsif", "Halaman About & Kontak", "Hosting Basic 1 Tahun", "Subdomain Gratis", "SSL Gratis", "SEO Basic Setup", "2x Revisi Minor"],
    planB: ["Semua benefit Paket Dasar", "Custom Desain Premium", "Blog/News Section", "Domain .com Gratis 1 Tahun", "Hosting Cepat 1 Tahun", "SSL + Security Extra", "SEO Optimasi Lengkap", "Free Maintenance 1 Bulan", "Revisi Fleksibel"],
  },
  travel: {
    planA: ["Bebas Halaman Website", "Desain Responsif", "Galeri Destinasi", "Form Booking Sederhana", "Hosting Basic 1 Tahun", "Subdomain Gratis", "SSL + SEO Basic", "2x Revisi Minor"],
    planB: ["Semua benefit Paket Dasar", "Custom Desain Premium", "Katalog Paket Wisata", "Form Booking + WhatsApp", "Domain Gratis 1 Tahun", "Hosting Cepat 1 Tahun", "SSL + Security Extra", "SEO Lengkap + Blog", "Free Maintenance 1 Bulan"],
  },
  toko: {
    planA: ["Katalog Produk", "Desain Responsif", "Keranjang Belanja Basic", "Checkout via WhatsApp", "Hosting Basic 1 Tahun", "Subdomain Gratis", "SSL + SEO Basic", "2x Revisi Minor"],
    planB: ["Semua benefit Paket Dasar", "Custom Desain Premium", "Keranjang Belanja Basic", "Checkout direct WhatsApp ", "Domain Gratis 1 Tahun", "Hosting Cepat 1 Tahun", "SSL + Security Extra", "SEO + Tracking", "Free Maintenance 1 Bulan"],
  },
};

const tabs = [
  { id: "landing", label: "Landing Page", icon: Rocket },
  { id: "company", label: "Company Profile", icon: Building2 },
  { id: "travel", label: "Travel & Tour", icon: Palmtree },
  { id: "toko", label: "Toko Online", icon: ShoppingBag },
];

export const PricelistSection = () => {
  const [activeTab, setActiveTab] = useState("landing");

  useEffect(() => {
    const handleTabChange = (e: any) => {
      if (e.detail) setActiveTab(e.detail);
    };
    window.addEventListener("changePricelistTab", handleTabChange);
    return () => window.removeEventListener("changePricelistTab", handleTabChange);
  }, []);

  const scrollToKontak = () => {
    document.querySelector("#kontak")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricelist" className="relative py-20 bg-[#F8FAFC] overflow-hidden">
      {/* Ornaments */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header - Optimized Scale & Matched Badge */}
        <div className="text-center max-w-5xl mx-auto mb-8 px-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* Badge mengikuti gaya LayananSection: text-sm font-bold */
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full"
          >
            Pricelist
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:block text-6xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tighter md:tracking-tight leading-[0.85] md:leading-normal"
          >
            Investasi <span className="text-primary">Masa Depan.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Pilih paket yang paling pas untuk kebutuhan bisnismu.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 md:flex gap-2 p-2 bg-white/70 backdrop-blur-md border border-white rounded-[2rem] md:rounded-full w-full max-w-lg md:max-w-fit shadow-sm"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-center md:justify-start gap-2 px-4 py-3 md:px-5 md:py-2.5 rounded-2xl md:rounded-full font-bold text-xs md:text-sm transition-colors duration-300 z-10 ${
                    isActive ? "text-white" : "text-slate-500 hover:text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPricelist"
                      className="absolute inset-0 bg-primary rounded-2xl md:rounded-full -z-10 shadow-lg shadow-primary/25"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon size={16} className="shrink-0" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Pricing Cards - Compact */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {["planA", "planB"].map((planKey, idx) => {
                const isPremium = planKey === "planB";
                const features = pricingData[activeTab][planKey];

                return (
                  <motion.div
                    key={`${activeTab}-${planKey}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`w-full group relative bg-white rounded-[2rem] p-7 lg:p-9 border transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/40 flex flex-col ${
                      isPremium ? "border-primary/30" : "border-slate-100 shadow-sm"
                    }`}
                  >
                    {isPremium && (
                      <div className="absolute top-6 right-6">
                        <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase">
                          <Star size={10} fill="currentColor" /> Best Value
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-lg font-black text-slate-900 mb-1 tracking-tight">
                        {isPremium ? "Paket Premium" : "Paket Dasar"}
                      </h3>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
                          {isPremium ? "Rp1.200.000" : "Rp800.000"}
                        </span>
                      </div>
                      
                    </div>

                    <ul className="space-y-3 mb-16 flex-grow">
                      {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${isPremium ? "bg-primary/10 text-primary" : "bg-slate-50 text-slate-300"}`}>
                            <Check size={10} strokeWidth={4} />
                          </div>
                          <span className="text-slate-600 text-sm font-medium leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={scrollToKontak}
                      className={`
                        absolute bottom-6 right-6
                        ${isPremium ? "bg-primary shadow-primary/20" : "bg-slate-900 shadow-slate-900/10"} text-white
                        px-6 py-3.5 md:px-7 md:py-4 rounded-xl font-bold text-xs
                        flex items-center gap-2
                        shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)]
                        transition-all duration-300 z-20
                        hover:translate-y-[-2px] hover:translate-x-[-2px] 
                        hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,0.1)]
                        active:translate-y-[1px] active:translate-x-[1px] active:shadow-none
                      `}
                    >
                      Order <ArrowUpRight size={16} strokeWidth={3} />
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};