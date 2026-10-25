import type { Metadata } from "next";
import { site } from "./site";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

export type SeoImage = { path: string; width?: number; height?: number; alt?: string };

export type SeoInput = {
  title: string;
  description: string;
  path: string; // "/" , "/faq", ...
  absoluteTitle?: boolean; // true: jangan tambahkan " | PEDANG88"
  ogType?: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SeoImage;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: SeoImage;
  // khusus ogType "article"
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean; // Ditambahkan untuk fleksibilitas robots
  languages?: Record<string, string>; // hreflang, contoh: { "id-ID": "/faq", "en-US": "/en/faq" }
};

const absolute = (path: string) => (/^https?:\/\//.test(path) ? path : `${site.url}${path}`);

const toImage = (image: SeoImage) => ({
  url: absolute(image.path),
  width: image.width,
  height: image.height,
  alt: image.alt ?? site.name,
});

export function buildMetadata(input: SeoInput): Metadata {
  const fullTitle = input.absoluteTitle ? input.title : `${input.title} | ${site.name}`;
  const ogTitle = input.ogTitle ?? fullTitle;
  const ogDescription = input.ogDescription ?? input.description;
  const canonicalUrl = absolute(input.path); // Diperbaiki menjadi absolute URL

  const fallbackImage: SeoImage | undefined = site.ogImage ? { ...site.ogImage, alt: site.name } : undefined;
  const ogImage = input.ogImage ?? fallbackImage;
  const twitterImage = input.twitterImage ?? ogImage;

  const shared = {
    locale: site.locale,
    alternateLocale: site.alternateLocales.length ? site.alternateLocales : undefined,
    siteName: site.name,
    url: canonicalUrl, // Menggunakan absolute URL agar valid di Open Graph
    title: ogTitle,
    description: ogDescription,
    images: ogImage ? [toImage(ogImage)] : undefined,
  };

  const openGraph: OpenGraph =
    input.ogType === "article"
      ? {
          ...shared,
          type: "article",
          publishedTime: input.publishedTime,
          modifiedTime: input.modifiedTime,
          section: input.section,
          tags: input.tags,
        }
      : { ...shared, type: "website" };

  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    alternates: {
      canonical: canonicalUrl,
      ...(input.languages ? { languages: input.languages } : {}),
    },
    ...(input.noindex || input.nofollow
      ? {
          robots: {
            index: !input.noindex,
            follow: !input.nofollow,
          },
        }
      : {}),
    openGraph,
    twitter: {
      card: twitterImage ? "summary_large_image" : "summary",
      title: input.twitterTitle ?? ogTitle,
      description: input.twitterDescription ?? ogDescription,
      images: twitterImage ? [toImage(twitterImage)] : undefined,
      ...(site.twitterHandle ? { site: site.twitterHandle } : {}),
    },
  };
}