import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
// site diimport jika ingin mengambil nama brand secara dinamis
import { site } from "@/lib/site"; 

const path = "/cara-order";
const title = "Cara Order Top Up Game";
// Menyertakan brand PEDANG88 secara natural di meta description untuk memperkuat Entity SEO
const description =
  "Panduan lengkap cara order top up game di PEDANG88: pilih game & nominal, isi ID dengan teliti, dan selesaikan pembayaran dengan aman.";
const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Cara order", path },
];

export const metadata = buildMetadata({ title, description, path });

export default function CaraOrderPage() {
  return (
    <>
      <JsonLd
        data={graph([webPageNode(path, { name: title, description, breadcrumb: true }), breadcrumbNode(path, crumbs)])}
      />
      <PageShell
        title={title}
        intro={`Situs resmi ${site.name} mengantarmu ke toko tempat pesanan dibuat. Ikuti langkah berikut supaya prosesnya lancar.`}
        crumbs={crumbs}
      >
        <h2>Langkah order di {site.name}</h2>
        <ol>
          <li>
            <strong>Buka toko.</strong> Klik tombol Top up sekarang, atau tombol Masuk dan Daftar di bagian atas
            halaman untuk diarahkan ke platform transaksi {site.name}.
          </li>
          <li>
            <strong>Pilih game dan nominal.</strong> Pilih Mobile Legends, PUBG Mobile, Fortnite, atau Minecraft,
            lalu pilih nominal diamond atau mata uang game yang kamu butuhkan.
          </li>
          <li>
            <strong>Isi ID game dengan teliti.</strong> Masukkan User ID, dan Zone ID bila game memintanya. Periksa
            sekali lagi sebelum melanjutkan ke pembayaran.
          </li>
          <li>
            <strong>Pilih metode pembayaran dan bayar.</strong> Selesaikan pembayaran melalui metode yang tersedia di toko.
          </li>
          <li>
            <strong>Pantau status pesanan.</strong> Status transaksi dan proses pengiriman dapat dipantau langsung di toko. Simpan bukti transaksi sampai pesanan selesai.
          </li>
        </ol>

        <h2>Tips agar pesanan tidak gagal</h2>
        <ul>
          <li>Pastikan User ID dan Zone ID benar. Kesalahan penulisan ID dapat menyebabkan pesanan tertunda atau masuk ke akun yang salah.</li>
          <li>Periksa kembali rincian game dan nominal sebelum melakukan pembayaran.</li>
          <li>Proses top up di {site.name} **hanya memerlukan ID game**. Jangan pernah memberikan password, data login, atau kode OTP kepada siapa pun.</li>
          <li>Simpan nomor pesanan dan bukti pembayaran sebagai antisipasi jika memerlukan bantuan layanan pelanggan.</li>
        </ul>

        <h2>Butuh bantuan?</h2>
        <p>
          Temukan jawaban atas kendala umum di halaman <Link href="/faq">FAQ (Pertanyaan yang Sering Diajukan)</Link> atau hubungi tim kami lewat halaman{" "}
          <Link href="/kontak">Kontak</Link>. Kebijakan pengembalian dana dapat dibaca pada bagian{" "}
          <Link href="/syarat-ketentuan#refund">Syarat dan Ketentuan</Link>.
        </p>
        <p>
          <a
            href="https://pedang88king.org/"
            target="_blank"
            rel="nofollow noopener"
            className="cut-corner inline-block bg-accent px-7 py-3.5 font-bold text-ink no-underline hover:brightness-110"
          >
            Top up sekarang di {site.name}
          </a>
        </p>
      </PageShell>
    </>
  );
}