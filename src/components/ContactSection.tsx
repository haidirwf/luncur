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
    themeColor: "bg-emerald-500",
  },
  {
    icon: Mail,
    label: "Official Mail",
    title: "Email",
    val: "hello@luncur.site",
    link: "mailto:hello@luncur.site",
    cta: "Send Inquiry",
    themeColor: "bg-blue-600",
  },
];

export const ContactSection = () => {
  return (
    <section id="kontak" className="py-24 bg-white overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end mb-16 md:mb-20">
          <div className="lg:w-1/2 w-full">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-6 text-sm font-bold text-emerald-600 bg-emerald-50 rounded-full tracking-tight"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Siap Mulai <br />
              <span className="text-emerald-500 italic px-1">Proyekmu?</span>
            </h2>
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-sm font-medium">
              Pilih jalur komunikasi yang paling nyaman untukmu. Tim kami siap
              merespon ide besarmu.
            </p>
          </div>
        </div>

        {/* ================= BENTO CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
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
              className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[300px] rounded-[3rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-2 rounded-full ${item.themeColor}`} />
                  <span className="text-sm font-bold text-slate-400">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-slate-500">{item.val}</p>
              </div>

              {/* EDGY FLOATING BUTTON */}
              {/* Mobile: Langsung muncul | Desktop: Muncul pas hover */}
              <div
                className={`
                  absolute -bottom-3 -right-2 md:-bottom-4 md:-right-4
                  ${item.themeColor} text-white
                  px-6 py-4 md:px-8 md:py-5 rounded-2xl font-bold text-sm
                  flex items-center gap-2
                  shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)]
                  -rotate-3
                  md:opacity-0 md:scale-75 md:rotate-12
                  md:group-hover:opacity-100 md:group-hover:scale-100 md:group-hover:-rotate-3
                  transition-all duration-500 z-20
                `}
              >
                {item.cta} <ArrowUpRight size={18} strokeWidth={3} />
              </div>

              {/* Ghost Icon */}
              <item.icon className="absolute top-8 right-8 text-slate-200/40" size={80} strokeWidth={1} />
            </motion.a>
          ))}
        </div>

        {/* ================= CTA BESAR ================= */}
        <motion.a
          href="https://wa.me/6282173662010"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 cursor-pointer group relative overflow-hidden shadow-2xl shadow-slate-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  Butuh respon kilat?
                </h3>
                <p className="text-slate-400 font-medium">
                  Konsultasikan gratis via WhatsApp sekarang.
                </p>
              </div>
            </div>

            <div className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-2 transition-transform group-hover:scale-105">
              Hubungi Sekarang <ArrowUpRight size={18} strokeWidth={3} />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};