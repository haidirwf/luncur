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
    <section id="about" className="relative py-24 lg:py-32 bg-[#FBFBFC] overflow-hidden">
      {/* Ornaments - Disamakan dengan gaya Pricelist */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Sisi Kiri: Narasi Jasa Website - Judul Tetap Kiri */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge - Match style expertise/pricelist */}
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full">
                Kenapa LuncurSite?
              </div>

              {/* Judul - Match style text-6xl font-black */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.85] md:leading-tight tracking-tighter mb-8 mt-0">
                Solusi Web <span className="text-primary">Profesional</span> Untuk Bisnis.
              </h2>

              {/* Deskripsi - Match style font-medium */}
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-md">
                Di <strong className="text-slate-900 font-extrabold">LuncurSite</strong>, kami tidak hanya membuat barisan kode. Kami membangun platform digital yang menjadi wajah profesional bisnis Anda.
              </p>

              {/* Komitmen Card - Styled more like the feature cards */}
              <div className="flex items-start gap-5 p-7 bg-white rounded-[2rem] border border-slate-100 shadow-sm border-l-4 border-l-primary">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm mb-1 tracking-tight uppercase">Komitmen Kami</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Fokus kami bukan pada kuantitas proyek, melainkan pada kualitas dan kepuasan Anda sebagai prioritas utama kami.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sisi Kanan: Keunggulan Layanan - Match Card Style LayananSection */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 md:p-10 rounded-[3rem] border border-slate-100 bg-white transition-all duration-500 group hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6 ${value.iconBg} ${value.iconColor}`}>
                    <value.icon size={28} strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-black tracking-tight mb-4 flex items-center gap-2 text-slate-900">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    {value.description}
                  </p>
                </motion.div>
              ))}
              
              {/* Kartu CTA Final - Match CTA Style */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={scrollToContact}
                className="flex flex-col justify-center items-center p-8 rounded-[3rem] border-2 border-dashed border-primary/20 bg-primary/[0.02] group hover:border-primary/50 hover:bg-primary/[0.05] transition-all cursor-pointer min-h-[250px] active:scale-[0.98]"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all mb-4">
                  <ArrowUpRight size={32} strokeWidth={2.5} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-primary mb-1">Siap Go Digital?</p>
                  <p className="text-slate-900 font-black text-xl tracking-tight">Mulai Konsultasi Gratis</p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};