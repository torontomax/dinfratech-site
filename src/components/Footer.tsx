import { ArrowUp } from "lucide-react";

const serviceLinks = [
  "Manutenção de Computadores",
  "Suporte Técnico",
  "Redes e Wi-Fi",
  "Segurança Digital",
  "Sistemas de Atendimento",
  "Monitoramento de TI",
];

const companyLinks = [
  { label: "Sobre nós", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border pt-16 pb-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/lovable-uploads/d687b268-6d79-406e-9063-cf4e0c9dab8a.png"
              alt="Dinfratech"
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conectando soluções, otimizando resultados. Sua parceira em tecnologia para impulsionar
              o crescimento do seu negócio em Recife.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              {companyLinks.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+5581985290635" className="hover:text-primary transition-colors">
                  (81) 98529-0635
                </a>
                <br />
                <span className="text-xs">WhatsApp • Atendimento 24/7</span>
              </li>
              <li>
                <a href="mailto:diego.soares@dinfratech.com.br" className="hover:text-primary transition-colors">
                  diego.soares@dinfratech.com.br
                </a>
              </li>
              <li>Dois Unidos, Recife - PE</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dinfratech. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-foreground border border-border rounded-lg hover:border-primary/50 transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <ArrowUp className="w-4 h-4" />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
