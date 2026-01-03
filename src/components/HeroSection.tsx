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
    >
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Menambahkan md:pt-40 untuk memberi ruang lebih di desktop agar tidak kena navbar */}
      <div className="section-container relative z-10 px-4 pt-32 pb-20 md:pt-40">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-bold mb-12 md:mb-10 animate-fade-in backdrop-blur-sm">
            <Sparkles size={14} className="animate-pulse" />
            <span>Partner Digital Transformasi Terbaik</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 animate-slide-up">
            Website Keren <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Bikin Jualan</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
            {" "}Laris.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-16 animate-slide-up [animation-delay:200ms] leading-relaxed font-medium">
            Stop pakai website lama yang lemot dan membosankan. Kami bangun website 
            <strong className="text-slate-900 font-black"> Premium, Cepat, dan High-Convert</strong> untuk melejitkan kredibilitas bisnismu sekarang.
          </p>

          {/* Action Hub */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-slide-up [animation-delay:400ms]">
            <button
              onClick={() => scrollTo("#pricelist")}
              className="relative w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] transition-all hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,0.1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none"
            >
              Order Website <ArrowUpRight size={22} strokeWidth={3} />
            </button>
            
            <button
              onClick={() => scrollTo("#kontak")}
              className="relative w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-[8px_8px_0px_0px_rgba(15,23,42,0.1)] transition-all hover:translate-y-[-2px] hover:translate-x-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,0.1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none"
            >
              Tanya Harga <ArrowRight size={22} strokeWidth={3} />
            </button>
          </div>

          {/* Feature Micro-copy */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400 animate-fade-in [animation-delay:600ms]">
            <span className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-primary" /> Terima Beres</span>
            <span className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-primary" /> 1-3 Hari Beres</span>
            <span className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="text-primary" /> Support Selamanya</span>
          </div>

          {/* Bagian Social Proof (Telah Dipercaya Oleh) sudah dihapus */}
        </div>
      </div>
    </section>
  );
};