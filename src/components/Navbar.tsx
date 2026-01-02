import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portfolio", label: "Portfolio" },
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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "pt-4 md:pt-6" : "pt-6 md:pt-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`mx-auto max-w-6xl transition-all duration-500 rounded-[2rem] border ${
            isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.08)] py-3 px-6" 
            : "bg-transparent border-transparent py-4 px-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo Area - Ukuran dikecilkan ke w-8 h-8 */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
              className="group flex items-center gap-2.5"
            >
              <div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                <img 
                  src="/logo.svg" 
                  alt="LuncurSite Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-black text-lg tracking-tighter text-slate-900">
                luncur<span className="text-primary">site</span>
              </span> 
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center bg-slate-100/50 p-1 rounded-2xl border border-slate-200/20">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-5 py-2 text-[10px] font-black tracking-[0.2em] transition-all rounded-xl ${
                    activeSection === link.href.substring(1)
                      ? "bg-white text-primary shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavClick("#kontak")}
                className="rounded-xl bg-slate-900 hover:bg-primary text-white font-black text-[10px] tracking-widest px-6 py-5 transition-all shadow-lg hover:shadow-primary/20"
              >
                Let's Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl text-slate-900 active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[90%] left-4 right-4 mt-2 p-6 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-100 shadow-2xl z-[101]"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[10px] font-black tracking-widest transition-all ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary/10 text-primary"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                  <ArrowRight size={16} className={activeSection === link.href.substring(1) ? "opacity-100" : "opacity-0"} />
                </a>
              ))}
              <Button
                className="mt-4 w-full h-14 rounded-2xl bg-slate-900 text-[10px] font-black tracking-widest"
                onClick={() => handleNavClick("#kontak")}
              >
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};