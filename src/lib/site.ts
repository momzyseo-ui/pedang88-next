/**
 * Sumber tunggal fakta brand. Isi HANYA dengan data yang benar.
 * Nilai kosong otomatis tidak dikeluarkan di schema (lihat schema.ts).
 */
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const site = {
  name: "PEDANG88",
  alternateNames: ["Pedang Topup", "PedangTopup"],
  url: siteUrl,
  language: "id",
  locale: "id_ID",
  alternateLocales: [] as string[], // isi (mis. ["en_US"]) HANYA jika ada versi bahasa lain
  twitterHandle: null as string | null, // contoh "@pedangtopup", HANYA jika akun X benar-benar ada
  homeTitle: "PEDANG88 | Portal Game Online Resmi Server Super Cepat",
  description:
    "PEDANG88: Pusat top up game resmi dan terpercaya untuk yang sedang mencari keberuntungan lebih.",
  games: ["Sweet Bonanza", "Gates Olympus", "Mobile Legends", "Minecraft"],

  // Semua field di bawah opsional. Isi HANYA jika benar; yang null tidak dikeluarkan di schema.
  legalName: null as string | null, // nama badan usaha, jika sudah ada
  slogan: null as string | null,
  logo: { path: "/images/1-logo-pedang88.webp", width: 600, height: 120 },
  ogImage: { path: "/images/pedang88-about-us.webp", width: 1200, height: 630 }, // atau buat gambar khusus banner og.png
  email: null as string | null,
  telephone: null as string | null, // format internasional, contoh: "+62-8xx-xxxx-xxxx"
  whatsapp: null as string | null, // hanya angka, format internasional tanpa +, contoh: "628123456789"
  sameAs: [] as string[], // profil sosial ASLI dengan nama yang sama

  nav: [
    { label: "Cara order", href: "/cara-order" },
    { label: "FAQ", href: "/faq" },
    { label: "Tentang kami", href: "/tentang-kami" },
    { label: "Kontak", href: "/kontak" },
  ],

  moneysite: {
    base: process.env.NEXT_PUBLIC_MONEYSITE_URL ?? "",
    login: process.env.NEXT_PUBLIC_MONEYSITE_LOGIN_URL ?? "",
    register: process.env.NEXT_PUBLIC_MONEYSITE_REGISTER_URL ?? "",
  },
};

/** Link ke moneysite + UTM. Jangan hard-code URL moneysite di komponen. */
export function moneysiteLink(kind: "base" | "login" | "register", placement: string): string {
  const raw = site.moneysite[kind] || site.moneysite.base;
  if (!raw) return "#";
  try {
    const url = new URL(raw);
    url.searchParams.set("utm_source", "pedangtopup");
    url.searchParams.set("utm_medium", "site");
    url.searchParams.set("utm_campaign", placement);
    return url.toString();
  } catch {
    return "#";
  }
}
