"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Variants } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  styleType: "A" | "B";
}

function FeatureCard({ title, description, href, styleType }: FeatureCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-[20px]"
    >
      <motion.div
        whileHover={{
          y: -8,
          backgroundColor: styleType === "A" ? "#161b16" : "#1b1816",
          boxShadow: "0 20px 40px rgba(0,255,100,0.08)"
        }}
        whileTap={{ scale: 0.98 }}
        className="flex flex-col items-start text-left p-6 w-full min-h-[290px] h-full rounded-[20px] transition-colors duration-500 border bg-panel border-line hover:border-accent/40"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-xs text-accent">// highlight</span>
        </div>

        <h3 className="font-display text-fg text-[20px] font-bold leading-[28px] tracking-tight self-stretch mb-4">
          {title}
        </h3>

        <div className="flex flex-col items-start gap-4 mt-auto w-full">
          <p className="font-sans text-steel text-[15px] font-normal leading-[24px]">
            {description}
          </p>

          <div className="flex items-center justify-start gap-2 text-accent font-sans text-[15px] font-semibold">
            <span className={isHovered ? "brightness-125" : ""}>
              Top up sekarang
            </span>
            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <motion.div
                animate={{
                  x: isHovered ? 4 : 0,
                  y: isHovered ? -4 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {isHovered ? (
                  <ArrowUpRight className="w-5 h-5" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,255,100,0.15)" }}
      whileTap={{ scale: 0.98 }}
      className="w-full min-h-[290px] h-full rounded-[20px] overflow-hidden border border-line bg-panel relative group cursor-pointer"
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover absolute inset-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent pointer-events-none" />
      
      <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center z-10">
        <span className="font-mono text-xs text-accent bg-bg/70 px-2.5 py-1 rounded backdrop-blur-sm border border-line">
          // official asset
        </span>
      </div>
    </motion.div>
  );
}

export default function GameHighlights({ className }: { className?: string }) {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const targetUrl = "https://pedang88king.org/register";

  const gridItems = [
    {
      type: "image",
      src: "/images/mobilelegend.svg"
    },
    {
      type: "feature",
      title: "Panduan Isi Diamond Mobile Legends",
      description: "Rujukan lengkap transaksi mata uang game MOBA terpopuler dengan jaminan keamanan sistem.",
      style: "A",
      href: targetUrl
    },
    {
      type: "image",
      src: "/images/bonanza.svg"
    },
    {
      type: "feature",
      title: "Top Up Bonanza Cepat & Aman",
      description: "Temukan jalur navigasi instan untuk transaksi game favoritmu tanpa ribet dan bebas penipuan.",
      style: "B",
      href: targetUrl
    },
    {
      type: "image",
      src: "/images/olympus.svg"
    },
    {
      type: "feature",
      title: "Panduan Slot Olympus Terpercaya",
      description: "Seluruh proses rujukan informasi game dirancang transparan untuk kenyamanan para pemain.",
      style: "A",
      href: targetUrl
    },
    {
      type: "image",
      src: "/images/minecraft.svg"
    },
    {
      type: "feature",
      title: "Top Up Minecraft Aman & Cepat",
      description: "Dapatkan informasi jalur pengisian item resmi instan tanpa ribet dan tanpa perlu kata sandi.",
      style: "B",
      href: targetUrl
    }
  ];

  return (
    <section className={"flex w-full p-4 flex-col items-center bg-bg " + (className || "")}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="flex w-full max-w-[1408px] px-6 sm:px-12 lg:px-[119px] py-16 lg:py-[96px] flex-col items-center gap-12 lg:gap-[80px] rounded-[32px] lg:rounded-[40px] bg-panel border border-line mx-auto"
      >
        <div className="flex flex-col items-center gap-4 self-stretch text-center">
          <p className="font-mono text-sm text-accent">// game highlights & panduan</p>
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-fg tracking-tight">
            Pusat Informasi & Jalur Top Up Pilihan
          </h2>

          <p className="max-w-[660px] font-sans text-steel text-[16px] sm:text-[18px] leading-relaxed">
            Eksplorasi panduan spesifik, rujukan aman per kategori game, dan tips transaksi instan untuk memaksimalkan pengalaman gaming-mu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {gridItems.map((item, idx) => (
            <motion.div key={idx} variants={sectionVariants} className="h-full">
              {item.type === "image" ? (
                <ImageCard src={item.src!} alt={"Game banner " + (idx + 1)} />
              ) : (
                <FeatureCard
                  title={item.title!}
                  description={item.description!}
                  href={item.href!}
                  styleType={item.style as "A" | "B"}
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}