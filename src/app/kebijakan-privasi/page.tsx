import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/kebijakan-privasi";
const title = "Kebijakan Privasi";
const description =
  "Kebijakan privasi resmi PEDANG88: penjelasan mengenai data yang dikumpulkan, penggunaan cookie, parameter UTM, tautan ke toko, dan keamanan akun game.";
const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Kebijakan privasi", path },
];
const updated = "24 Oktober 2026";

export const metadata = buildMetadata({ title, description, path });

export default function KebijakanPrivasiPage() {
  return (
    <>
      <JsonLd
        data={graph([webPageNode(path, { name: title, description, breadcrumb: true }), breadcrumbNode(path, crumbs)])}
      />
      <PageShell title={title} intro={`Terakhir diperbarui: ${updated}`} crumbs={crumbs}>
        <div className="space-y-6 text-steel leading-relaxed">
          <p className="text-fg">
            Halaman ini menjelaskan bagaimana <strong className="text-fg">{site.name}</strong> melindungi dan memperlakukan data saat kamu mengunjungi situs informasi ini.
          </p>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">1. Data yang Kami Kumpulkan</h2>
            <p>
              Situs ini berfungsi sebagai pusat informasi dan tidak menyediakan pembuatan akun, formulir pengisian data pribadi, atau pemrosesan pembayaran langsung. Oleh karena itu, kami tidak meminta atau mengumpulkan data pribadi sensitif melalui situs ini. Seperti layanan web pada umumnya, server hosting kami dapat mencatat log data teknis standar (seperti alamat IP, jenis peramban, dan halaman yang diakses) semata-mata untuk keperluan keamanan serta kelancaran operasional.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">2. Cookie dan Analitik</h2>
            <p>
              Saat ini {site.name} tidak menyetel cookie pelacakan mandiri. Jika di kemudian hari kami menambahkan perangkat analitik untuk peningkatan layanan, halaman kebijakan ini akan diperbarui beserta tanggal revisinya.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">3. Tautan Menuju Toko (Moneysite)</h2>
            <p>
              Tombol Masuk, Daftar, dan Top up sekarang di situs ini akan mengarahkanmu langsung ke toko tempat transaksi dilakukan. Tautan tersebut menyertakan parameter UTM (<code className="text-accent">utm_source</code>, <code className="text-accent">utm_medium</code>, <code className="text-accent">utm_campaign</code>) yang hanya berfungsi melacak asal penempatan tombol, tanpa memuat data pribadi apa pun. Setibanya kamu di toko, kebijakan privasi toko tersebut yang akan berlaku penuh terhadap data yang kamu berikan di sana.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">4. Keamanan Akun Game</h2>
            <p>
              Tim {site.name} <strong className="text-fg">tidak pernah meminta password, data login, atau kode OTP game kamu</strong>. Jangan pernah memberikan informasi rahasia tersebut kepada siapa pun demi keamanan akunmu.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">5. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu apabila diperlukan. Versi yang berlaku dan paling mutakhir akan selalu ditampilkan di halaman ini.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-fg mb-2">6. Kontak</h2>
            <p>
              Jika kamu memiliki pertanyaan atau hal yang ingin ditanyakan seputar kebijakan privasi ini, silakan sampaikan melalui halaman <Link href="/kontak" className="text-accent hover:underline font-medium">Kontak</Link>.
            </p>
          </section>
        </div>
      </PageShell>
    </>
  );
}