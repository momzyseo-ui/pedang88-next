"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Sparkles, Zap, ShieldCheck, Globe, Lock, Smartphone, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

interface BenefitItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

function BenefitItem({ title, description, icon: Icon, delay = 0 }: BenefitItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex gap-6 items-start border border-line bg-panel p-6 rounded-xl hover:border-accent/50 transition-colors"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" strokeWidth={2.2} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display text-[20px] md:text-[22px] font-bold text-fg tracking-tight">
          {title}
        </h3>
        <p className="font-sans text-sm md:text-[15px] text-steel leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  const y = isLargeScreen ? yTranslate : 0;

  const tags = [
    "Situs Top Up Terpercaya",
    "Proses Cepat & Aman",
    "Tanpa Password / OTP",
    "Sweet Bonanza & Mahyong",
    "Platform Game Akurat",
  ];

  const benefits: Array<{ title: string; description: string; icon: LucideIcon }> = [
    {
      title: "Jalur Top Up Resmi & Terpercaya",
      description: `${site.name} menyajikan platform dan jalur navigasi resmi yang aman langsung menuju toko tempat transaksi game dilakukan.`,
      icon: ShieldCheck
    },
    {
      title: "Proses Cepat Tanpa Ribet",
      description: "Temukan panduan dan akses ringkas untuk melakukan top up diamond atau mata uang game favorit dalam hitungan detik.",
      icon: Zap
    },
    {
      title: "Keamanan Akun 100% Terjaga",
      description: "Proses top up murni hanya membutuhkan User ID dan Zone ID. Kami tidak pernah meminta password atau kode OTP akun game Anda.",
      icon: Lock
    },
    {
      title: "Dukungan Game Populer Lengkap",
      description: `Melayani platform dan rujukan jalur top up untuk ${site.games.join(", ")}, serta berbagai game esports populer lainnya.`,
      icon: Globe
    },
    {
      title: "Antarmuka Ramah Pengguna",
      description: "Nikmati tampilan situs yang bersih, modern, responsif, dan bebas dari gangguan iklan spam demi kenyamanan maksimal.",
      icon: Smartphone
    },
    {
      title: "Transparansi Sistem & Panduan",
      description: "Setiap langkah order dijelaskan secara transparan mulai dari pemilihan nominal, pengecekan ID, hingga metode pembayaran di toko.",
      icon: CheckCircle2
    },
  ];

  return (
    <section className={cn("w-full bg-bg py-16 md:py-24 lg:py-32 flex justify-center border-t border-line", className)}>
      <div className="w-full max-w-[1440px] px-5 lg:px-16">
        <div className="w-full max-w-[1248px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-12 justify-between">

            {/* Left Column - Sticky Info */}
            <div className="w-full lg:max-w-[540px] flex flex-col items-start lg:sticky lg:top-[120px] self-start">
              <div className="px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent font-sans text-xs md:text-sm font-semibold uppercase tracking-wider">Keunggulan Platform</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fg tracking-tight leading-[1.1] mb-4"
              >
                Mengapa Memilih <span className="text-accent">{site.name}</span> sebagai Pusat Platfrom Pilihan?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="font-sans text-base md:text-lg text-steel leading-relaxed mb-8 max-w-[480px]"
              >
                Kami hadir untuk memberikan kemudahan navigasi, panduan akurat, serta keamanan penuh bagi para player yang ingin melakukan top up secara cerdas dan aman.
              </motion.p>

              <div className="flex flex-wrap gap-2.5">
                {tags.map((tag: string, idx: number) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.05, ease: "easeOut" }}
                    className="px-4 py-2 border border-line bg-panel rounded-full text-fg font-sans text-xs md:text-sm font-medium cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Right Column - Scrollable Benefits List */}
            <div ref={containerRef} className="flex-1 lg:max-w-[580px] flex items-start pr-0 lg:h-[220vh] h-auto relative w-full">
              <div className="lg:sticky lg:top-[120px] lg:h-[700px] h-auto flex items-start w-full lg:overflow-hidden overflow-visible">
                <div className="hidden lg:block absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-bg via-bg/90 to-transparent z-10 pointer-events-none" />

                <div className="hidden lg:flex flex-col items-center mr-8 relative w-[2px] bg-line self-stretch">
                  <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="w-full bg-accent absolute top-0 left-0 h-full"
                  />
                </div>

                <motion.div
                  ref={listRef}
                  style={{ y }}
                  className="w-full lg:w-[514px] flex flex-col gap-6 lg:pt-16 lg:pb-32 pt-0 pb-0"
                >
                  {benefits.map((benefit, idx: number) => (
                    <BenefitItem
                      key={idx}
                      title={benefit.title}
                      description={benefit.description}
                      icon={benefit.icon}
                      delay={0.2 + idx * 0.08}
                    />
                  ))}
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}