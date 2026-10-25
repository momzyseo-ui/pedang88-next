import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbNode, faqPageNode, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/faq";
const title = "FAQ: Pertanyaan Seputar Top Up Game";
const description =
  "Jawaban atas pertanyaan umum tentang PEDANG88: cara top up, ID game, keamanan akun, refund, dan hubungan dengan publisher game.";
const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "FAQ", path },
];

/** Sumber tunggal: dipakai untuk tampilan DAN schema, jadi keduanya selalu identik. */
const faqs = [
  {
    question: "Apa itu PEDANG88?",
    answer: `${site.name} adalah brand yang menyajikan informasi dan jalur pemesanan top up game ${site.games.join(", ")}. Pesanan dibuat dan dibayar di toko, bukan langsung di situs ini.`,
  },
  {
    question: "Apakah transaksi dilakukan di situs ini?",
    answer:
      "Tidak. Situs ini tidak memproses pesanan atau pembayaran secara langsung. Tombol Masuk, Daftar, dan Top up sekarang akan mengarahkanmu ke toko tempat transaksi dilakukan.",
  },
  {
    question: "Game apa saja yang dilayani?",
    answer: `Saat ini mencakup ${site.games.join(", ")}. Ketersediaan nominal mengikuti stok dan pembaruan yang tampil di toko.`,
  },
  {
    question: "Data apa yang saya butuhkan untuk top up?",
    answer:
      "ID game kamu, yaitu User ID dan Zone ID bila game memintanya, serta memilih nominal yang diinginkan. Kamu tidak perlu memberikan password akun game.",
  },
  {
    question: "Apakah saya perlu memberikan password atau kode OTP?",
    answer:
      "Tidak sama sekali. Proses top up di " + site.name + " tidak membutuhkan password maupun kode OTP. Jangan pernah membagikannya kepada siapa pun, termasuk pihak yang mengaku sebagai admin.",
  },
  {
    question: "Bagaimana jika saya salah memasukkan ID game?",
    answer:
      "Selalu periksa ID game sebelum melakukan pembayaran. Kesalahan penulisan ID dapat menyebabkan pesanan gagal atau masuk ke akun lain. Jika terlanjur salah, segera hubungi layanan toko dengan menyertakan nomor pesanan dan bukti pembayaran.",
  },
  {
    question: "Bagaimana kebijakan pengembalian dana?",
    answer:
      "Kebijakan pengembalian dana (refund) mengikuti ketentuan dari toko tempat transaksi diselesaikan. Ringkasan ketentuannya dapat dibaca pada halaman Syarat dan Ketentuan.",
  },
  {
    question: "Apakah PEDANG88 berafiliasi dengan publisher game?",
    answer:
      "Tidak. Kami tidak berafiliasi dengan, bekerja sama, atau didukung oleh publisher game mana pun. Seluruh nama dan merek dagang game adalah milik dari masing-masing pemiliknya.",
  },
  {
    question: "Bagaimana cara menghubungi tim PEDANG88?",
    answer: "Kamu bisa menggunakan kanal komunikasi resmi yang tercantum di halaman Kontak.",
  },
];

export const metadata = buildMetadata({ title, description, path });

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={graph([faqPageNode(path, { name: title, description, faqs }), breadcrumbNode(path, crumbs)])}
      />
      <PageShell
        title="FAQ"
        intro={`Jawaban singkat untuk pertanyaan yang paling sering muncul seputar layanan ${site.name}.`}
        crumbs={crumbs}
      >
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <section key={index} className="border-b border-line pb-6">
              <h2 className="font-display text-lg font-semibold text-fg">{faq.question}</h2>
              <p className="mt-2 text-steel leading-relaxed">{faq.answer}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-line bg-panel p-6">
          <p className="text-fg font-medium">
            Belum menemukan jawaban yang kamu cari? Lihat panduan <Link href="/cara-order" className="text-accent hover:underline">cara order</Link> atau hubungi kami melalui halaman <Link href="/kontak" className="text-accent hover:underline">kontak</Link>.
          </p>
        </div>
      </PageShell>
    </>
  );
}