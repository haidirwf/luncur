import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* Background Decor - Tetap Sama */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="section-container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge - Lebih Menjual */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-medium mb-10 animate-fade-in backdrop-blur-sm">
            <Sparkles size={14} className="animate-pulse" />
            <span>Partner Digital Transformasi Terbaik</span>
          </div>

          {/* Headline - Fokus ke Solusi Bisnis */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 animate-slide-up">
            Website Keren <br />
            <span className="relative">
              <span className="relative z-10 text-gradient">Bikin Jualan</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
            {" "}Laris.
          </h1>

          {/* Subheadline - Menekankan Kualitas & Kecepatan */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up [animation-delay:200ms] leading-relaxed">
            Stop pakai website lama yang lemot dan membosankan. Kami bangun website 
            <strong> Premium, Cepat, dan High-Convert</strong> untuk melejitkan kredibilitas bisnismu sekarang.
          </p>

          {/* Action Hub - Lebih Urgent */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up [animation-delay:400ms]">
            <Button
              size="lg"
              onClick={() => scrollTo("#pricelist")}
              className="h-14 px-8 text-lg rounded-full group bg-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300"
            >
              Order Website
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("#kontak")}
              className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50 transition-all"
            >
              Tanya Harga
            </Button>
          </div>

          {/* Feature Micro-copy - Point Penting Jasa Web */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground animate-fade-in [animation-delay:600ms]">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary" /> Terima Beres (Hosting & Domain)</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary" /> Pengerjaan 2-5 Hari</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary" /> Support Selamanya</span>
          </div>

          {/* Social Proof - Nama Brand Contoh */}
          <div className="mt-24 pt-12 border-t border-border/50 animate-fade-in [animation-delay:800ms]">
            <p className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground/60 mb-10">Telah Dipercaya Oleh Berbagai Industri</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
              <span className="text-2xl font-black tracking-tighter">TRAVELKU</span>
              <span className="text-2xl font-black tracking-tighter">TOKOMAJU</span>
              <span className="text-2xl font-black tracking-tighter">KLINIKSEHAT</span>
              <span className="text-2xl font-black tracking-tighter">CAFEKOPI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};