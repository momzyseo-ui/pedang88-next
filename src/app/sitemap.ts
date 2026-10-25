import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Tambahkan path baru HANYA setelah halamannya ada (hindari URL 404 di sitemap).
const paths = ["/", "/cara-order", "/faq", "/tentang-kami", "/kontak", "/kebijakan-privasi", "/syarat-ketentuan"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${site.url}${path === "/" ? "" : path}` }));
}
