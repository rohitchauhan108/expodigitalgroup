"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingIcons from "@/components/FloatingIcons";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStore,
  FaShoppingBag,
  FaRocket,
  FaRoad,
  FaUsers,
  FaCheck,
  FaBuilding,
  FaPrint,
  FaWarehouse,
  FaClock,
  FaGlobe,
  FaStar,
  FaHandshake,
  FaBullseye,
  FaStoreAlt,
  FaGem,
  FaBriefcase,
  FaMicrophone,
} from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const services = [
  {
    eyebrow: "Service 01",
    title: "In-Store Promotions & Product Sampling",
    desc: "We help FMCG, food, beverage, beauty, and wellness brands drive sales at the point of purchase. We provide trained and licensed promoters, sampling uniforms, tasting counters, and POS displays for all major retail chains including Carrefour, Lulu, Spinneys, Union Coop, Choithrams, and pharmacies across Dubai, Abu Dhabi, Sharjah, and Northern Emirates.",
    icon: FaBullseye,
    gradient: "from-orange-500 to-amber-500",
    tag: "Retail · Sampling",
    highlights: [
      "Trained & licensed promoters for every activation",
      "Sampling uniforms, tasting counters & POS displays",
      "Coverage across Carrefour, Lulu, Spinneys, Union Coop, Choithrams & pharmacies",
      "Dubai, Abu Dhabi, Sharjah & Northern Emirates",
    ],
    chips: ["FMCG", "Food & Bev", "Beauty", "Wellness"],
  },
  {
    eyebrow: "Service 02",
    title: "Mall Activations & Pop-Up Promotions",
    desc: "For brands that want high visibility, we design and execute mall activations in Dubai Mall, Mall of the Emirates, City Centre, Yas Mall, and across Saudi malls. Services include custom-built kiosks, pop-up shops, interactive games, spin-the-wheel, photo booths, product demos, and instant redemption setups that attract crowds and generate leads.",
    icon: FaStoreAlt,
    gradient: "from-emerald-500 to-teal-500",
    tag: "Malls · Pop-Ups",
    highlights: [
      "Custom-built kiosks & pop-up shops designed in-house",
      "Interactive games, spin-the-wheel & photo booths",
      "Product demos & instant redemption setups",
      "Dubai Mall, MOE, City Centre, Yas Mall & Saudi malls",
    ],
    chips: ["Dubai Mall", "Yas Mall", "KSA Malls", "Lead Gen"],
  },
  {
    eyebrow: "Service 03",
    title: "Product Launches & Brand Events",
    desc: "Launching a new product or service? We handle end-to-end launch management — venue booking, stage and backdrop design, AV and lighting, guest management, influencer outreach, and live event coverage. Whether it is a corporate launch for 50 guests or a public launch for 500, we ensure your brand gets maximum attention.",
    icon: FaRocket,
    gradient: "from-violet-500 to-fuchsia-500",
    tag: "Launches · Events",
    highlights: [
      "Venue booking, stage & backdrop design",
      "AV, lighting & full production support",
      "Guest management & influencer outreach",
      "Live event coverage (photo + video)",
    ],
    chips: ["Corporate (50)", "Public (500)", "Influencers", "End-to-End"],
  },
  {
    eyebrow: "Service 04",
    title: "Roadshows & Community Activations",
    desc: "We take your brand beyond malls to where your audience lives, works, and studies. We organize promotions at business towers, residential communities, universities, beaches, and corporate offices. We manage all permissions from Dubai Municipality, DTCM, and mall authorities, plus logistics and storage.",
    icon: FaBriefcase,
    gradient: "from-blue-500 to-cyan-500",
    tag: "Roadshows · Outreach",
    highlights: [
      "Business towers, residential communities & universities",
      "Beaches, corporate offices & high-footfall areas",
      "Permissions handled: Dubai Municipality, DTCM & malls",
      "Full logistics & free storage in Al Quoz warehouse",
    ],
    chips: ["B2C Outreach", "Permissions", "Logistics", "Storage"],
  },
  {
    eyebrow: "Service 05",
    title: "Exhibition Promotions & Staffing",
    desc: "For events at Dubai World Trade Centre, Expo City Dubai, Abu Dhabi National Exhibition Centre, and Riyadh, we provide professional hostesses, promoters, sales staff, emcees, and models. All staff are multilingual, trained on your brand message, and available in uniform.",
    icon: FaMicrophone,
    gradient: "from-rose-500 to-pink-500",
    tag: "Exhibitions · Staffing",
    highlights: [
      "Hostesses, promoters, sales staff, emcees & models",
      "Multilingual: English, Arabic, Hindi, Tagalog, Russian",
      "Fully brand-trained with your message & KPI brief",
      "DWTC, Expo City Dubai, ADNEC & Riyadh events",
    ],
    chips: ["DWTC", "Expo City", "ADNEC", "Riyadh"],
  },
];

