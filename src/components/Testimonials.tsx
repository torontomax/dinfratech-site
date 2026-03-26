import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Diretor de Operações",
    company: "Logística Norte",
    text: "A Dinfratech transformou nossa infraestrutura de TI. O suporte 24/7 e a proatividade no monitoramento dos servidores reduziram nosso downtime em 90%.",
    rating: 5,
  },
  {
    name: "Ana Beatriz Lopes",
    role: "Gerente Administrativa",
    company: "Clínica Saúde Integral",
    text: "Profissionais extremamente competentes. A segurança digital implementada pela Dinfratech nos deu total tranquilidade com a LGPD e proteção dos dados dos pacientes.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "CEO",
    company: "TechRecife Solutions",
    text: "Parceria sólida há mais de 5 anos. A equipe da Dinfratech entende perfeitamente as necessidades de empresas em Recife e entrega soluções rápidas e eficientes.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28" aria-labelledby="depoimentos-titulo">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Depoimentos</p>
          <h2 id="depoimentos-titulo" className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground">
            Empresas em Recife confiam na Dinfratech para gerenciar sua tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${t.rating} de 5 estrelas`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </blockquote>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-foreground">{t.name}</cite>
                  <p className="text-xs text-muted-foreground">{t.role} • {t.company}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
