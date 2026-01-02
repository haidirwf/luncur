import { motion } from "framer-motion";
import { FileText, Building2, Plane, ShoppingCart, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

const layanan = [
  { id: "landing", icon: FileText, title: "Landing Page", description: "Desain satu halaman yang dioptimalkan untuk konversi tinggi dan kecepatan maksimal.", features: ["Fast Load", "CTA Optimal"], iconColor: "text-blue-500", iconBg: "bg-blue-50" },
  { id: "company", icon: Building2, title: "Company Profile", description: "Bangun kredibilitas bisnis Anda dengan website profil yang elegan dan profesional.", features: ["Multi Page", "SEO Ready"], iconColor: "text-indigo-500", iconBg: "bg-indigo-50" },
  { id: "travel", icon: Plane, title: "Travel & Tour", description: "Sistem katalog paket wisata lengkap dengan fitur reservasi untuk pelanggan.", features: ["Booking", "Destinasi"], iconColor: "text-emerald-500", iconBg: "bg-emerald-50" },
  { id: "toko", icon: ShoppingCart, title: "Toko Online", description: "Kelola penjualan otomatis dengan integrasi ongkir dan manajemen stok.", features: ["E-commerce", "Auto Ongkir"], iconColor: "text-orange-500", iconBg: "bg-orange-50" },
];

export const LayananSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      setActiveIndex(Math.round(scrollPosition / cardWidth));
    }
  };

  const goToPricelist = (id: string) => {
    // Kirim event untuk ubah tab di Pricelist
    const event = new CustomEvent("changePricelistTab", { detail: id });
    window.dispatchEvent(event);
    
    // Scroll ke section pricelist
    document.querySelector("#pricelist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="layanan" className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Pilihan <span className="text-primary italic">Layanan.</span>
          </h2>
        </div>

        <div className="relative">
          <div ref={scrollRef} onScroll={handleScroll} className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-14 snap-x snap-mandatory hide-scrollbar scroll-smooth">
            {layanan.map((item, index) => (
              <div key={index} className="min-w-[85%] sm:min-w-[45%] lg:min-w-full snap-center relative p-8 md:p-10 rounded-[3rem] border border-slate-100 bg-[#FBFBFC] hover:bg-white transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-slate-200/50">
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-8`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">{item.description}</p>
                <div className="space-y-3 pt-6 mb-12 border-t border-slate-100">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-[12px] font-bold text-slate-400">
                      <CheckCircle2 size={14} className="text-primary" /> {f}
                    </div>
                  ))}
                </div>
                <button onClick={() => goToPricelist(item.id)} className="absolute bottom-8 right-8 bg-slate-900 text-white px-7 py-4 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-[6px_6px_0px_0px_rgba(15,23,42,0.1)] hover:bg-primary transition-all active:translate-y-[2px] active:shadow-none">
                  Cek Harga <ArrowUpRight size={18} strokeWidth={3} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden justify-center gap-2 mt-2">
            {layanan.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${activeIndex === i ? "w-6 bg-primary" : "w-1.5 bg-slate-200"}`} />
            ))}
          </div>
        </div>
      </div>
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};