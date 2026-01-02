import { motion, useScroll, useSpring } from "framer-motion";
import { FileText, Building2, Plane, ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const layanan = [
  { icon: FileText, title: "Landing Page", description: "Desain satu halaman yang dioptimalkan untuk konversi tinggi dan kecepatan maksimal.", features: ["Fast Load", "CTA Optimal"], iconColor: "text-blue-500", iconBg: "bg-blue-50" },
  { icon: Building2, title: "Company Profile", description: "Bangun kredibilitas bisnis Anda dengan website profil yang elegan dan profesional.", features: ["Multi Page", "SEO Ready"], iconColor: "text-indigo-500", iconBg: "bg-indigo-50" },
  { icon: Plane, title: "Travel & Tour", description: "Sistem katalog paket wisata lengkap dengan fitur reservasi untuk pelanggan.", features: ["Booking", "Destinasi"], iconColor: "text-emerald-500", iconBg: "bg-emerald-50" },
  { icon: ShoppingCart, title: "Toko Online", description: "Kelola penjualan otomatis dengan integrasi ongkir dan manajemen stok.", features: ["E-commerce", "Auto Ongkir"], iconColor: "text-orange-500", iconBg: "bg-orange-50" },
];

export const LayananSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Fungsi untuk deteksi kartu mana yang sedang aktif di layar
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85; // Sesuaikan dengan min-w-[85%]
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="layanan" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black text-primary bg-primary/10 rounded-full case tracking-[0.2em]">
            Our Expertise
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8">
            Layanan <span className="text-primary italic">Unggulan.</span>
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            {layanan.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[85%] sm:min-w-[45%] lg:min-w-full snap-center p-8 rounded-[2.5rem] border border-slate-100 bg-[#FBFBFC] hover:bg-white transition-all duration-500 flex flex-col shadow-sm"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-8`}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 case tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>
                <div className="space-y-3 pt-8 border-t border-slate-100">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3 text-[11px] font-bold text-slate-600 case tracking-widest">
                      <CheckCircle2 size={14} className="text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* DOTS INTERAKTIF */}
          <div className="flex lg:hidden justify-center items-center gap-2.5 mt-4">
            {layanan.map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ 
                  width: activeIndex === i ? 24 : 8,
                  backgroundColor: activeIndex === i ? "#3b82f6" : "#e2e8f0" // Warna Primary vs Gray
                }}
                className="h-2 rounded-full transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#pricelist" className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-[11px] font-black case tracking-[0.2em] transition-all hover:bg-primary shadow-lg shadow-slate-200">
            Lihat Detail Harga <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};