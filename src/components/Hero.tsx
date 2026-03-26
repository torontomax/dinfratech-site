import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5581985290635?text=Olá! Gostaria de solicitar um orçamento.";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Apresentação Dinfratech"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/f43f60c0-f38a-4839-8943-aafc77b4621e.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
        role="presentation"
      />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <p className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/30 rounded-full bg-primary/5">
          Suporte de TI em Recife • Atendimento 24/7
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
          Soluções em{" "}
          <span className="text-gradient">Tecnologia</span>
          <br />
          para sua Empresa em Recife
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          A Dinfratech oferece <strong>suporte técnico especializado</strong>, infraestrutura de redes,
          monitoramento de servidores e segurança digital para empresas em Recife e região metropolitana.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all shadow-neon"
          >
            Solicite um Orçamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold border border-border text-foreground rounded-xl hover:border-primary/50 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Fale conosco no WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Clientes Atendidos" },
            { value: "24/7", label: "Suporte Disponível" },
            { value: "10+", label: "Anos de Experiência" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
