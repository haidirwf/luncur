import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    // Mencari elemen dengan id "kontak"
    const contactSection = document.getElementById("kontak");
    
    if (contactSection) {
      // Melakukan scroll halus ke arah section kontak
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: Jika section tidak ketemu, baru buka WA langsung
      const message = encodeURIComponent(
        "Halo Luncur Studio, saya ingin nanya mengenai layanan websitenya."
      );
      window.open(`https://wa.me/6282173662010?text=${message}`, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-subtle"
      style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)" }}
      aria-label="Ke Kontak Kami"
    >
      <MessageCircle size={28} className="fill-white" />
      
      {/* Ping effect agar lebih menarik perhatian */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </button>
  );
};