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
  FaMapMarkedAlt,
  FaArrowRight,
  FaGlobe,
  FaBuilding,
  FaBolt,
  FaCheckCircle,
  FaHandshake,
  FaPalette,
  FaMoneyBillWave,
  FaChevronDown,
  FaRocket,
  FaChartLine,
  FaCogs,
  FaLayerGroup,
} from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Add placeholder images here later
const GALLERY_IMAGES = [
  "/conference/1.jpeg",
  "/conference/2.jpeg",
  "/conference/3.jpeg",
  "/conference/4.jpeg",
  "/conference/ppt/1.jpg",
  "/conference/ppt/2.jpg",
  "/conference/ppt/3.jpg",
  "/conference/ppt/4.jpg",
  "/conference/ppt/5.jpg",
  "/conference/ppt/6.jpg",
  "/conference/ppt/7.jpg",
  "/conference/ppt/8.jpg",
  "/conference/ppt/9.jpg",
  "/conference/ppt/10.jpg",
  "/conference/ppt/11.jpg",
  "/conference/ppt/12.jpg",
];

const IMAGES_PER_LOAD = 9;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200/50 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-lg text-zinc-950 focus:outline-none group"
      >
        <span className="group-hover:text-[var(--primary)] transition-colors pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-500 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-colors shadow-sm"
        >
          <FaChevronDown size={14} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-zinc-600 text-base pt-4 pb-2 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ConferenceExpoPage() {
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

  const whyChooseUs = [
    {
      title: "Strategic Networking Layouts",
      description: "We design space-optimized networking zones and registration areas engineered to facilitate natural attendee flow and speaker access.",
      icon: FaMapMarkedAlt,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Overnight Rapid Deployment",
      description: "Speed-engineered building modules allow for overnight installation, ensuring your plenary sessions and expo floors are ready by dawn.",
      icon: FaBolt,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Fixed Cost Transparency",
      description: "100% itemized, crystal-clear budgeting lines for large-scale deployments. No unexpected logistical markups or hidden fees.",
      icon: FaMoneyBillWave,
      color: "from-yellow-400 to-amber-500",
    },
    {
      title: "End-to-End Sponsor Support",
      description: "We handle total logistical communication with individual event sponsors, ensuring their brand kiosks meet all venue technical specs.",
      icon: FaHandshake,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Wayfinding & Speaker Backdrops",
      description: "High-definition large format fabric printing for flawless stage backdrops, dynamic wayfinding, and integrated digital signage.",
      icon: FaPalette,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "VIP Lounge & Plenary Scale",
      description: "Modular architecture engineered to transition from intimate VIP speaker lounges to sprawling 100+ unit plenary exhibition halls.",
      icon: FaRocket,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      phase: "Phase 1: Planning",
      title: "Strategic Blueprinting",
      desc: "Custom architectural space-mapping tailored to your venue footprint, attendee traffic flow, and session breakout zones.",
      icon: FaLayerGroup,
      deliverables: ["CAD Floor Layouts", "Networking Zone Maps", "Traffic Flow Models"],
      color: "from-orange-500 to-amber-500",
      badgeClass: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      glowClass: "group-hover:shadow-orange-500/10",
    },
    {
      step: "02",
      phase: "Phase 2: Coordination",
      title: "Sponsor & Speaker Alignment",
      desc: "We interface directly with sponsors and speakers to coordinate kiosk specs, custom backdrops, and premium stage placements.",
      icon: FaCogs,
      deliverables: ["Sponsor Asset Coordination", "Stage Backdrop Fit-outs", "Technical Spec Management"],
      color: "from-emerald-500 to-teal-500",
      badgeClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      glowClass: "group-hover:shadow-emerald-500/10",
    },
    {
      step: "03",
      phase: "Phase 3: Execution",
      title: "Assembly & Plenary Launch",
      desc: "Rapid overnight modular building on-site under clinical supervision, followed by immediate plenary handover and event support.",
      icon: FaChartLine,
      deliverables: ["Rapid Structural Assembly", "Stage & AV Handover", "Safe Teardown Logistics"],
      color: "from-indigo-500 to-purple-500",
      badgeClass: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      glowClass: "group-hover:shadow-indigo-500/10",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to set up a conference booth?",
      answer: "Thanks to our modular and scalable systems, installation is incredibly fast. Most setups can be completed in hours rather than days, ensuring your team can focus on the event itself instead of logistics."
    },
    {
      question: "Can you handle setups for large-scale conferences?",
      answer: "Absolutely. We specialize in accommodating everything from 10-participant corporate activations to 100+ participant booths, maximizing sponsor capacity with smart, scalable designs."
    },
    {
      question: "Do you offer services outside the UAE?",
      answer: "Yes, we deliver turnkey booth solutions across the Middle East, India and Europe, including UAE, KSA, Oman, Qatar, and Egypt. We partner with organizers and corporations regionally."
    },
    {
      question: "Are there any hidden charges in your pricing?",
      answer: "No. We believe in transparent costing. Our pricing is clear and upfront from the initial design phase all the way to final delivery and dismantling."
    }
  ];

  const locations = ["UAE", "KSA", "Oman", "Qatar", "Europe", "India"];

  return (
    <main className="bg-white min-h-screen selection:bg-[var(--primary)] selection:text-white overflow-x-hidden">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 overflow-hidden bg-[#EAF4E1]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=80&auto=format&fit=crop"
            alt="Conference Exhibition Hall"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAF4E1]/95 via-[#EAF4E1]/80 to-[#EAF4E1]/60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[var(--primary)]/20 rounded-full px-4 py-2 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-700">
                  Turnkey Booth Solutions • Sustainable Stands
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6 leading-[1.1]">
                Impactful Conference <br />
                <span className="gradient-text">
                  Exhibition Booths
                </span>
              </h1>

              <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-xl">
                We partner with Organizers and Corporations to engineer premium conference environments. From high-presence <strong>networking pavilions</strong> to <strong>100+ unit plenary expo floors</strong>, we deliver speed and precision.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="group bg-gradient-to-r from-[var(--primary)] to-orange-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-[var(--primary)]/20 transition-all duration-300">
                  Get Free 3D Proposal
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#conference-portfolio" className="bg-white/80 backdrop-blur-sm border border-zinc-200/80 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-sm">
                  View Our Portfolio
                </Link>
              </div>
            </motion.div>

            {/* Right Interactive Structural Visual Mockup Layout */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-md rounded-[3rem] border border-white p-6 shadow-2xl">
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-inner bg-zinc-100">
                  <Image
                    src="/conference/intro.webp"
                    alt="Turnkey Architecture Proposal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Embedded Stats Pill */}
                <div className="absolute -left-6 top-12 bg-zinc-950 text-white p-4 rounded-2xl shadow-xl border border-zinc-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)]">
                    <FaBuilding size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 leading-none">Capacity Scaling</p>
                    <p className="text-sm font-bold mt-1">10 to 100+ Booths</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Global Reach Ticker Banner */}
      <div className="border-y border-white/40 bg-[#EAF4E1] py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-500">
            <span className="text-zinc-900 flex items-center gap-2">
              <FaGlobe className="text-[var(--primary)] text-base" /> Operational Track Record Across:
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

      {/* Premium Split Layout - The Structural Advantage */}
      <section className="py-24 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              className="lg:col-span-5 order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-[2rem] shadow-sm transform translate-y-6">
                  <span className="text-3xl font-bold text-[var(--primary)] block mb-1">Fast</span>
                  <p className="text-sm font-semibold text-zinc-800">Setup Modular Architecture</p>
                </div>
                <div className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-[2rem] shadow-sm">
                  <span className="text-3xl font-bold text-orange-600 block mb-1">Smart</span>
                  <p className="text-sm font-semibold text-zinc-800">Sponsor Configuration Space</p>
                </div>
                <div className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-[2rem] shadow-sm transform translate-y-6">
                  <span className="text-3xl font-bold text-amber-500 block mb-1">Clear</span>
                  <p className="text-sm font-semibold text-zinc-800">Fixed Cost Structure Transparency</p>
                </div>
                <div className="bg-zinc-950 p-6 rounded-[2rem] text-white shadow-xl flex flex-col justify-between">
                  <FaCheckCircle className="text-[var(--primary)] text-2xl" />
                  <p className="text-sm font-bold mt-4 leading-tight">Engineered Flexible Logistics</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Our Advantage
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
                Quick Build. Price Efficient. <br className="hidden sm:inline" />
                <span className="gradient-text">Fast Setup.</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-600">
                Whether it's a tight corporate activation space or a high-volume exhibition hall, our system adapts to scale sponsor capacities safely without logistically complicating layout setups.
              </p>
              <p className="mb-8 text-base leading-relaxed text-zinc-500">
                Every component is tailored explicitly for installation efficiency and seamless teardowns. Your personnel handles on-site networking priorities, while we manage total booth logistics end-to-end.
              </p>
              
              <div className="space-y-4">
                {[
                  "Modular rapid deployment engineering systems",
                  "Adaptable scale infrastructure arrays up to 100+ units",
                  "Complete turnkey physical layout configuration oversight",
                  "Conference-ready staging, LED wall & AV rig integration",
                  "Unified cross-regional delivery across UAE, KSA, India & Europe",
                  "Full compliance, HSE, permits & dedicated on-site supervision"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[var(--primary)] text-xs font-bold shadow-sm flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-zinc-800 font-semibold text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* WORKFLOW PIPELINE SECTION */}
      <section className="relative py-12 border-y border-white/50 overflow-hidden bg-[#EAF4E1]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          
          {/* Section Header */}
          <motion.div className="text-center mb-20" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              How We Execute
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl tracking-tight">
              Conference Space <span className="gradient-text">Execution</span>
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 mt-4 max-w-xl mx-auto">
              Our specialized framework for transforming empty venues into high-engagement plenary spaces and sponsor exhibition floors.
            </p>
          </motion.div>

          {/* Timeline Grid Wrapper */}
          <div className="relative">
            
            {/* Desktop Connecting Flow Line */}
            <div className="hidden lg:block absolute top-[148px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-orange-400/30 via-emerald-400/30 to-indigo-400/30 -z-10" />

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {processSteps.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={idx}
                    className={`group relative bg-white/80 border border-white/80 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 ${p.glowClass} flex flex-col justify-between`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                  >
                    <div>
                      {/* Top Meta Details */}
                      <div className="flex justify-between items-start mb-8">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${p.badgeClass}`}>
                          {p.phase}
                        </span>
                        <span className="text-5xl font-bold text-zinc-950/5 tracking-tighter group-hover:text-zinc-950/10 select-none transition-colors">
                          {p.step}
                        </span>
                      </div>

                      {/* Step Icon with Glowing Background Circle */}
                      <div className="relative mb-6 inline-block">
                        <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 rounded-2xl blur-lg scale-110 group-hover:scale-125 transition-transform duration-300`} />
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-lg`}>
                          <Icon size={22} className="group-hover:rotate-6 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="text-2xl font-bold text-zinc-950 mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-6 font-medium">
                        {p.desc}
                      </p>
                    </div>

                    {/* High-End Deliverable Bullet Highlights */}
                    <div className="border-t border-zinc-100 pt-6 mt-2">
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Key Output:</p>
                      <ul className="space-y-2.5">
                        {p.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2.5 text-xs md:text-sm font-semibold text-zinc-700">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.color}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* NEW WHY CHOOSE US SECTION - INTERACTIVE TAB LIST VIEW LAYOUT */}
      <section className="py-12 bg-[#EAF4E1] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/60 border border-white rounded-full px-4 py-1.5 shadow-sm">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-700">Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-950 tracking-tight leading-[1.15]">
                What makes us the <br />
                <span className="gradient-text">
                  Perfect Choice
                </span>
              </h2>
              
              <p className="text-base text-zinc-600 max-w-md leading-relaxed">
                Strategic space engineering and rapid deployment systems custom-built for high-impact conference pavilions, networking lounges, and multi-track plenary halls.
              </p>
              
              {/* Primary Feature Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-900/10 border border-white/60 group">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://i.pinimg.com/736x/3c/2d/4d/3c2d4ddae96514fd1a43f040880ddd45.jpg"
                    alt="Conference Expo Setup Team"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div className="text-white">
                      <p className="text-xs uppercase tracking-[0.2em] font-bold text-orange-300 mb-1">Live Project</p>
                      <p className="font-bold text-lg leading-tight">Corporate Summit Pavilion, Riyadh</p>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shadow-lg shadow-orange-500/40 flex-shrink-0">
                      <FaArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="bg-white rounded-2xl border border-zinc-200/70 shadow-lg shadow-zinc-900/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-orange-600 text-white flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="text-3xl font-black text-zinc-950 leading-none mb-1">
                      1000+
                    </p>
                    <p className="text-sm font-semibold text-zinc-700 mb-1">Conference &amp; Expo Projects Delivered</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Across UAE, KSA, India and Europe — from intimate corporate conferences to 100+ unit mega exhibition halls.
                    </p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="bg-[#EAF4E1] rounded-xl p-3 border border-zinc-100">
                    <p className="text-xs text-zinc-500 mb-1">Build Speed</p>
                    <p className="font-bold text-zinc-950">50% Faster</p>
                  </div>
                  <div className="bg-[#EAF4E1] rounded-xl p-3 border border-zinc-100">
                    <p className="text-xs text-zinc-500 mb-1">Brand Consistency</p>
                    <p className="font-bold text-zinc-950">100% Uptime</p>
                  </div>
                </div>
              </div>
              
              {/* Dynamic Abstract Graphical Accent */}
              <div className="hidden lg:block pt-2">
                <div className="h-1 w-20 bg-gradient-to-r from-[var(--primary)] to-orange-600 rounded-full" />
                <div className="mt-3 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--primary)]/30" />
                  <div className="w-3 h-3 rounded-full bg-orange-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/10" />
                </div>
              </div>
            </div>

            {/* Right Column - Premium Clean Structural Rows */}
            <div className="lg:col-span-7 space-y-4">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    className="group relative bg-white/30 hover:bg-white border border-white/40 hover:border-white transition-all duration-300 p-8 rounded-[2rem] flex flex-col sm:flex-row gap-6 items-start shadow-sm hover:shadow-xl hover:shadow-zinc-900/5"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    {/* Left Icon Block */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={20} />
                    </div>

                    {/* Right Typography Content */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-[var(--primary)]/40 tracking-wider">
                          0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-zinc-950 group-hover:text-[var(--primary)] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-[#EAF4E1]" id="conference-portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Featured Portfolio
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Our Portfolio
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 max-w-xl mx-auto">
              Showcase of impactful conference booths we've delivered.
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
                    alt={`Portfolio image ${globalIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    draggable={false}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <FaArrowRight className="text-[var(--primary)] text-xl" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Pagination Controls */}
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

      {/* FAQ Section */}
      <section className="py-12 border-t border-zinc-200/40 bg-[#EAF4E1]">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Inquiries & Clarity
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Clear operating profiles regarding architectural production parameters.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white border border-zinc-200/60 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-zinc-900/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern High-Contrast CTA Section */}
      {/* <section className="py-12 pb-32 bg-[#EAF4E1]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div 
            className="relative rounded-[3rem] overflow-hidden bg-white text-zinc-950 shadow-2xl border border-zinc-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 opacity-5 bg-[url('/bg-grid.svg')]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--secondary)]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 mb-8 text-[var(--primary)]">
                <FaBuilding className="text-2xl" />
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
                Let's build your <span className="gradient-text">next booth.</span>
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600 mb-10 max-w-2xl mx-auto md:text-xl">
                Strategic floor planning, transparent pricing, and fast setup. <br/> Get your team ready for the event.
              </p>
              
              <Link href="/contact" className="group relative bg-gradient-to-r from-[var(--primary)] to-orange-600 text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto w-fit">
                Start Your Project
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
      <FloatingIcons />

      {/* Lightbox Modal */}
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
            className="absolute top-6 right-6 text-white/50 text-4xl hover:text-white z-50 transition-colors"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 text-white/50 text-5xl hover:text-white hover:scale-110 z-50 p-2 transition-all"
          >
            &#10094;
          </button>

          <div
            className="relative w-[92vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[selectedIndex]}
              alt={`Portfolio Image ${selectedIndex + 1}`}
              fill
              priority
              draggable={false}
              className="object-contain rounded-lg"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 text-white/50 text-5xl hover:text-white hover:scale-110 z-50 p-2 transition-all"
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