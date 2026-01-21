import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const portfolios = [
  {
    title: "Urban Architecture",
    desc: "Transformasi digital untuk firma arsitektur dengan fokus pada visual portfolio yang imersif.",
    category: "Corporate Site",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  },
  {
    title: "Eco-Harvest Market",
    desc: "Sistem e-commerce terintegrasi untuk distribusi produk organik lokal secara langsung ke konsumen.",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    link: "#"
  },
];

export const PortfolioSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev === portfolios.length - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? portfolios.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container px-6 mx-auto">
        
        {/* Header - Simple & Strong */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
              Our <span className="text-primary">Work.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">
              Project pilihan yang kami kerjakan dengan sepenuh hati.
            </p>
          </div>
          
          {/* Controls - Same style as Pricelist */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="p-4 rounded-xl bg-white border border-slate-200 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.05)] hover:bg-slate-50 transition-all active:translate-y-[2px]"
            >
              <ArrowLeft size={20} strokeWidth={3} />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-xl bg-slate-900 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,0.2)] hover:bg-primary transition-all active:translate-y-[2px]"
            >
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Portfolio Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-8"
            >
              {/* Image Card */}
              <div className="group relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
                <img
                  src={portfolios[index].image}
                  alt={portfolios[index].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info Below Image */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                      {portfolios[index].category}
                    </span>
                    <span className="text-slate-300 text-xs font-bold">0{index + 1} / 0{portfolios.length}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                    {portfolios[index].title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    {portfolios[index].desc}
                  </p>
                </div>

                <a
                  href={portfolios[index].link}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-all hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-[1px]"
                >
                  Lihat Website <ArrowUpRight size={20} strokeWidth={3} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};