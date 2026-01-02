import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan pembuatan website. Mohon info lebih lanjut."
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white hover:scale-110 active:scale-100 transition-transform duration-300"
      style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} className="fill-white" />
    </button>
  );
};
