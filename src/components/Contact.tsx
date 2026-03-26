import { MapPin, Clock, Headphones, Phone, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5581985290635?text=Olá! Gostaria de solicitar um orçamento.";

const contactInfo = [
  {
    icon: MapPin,
    title: "Localização",
    lines: ["Dois Unidos, Recife - PE", "Atendimento em toda região"],
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    lines: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h", "Emergências: 24/7"],
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    lines: ["Suporte técnico disponível", "24 horas por dia,", "7 dias por semana"],
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-card/50" aria-labelledby="contato-titulo">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Contato</p>
          <h2 id="contato-titulo" className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Fale com a Dinfratech
          </h2>
          <p className="text-muted-foreground">
            Entre em contato e descubra como podemos otimizar a tecnologia da sua empresa em Recife.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl border border-border text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <c.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
              {c.lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Solicite um Orçamento Gratuito
          </h3>
          <p className="text-muted-foreground mb-8">
            Nossa equipe está pronta para atender sua empresa. Entre em contato agora e receba uma proposta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity shadow-neon w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="tel:+5581985290635"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold border border-border text-foreground rounded-xl hover:border-primary/50 transition-colors w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              (81) 98529-0635
            </a>
            <a
              href="mailto:diego.soares@dinfratech.com.br"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold border border-border text-foreground rounded-xl hover:border-primary/50 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
