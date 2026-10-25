import { site } from "./site";

export type SchemaNode = Record<string, unknown>;

export const schemaId = (fragment: string) => `${site.url}/#${fragment}`;
export const pageUrl = (path: string) => `${site.url}${path}`;
export const pageId = (path: string) => `${pageUrl(path)}#webpage`;
const ref = (fragment: string) => ({ "@id": schemaId(fragment) });

function clean(value: unknown): unknown {
  if (Array.isArray(value)) {
    const items = value.map(clean).filter((v) => v !== undefined);
    return items.length ? items : undefined;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value as SchemaNode)
      .map(([key, v]) => [key, clean(v)] as const)
      .filter(([, v]) => v !== undefined);
    return entries.length ? Object.fromEntries(entries) : undefined;
  }
  if (value === null || value === undefined || value === "") return undefined;
  return value;
}

type ImageInput = { path: string; width: number; height: number } | null;

function imageObject(image: ImageInput, fragment: string): SchemaNode | null {
  if (!image) return null;
  const url = `${site.url}${image.path}`;
  return {
    "@type": "ImageObject",
    "@id": schemaId(fragment),
    url,
    contentUrl: url,
    width: image.width,
    height: image.height,
  };
}

export function organizationNode(): SchemaNode {
  const hasContact = Boolean(site.telephone || site.email);
  return {
    "@type": "Organization",
    "@id": schemaId("organization"),
    name: site.name,
    alternateName: site.alternateNames,
    legalName: site.legalName,
    url: pageUrl("/"),
    description: site.description,
    slogan: site.slogan,
    logo: imageObject(site.logo, "logo"),
    image: imageObject(site.ogImage, "image"),
    brand: ref("brand"),
    email: site.email,
    contactPoint: hasContact
      ? {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: site.telephone,
          email: site.email,
          areaServed: "ID",
          availableLanguage: [site.language],
        }
      : null,
    sameAs: site.sameAs,
  };
}

export function brandNode(): SchemaNode {
  return {
    "@type": "Brand",
    "@id": schemaId("brand"),
    name: site.name,
    alternateName: site.alternateNames,
    url: pageUrl("/"),
    logo: site.logo ? ref("logo") : null,
  };
}

export function websiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": schemaId("website"),
    url: pageUrl("/"),
    name: site.name,
    alternateName: site.alternateNames,
    description: site.description,
    inLanguage: site.language,
    publisher: ref("organization"),
  };
}

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "CollectionPage";

export function webPageNode(
  path: string,
  opts: {
    name: string;
    description: string;
    type?: PageType;
    breadcrumb?: boolean;
    faqs?: { question: string; answer: string }[];
  },
): SchemaNode {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": pageId(path),
    url: pageUrl(path),
    name: opts.name,
    description: opts.description,
    inLanguage: site.language,
    isPartOf: ref("website"),
    about: ref("organization"),
    publisher: ref("organization"),
    breadcrumb: opts.breadcrumb ? { "@id": `${pageUrl(path)}#breadcrumb` } : null,
    // Menambahkan dukungan mainEntity (FAQ) secara fleksibel ke halaman mana pun
    mainEntity: opts.faqs
      ? opts.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        }))
      : undefined,
  };
}

export function breadcrumbNode(path: string, items: { name: string; path: string }[]): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function faqPageNode(
  path: string,
  opts: { name: string; description: string; faqs: { question: string; answer: string }[] },
): SchemaNode {
  return webPageNode(path, { ...opts, type: "FAQPage", breadcrumb: true, faqs: opts.faqs });
}

export function serviceNode(): SchemaNode {
  return {
    "@type": "Service",
    "@id": schemaId("service"),
    name: "Top up game",
    serviceType: "Top up game",
    provider: ref("organization"),
    areaServed: { "@type": "Country", name: "Indonesia" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Game yang dilayani",
      itemListElement: site.games.map((game) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Top up ${game}` },
      })),
    },
  };
}

export function graph(nodes: SchemaNode[]) {
  const seen = new Set<string>();
  const unique = nodes.filter((node) => {
    const id = node["@id"] as string | undefined;
    if (!id) return true;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
  return clean({ "@context": "https://schema.org", "@graph": unique });
}