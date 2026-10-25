import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site, moneysiteLink } from "@/lib/site";
import { brandNode, graph, organizationNode, websiteNode } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Fungsi pengaman agar metadataBase tidak pernah menyebabkan Invalid URL saat build di Vercel
const getMetadataBase = () => {
  try {
    if (site.url && site.url.startsWith("http")) {
      return new URL(site.url);
    }
  } catch {}
  return new URL("https://geekwithmak.com");
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: { default: site.homeTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: site.locale, type: "website" },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
};

export const viewport: Viewport = { themeColor: "#070807" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-ink pb-20 font-sans text-fg antialiased md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
        >
          Lewati ke konten utama
        </a>

        <JsonLd data={graph([organizationNode(), brandNode(), websiteNode()])} />
        <Header />
        <main id="main">{children}</main>
        <Footer />

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/95 p-3 md:hidden">
          <a
            href={moneysiteLink("base", "mobile_bar")}
            rel="noopener"
            className="cut-corner block bg-accent py-3 text-center font-bold text-ink"
          >
            Top up sekarang
          </a>
        </div>
      </body>
    </html>
  );
}