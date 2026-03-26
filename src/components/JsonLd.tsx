export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dinfratech",
    description:
      "Suporte de TI em Recife: manutenção de computadores, infraestrutura de redes, monitoramento de servidores e segurança digital para empresas.",
    url: "https://www.dinfratech.com.br",
    telephone: "+5581985290635",
    email: "diego.soares@dinfratech.com.br",
    image: "https://www.dinfratech.com.br/lovable-uploads/d687b268-6d79-406e-9063-cf4e0c9dab8a.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dois Unidos",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.9906,
      longitude: -34.8761,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -8.0476,
        longitude: -34.877,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de TI",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suporte Técnico de TI" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Infraestrutura de Redes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monitoramento de Servidores" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Segurança Digital para Empresas" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manutenção de Computadores" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Redes Wi-Fi Corporativas" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
