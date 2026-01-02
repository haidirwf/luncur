import { motion } from "framer-motion";
import { Target, Heart, Users, ArrowUpRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Fokus pada Hasil",
    description: "Kami tidak hanya membuat website, tapi memastikan website tersebut menjadi mesin pertumbuhan bisnis kamu.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Heart,
    title: "Passion & Dedikasi",
    description: "Setiap baris kode dikerjakan dengan penuh dedikasi dan perhatian terhadap detail estetik.",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Users,
    title: "Komunikasi Terbuka",
    description: "Proses transparan dengan update berkala. Kami adalah partner, bukan sekadar vendor.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-40 bg-white overflow-hidden">
      {/* Dekorasi Background Minimalis */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Sisi Kiri: Narasi & Statistik */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Tentang Kami
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                Membangun Jejak <br />
                <span className="text-primary italic">Digital yang Berdampak.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
                <p>
                  <strong className="text-slate-900 font-bold">WebIndie</strong> lahir dari visi untuk mendemokrasi teknologi bagi UMKM. Kami percaya kualitas premium tidak harus selalu mahal.
                </p>
                <p className="text-base md:text-lg">
                  Kami mengkombinasikan strategi bisnis dengan desain indie yang unik untuk menciptakan website yang tidak hanya cantik dilihat, tapi juga fungsional dan kredibel di mata pelanggan.
                </p>
              </div>

              {/* Stats yang Dipercantik */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-12 border-t border-slate-100">
                {[
                  { label: "Projects", val: "50+" },
                  { label: "Clients", val: "40+" },
                  { label: "Exp", val: "2th" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl md:text-4xl font-black text-slate-900">{stat.val}</div>
                    <p className="text-slate-400 text-xs md:text-sm font-medium tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sisi Kanan: Value Cards dengan Layout Zig-zag */}
          <div className="relative">
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex gap-6 items-start">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${value.color} transition-transform group-hover:scale-110 duration-300`}>
                      <value.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        {value.title}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Elemen Dekoratif di belakang kartu */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
};