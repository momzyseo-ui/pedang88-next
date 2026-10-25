import Link from "next/link";
import Image from "next/image";
import { site, moneysiteLink } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        {/* Logo Berupa Gambar .png */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/1-logo-pedang88.webp"
            alt={site.name}
            width={140}
            height={36}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 text-[15px] md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-steel transition-colors hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>

       <div className="flex items-center gap-3">
          <a
            href="https://pedang88king.org/"
            target="_blank"
            rel="nofollow noopener"
            className="border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-steel"
          >
            Masuk
          </a>
          <a
            href="https://pedang88king.org/register"
            target="_blank"
            rel="nofollow noopener"
            className="cut-corner bg-accent px-4 py-2 text-sm font-bold text-ink hover:brightness-110"
          >
            Daftar
          </a>
        </div>
      </div>

      <nav aria-label="Navigasi seluler" className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-sm">
          {site.nav.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link href={item.href} className="whitespace-nowrap text-steel hover:text-fg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}