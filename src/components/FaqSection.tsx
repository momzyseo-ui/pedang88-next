"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: `Apa itu ${site.name}?`,
    answer: `${site.name} adalah brand pusat informasi dan jalur pemesanan resmi top up game ${site.games.join(", ")}. Seluruh pesanan dan pembayaran diproses langsung di toko resmi kami secara aman.`
  },
  {
    question: "Apakah transaksi dilakukan langsung di situs ini?",
    answer: "Tidak. Situs ini berfungsi sebagai pusat panduan dan informasi. Tombol aksi seperti Top up sekarang akan mengarahkanmu langsung ke toko tempat transaksi diselesaikan."
  },
  {
    question: "Apakah aman melakukan top up di sini?",
    answer: "Sangat aman. Proses top up murni hanya membutuhkan User ID dan Zone ID game kamu. Kami tidak pernah meminta password atau kode OTP akun game dalam kondisi apa pun."
  },
  {
    question: "Game apa saja yang didukung saat ini?",
    answer: `Saat ini kami menyediakan informasi dan jalur rujukan untuk ${site.games.join(", ")}. Ketersediaan nominal mengikuti pembaruan langsung di toko.`
  },
  {
    question: "Bagaimana jika saya mengalami kendala atau salah input ID?",
    answer: "Pastikan selalu memeriksa User ID sebelum membayar. Jika terjadi kendala pada transaksi, segera hubungi layanan bantuan toko dengan menyertakan nomor pesanan dan bukti pembayaran."
  }
];

export default function FaqSection({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={"bg-bg py-16 md:py-24 px-5 md:px-16 border-t border-line " + (className || "")}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 md:gap-[80px] items-start">

        {/* LEFT COLUMN - STICKY INFO */}
        <div className="md:w-[35%] flex flex-col items-start md:sticky md:top-[120px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent">04.</span>
            <span className="text-line">—</span>
            <span className="font-mono text-xs text-steel tracking-wider uppercase">FAQ</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-fg leading-tight mb-4">
            Pertanyaan Umum <br />
            <span className="text-accent">Seputar Layanan</span>
          </h2>

          <p className="font-sans text-sm md:text-base text-steel leading-relaxed mb-8 max-w-[300px]">
            Temukan jawaban cepat dan jelas seputar panduan top up, keamanan akun, hingga informasi layanan {site.name}.
          </p>

          <Link
            href="/kontak"
            className="cut-corner bg-accent text-ink px-6 py-3.5 font-bold text-sm flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-accent/10 no-underline"
          >
            Hubungi Kami <ChevronRight size={18} />
          </Link>
        </div>

        {/* RIGHT COLUMN - ACCORDION LIST & FOOTER LINK */}
        <div className="md:w-[65%] w-full flex flex-col gap-3">
          {faqData.map((item: FAQItem, index: number) => (
            <div
              key={index}
              className={"bg-panel border rounded-xl overflow-hidden transition-colors duration-200 " + (openIndex === index ? "border-accent/40" : "border-line")}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group cursor-pointer min-h-[64px]"
                aria-expanded={openIndex === index}
              >
                <span className="font-display text-base md:text-lg font-semibold text-fg group-hover:text-accent transition-colors">
                  {item.question}
                </span>

                <div className={"w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-all duration-300 " + (openIndex === index ? "rotate-45 bg-accent text-ink" : "bg-line/40 text-steel")}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" strokeWidth="2" strokeLinecap="round">
                    <line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" />
                    <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" />
                  </svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={"faq-answer-" + index}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <div className="px-4 pb-4">
                      <div className="bg-bg/60 border border-line/60 rounded-lg p-4 md:p-5">
                        <p className="font-sans text-sm md:text-[15px] text-steel leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Tautan Navigasi Tambahan Menuju Halaman /faq */}
          <div className="mt-4 pt-4 border-t border-line/60 flex items-center justify-between flex-wrap gap-4 px-1">
            <p className="font-sans text-sm text-steel">
              Punya pertanyaan lain seputar layanan atau transaksi?
            </p>
            <Link
              href="/faq"
              className="font-sans text-sm font-semibold text-accent hover:underline flex items-center gap-1"
            >
              Baca selengkapnya di halaman FAQ &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}