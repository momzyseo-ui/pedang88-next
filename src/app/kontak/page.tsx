import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/kontak";
const title = "Kontak Resmi";
const description =
  "Hubungi tim PEDANG88 untuk pertanyaan seputar situs atau bantuan terkait pesanan. Lihat daftar kanal kontak resmi dan informasi yang perlu disiapkan.";
const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Kontak", path },
];

export const metadata = buildMetadata({ title, description, path });

type Channel = { label: string; value: string; href: string };

const channels = [
  site.whatsapp && { label: "WhatsApp", value: `+${site.whatsapp}`, href: `https://wa.me/${site.whatsapp}` },
  site.email && { label: "Email", value: site.email, href: `mailto:${site.email}` },
  site.telephone && {
    label: "Telepon",
    value: site.telephone,
    href: `tel:${site.telephone.replace(/[^+\d]/g, "")}`,
  },
].filter((channel): channel is Channel => Boolean(channel));

export default function KontakPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode(path, { name: title, description, type: "ContactPage", breadcrumb: true }),
          breadcrumbNode(path, crumbs),
        ])}
      />
      <PageShell
        title={title}
        intro={`Hubungi tim resmi ${site.name} untuk pertanyaan seputar layanan informasi situs atau bantuan terkait pemesanan game.`}
        crumbs={crumbs}
      >
        <div className="space-y-8 text-steel leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-4">Kanal Kontak Resmi</h2>
            {channels.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {channels.map((channel) => (
                  <div key={channel.label} className="border border-line bg-panel p-5 rounded-lg flex flex-col justify-between">
                    <span className="text-sm text-steel uppercase tracking-wider font-mono">{channel.label}</span>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-fg font-semibold hover:text-accent transition-colors text-lg"
                    >
                      {channel.value}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-line bg-panel p-6 rounded-lg text-center">
                <p className="text-steel">Kanal kontak resmi sedang dipersiapkan. Silakan cek kembali secara berkala.</p>
              </div>
            )}
          </section>

          <section className="border-t border-line pt-6">
            <h2 className="font-display text-xl font-semibold text-fg mb-3">Agar Bantuan Lebih Cepat</h2>
            <p className="mb-3">Sertakan informasi berikut saat kamu menghubungi tim dukungan kami:</p>
            <ul className="list-disc pl-5 space-y-2 text-steel">
              <li><strong className="text-fg">Nomor pesanan dan nama game</strong> yang dituju.</li>
              <li><strong className="text-fg">Bukti pembayaran</strong> yang valid (tangkapan layar).</li>
              <li><strong className="text-fg">Penjelasan singkat</strong> mengenai kendala atau pertanyaan yang dialami.</li>
            </ul>
            <div className="mt-4 rounded-md border border-accent/30 bg-accent/5 p-4 text-sm text-fg">
              ⚠️ <strong className="font-semibold">Peringatan Keamanan:</strong> Tim {site.name} **tidak pernah meminta password, data login, atau kode OTP** akun game Anda. Jangan pernah memberikan data rahasia tersebut kepada siapa pun.
            </div>
          </section>

          <section className="border-t border-line pt-6">
            <h2 className="font-display text-xl font-semibold text-fg mb-2">Informasi Transaksi</h2>
            <p>
              Seluruh proses pemesanan dan pembayaran diselesaikan secara langsung di toko. Untuk pengecekan status pesanan secara akurat, silakan gunakan riwayat atau halaman pesanan di toko tempat Anda bertransaksi.
            </p>
          </section>
        </div>
      </PageShell>
    </>
  );
}