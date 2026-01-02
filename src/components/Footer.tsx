import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#layanan", label: "Layanan" },
  { href: "#pricelist", label: "Pricelist" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#kontak", label: "Kontak" },
];

export const Footer = () => {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
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
    <footer className="relative pb-12 pt-24 overflow-hidden bg-[#FDFDFD]">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Logo Section - Capsule Style */}
          <div className="mb-12">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-14 h-14 rounded-[2rem] bg-slate-900 flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] shadow-xl shadow-slate-200">
                <span className="text-white font-black text-2xl italic">W</span>
              </div>
              <span className="font-black text-2xl tracking-tighter text-slate-900 case">
                Luncur<span className="text-primary italic">Site</span>
              </span>
            </a>
          </div>

          {/* Navigation - Pill Style */}
          <nav className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-slate-50 border border-slate-100 rounded-full">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-6 py-2.5 text-[11px] font-black case tracking-widest text-slate-500 hover:text-primary transition-all duration-300 rounded-full hover:bg-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider & Copyright */}
          <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-6">
            <p className="text-[11px] font-bold text-slate-400 case tracking-[0.2em]">
              © {new Date().getFullYear()} LuncurSite — Crafted with Passion
            </p>
            
            {/* Back to Top Button */}
            <button
              onClick={() => handleNavClick("#hero")}
              className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-100 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span className="text-[10px] font-black case tracking-widest text-slate-900">Back to Top</span>
              <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={12} strokeWidth={3} />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};