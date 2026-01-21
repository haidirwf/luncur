import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { useRef, useState } from "react";

const portfolios = [
  {
    id: 1,
    title: "EcoStay Resort",
    category: "Travel & Tour",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
    link: "#",
  },
  {
    id: 2,
    title: "Urban Store",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    link: "#",
  },
  {
    id: 3,
    title: "Architech Studio",
    category: "Company Profile",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
    link: "#",
  },
];

export const PortfolioSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.8;
      setActiveIndex(Math.round(scrollPosition / cardWidth));
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12 px-2">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4"
          >
            Project <span className="text-primary">Kami.</span>
          </motion.h2>
          <p className="text-slate-500 font-medium">Hasil kerja nyata untuk klien kami.</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div 
            ref={scrollRef} 
            onScroll={handleScroll} 
            className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar px-2"
          >
            {portfolios.map((item, index) => (
              <div key={index} className="min-w-[85%] sm:min-w-[48%] lg:min-w-full snap-center group">
                {/* Image Wrap */}
                <div className="relative aspect-video mb-6 overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info & Button */}
                <div className="flex items-end justify-between px-2">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 text-white hover:bg-primary transition-colors shadow-lg shadow-slate-200"
                  >
                    <ArrowUpRight size={22} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
            
          {/* Indicators */}
          <div className="flex lg:hidden justify-center gap-2 mt-4">
            {portfolios.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all ${activeIndex === i ? "w-8 bg-primary" : "w-2 bg-slate-200"}`} 
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};