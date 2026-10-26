import Link from "next/link";
import CodeRain from "@/components/CodeRain";
import HeroTerminal from "@/components/HeroTerminal";
import JsonLd from "@/components/JsonLd";
import WhyChooseUs from "@/components/WhyChooseUs";
import GameHighlights from "@/components/GameHighlights";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import { graph, organizationNode, serviceNode, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: site.homeTitle,
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

const steps = [
  {
    title: "Pilih game dan nominal",
    text: "Buka toko kami, lalu pilih game dan nominal yang kamu butuhkan.",
  },
  {
    title: "Isi ID game dengan teliti",
    text: "Periksa kembali User ID dan Zone ID sebelum lanjut. ID yang salah bisa membuat pesanan gagal.",
  },
  {
    title: "Bayar dan tunggu konfirmasi",
    text: "Selesaikan pembayaran di toko dan pantau status pesananmu di sana.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph([
            webPageNode("/", {
              name: site.homeTitle,
              description: site.description,
              faqs: [
              {
                question: `Apa itu ${site.name}?`,
                answer: `${site.name} adalah brand pusat informasi dan jalur pemesanan resmi top up game ${site.games.join(", ")}. Seluruh pesanan dan pembayaran diproses langsung di toko resmi kami secara aman.`,
              },
              {
                question: "Apakah transaksi dilakukan langsung di situs ini?",
                answer: "Tidak. Situs ini berfungsi sebagai pusat panduan dan informasi. Tombol aksi seperti Top up sekarang akan mengarahkanmu langsung ke toko tempat transaksi diselesaikan.",
              },
              {
                question: "Apakah aman melakukan top up di sini?",
                answer: "Sangat aman. Proses top up murni hanya membutuhkan User ID dan Zone ID game kamu. Kami tidak pernah meminta password atau kode OTP akun game dalam kondisi apa pun.",
              },
              {
                question: "Game apa saja yang didukung saat ini?",
                answer: `Saat ini kami menyediakan informasi dan jalur rujukan untuk ${site.games.join(", ")}. Ketersediaan nominal mengikuti pembaruan langsung di toko.`,
              },
              {
                question: "Bagaimana jika saya mengalami kendala atau salah input ID?",
                answer: "Pastikan selalu memeriksa User ID sebelum membayar. Jika terjadi kendala pada transaksi, segera hubungi layanan bantuan toko dengan menyertakan nomor pesanan dan bukti pembayaran.",
              },
            ],
          }),
          organizationNode(),
          serviceNode(),
        ])}
      />

      {/* 1. Hero Section */}
      <section className="blade relative isolate overflow-hidden bg-panel">
        <CodeRain className="code-mask absolute inset-0 -z-10 h-full w-full opacity-25" />

        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-28 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-36 md:pt-24">
          <div>
            <p className="font-mono text-sm text-accent">// top up game</p>
            <h1 className="font-display mt-3 text-5xl font-bold leading-[1.02] md:text-7xl">{site.name}</h1>
            <p className="mt-6 max-w-xl text-lg text-steel">
              Merupakan platform jalur top up gaming resmi yang menghadirkan sistem transaksi cepat, tampilan mobile friendly, dan performa server stabil.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="https://pedang88king.org/register"
                target="_blank"
                rel="nofollow noopener"
                className="cut-corner bg-accent px-8 py-4 font-extrabold text-ink text-base hover:brightness-110 transition-all shadow-[0_0_25px_rgba(74,222,128,0.7)] animate-bounce"
              >
                🔥 Top Up Sekarang
              </a>
              <Link
                href="/cara-order"
                className="border border-line px-7 py-4 font-semibold text-fg transition-colors hover:border-accent text-base"
              >
                Lihat cara order
              </Link>
            </div>
          </div>

          <HeroTerminal />
        </div>
      </section>

      {/* 2. Game Highlights / Panduan Game Spesifik */}
      <GameHighlights />

      {/* 3. Tentang Kami */}
      <AboutSection />

      {/* 4. Keunggulan Platform (Why Choose Us, Steps, & Safety) */}
      <WhyChooseUs />

      <section aria-labelledby="steps-heading" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-sm text-accent">// langkah</p>
        <h2 id="steps-heading" className="font-display mt-2 text-3xl font-bold">
          Cara kerjanya
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-5">
              <span className="font-mono text-3xl font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] text-steel">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="safety-heading" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="border border-line bg-panel p-7 md:p-10">
          <h2 id="safety-heading" className="font-display text-2xl font-bold">
            Jaga akun gamemu
          </h2>
          <p className="mt-3 max-w-2xl text-steel">
            Jangan pernah membagikan password atau kode OTP kepada siapa pun, termasuk yang mengaku sebagai admin {site.name}.
            Top up hanya membutuhkan ID game, bukan kata sandi.
          </p>
        </div>
      </section>

      {/* 5. FAQ */}
      <FaqSection />
    </>
  );
}