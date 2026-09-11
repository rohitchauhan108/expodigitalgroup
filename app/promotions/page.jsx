"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function PromotionsPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-[var(--primary)] selection:text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-[72px] pb-20 md:pt-[104px] overflow-hidden bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-700">
                Special Offers &amp; Deals
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
              Promotions
              <span className="block gradient-text mt-2">Coming Soon</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-2xl mx-auto font-semibold">
              Exciting offers and exclusive deals are on the way. Content will be shared by the client soon.
            </p>
          </motion.div>
        </div>
      </section>

      <FloatingIcons />
      <Footer />
    </main>
  );
}
