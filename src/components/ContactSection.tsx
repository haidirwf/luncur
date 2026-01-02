import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

const contactData = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    val: "0812-3456-7890",
    link: "https://wa.me/6281234567890",
    theme: "hover:border-emerald-500/30",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
  },
  {
    icon: Mail,
    label: "Email",
    val: "hello@luncur.site",
    link: "mailto:hello@luncur.site",
    theme: "hover:border-blue-500/30",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    icon: MapPin,
    label: "Location",
    val: "Jakarta, Indonesia",
    link: null,
    theme: "hover:border-slate-500/30",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-50",
  },
  {
    icon: Clock,
    label: "Working Hours",
    val: "09:00 - 18:00 WIB",
    link: null,
    theme: "hover:border-amber-500/30",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
  },
];

export const ContactSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollPosition / cardWidth);
      setActiveDot(index);
    }
  };

  return (
    <section id="kontak" className="py-24 bg-white overflow-hidden">
      <div className="container px-6 mx-auto">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end mb-16 md:mb-20">
          <div className="lg:w-1/2 w-full">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-6 text-[10px] font-black text-primary bg-primary/10 rounded-full case tracking-[0.2em]"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              Siap Mulai <br />
              <span className="text-primary italic px-1">Proyekmu?</span>
            </motion.h2>
          </div>
          <div className="lg:w-1/2 w-full">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 text-base md:text-lg leading-relaxed max-w-sm"
            >
              Pilih jalur komunikasi yang paling nyaman untukmu. Tim kami siap merespon ide besarmu.
            </motion.p>
          </div>
        </div>

        {/* Carousel Info Cards */}
        <div className="relative group mb-12">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            {contactData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`min-w-[85%] sm:min-w-[45%] lg:min-w-full snap-center group/card p-8 rounded-[2.5rem] border border-slate-100 bg-[#FBFBFC] transition-all duration-500 ${item.theme} hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between min-h-[200px]`}
              >
                <div className="flex justify-between items-start">
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-transform duration-500 group-hover/card:scale-110 shadow-sm`}>
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  {item.link && <ExternalLink size={16} className="text-slate-300 opacity-0 group-hover/card:opacity-100 transition-opacity" />}
                </div>

                <div>
                  <span className="text-[10px] font-black case tracking-[0.2em] text-slate-400 mb-2 block">
                    {item.label}
                  </span>
                  {item.link ? (
                    <a href={item.link} className="text-lg md:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 group/link">
                      {item.val}
                      <ArrowRight size={18} className="-rotate-45 group-hover/link:rotate-0 transition-transform text-primary" />
                    </a>
                  ) : (
                    <span className="text-lg md:text-xl font-black text-slate-900 tracking-tight">{item.val}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Smart Dots */}
          <div className="flex lg:hidden justify-center items-center gap-2 mt-2">
            {contactData.map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ 
                  width: activeDot === i ? 20 : 6,
                  backgroundColor: activeDot === i ? "#3b82f6" : "#e2e8f0" 
                }}
                className="h-1.5 rounded-full transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* Compact & Sleek WhatsApp CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group border border-slate-800"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <MessageCircle size={22} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Butuh respon kilat?</h3>
              <p className="text-slate-400 text-xs md:text-sm">Chat via WhatsApp, respon tim kami kurang dari 15 menit.</p>
            </div>
          </div>

          <a 
            href="https://wa.me/6281234567890" 
            className="relative z-10 w-full md:w-auto px-10 py-4 bg-primary text-white text-[10px] font-black case tracking-[0.2em] rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95"
          >
            Hubungi Sekarang <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};