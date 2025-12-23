import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+91 70954 16630";
  const message = "Hello! I'm interested in your event management services.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-background p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </button>
  );
};

export default WhatsAppButton;
