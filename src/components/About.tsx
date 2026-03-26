import { CheckCircle } from "lucide-react";

const differentials = [
  "Atendimento presencial e remoto em Recife e região",
  "Equipe certificada e experiente",
  "Suporte técnico 24/7 para emergências",
  "Soluções personalizadas para cada empresa",
  "Monitoramento proativo de infraestrutura",
  "Conformidade com LGPD e boas práticas",
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-card/50" aria-labelledby="sobre-titulo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Sobre a Dinfratech</p>
            <h2 id="sobre-titulo" className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              Sua Parceira em Tecnologia em Recife
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com mais de <strong>10 anos de experiência</strong>, a Dinfratech é referência em suporte de TI
              em Recife e região metropolitana. Atendemos empresas de todos os portes com soluções sob medida
              em infraestrutura de redes, segurança digital e monitoramento de servidores.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa missão é conectar soluções e otimizar resultados, garantindo que a tecnologia
              impulsione o crescimento do seu negócio com eficiência e segurança.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {differentials.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-border shadow-card">
              <img
                src="/lovable-uploads/733cbcb1-d505-478c-9598-3bd9ebfd07d3.png"
                alt="Equipe Dinfratech realizando suporte técnico em infraestrutura de TI em Recife"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
