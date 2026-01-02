import { motion } from "framer-motion";
import { Zap, Palette, Search, Shield, ArrowUpRight } from "lucide-react";

const keunggulan = [
  { 
    icon: Zap, 
    title: "Pengerjaan Cepat", 
    desc: "Website siap dalam hitungan hari tanpa mengorbankan standar kualitas industri.",
    accent: "from-amber-400 to-orange-600"
  },
  { 
    icon: Palette, 
    title: "Desain Modern", 
    desc: "Visual eksklusif yang dirancang khusus untuk memperkuat identitas brand Anda.",
    accent: "from-pink-500 to-rose-600" 
  },
  { 
    icon: Search, 
    title: "SEO Ready", 
    desc: "Struktur website yang dioptimalkan agar mudah ditemukan oleh calon pelanggan.",
    accent: "from-blue-500 to-indigo-600" 
  },
  { 
    icon: Shield, 
    title: "Aman & Stabil", 
    desc: "Keamanan SSL tingkat tinggi dan hosting stabil untuk operasional bisnis 24/7.",
    accent: "from-emerald-500 to-teal-600" 
  },
];

export const KeunggulanSection = () => {
  return (
    <section id="keunggulan" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Decor - Abstract Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] mb-6 shadow-xl"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]"
          >
            Standar Baru <br />
            <span className="text-primary italic">Kualitas Digital.</span>
          </motion.h2>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {keunggulan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                
                {/* Accent Line on Top */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                {/* Icon with Dynamic Background */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:rotate-[10deg] transition-transform duration-500 border border-slate-100">
                  <item.icon size={28} className="text-slate-900 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  
                  {/* Floating Micro Icon */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight size={12} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[15px]">
                    {item.desc}
                  </p>
                </div>

                {/* Big Decorative Number */}
                <div className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-900/[0.03] group-hover:text-primary/[0.05] transition-colors pointer-events-none italic">
                  {index + 1}
                </div>
              </div>

              {/* Bottom Glow Effect on Hover */}
              <div className="absolute -bottom-2 inset-x-8 h-8 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Simple Footer Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 p-1 pr-6 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm font-medium">
            <span className="bg-white px-3 py-1 rounded-full shadow-sm text-primary font-bold">New</span>
            Dapatkan audit SEO gratis untuk setiap paket Premium.
          </div>
        </motion.div>
      </div>
    </section>
  );
};