import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const legal = [
  { label: "Kebijakan privasi", href: "/kebijakan-privasi" },
  { label: "Syarat dan ketentuan", href: "/syarat-ketentuan" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          {/* Logo Gambar Statis di Footer */}
          <Link href="/" className="inline-block">
            <Image
              src="/images/1-logo-pedang88.webp"
              alt={site.name}
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="mt-3 max-w-sm text-[15px] text-steel">
            PEDANG88 merupakan platform hiburan digital yang menyediakan berbagai fitur interaktif dengan tampilan modern dan mudah digunakan.
          </p>
        </div>

        <nav aria-label="Halaman">
          <p className="font-display text-lg font-semibold">Halaman</p>
          <ul className="mt-4 space-y-2 text-[15px] text-steel">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="font-display text-lg font-semibold">Legal</p>
          <ul className="mt-4 space-y-2 text-[15px] text-steel">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-2 px-5 py-8 text-sm text-steel">
          <p>
            {site.name} tidak berafiliasi dengan atau didukung oleh publisher game mana pun. Seluruh nama dan merek
            dagang game adalah milik pemiliknya masing-masing.
          </p>
<p className="text-center">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline text-fg font-medium">
              {site.name}
            </Link>
            . Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}