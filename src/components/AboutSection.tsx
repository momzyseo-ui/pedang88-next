"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Variants } from "framer-motion";
import { site } from "@/lib/site";

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CpuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function AboutSection({ className }: { className?: string }) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
  };

  const checklistItems: string[] = [
    "Jalur rujukan resmi & terstruktur untuk berbagai kategori game populer.",
    "Sistem transaksi transparan langsung di toko terpercaya tanpa potongan tersembunyi.",
    "Jaminan keamanan privasi akun murni hanya menggunakan User ID.",
    "Dukungan navigasi cepat dan ramah perangkat seluler (mobile-friendly)."
  ];

  const featureBlocks: { icon: React.ReactNode; title: string; text: string }[] = [
    {
      icon: <ShieldIcon />,
      title: "Keamanan Mutlak",
      text: "Seluruh proses rujukan dirancang tanpa meminta kata sandi atau kode OTP untuk melindungi privasi akun game Anda sepenuhnya."
    },
    {
      icon: <CpuIcon />,
      title: "Teknologi & Server Stabil",
      text: "Dibangun dengan arsitektur web modern yang memastikan performa halaman responsif, ringan, dan bebas hambatan."
    },
    {
      icon: <ZapIcon />,
      title: "Akses Cepat & Instan",
      text: "Navigasi terarah yang mengantarkan Anda langsung ke layanan top-up pilihan dalam hitungan detik."
    }
  ];

  return (
    <section className={"w-full bg-bg py-20 px-5 md:px-16 border-t border-line font-sans " + (className || "")}>
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT COLUMN (~32%) */}
        <div className="w-full lg:w-[32%] flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-accent">// tentang kami</span>
          </div>

          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-fg leading-[1.2]"
          >
            Pusat Informasi & Rujukan <span className="text-accent">Top Up Game Terpercaya</span>
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            className="mt-7 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/tentang-kami"
              className="cut-corner bg-accent hover:brightness-110 text-ink rounded-lg px-6 py-3.5 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-accent/10 no-underline group"
            >
              Kenali Lebih Dekat
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/cara-order"
              className="bg-panel border border-line hover:border-accent/40 text-fg rounded-lg px-6 py-3.5 font-semibold text-sm transition-colors no-underline"
            >
              Cara order
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-col gap-3.5">
            {checklistItems.map((item: string, index: number) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 bg-accent/20 text-accent border border-accent/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon />
                </div>
                <p className="text-sm text-steel leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN (~38%) - LOCAL ASSET VISUAL CARD (Teks di dalam card telah dihapus) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full lg:w-[38%] h-[520px] rounded-2xl overflow-hidden border border-line bg-panel relative flex flex-col justify-end p-8 shadow-2xl"
        >
          {/* Background image lokal dari folder public/images/ */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src="/images/pedang88-about-us.webp"
            alt={`${site.name} About Us`}
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* RIGHT COLUMN (~30%) */}
        <div className="w-full lg:w-[30%] flex flex-col gap-8">
          {featureBlocks.map((block: { icon: React.ReactNode; title: string; text: string }, index: number) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.15 }}
              className="flex flex-col bg-panel border border-line p-6 rounded-xl hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/30 text-accent rounded-xl flex items-center justify-center">
                {block.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-fg">
                {block.title}
              </h3>
              <p className="mt-1 text-sm text-steel leading-relaxed">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}