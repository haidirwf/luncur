import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

interface Project {
  title: string;
  category: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Lumina Travel",
    category: "Travel & Tour Website",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
    year: "2024"
  },
  {
    title: "EcoStore Indonesia",
    category: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    year: "2023"
  },
  {
    title: "Artha Law Firm",
    category: "Corporate Profile",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    year: "2024"
  }
];

export const PortfolioSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85; 
      const index = Math.round(scrollPosition / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-[#FDFDFD] overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black text-primary bg-primary/10 rounded-full case tracking-[0.2em]"
            >
              Selected Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight"
            >
              Karya Yang Kami <span className="text-primary italic">Banggakan.</span>
            </motion.h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[11px] font-black case tracking-widest text-slate-400 hover:text-primary transition-all group">
            Lihat Semua Arsip <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[85%] sm:min-w-[48%] lg:min-w-full snap-center group/card"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-slate-100 mb-8 border border-slate-50 shadow-sm transition-all duration-500 group-hover/card:shadow-xl group-hover/card:shadow-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-2xl translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                      <ExternalLink size={20} strokeWidth={2.5} />
                    </div>
                  </div>
                  {/* Year Tag */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-slate-900 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black case tracking-[0.2em] text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight transition-colors group-hover/card:text-primary">
                    {project.title}
                  </h3>
                  <div className="w-10 h-1 bg-slate-100 rounded-full transition-all duration-500 group-hover/card:w-20 group-hover/card:bg-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* SMART DOTS INTERAKTIF */}
          <div className="flex lg:hidden justify-center items-center gap-2.5 mt-4">
            {projects.map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ 
                  width: activeIndex === i ? 24 : 8,
                  backgroundColor: activeIndex === i ? "#3b82f6" : "#e2e8f0" 
                }}
                className="h-2 rounded-full transition-colors duration-300"
              />
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};