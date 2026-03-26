import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5581985290635?text=Olá! Gostaria de saber mais sobre os serviços da Dinfratech.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
      aria-label="Iniciar conversa no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
