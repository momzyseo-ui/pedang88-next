import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/tentang-kami";
const title = "Tentang Kami";
const description =
  "Kenali lebih dekat PEDANG88: brand pusat informasi dan jalur pemesanan resmi top up Mobile Legends, PUBG Mobile, Fortnite, dan Minecraft, serta prinsip operasional kami.";
const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Tentang kami", path },
];

export const metadata = buildMetadata({ title, description, path });

export default function TentangKamiPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode(path, { name: title, description, type: "AboutPage", breadcrumb: true }),
          breadcrumbNode(path, crumbs),
        ])}
      />
      <PageShell
        title={title}
        intro={`${site.name} menghadirkan pengalaman bermain Game PGR dalam satu platform online dengan tampilan modern, navigasi praktis, dan akses yang mudah digunakan.`}
        crumbs={crumbs}
      >
        <div className="space-y-8 text-steel leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">Siapa Kami</h2>
            <p className="text-fg text-base">
              <strong className="text-fg">{site.name}</strong> adalah brand penyedia informasi serta jalur pemesanan terpercaya untuk game <span className="text-fg font-medium">{site.games.join(", ")}</span>.
              {site.legalName ? ` Situs ini dikelola secara profesional oleh ${site.legalName}.` : ""}
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-3">Apa yang Kami Lakukan</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Menyajikan panduan alur pemesanan game dengan bahasa yang ringkas dan mudah dipahami.</li>
              <li>Memberikan edukasi dan tips penting seputar keamanan akun game serta cara menghindari kesalahan input ID.</li>
              <li>Menjadi jembatan penghubung (referensi) yang mengarahkan Anda secara aman ke toko resmi tempat pesanan dibuat dan diselesaikan.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-3">Prinsip Kami (Apa yang Tidak Kami Lakukan)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kami <strong className="text-fg">tidak memproses pembayaran atau transaksi pesanan</strong> secara langsung di dalam situs informasi ini.</li>
              <li>Kami <strong className="text-fg">tidak pernah meminta password atau kode OTP</strong> akun game Anda dalam kondisi apa pun.</li>
              <li>Kami <strong className="text-fg">tidak memiliki afiliasi resmi</strong> atau didukung oleh publisher game mana pun.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">Bagaimana Cara Kerjanya</h2>
            <p>
              Situs ini berfokus sebagai pusat informasi navigasi. Ketika Anda mengeklik tombol <span className="text-fg font-medium">Top up sekarang, Masuk, atau Daftar</span>, sistem kami akan mengarahkan Anda langsung ke toko tujuan. Seluruh proses transaksi, pemilihan metode pembayaran, hingga pemenuhan pesanan dikelola sepenuhnya di toko tersebut. Pelajari langkah selengkapnya pada halaman <Link href="/cara-order" className="text-accent hover:underline font-medium">Cara Order</Link>.
            </p>
          </section>

          <section className="border-t border-line pt-6">
            <h2 className="font-display text-xl font-semibold text-fg mb-2">Hubungi Kami</h2>
            <p>
              Memiliki pertanyaan lebih lanjut atau membutuhkan bantuan terkait informasi situs? Silakan kunjungi halaman <Link href="/kontak" className="text-accent hover:underline font-medium">Kontak</Link> resmi kami.
            </p>
          </section>
        </div>
      </PageShell>
    </>
  );
}