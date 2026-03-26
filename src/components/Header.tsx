import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL = "https://wa.me/5581985290635?text=Olá! Gostaria de saber mais sobre os serviços da Dinfratech.";
const PHONE_URL = "tel:+5581985290635";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between" aria-label="Navegação principal">
        <a href="/" className="flex items-center gap-2" aria-label="Dinfratech - Página inicial">
          <img
            src="/lovable-uploads/d687b268-6d79-406e-9063-cf4e0c9dab8a.png"
            alt="Dinfratech - Soluções em Tecnologia"
            width={40}
            height={40}
            className="w-10 h-10"
            loading="eager"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={PHONE_URL}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:border-primary/50 transition-colors"
            aria-label="Ligar para Dinfratech"
          >
            <Phone className="w-4 h-4" />
            Ligar
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            aria-label="Fale conosco pelo WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <a
                href={PHONE_URL}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border border-border rounded-lg"
              >
                <Phone className="w-4 h-4" />
                Ligar
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
