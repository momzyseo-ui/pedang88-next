import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/syarat-ketentuan";
const title = "Syarat dan Ketentuan";
const description =
  "Syarat dan ketentuan penggunaan situs PEDANG88: peran situs, transaksi di toko, tanggung jawab pengguna, refund, merek dagang, dan hukum yang berlaku.";
const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Syarat dan ketentuan", path },
];
const updated = "24 Oktober 2026";

export const metadata = buildMetadata({ title, description, path });

export default function SyaratKetentuanPage() {
  return (
    <>
      <JsonLd
        data={graph([webPageNode(path, { name: title, description, breadcrumb: true }), breadcrumbNode(path, crumbs)])}
      />
      <PageShell title={title} intro={`Terakhir diperbarui: ${updated}`} crumbs={crumbs}>
        <p>
          Dengan menggunakan situs {site.name}, kamu menyetujui ketentuan berikut. Jika tidak setuju, mohon hentikan
          penggunaan situs ini.
        </p>

        <h2>Peran situs ini</h2>
        <p>
          Situs ini menyajikan informasi dan mengarahkanmu ke toko tempat pesanan dibuat. Situs ini tidak memproses
          pesanan atau pembayaran.
        </p>

        <h2>Transaksi terjadi di toko</h2>
        <p>
          Seluruh transaksi, termasuk harga, nominal, metode pembayaran, dan status pesanan, diatur oleh toko dan
          tunduk pada syarat toko tersebut. Situs ini tidak menampilkan harga; harga yang berlaku adalah yang tampil di
          toko saat kamu memesan.
        </p>

        <h2>Tanggung jawab pengguna</h2>
        <ul>
          <li>Memastikan User ID, Zone ID, game, dan nominal sudah benar sebelum membayar.</li>
          <li>Tidak membagikan password atau kode OTP akun game kepada siapa pun.</li>
          <li>Menggunakan layanan sesuai ketentuan game terkait dan hukum yang berlaku.</li>
        </ul>

        <h2 id="refund">Pengembalian dana</h2>
        <p>
          Pengembalian dana mengikuti kebijakan toko tempat transaksi dilakukan. Jika terjadi kendala, hubungi toko
          dengan nomor pesanan dan bukti pembayaran. Kamu juga dapat menghubungi kami lewat halaman{" "}
          <Link href="/kontak">Kontak</Link>.
        </p>

        <h2>Akurasi informasi</h2>
        <p>
          Kami berusaha menjaga informasi di situs ini tetap akurat, tetapi tidak dapat menjamin bahwa semuanya selalu
          lengkap atau terbaru. Informasi yang tampil di toko menjadi acuan untuk pemesanan.
        </p>

        <h2>Merek dagang dan hak cipta</h2>
        <p>
          {site.name} tidak berafiliasi dengan atau didukung oleh publisher game mana pun. Seluruh nama game, logo, dan
          merek dagang adalah milik pemiliknya masing-masing.
        </p>

        <h2>Batasan tanggung jawab</h2>
        <p>
          Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian yang timbul dari kesalahan input data
          oleh pengguna, gangguan layanan pihak ketiga, atau keputusan yang diambil semata-mata berdasarkan informasi
          di situs ini.
        </p>

        <h2>Perubahan ketentuan</h2>
        <p>
          Kami dapat memperbarui ketentuan ini sewaktu-waktu. Versi terbaru selalu ada di halaman ini beserta tanggal
          pembaruannya.
        </p>

        <h2>Hukum yang berlaku</h2>
        <p>Ketentuan ini tunduk pada hukum Republik Indonesia.</p>
      </PageShell>
    </>
  );
}
