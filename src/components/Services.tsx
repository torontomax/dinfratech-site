import { Monitor, Network, Server, Shield, Headphones, Wifi } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Manutenção de Computadores",
    description:
      "Manutenção preventiva e corretiva para desktops e notebooks corporativos. Diagnóstico rápido, troca de peças e otimização de performance para manter sua equipe produtiva em Recife.",
    keywords: "manutenção de computadores Recife",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico de TI",
    description:
      "Suporte de TI em Recife com atendimento remoto e presencial 24/7. Resolução ágil de chamados, help desk dedicado e gestão completa do seu parque tecnológico.",
    keywords: "suporte de TI em Recife",
  },
  {
    icon: Network,
    title: "Infraestrutura de Redes",
    description:
      "Projeto, instalação e manutenção de infraestrutura de redes corporativas. Cabeamento estruturado, switches, roteadores e configuração de VLANs para empresas em Recife e região.",
    keywords: "infraestrutura de redes",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description:
      "Segurança digital para empresas com firewall, antivírus corporativo, backup em nuvem e políticas de proteção de dados. Conformidade com LGPD e proteção contra ransomware.",
    keywords: "segurança digital para empresas",
  },
  {
    icon: Server,
    title: "Monitoramento de Servidores",
    description:
      "Monitoramento de servidores 24 horas com alertas em tempo real. Gerenciamento de servidores Windows e Linux, virtualização e alta disponibilidade para sua operação não parar.",
    keywords: "monitoramento de servidores",
  },
  {
    icon: Wifi,
    title: "Redes Wi-Fi Corporativas",
    description:
      "Projetos de redes Wi-Fi de alta performance para escritórios, indústrias e eventos em Recife. Cobertura total, segurança WPA3 e gerenciamento centralizado de access points.",
    keywords: "redes Wi-Fi corporativas Recife",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28" aria-labelledby="servicos-titulo">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Nossos Serviços</p>
          <h2 id="servicos-titulo" className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Soluções Completas em TI para Empresas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Oferecemos suporte de TI em Recife com foco em produtividade, segurança e redução de custos.
            Conheça nossos serviços especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity shadow-neon"
          >
            Solicite um Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
}
