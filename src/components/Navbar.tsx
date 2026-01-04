import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#pricelist", label: "Pricelist" },
  { href: "#kontak", label: "Kontak" },
];

export const Navbar = () => { 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "pt-4" : "pt-6 md:pt-8"}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          layout
          className={`mx-auto max-w-6xl transition-all duration-500 rounded-[2rem] border ${
            isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.08)] py-3 px-6" 
            : "bg-transparent border-transparent py-4 px-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="group flex items-center gap-2"
            >
              <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:rotate-12">
                <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-xl tracking-tighter text-slate-900">
                luncur<span className="text-primary">site</span>
              </span> 
            </motion.a>

            {/* Desktop Navigation - Sliding Pill Animation */}
            <div className="hidden lg:flex items-center bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/20">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-5 py-2 text-sm font-bold transition-colors duration-300 z-10 ${
                      isActive ? "text-primary" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navActivePill"
                        className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ y: -2, x: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick("#kontak")}
                className="bg-slate-900 text-white px-7 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,0.1)] hover:bg-primary"
              >
                Let's Talk <ArrowUpRight size={16} strokeWidth={3} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay - Staggered Slide-In Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="lg:hidden absolute top-[100%] left-4 right-4 mt-2 p-6 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-100 shadow-2xl z-[101]"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-slate-50 text-slate-500"
                  }`}
                >
                  {link.label}
                  <ArrowUpRight size={18} className={activeSection === link.href.substring(1) ? "opacity-100" : "opacity-30"} />
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 w-full h-14 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-[4px_4px_0px_0px_rgba(15,23,42,0.1)] active:translate-y-[1px] active:shadow-none"
                onClick={() => handleNavClick("#kontak")}
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};