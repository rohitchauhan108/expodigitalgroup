"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import TopBar from "@/components/TopBar";
import {
  Building2,
  Crosshair,
  Gauge,
  Hammer,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Services from "@/components/Services";

// Hero Slider Data Configuration
const heroSlides = [
  {
    id: 1,
    tagline: "PREMIUM EXHIBITION STAND BUILDERS",
    titleStart: "We Bring Your",
    titleHighlight: "Project To Life",
    description:
      "From high-end custom bespoke booths to eco-friendly modular structures. We turn original concepts into breathtaking, eye-catching spaces that stand out on competitive show floors.",
    bgImage:
      "/banners/banner1.webp",
  },
  {
    id: 2,
    tagline: "CUSTOM BESPOKE & SUSTAINABLE DESIGNS",
    titleStart: "Engineering Unrivaled",
    titleHighlight: "Brand Presence",
    description:
      "Maximize foot traffic and leave a lasting impression with our engineered Modular Sustainable reusable tech and tailor-made architectural exhibition environments.",
    bgImage:
      "/banners/banner2.webp",
  },
  {
    id: 3,
    tagline: "TURNKEY EVENT & MALL ACTIVATIONS",
    titleStart: "Transforming Spatial",
    titleHighlight: "Customer Engagement",
    description:
      "Complete end-to-end execution directly from our factory compound: fast fabrication, seamless logistics, and strict venue-compliant installation.",
    bgImage:
      "/banners/banner3.webp",
  },
];

// Fade-up animation helper preset for section headers & cards
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, once: true }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const numericEnd = parseFloat(String(end).replace(/[^0-9.]/g, ""));
    const onlySuffix = String(end).replace(/[0-9.]/g, "");
    const displaySuffix = suffix || onlySuffix;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericEnd));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(numericEnd);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix || String(end).replace(/[0-9.]/g, "")}</span>;
}

