interface ResourceSchemaProps {
  title: string;
  description: string;
  slug: string;
  dateModified?: string;
  about?: string;
}

export default function ResourceSchema({
  title,
  description,
  slug,
  dateModified = "2026-06-20",
  about,
}: ResourceSchemaProps) {
  const url = `https://www.supermedia.co.nz/resources/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    dateModified,
    datePublished: "2026-06-01",
    author: {
      "@type": "Person",
      "@id": "https://www.supermedia.co.nz/about#ron",
      name: "Ron Sneddon",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.supermedia.co.nz/#business",
      name: "Super Media",
      url: "https://www.supermedia.co.nz",
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.supermedia.co.nz/#website",
    },
    about: {
      "@type": "Thing",
      name: about ?? title,
    },
    inLanguage: "en-NZ",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
