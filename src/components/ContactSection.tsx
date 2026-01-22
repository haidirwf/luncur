import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const mainContacts = [
  {
    icon: MessageCircle,
    label: "Available Now",
    title: "WhatsApp",
    val: "0821-7366-2010",
    link: "https://wa.me/6282173662010?text=Halo%20Luncur%20Studio",
    cta: "Chat Personal",
    themeColor: "bg-primary", // Menggunakan variabel primary
  },
  {
    icon: Mail,
    label: "Official Mail",
    title: "Email",
    val: "raufidnn@gmail.com",
    link: "mailto:raufidnn@gmail.com",
    cta: "Send Inquiry",
    themeColor: "bg-blue-600",
  },
];

export const ContactSection = () => {
  return (
    <section id="kontak" className="py-24 bg-white overflow-hidden">
      <div className="container px-6 mx-auto relative">
        {/* Ornaments - Konsisten dengan section lain */}
        <div className="absolute top-0 -right-20 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        {/* ================= HEADER - Sesuai Gaya AboutSection (Judul Kiri) ================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end mb-16 md:mb-20">
          <div className="lg:w-1/2 w-full">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.85] md:leading-tight tracking-tighter">
              Siap Mulai <br />
              <span className="text-primary">Proyekmu?</span>
            </h2>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-sm">
              Pilih jalur komunikasi yang paling nyaman untukmu. Kami siap merespon ide besarmu.
            </p>
          </div>
        </div>

        {/* ================= BENTO CARDS - Sesuai Gaya LayananSection ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainContacts.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col justify-between p-10 md:p-12 min-h-[320px] rounded-[3rem] bg-[#FBFBFC] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:bg-white"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${item.themeColor}`} />
                  <span className="text-xs font-black tracking-widest uppercase text-slate-400">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-slate-500 tracking-tight">{item.val}</p>
              </div>

              {/* EDGY FLOATING BUTTON - Match style tombol pricelist */}
              <div
                className={`
                  absolute -bottom-2 -right-2
                  ${item.themeColor} text-white
                  px-7 py-4 rounded-2xl font-bold text-sm
                  flex items-center gap-2
                  shadow-[6px_6px_0px_0px_rgba(15,23,42,0.1)]
                  -rotate-2
                  md:opacity-0 md:translate-y-4 md:rotate-6
                  md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:-rotate-2
                  transition-all duration-500 z-20
                `}
              >
                {item.cta} <ArrowUpRight size={18} strokeWidth={3} />
              </div>

              {/* Ghost Icon - Lebih subtle */}
              <item.icon className="absolute top-10 right-10 text-slate-100 group-hover:text-slate-200 transition-colors" size={100} strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>

        {/* ================= CTA BESAR - Sesuai Gaya Card Utama ================= */}
        <motion.a
          href="https://wa.me/6282173662010"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block bg-slate-900 rounded-[3rem] p-10 md:p-14 border border-slate-800 cursor-pointer group relative overflow-hidden shadow-2xl shadow-slate-900/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 rounded-[1.5rem] bg-primary flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
                <MessageCircle size={36} fill="white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                  Butuh respon kilat?
                </h3>
                <p className="text-slate-400 text-lg font-medium">
                  Konsultasikan gratis via WhatsApp sekarang juga.
                </p>
              </div>
            </div>

            <div className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl flex items-center gap-2 transition-all group-hover:scale-105 group-hover:bg-primary group-hover:text-white shadow-xl">
              Hubungi Sekarang <ArrowUpRight size={20} strokeWidth={3} />
            </div>
          </div>
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </motion.a>
      </div>
    </section>
  );
};