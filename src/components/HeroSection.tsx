import { ArrowRight, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background font-sans"
      aria-label="Hero section - Jasa pembuatan website profesional"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[5%] -right-[25%] md:-top-[10%] md:-right-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/10 rounded-full blur-[80px] md:blur-[140px] animate-pulse" />
        <div className="absolute top-[15%] -left-[25%] md:top-[25%] md:-left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/5 md:bg-emerald-500/10 rounded-full blur-[70px] md:blur-[120px] animate-float-slow" />
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)]" aria-hidden="true" />

      <div className="section-container relative z-10 px-4 pt-32 pb-20 md:pt-40">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Headline - H1 untuk SEO */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 animate-slide-up">
            Website Keren <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Bikin Jualan</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
            {" "}Laris.
          </h1>

          {/* Subheadline - Value proposition */}
          <p className="text-[17px] md:text-xl text-slate-500 max-w-2xl mx-auto mb-16 animate-slide-up [animation-delay:200ms] leading-relaxed font-medium">
            Stop pakai website lama yang lemot dan membosankan. Kami bangun website 
            <strong className="text-slate-900 font-black"> Premium, Cepat, dan High-Convert</strong> untuk melejitkan kredibilitas bisnismu sekarang.
          </p>

          {/* Action Hub - Improved Hierarchy */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-slide-up [animation-delay:400ms]">
            {/* Primary CTA */}
            <button
              onClick={() => scrollTo("#pricelist")}
              className="relative w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-[8px_8px_0px_0px_rgba(59,130,246,0.2)] transition-all hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,0.2)] active:translate-y-[2px] active:shadow-none"
              aria-label="Lihat daftar harga pembuatan website"
            >
              Order Website <ArrowUpRight size={22} strokeWidth={3} aria-hidden="true" />
            </button>
            
            {/* Secondary CTA (Ghost Style) */}
            <button
              onClick={() => scrollTo("#kontak")}
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-700 border border-slate-300 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
              aria-label="Hubungi kami untuk konsultasi gratis"
            >
              Tanya Harga <ArrowRight size={22} strokeWidth={3} aria-hidden="true" />
            </button>
          </div>

          {/* Feature Micro-copy - 4 Items Sejajar */}
          <div className="mt-20 max-w-4xl mx-auto px-4">
            <ul className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-y-6 lg:gap-x-0 text-[11px] md:text-sm text-slate-400 font-bold uppercase tracking-wider animate-fade-in [animation-delay:600ms]" role="list">
              
              <li className="flex items-center justify-center gap-2 lg:px-8">
                <CheckCircle2 size={18} className="text-primary shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Terima Beres</span>
              </li>
              
              <li className="flex items-center justify-center gap-2 lg:px-8 lg:border-l border-slate-200">
                <CheckCircle2 size={18} className="text-primary shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">7 Hari Jadi</span>
              </li>
              
              <li className="flex items-center justify-center gap-2 lg:px-8 lg:border-l border-slate-200">
                <CheckCircle2 size={18} className="text-primary shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Bebas Request</span>
              </li>
              
              <li className="flex items-center justify-center gap-2 lg:px-8 lg:border-l border-slate-200">
                <CheckCircle2 size={18} className="text-primary shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Free Konsultasi</span>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};