const whyChooseUs = [
  {
    title: "In-House Production",
    desc: "We own our production facility in Al Quoz, so we deliver faster and at better prices than broker agencies.",
    icon: FaWarehouse,
  },
  {
    title: "500+ Trained Staff",
    desc: "Over 500 trained promoters and hostesses speaking English, Arabic, Hindi, Tagalog, and Russian.",
    icon: FaUsers,
  },
  {
    title: "Daily Reporting",
    desc: "Daily photo and video reporting, quick replacements, and free storage for your promotion materials.",
    icon: FaClock,
  },
  {
    title: "Complete Printing Support",
    desc: "Full printing support for flyers, uniforms, gifts, and backdrops — everything under one roof.",
    icon: FaPrint,
  },
  {
    title: "Fast Approvals",
    desc: "We navigate Dubai Municipality, DTCM, and mall authority permissions quickly so you can launch on time.",
    icon: FaBuilding,
  },
  {
    title: "UAE & GCC Wide",
    desc: "From small weekend promotions with 2 promoters to month-long UAE-wide campaigns with 100+ staff.",
    icon: FaGlobe,
  },
];

const locations = ["UAE", "KSA", "Oman", "Qatar", "Bahrain", "Kuwait"];

export default function PromotionsPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-[var(--primary)] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-[72px] pb-20 md:pt-[104px] overflow-hidden bg-[#EAF4E1]">
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
                  Promotions · Staffing · Activations
                </span>
              </div>

              <div className="max-w-6xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6 leading-[1.1]">
                  Engage, activate, and{" "}
                  <br />
                  <span className="gradient-text">sell on the ground.</span>
                </h1>
              </div>

              <div className="max-w-3xl">
                <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                  Expo Digital Group LLC is a full-service promotions and event staffing agency based in Dubai, supporting local and international brands with on-ground marketing that creates real connections with customers across the UAE and GCC.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="group bg-gradient-to-r from-[var(--primary)] to-orange-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300">
                  Get Free Activation Plan
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#services" className="bg-white/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-sm">
                  Explore Our Services
                </Link>
              </div>

              {/* <div className="flex items-center gap-6 mt-10 pt-6 border-t border-zinc-950/5">
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
                  <p className="text-xs text-zinc-500 mt-0.5 font-semibold">Promotions delivered across UAE &amp; GCC</p>
                </div>
              </div> */}
            </motion.div>

            {/* RIGHT — Showcase card */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md rounded-[3rem] border border-white p-6 shadow-2xl">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-inner bg-gradient-to-br from-[var(--primary)]/20 via-orange-500/10 to-amber-500/5 flex flex-col justify-between p-8">
                  <div className="absolute inset-0">
                    <div className="absolute top-8 right-8 w-24 h-24 bg-[var(--primary)]/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-8 left-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-orange-600 flex items-center justify-center shadow-xl">
                      <FaHandshake className="text-white text-xl" />
                    </div>
                    <div className="bg-white/80 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 shadow-sm">
                      Al Quoz, Dubai
                    </div>
                  </div>

                  <div className="relative z-10 space-y-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-white/60">
                        <FaWarehouse className="text-[var(--primary)] mb-2" />
                        <p className="text-2xl font-black text-zinc-950">In-House</p>
                        <p className="text-xs font-semibold text-zinc-500">Production Facility</p>
                      </div>
                      <div className="bg-zinc-950 text-white rounded-2xl p-4 shadow-xl">
                        <FaUsers className="text-[var(--primary)] mb-2" />
                        <p className="text-2xl font-black">500+</p>
                        <p className="text-xs font-semibold text-zinc-400">Trained Staff</p>
                      </div>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-white/60">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Quotation Turnaround</p>
                        <FaClock className="text-[var(--primary)]" />
                      </div>
                      <p className="text-3xl font-black text-zinc-950">
                        <span className="gradient-text">4</span> Hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH TICKER BANNER */}
      <div className="border-y border-white/40 bg-[#EAF4E1] py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-500">
            <span className="text-zinc-900 flex items-center gap-2">
              <FaGlobe className="text-[var(--primary)] text-base" /> Active Coverage Across:
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

      {/* INTRO / ABOUT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            className="grid lg:grid-cols-12 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="lg:col-span-5">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Our Approach
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
                Everything in-house,{" "}
                <span className="gradient-text">from concept to reporting.</span>
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600 mb-6">
                With our head office and production facility in Al Quoz, Dubai (WH 2–4 &amp; 7), we manage everything in-house — from concept and design to building promotion kiosks, printing, staffing, permissions, and reporting.
              </p>
              <p className="text-base leading-relaxed text-zinc-500">
                This gives you faster execution, better quality, and lower cost. No middlemen, no surprises, just reliable on-ground delivery.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Concept & Design", d: "Creative that converts", i: FaRocket, g: "from-orange-500 to-amber-500" },
                  { t: "Kiosk Build", d: "Al Quoz production facility", i: FaWarehouse, g: "from-emerald-500 to-teal-500" },
                  { t: "Printing", d: "Flyers · Uniforms · Backdrops", i: FaPrint, g: "from-violet-500 to-fuchsia-500" },
                  { t: "Permissions & Logistics", d: "Municipality · DTCM · Malls", i: FaBuilding, g: "from-blue-500 to-cyan-500" },
                ].map((it, i) => (
                  <div
                    key={i}
                    className="bg-[#EAF4E1]/60 border border-white rounded-[2rem] p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${it.g} flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform`}>
                      <it.i className="text-white text-lg" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 mb-1.5">{it.t}</h3>
                    <p className="text-sm text-zinc-500 font-semibold">{it.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Our Promotions Services
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Five ways we help your brand{" "}
              <span className="gradient-text">connect &amp; convert.</span>
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              From in-store sampling to exhibition staffing, every service is fully managed end-to-end by our in-house teams.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                className="group grid lg:grid-cols-12 gap-8 items-center bg-white/70 backdrop-blur-md border border-white rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-[var(--primary)]/15 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`lg:col-span-2 flex ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative shrink-0">
                    <div className={`absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br ${svc.gradient} opacity-25 blur-xl group-hover:opacity-40 group-hover:blur-2xl transition-all duration-700`} />
                    <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-br ${svc.gradient} opacity-50 scale-95 group-hover:scale-100 group-hover:opacity-70 transition-all duration-500`} />
                    <div className={`relative w-20 h-20 rounded-[1.85rem] bg-gradient-to-br ${svc.gradient} flex items-center justify-center shadow-[0_12px_32px_-6px_rgba(0,0,0,0.25)] ring-[3px] ring-white/90 overflow-hidden group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-[0_20px_48px_-10px_rgba(0,0,0,0.35)] transition-all duration-500`}>
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" />
                      <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-white/10 blur-md group-hover:w-16 group-hover:h-16 transition-all duration-700" />
                      <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-white/20 blur-sm" />
                      <svc.icon className="relative z-10 text-white text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                      {svc.eyebrow}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-4 leading-tight group-hover:tracking-tight transition-all duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-zinc-600 max-w-4xl mb-6">
                    {svc.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-2.5 mb-5">
                    {svc.highlights.map((hl, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${svc.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                          <FaCheck className="text-white text-[10px]" />
                        </div>
                        <span className="text-sm font-semibold text-zinc-700 leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {svc.chips.map((chip, j) => (
                      <span
                        key={j}
                        className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-600 bg-[#EAF4E1]/70 border border-[var(--primary)]/10 px-3 py-1.5 rounded-full group-hover:border-[var(--primary)]/25 group-hover:text-zinc-900 transition-all duration-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Why Clients Choose Us
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Built for brands that demand{" "}
              <span className="gradient-text">speed, quality, and value.</span>
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              We have worked with brands from across the globe in sectors such as FMCG, beauty, automotive, real estate, technology, healthcare, and hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#EAF4E1]/60 border border-white rounded-[2rem] p-8 hover:shadow-lg hover:-translate-y-2 hover:border-[var(--primary)]/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-orange-600 flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-zinc-950 mb-3">{item.title}</h3>
                <p className="text-base leading-relaxed text-zinc-600 font-semibold">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Scale statement */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-zinc-950 to-zinc-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h3 className="text-3xl md:text-4xl font-bold leading-[1.15] mb-4">
                  Scale according to your needs.
                </h3>
                <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl font-semibold">
                  From small weekend promotions with 2 promoters to month-long UAE-wide campaigns with 100+ staff, we scale seamlessly. If you are looking for a reliable promotions partner who understands the UAE market, can get approvals quickly, and can execute flawlessly on the ground — we are ready.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-[var(--primary)] to-orange-500 text-white px-8 py-5 rounded-full font-bold flex items-center gap-2.5 hover:shadow-2xl hover:shadow-[var(--primary)]/30 transition-all duration-300 text-base shrink-0"
                >
                  Contact Promotions Team
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA STRIP */}
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
                <FaClock className="text-[var(--primary)] text-sm" />
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Response within 4 Hours
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-950 leading-[1.15]">
                Ready to promote your brand{" "}
                <span className="gradient-text">the right way?</span>
              </h3>
              <p className="text-base text-zinc-600 font-semibold mt-3 max-w-md mx-auto md:mx-0">
                Get a free activation plan and quotation — delivered within 4 hours.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2.5 justify-center">
              {["FMCG", "Beauty", "Automotive", "Real Estate", "Tech", "Healthcare", "Hospitality"].map((w, i) => (
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
    </main>
  );
}
