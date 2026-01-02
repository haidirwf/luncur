import { motion } from "framer-motion";
import { Target, Zap, Users, ArrowUpRight, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "High Converting Design",
    description: "Kami merancang setiap elemen website untuk mengubah pengunjung menjadi pelanggan setia bisnis Anda.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    icon: Zap,
    title: "Performa & SEO Optimal",
    description: "Website super cepat dengan optimasi SEO agar bisnis Anda mudah ditemukan di Google dan nyaman diakses dari HP.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Dukungan & Konsultasi",
    description: "Kami adalah partner digital Anda. Gratis konsultasi strategis agar website benar-benar memberikan manfaat nyata.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
];

export const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontak');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="layanan" className="relative py-24 lg:py-32 bg-[#FBFBFC] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-96 h-96 bg-blue-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Sisi Kiri: Narasi Jasa Website */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Kenapa LuncurSite?</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-8">
                Solusi Web <br />
                <span className="text-primary italic">Profesional</span> <br />
                Untuk Bisnis.
              </h2>

              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
                Di <strong className="text-slate-900 font-extrabold">LuncurSite</strong>, kami tidak hanya membuat barisan kode. Kami membangun platform digital yang menjadi wajah profesional bisnis Anda di mata dunia.
              </p>

              {/* Komitmen Pengganti Bento Stats */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm border-l-4 border-l-primary">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Komitmen Kami</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Fokus kami bukan pada kuantitas proyek, melainkan pada kualitas dan kepuasan Anda sebagai klien pertama kami.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sisi Kanan: Keunggulan Layanan */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-500 group hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6 ${value.iconBg} ${value.iconColor}`}>
                    <value.icon size={28} strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-black tracking-tight mb-4 flex items-center gap-2 text-slate-900">
                    {value.title}
                    <ArrowUpRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              ))}
              
              {/* Kartu CTA Final */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={scrollToContact}
                className="flex flex-col justify-center items-center p-8 rounded-[2.5rem] border-2 border-dashed border-primary/20 bg-primary/[0.02] group hover:border-primary/50 hover:bg-primary/[0.05] transition-all cursor-pointer min-h-[220px] active:scale-[0.98]"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all mb-4">
                  <ArrowUpRight size={26} strokeWidth={2.5} />
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-1">Siap Go Digital?</p>
                  <p className="text-slate-900 font-black text-lg tracking-tight">Mulai Konsultasi Gratis</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};