function FAQCard({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-colors"
      animate={{
        borderColor: isOpen ? "rgba(24,24,27,0.3)" : "rgba(228,228,231,1)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-zinc-950 pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-zinc-400 flex-shrink-0"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-100/80 bg-zinc-50/30 text-sm md:text-base">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play timer for hero carousel (12s per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  const principles = [
    {
      title: "Precision",
      description: "Millimetres matter. A stand that is almost right is wrong.",
      icon: Crosshair,
    },
    {
      title: "Speed",
      description: "Show dates do not move. Neither do ours.",
      icon: Gauge,
    },
    {
      title: "Accountability",
      description: "One team, one contract. If it is our stand, it is our problem.",
      icon: ShieldCheck,
    },
    {
      title: "Craft",
      description: "We are builders first. The finish is the brand.",
      icon: Hammer,
    },
  ];

  const services = [
    {
      title: "Exhibition Stand Design & Build",
      description:
        "Tailor-made, structurally unique bespoke builds designed entirely in-house from scratch to reflect your precise corporate identity and trade show goals.",
      badge: "Custom Production",
    },
    {
      title: "Modular Sustainable Stand System",
      description:
        "Our proprietary premium eco-friendly modular profiles. Engineered with zero wood and zero waste, offering over 50 dynamic combinations for repetitive multi-event use.",
      badge: "Green Modular",
    },
    {
      title: "Promotions & Mall Activations",
      description:
        "Eye-catching commercial kiosks and promotional brand activation zones constructed with premium fast-turnaround SEG frame and textile systems.",
      badge: "Brand Pop-Ups",
    },
  ];

  const expertiseTags = [
    "Custom Fabrications",
    "Bespoke Stands",
    "Modular Reusable Tech",
    "Mall Activations",
    "Furniture Rentals",
    "Excellence on Brief",
    "Turnkey Project Management",
    "Exhibition & Booth Logistics",
    "3D Architectural Renderings",
    "In-House Production Facility",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Detailed Consultation & Briefing",
      desc: "We analyze your precise target exhibition parameters, spatial footprint limitations, and aesthetic targets to formulate custom concepts.",
    },
    {
      num: "02",
      title: "High-Quality In-House Design",
      desc: "Our skilled design architects model beautiful, ultra-realistic 3D environmental mockups engineered strategically to optimize attendee foot traffic.",
    },
    {
      num: "03",
      title: "Turnkey Fabrication & Handover",
      desc: "Flawless end-to-end execution directly from our factory including manufacturing, safe venue delivery, on-site setup assembly, dismantling, and safe storage.",
    },
  ];

  const faqs = [
    {
      question: "Do you handle the entire exhibition cycle in-house?",
      answer:
        "Yes, Expo Digital Group is a complete turnkey provider. We handle everything from creative conceptual 3D design renders and in-house manufacturing at our factory compound to shipping, floor assembly, dismantling, and safe storage.",
    },
    {
      question: "What exactly is the Modular Portable Sustainable Stand System?",
      answer:
        "Modular Sustainable is our innovative, eco-conscious modular profiling setup. It gives you a premium, heavy custom-built appearance but generates absolutely zero waste, skips wood elements, and can be recombined into over 50 unique spatial variations for multiple exhibitions.",
    },
    {
      question: "Which regions and exhibition venues do you cover?",
      answer:
        "While our primary fabrication facility operates locally out of Dubai, we regularly deliver turnkey pavilions, booths, and pop-up activations for premium global brands across major Middle Eastern hubs and premier global exhibition spaces.",
    },
  ];

  const marqueeItems = [
    "Bespoke Exhibition Booths",
    "Promotional & Mall Activations",
    "Furniture & AV Rentals",
    "Turnkey Event Fabrication",
  ];

  const text = "UAE | KSA | Oman | India | Europe";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="lg:min-h-screen bg-[#EAF4E1]">
      <TopBar />
      <Navbar />

      {/* 1. Hero Section with Carousel */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-[#EAF4E1] pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="site-shell relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlides[currentSlide].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto max-w-4xl text-center text-zinc-950"
            >
              <p className="mb-4 text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[var(--primary)]">
                {heroSlides[currentSlide].tagline} • {displayText}
              </p>
              <h1 className="mb-8 text-4xl font-black tracking-tight text-zinc-950 md:text-6xl lg:text-[76px] leading-[1.05]">
                {heroSlides[currentSlide].titleStart}{" "}
                <span className="gradient-text">
                  {heroSlides[currentSlide].titleHighlight}
                </span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-800 md:text-xl font-semibold">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/custom-solution" className="w-full sm:w-auto rounded-full bg-[var(--primary)] px-10 py-4 font-black text-white transition-transform hover:scale-105 shadow-lg shadow-[var(--primary)]/30">
                  Explore Our Custom Solutions
                </Link>
                <Link href="/contact" className="w-full sm:w-auto rounded-full border border-zinc-300 bg-white/90 backdrop-blur-md px-10 py-4 font-black text-zinc-950 transition-all hover:bg-white hover:border-zinc-950 shadow-md shadow-zinc-900/5">
                  Request a Design Quote
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full px-3 py-2 shadow-md">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-10 h-8 rounded-full text-xs font-black transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-gradient-to-r from-[var(--primary)] to-orange-600 text-white shadow-lg shadow-[var(--primary)]/30"
                  : "text-zinc-500 hover:text-zinc-950"
              }`}
            >
              {String(idx + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Infinite Services Marquee Section */}
      <section className="border-b border-zinc-200 py-8 overflow-hidden bg-white/30 backdrop-blur-sm">
        <motion.div
          className="w-full relative flex [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex whitespace-nowrap items-center gap-16 pr-16"
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...marqueeItems, ...marqueeItems].map((title, index) => (
              <div key={index} className="flex items-center gap-4 flex-shrink-0">
                <div className="h-2 w-2 rounded-full bg-orange-500 opacity-80" />
                <span className="text-xl font-bold uppercase tracking-wider text-zinc-700">
                  {title}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Our Principles */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="site-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col items-center px-4 ${
                    idx < principles.length - 1 ? "md:border-r md:border-zinc-200" : ""
                  }`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-zinc-950">
                    {principle.title}
                  </h3>
                  <p className="max-w-[16rem] text-center text-sm md:text-base leading-relaxed text-zinc-600">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Advanced About Section */}
      <section className="relative py-24 md:py-32 overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px)] bg-[size:10%_100%] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="site-shell relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <motion.div
              className="relative lg:col-span-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative aspect-[4/5] w-full origin-center scale-[0.94] overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-100 shadow-[0_30px_80px_rgba(17,17,17,0.08)] group">
                <motion.img
                  src="https://videocdn.cdnpk.net/videos/f052324d-675d-5c39-a8e2-2aa87f1c0d0c/vertical/thumbnails/large.jpg?uid=R212285470&ga=GA1.1.1383789883.1786786872&semt=ais_hybrid&item_id=7421719&w=740&q=80"
                  alt="Expo Digital production showroom"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/70 p-6 backdrop-blur-md hidden sm:block shadow-lg"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-zinc-950 mb-1">
                    On-Time & On-Brief Delivery
                  </p>
                  <p className="text-xs text-zinc-600">
                    Managing complete fabrication complexity & strict venue compliance across all major exhibition centres smoothly.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-6 lg:pl-6">
              <motion.p
                className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]"
                {...fadeUp}
              >
                Excellence in Spatial Branding
              </motion.p>
              <motion.h2
                className="mb-6 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl"
                {...fadeUp}
                transition={{ delay: 0.1 }}
              >
                We translate creative ideas into{" "}
                <span className="gradient-text">majestic environments</span>.
              </motion.h2>
              <motion.p
                className="mb-6 text-lg leading-relaxed text-zinc-600"
                {...fadeUp}
                transition={{ delay: 0.2 }}
              >
                With an unwavering dedication to in-house craftsmanship, strict material selection, and rigorous design execution, Expo Digital Group guarantees that your presence stands out beautifully in any high-traffic exhibition hall.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, staggerChildren: 0.05 }}
              >
                {expertiseTags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold text-zinc-700 cursor-default"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(24,24,27,0.3)",
                      backgroundColor: "#fff",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Redesigned Why Expo Digital Section with Integrated Stats */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-zinc-50/50" id="why-us">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px)] bg-[size:10%_100%] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="site-shell relative z-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-8">
              <motion.div {...fadeUp}>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                  Why Choose Expo Digital
                </p>
                <h2 className="mb-6 text-3xl font-bold text-zinc-950 md:text-5xl tracking-tight leading-tight">
                  Designed to the brief. <br className="hidden sm:inline" />
                  <span className="gradient-text">Engineered to dominate</span> the floor.
                </h2>
                <p className="text-lg leading-relaxed text-zinc-600">
                  We handle the high-stakes friction of trade show logistics—from initial large format printing design to local fabrication, complex venue clearances, and fast dismantling.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Building2 className="w-5 h-5" />,
                    title: "In-House Production",
                    text: "100% In-House Production. No middlemen or third-party delays.",
                  },
                  {
                    icon: <Rocket className="w-5 h-5" />,
                    title: "Turnkey & On-Time",
                    text: "Navigating strict venue regulations and structural checks for smooth handovers.",
                  },
                  {
                    icon: <Sparkles className="w-5 h-5" />,
                    title: "Eco Modular & Custom",
                    text: "Zero-waste modular framework with 100+ layout variations built to fit.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl transition-colors hover:bg-white/80 hover:shadow-sm group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-950 group-hover:text-[var(--primary)] transition-colors">{item.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative">
              <motion.div
                className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-100 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src="/about.png"
                  alt="Premium Exhibition Stand Build"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-[80px] -z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Core Services Section */}
      <section className="border-y border-zinc-200 py-10 lg:py-24" id="services">
        <div className="site-shell">
          <motion.div
            className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            {...fadeUp}
          >
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Our Core Capabilities
              </p>
              <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl">
                Visual Power. <span className="gradient-text">Flawless Assembly.</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              From high-impact bespoke design solutions to eco-conscious modular configurations, we engineer custom spaces that command customer engagement.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-2 w-12 rounded-full bg-brand-gradient transition-all duration-300 group-hover:w-20" />
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
                    {service.badge}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-zinc-950 transition-colors group-hover:text-[var(--primary)]">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-zinc-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Services/>

      {/* 7. UPDATED: Connected Timeline Production Framework with Matching Gradient Font */}
      <section className="py-24 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <motion.div className="mb-20 max-w-3xl" {...fadeUp}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
              Production Framework
            </p>
            <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl tracking-tight leading-tight">
              Our path to{" "}
              <span className="gradient-text">
                experiential precision.
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 rounded-full z-0 opacity-40" />

            <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.num}
                  className="group relative flex flex-col items-start rounded-3xl border border-white/80 bg-white/80 p-8 md:p-10 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:border-orange-400/40 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold">{step.num}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
                      Phase {step.num}
                    </span>
                    {index < processSteps.length - 1 && (
                      <svg className="hidden lg:block w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-zinc-950 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-zinc-600">
                    {step.desc}
                  </p>

                  <div className="absolute bottom-0 left-8 right-8 h-1 scale-x-0 rounded-t-full bg-gradient-to-r from-orange-500 to-amber-500 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Recent Projects Portfolio Section */}
      <section className="py-10 lg:py-12" id="projects">
        <div className="site-shell">
          <motion.div
            className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            {...fadeUp}
          >
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Featured Portfolio
              </p>
              <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl">
                Spaces built <span className="gradient-text">to captivate.</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              A detailed glimpse inside our premium fabrications across Dubai&apos;s primary commercial and retail exhibition hubs.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {heroSlides.map((project, index) => (
              <motion.article
                key={project.id}
                className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(17,17,17,0.06)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.bgImage}
                    alt={project.titleHighlight}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                    {project.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-zinc-950">
                    {project.titleStart} {project.titleHighlight}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Accordion Section */}
      <section
        className="border-t border-zinc-200 py-10 lg:py-16 md:py-16 relative overflow-hidden"
        id="faq"
      >
        <div className="site-shell max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Inquiries & Clarity
            </p>
            <h2 className="text-2xl font-bold text-zinc-950 md:text-3xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <FAQCard key={index} faq={faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 10. Call-To-Action Section */}
      <section className="relative overflow-hidden py-10 lg:py-12 lg:pb-28">
        <div className="site-shell relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="mx-auto mb-12 max-w-4xl text-3xl font-bold leading-tight text-zinc-950 md:text-5xl">
              Ready to transform your brand <br className="hidden sm:inline" />
              <span className="gradient-text">into an architectural experience?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-[var(--primary)] px-10 py-4 font-bold text-white transition-transform hover:scale-105 shadow-xl shadow-[var(--primary)]/30">
                Get Started Today
              </Link>
              <Link href="/custom-solution" className="rounded-full border border-zinc-300 bg-white px-10 py-4 font-bold text-zinc-900 transition-all hover:bg-zinc-100">
                View Our Custom Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingIcons />
      <Footer />
    </main>
  );
}