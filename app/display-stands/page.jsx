"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingIcons from "@/components/FloatingIcons";
import TopBar from "@/components/TopBar";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaGlobe,
  FaBolt,
  FaRegLightbulb,
  FaLeaf,
  FaShapes,
  FaStore,
  FaCheck,
  FaPalette,
  FaWrench,
  FaTruck,
  FaStar,
  FaRulerCombined,
  FaRecycle,
  FaTree,
} from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const GALLERY_IMAGES = [
  "/display-stands/1.webp",
  "/display-stands/2.webp",
  "/display-stands/3.webp",
  "/display-stands/4.webp",
  "/display-stands/5.webp",
  "/display-stands/6.webp",
  "/display-stands/7.webp",
  "/display-stands/8.webp",
];

const IMAGES_PER_LOAD = 9;

export default function DisplayStandsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const itemsPerPage = IMAGES_PER_LOAD;
  const totalPages = Math.ceil(GALLERY_IMAGES.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = GALLERY_IMAGES.slice(indexOfFirstItem, indexOfLastItem);

  const getPaginationNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pageNumbers;
  };

  const openImage = (globalIndex) => setSelectedIndex(globalIndex);
  const closeImage = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => prev === null || prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1);
  const prevImage = () => setSelectedIndex((prev) => prev === null || prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1);
  const handleImageRightClick = (e) => { e.preventDefault(); e.stopPropagation(); };

  React.useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowRight": nextImage(); break;
        case "ArrowLeft": prevImage(); break;
        case "Escape": closeImage(); break;
        default: break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  React.useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedIndex]);

  const threeLines = [
    {
      eyebrow: "Budget-Friendly Retail POP",
      title: "Corrugated Display Stands",
      sub: "Lightweight. Eco-friendly. Bold graphics.",
      desc: "Our corrugated display stands are lightweight, eco-friendly, and perfect for quick retail setups with bold graphics. Fast to ship, flat-pack for lean logistics, and 100% recyclable after use.",
      features: [
        "Lightweight build for rapid deployment",
        "100% eco-friendly recyclable materials",
        "Bold graphics for maximum shelf impact",
        "Perfect for quick retail setups",
      ],
      icon: FaLeaf,
      gradient: "from-emerald-500 to-teal-500",
      img: "/display-stands/6.webp",
      tag: "Corrugated · Eco",
    },
    {
      eyebrow: "Premium Backlit Impact",
      title: "SEG Light Box Displays",
      sub: "Edge-to-edge illumination. Seamless visuals.",
      desc: "For maximum impact, our SEG light box displays deliver vibrant, edge-to-edge illumination with seamless fabric graphics that grab attention in malls, exhibitions, and stores.",
      features: [
        "Vibrant edge-to-edge illumination",
        "Seamless silicone-edged fabric graphics",
        "Grabs attention in malls and exhibitions",
        "Zero hotspots · 95+ CRI premium LEDs",
      ],
      icon: FaRegLightbulb,
      gradient: "from-orange-500 to-amber-500",
      img: "/display-stands/2.webp",
      tag: "SEG · Luminous",
    },
    {
      eyebrow: "Fully Bespoke Architecture",
      title: "Customized Display Stands",
      sub: "Built to your brand, size, and function.",
      desc: "Need something unique? Our customized display stands are built to your brand, size, and function — from curved LED counters to modular kiosks. Durable, easy to install, and designed to drive sales.",
      features: [
        "Built to your exact brand, size, function",
        "Curved LED counters & modular kiosks",
        "Durable & easy to install construction",
        "Engineered to drive sales at every event",
      ],
      icon: FaShapes,
      gradient: "from-violet-500 to-fuchsia-500",
      img: "/display-stands/3.webp",
      tag: "Custom · Bespoke",
    },
  ];

  const locations = ["UAE", "KSA", "Oman", "Qatar", "Europe", "India"];

  return (
    <main className="bg-white min-h-screen selection:bg-[var(--primary)] selection:text-white overflow-x-hidden">
      <TopBar />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-48 overflow-hidden bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <motion.div
              className="lg:col-span-7 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-700">
                  Corrugated Stands • SEG Lightboxes • Bespoke Builds     </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6 leading-[1.1]">
                Make your brand{" "}
                <span className="gradient-text">impossible to miss.</span>
              </h1>

              <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
                <span className="font-bold">Corrugated Display Stands</span>, <span className="font-bold">SEG Light Box Displays</span> &amp; <span className="font-bold">Customized Display Stands</span>. From budget to premium, we create displays that turn visitors into customers and elevate every event.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="group bg-gradient-to-r from-[var(--primary)] to-orange-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300">
                  Get Free Design Proposal
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#display-portfolio" className="bg-white/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-sm">
                  View Our Portfolio
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10 pt-6 border-t border-zinc-950/5">
                <div className="flex -space-x-2">
                  {["bg-gradient-to-br from-orange-400 to-amber-500", "bg-gradient-to-br from-emerald-400 to-teal-500", "bg-gradient-to-br from-violet-400 to-fuchsia-500"].map((c, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full border-2 border-white ${c} flex items-center justify-center shadow-md`}>
                      <FaStar className="text-white text-xs" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm font-bold text-zinc-950">
                    <FaStar className="text-[var(--primary)] text-sm" />
                    <FaStar className="text-[var(--primary)] text-sm" />
                    <FaStar className="text-[var(--primary)] text-sm" />
                    <FaStar className="text-[var(--primary)] text-sm" />
                    <FaStar className="text-[var(--primary)] text-sm" />
                    <span className="ml-1">5.0</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5 font-semibold">Display builds delivered across the region</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Glass showcase card */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md rounded-[3rem] border border-white p-6 shadow-2xl">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-inner bg-zinc-100 group">
                  <Image
                    src="/display-stands/2.webp"
                    alt="Display Stand Showcase"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/0 to-transparent" />

                  

                  {/* Floating Line 2 */}
                  <motion.div
                    className="absolute -bottom-3 -left-3 bg-zinc-950 text-white p-3 rounded-2xl shadow-xl border border-zinc-800 flex items-center gap-2.5"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/20 flex items-center justify-center">
                      <FaBolt className="text-[var(--primary)] text-sm" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Setup</p>
                      <p className="text-sm font-bold leading-none">Fast Build</p>
                    </div>
                  </motion.div>
                </div>

                {/* Embedded Stats Pill */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-r from-[var(--primary)] to-orange-600 text-white p-4 rounded-2xl shadow-xl border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shadow-lg">
                      <FaRegLightbulb size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/80 font-bold leading-none">Budget → Premium</p>
                      <p className="text-sm font-bold mt-1">3 Display Lines</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCheck className="text-white text-base" />
                    <span className="text-[10px] uppercase tracking-wider text-white/80 font-bold">Drive Sales</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. GLOBAL REACH TICKER BANNER */}
      <div className="border-y border-white/40 bg-[#EAF4E1] py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-500">
            <span className="text-zinc-900 flex items-center gap-2">
              <FaGlobe className="text-[var(--primary)] text-base" /> Delivery & Installation Across:
            </span>
            {locations.map((loc, idx) => (
              <React.Fragment key={idx}>
                <span className="text-zinc-800 tracking-wider hover:text-[var(--primary)] transition-colors cursor-default">{loc}</span>
                {idx !== locations.length - 1 && <span className="text-zinc-300">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

     

    

      {/* 5. BUILD TIER ZIG-ZAG DEEP DIVE (replaces Why Choose Us) */}
      <section className="py-12 bg-[#EAF4E1] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-28">

          {/* Block 1 — Corrugated: Text + stats */}
          <motion.div
            className="grid lg:grid-cols-12 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="lg:col-span-6 relative">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Tier 1 · Corrugated Systems
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
                Lightweight, eco-friendly,{" "}
                <span className="gradient-text">bold retail-ready stands.</span>
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600 mb-6">
                Our corrugated display stands are lightweight, eco-friendly, and perfect for quick retail setups with bold graphics. Flat-pack shipping cuts logistics dramatically vs traditional wooden displays.
              </p>
              <p className="text-base leading-relaxed text-zinc-500 mb-8">
                FSC-certified recyclable boards. Pantone-validated printing. Express 48-hour turnaround for standard SKUs. Built for one use or up to 3 events, then fully recyclable.
              </p>

              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 border border-white shadow-sm">
                <FaRecycle className="text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  100% Recyclable After Use
                </span>
              </div>
            </div>

            {/* Right — 2x2 stats + image row */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/70 backdrop-blur-md border border-white p-7 rounded-[2rem] shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Deploy Time</p>
                  <p className="text-3xl font-bold text-zinc-950 mb-1">
                    <span className="gradient-text">30</span>&nbsp;min
                  </p>
                  <p className="text-xs text-zinc-500 font-semibold">Flat-pack → sales floor</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md border border-white p-7 rounded-[2rem] shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Logistics Save</p>
                  <p className="text-3xl font-bold text-zinc-950 mb-1">
                    <span className="gradient-text">65%</span>
                  </p>
                  <p className="text-xs text-zinc-500 font-semibold">Flat vs wooden displays</p>
                </div>
                <div className="bg-white/70 backdrop-blur-md border border-white p-7 rounded-[2rem] shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Turnaround</p>
                  <p className="text-3xl font-bold text-zinc-950 mb-1">
                    <span className="gradient-text">48</span>h
                  </p>
                  <p className="text-xs text-zinc-500 font-semibold">Express option</p>
                </div>
                <div className="bg-zinc-950 p-7 rounded-[2rem] text-white shadow-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Use Case</p>
                  <p className="text-3xl font-bold text-white mb-1">
                    Retail
                  </p>
                  <p className="text-xs text-zinc-400 font-semibold">POP · Checkout · Endcaps</p>
                </div>
              </div>
             
            </div>
          </motion.div>

          {/* Block 2 — SEG / Custom reverse */}
          <motion.div
            className="grid lg:grid-cols-12 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Image collage left */}
            <div className="lg:col-span-6 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4 h-[480px]">
                <div className="relative h-full rounded-[2rem] overflow-hidden border border-white shadow-sm group">
                  <Image src="/display-stands/3.webp" alt="SEG lightbox" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                </div>
                <div className="flex flex-col gap-4 h-full">
                  <div className="relative flex-1 rounded-[2rem] overflow-hidden border border-white shadow-sm group translate-y-8">
                    <Image src="/display-stands/7.webp" alt="SEG detail" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="relative flex-1 rounded-[2rem] overflow-hidden border border-white shadow-sm group -translate-y-4 bg-gradient-to-br from-[var(--primary)]/30 via-orange-500/20 to-amber-500/10 backdrop-blur">
                    <div className="absolute inset-4 flex flex-col justify-between p-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-orange-600 flex items-center justify-center shadow-xl">
                        <FaRegLightbulb className="text-white text-base" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/90 mb-1 font-bold">95+ CRI · Zero Hotspots</p>
                        <p className="text-lg font-bold text-white leading-tight">
                          Vibrant<br />Illumination
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content right */}
            <div className="lg:col-span-6 lg:order-2">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Tier 2 & 3 · SEG + Bespoke
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
                SEG illumination +{" "}
                <span className="gradient-text">custom builds.</span>
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600 mb-8">
                For maximum impact, our SEG light box displays deliver vibrant, edge-to-edge illumination with seamless fabric graphics that grab attention in malls, exhibitions, and stores.
              </p>

              <ul className="space-y-3.5 mb-10">
                {[
                  { t: "SEG seamless fabric graphics", d: "Edge-to-edge illumination, no visible joins" },
                  { t: "Customized to your brand", d: "Built to exact size, function & brand identity" },
                  { t: "Curved LED counters & kiosks", d: "From flowing counters to modular kiosks" },
                  { t: "Durable & easy install", d: "Reusable for 50+ event lifecycles" },
                ].map((it, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-4 bg-white/70 border border-white rounded-[2rem] p-5 hover:border-zinc-200 transition-all duration-300 shadow-sm hover:shadow-md"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-md">
                      <FaCheck className="text-white text-xs" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-zinc-950">{it.t}</p>
                      <p className="text-xs text-zinc-500 font-semibold mt-0.5">{it.d}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-white/70 border border-white rounded-full px-4 py-2 shadow-sm">
                  <FaWrench className="text-violet-600 text-sm" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">Tool-Free Assembly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 border border-white rounded-full px-4 py-2 shadow-sm">
                  <FaTruck className="text-sky-600 text-sm" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">Nationwide Installation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. PORTFOLIO GALLERY */}
      <section id="display-portfolio" className="py-24 bg-[#EAF4E1]" >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Featured Portfolio
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Our Display Stand <span className="gradient-text">Portfolio.</span>
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 max-w-xl mx-auto">
              Corrugated POP builds, SEG lightboxes, and fully bespoke showcases — delivered for brands across retail, malls, exhibitions and activation spaces.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => {
              const globalIndex = indexOfFirstItem + index;
              return (
                <motion.button
                  key={globalIndex}
                  onClick={() => openImage(globalIndex)}
                  onContextMenu={handleImageRightClick}
                  className="overflow-hidden rounded-[2rem] shadow-sm bg-white/40 border border-white/60 aspect-[4/3] cursor-pointer group relative w-full text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Image
                    src={image}
                    alt={`Display Stand Portfolio ${globalIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    draggable={false}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg ring-4 ring-white/40">
                        <FaArrowRight className="text-[var(--primary)] text-xl" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  
                
                  </div>

                  {/* Top tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-zinc-950 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Build
                  </div>
                </motion.button>
              );
            })}
          </div>

          {GALLERY_IMAGES.length > 0 && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-16">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md text-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white hover:text-[var(--primary)] transition-all font-semibold shadow-sm"
              >
                Prev
              </button>

              {getPaginationNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={page === '...'}
                  className={`w-10 h-10 rounded-xl font-bold transition-all shadow-sm ${
                    page === currentPage
                      ? 'bg-[var(--primary)] text-white border-transparent'
                      : page === '...'
                      ? 'text-zinc-500 cursor-default bg-transparent border-none shadow-none'
                      : 'border border-white/60 bg-white/40 backdrop-blur-md text-zinc-700 hover:bg-white hover:text-[var(--primary)]'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border border-white/60 bg-white/40 backdrop-blur-md text-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white hover:text-[var(--primary)] transition-all font-semibold shadow-sm"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      

      {/* 8. MINIMAL CLOSING & TRUST STRIP (replaces CTA card) */}
      <section className="py-16 pb-32 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/70 border border-white rounded-[2.5rem] p-10 md:p-12 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-zinc-200/60 rounded-full px-4 py-2 mb-4 shadow-sm mx-auto md:mx-0">
                <FaRulerCombined className="text-[var(--primary)] text-sm" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  From Budget · To Premium
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-950 leading-[1.15]">
                Displays that turn visitors into{" "}
                <span className="gradient-text">customers.</span>
              </h3>
              <p className="text-base text-zinc-600 font-semibold mt-3 max-w-md mx-auto md:mx-0">
                Durable. Easy to install. Designed to drive sales & elevate every event.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2.5 justify-center">
              {["Lightweight", "Eco-Friendly", "SEG Glow", "Brand Match", "Durable", "Easy Install", "Drive Sales"].map((w, i) => (
                <span
                  key={i}
                  className="text-[11px] font-bold uppercase tracking-wider text-zinc-700 bg-white border border-zinc-200/60 rounded-full px-4 py-2.5 shadow-sm hover:border-[var(--primary)]/30 hover:text-[var(--primary)] transition-colors cursor-default"
                >
                  {w}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingIcons />

      {/* LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-zinc-950/95 z-[9999] flex items-center justify-center select-none backdrop-blur-md"
          onClick={closeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white/50 text-4xl hover:text-white z-50 transition-colors w-12 h-12 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 text-white/50 text-5xl hover:text-white hover:scale-110 z-50 p-2 transition-all w-14 h-14 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center"
          >
            &#10094;
          </button>

          <div
            className="relative w-[92vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[selectedIndex]}
              alt={`Display Stand Portfolio Image ${selectedIndex + 1}`}
              fill
              priority
              draggable={false}
              className="object-contain rounded-3xl"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 text-white/50 text-5xl hover:text-white hover:scale-110 z-50 p-2 transition-all w-14 h-14 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center"
          >
            &#10095;
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-white/10 backdrop-blur-md px-6 py-2 text-sm font-bold tracking-widest rounded-full border border-white/20">
            {selectedIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </motion.div>
      )}
    </main>
  );
}
