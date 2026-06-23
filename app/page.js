"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fade-up animation helper preset for section headers & cards
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

function FAQCard({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-colors"
      animate={{ borderColor: isOpen ? "rgba(24,24,27,0.3)" : "rgba(228,228,231,1)" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-display text-lg font-bold text-zinc-950 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-zinc-400 flex-shrink-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
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
  const stats = [
    { label: "Years Experience", value: "18+" },
    { label: "Successful Projects", value: "2200+" },
    { label: "Events & Exhibitions", value: "500+" },
    { label: "Satisfied Clients", value: "50+" },
  ];

  // Dynamically generate your 22 client logo paths from public/client-logo/
  const clientLogos = Array.from({ length: 22 }, (_, i) => `/client-logo/${i + 1}.jpeg`);

  const principles = [
    {
      title: "Our Mission",
      text: "Redefining the art of showcasing corporate excellence. Our meticulously crafted architectural structures amplify your brand's presence and leave a profound impact on competitive floors.",
    },
    {
      title: "Our Vision",
      text: "To transform your original concepts into majestic, functional environments—boosting global brand visibility to completely unmatched levels across city and across venue the region.",
    },
    {
      title: "Our Values",
      text: "Uncompromising structural integrity, elite interior craftsmanship, absolute transparent collaboration, and a deep commitment to modern eco-friendly exhibition formats.",
    },
  ];

  const recentProjects = [
    {
      title: "Custom Bespoke Exhibition Booth",
      type: "Premium Custom Build",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "MO.PO Sustainable Modular Display",
      type: "Eco-Friendly System",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "High-Traffic Retail Mall Activation",
      type: "Fast Turnkey Deployment",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const services = [
    {
      title: "Exhibition Stand Design & Build",
      description: "Tailor-made, structurally unique bespoke builds designed entirely in-house from scratch to reflect your precise corporate identity and trade show goals.",
      badge: "Custom Production"
    },
    {
      title: "MO.PO Sustainable Stand System",
      description: "Our proprietary premium eco-friendly modular profiles. Engineered with zero wood and zero waste, offering over 50 dynamic combinations for repetitive multi-event use.",
      badge: "Green Modular"
    },
    {
      title: "Retail Outlets & Mall Activations",
      description: "Eye-catching commercial kiosks and promotional brand activation zones constructed with premium fast-turnaround SEG frame and textile systems.",
      badge: "Brand Pop-Ups"
    }
  ];

  const expertiseTags = [
    "Custom Fabrications", "Bespoke Stands", "MO.PO Reusable Tech", 
    "Mall Activations", "Furniture Rentals", "Excellence on Brief", "Turnkey Project Management",
    "DWTC Logistics", "3D Architectural Renderings", "Al Quoz Production Compound"
  ];

  const processSteps = [
    {
      num: "01",
      title: "Detailed Consultation & Briefing",
      desc: "We analyze your precise target exhibition parameters, spatial footprint limitations, and aesthetic targets to formulate custom concepts."
    },
    {
      num: "02",
      title: "High-Quality In-House Design",
      desc: "Our skilled design architects model beautiful, ultra-realistic 3D environmental mockups engineered strategically to optimize attendee foot traffic."
    },
    {
      num: "03",
      title: "Turnkey Fabrication & Handover",
      desc: "Flawless end-to-end execution directly from our factory including manufacturing, safe venue delivery, on-site setup assembly, dismantling, and safe storage."
    }
  ];

  const faqs = [
    {
      question: "Do you handle the entire exhibition cycle in-house?",
      answer: "Yes, Expo Digital Group is a complete turnkey provider. We handle everything from creative conceptual 3D design renders and in-house manufacturing at our Al Quoz compound to shipping, floor assembly, dismantling, and safe storage."
    },
    {
      question: "What exactly is the MO.PO Sustainable Stand System?",
      answer: "MO.PO is our innovative, eco-conscious modular profiling setup. It gives you a premium, heavy custom-built appearance but generates absolutely zero waste, skips wood elements, and can be recombined into over 50 unique spatial variations for multiple exhibitions."
    },
    {
      question: "Which regions and exhibition venues do you cover?",
      answer: "While our primary fabrication facility operates locally out of Dubai, we regularly deliver turnkey pavilions, booths, and pop-up activations for premium global brands across major Middle Eastern hubs including DWTC, ADNEC, and global exhibition spaces."
    }
  ];

  const marqueeItems = [
    "Bespoke Exhibition Booths", 
    "MO.PO Sustainable Stands", 
    "Promotional & Mall Activations", 
    "Commercial Showroom Interiors", 
    "Furniture & AV Rentals", 
    "Turnkey Event Fabrication"
  ];

  return (
    <main className="min-h-screen bg-[#EAF4E1]">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#EAF4E1] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="site-shell">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Premium Exhibition Stand Builders • UAE,USA,Oman,India,
            </p>
            <h1 className="mb-8 text-5xl font-display font-bold tracking-tight text-zinc-950 md:text-7xl lg:text-8xl">
              We Bring Your Dream <span className="gradient-text">Project To Life</span>.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 md:text-xl">
              From high-end custom bespoke booths to eco-friendly modular structures. We turn original concepts into breathtaking, eye-catching spaces that stand out on competitive show floors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto rounded-full bg-[var(--primary)] px-10 py-4 font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-[var(--primary)]/10">
                Explore Our Portfolio
              </button>
              <button className="w-full sm:w-auto rounded-full border border-zinc-200 bg-white px-10 py-4 font-bold text-zinc-950 transition-all hover:bg-zinc-50">
                Request a Design Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Infinite Services Marquee Section */}
      <section className="border-b border-zinc-200 py-8 overflow-hidden">
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
                <div className="h-2 w-2 rounded-full bg-[var(--primary)] opacity-60" />
                <span className="text-xl font-display font-medium uppercase tracking-wider text-zinc-600">
                  {title}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

 
      {/* 4. Clean & Professional Stats Section */}
      <section className="border-b border-zinc-200 py-16 md:py-20" id="stats">
        <div className="site-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center text-center px-4 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <p className="mb-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </p>
                {idx < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-zinc-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Advanced About Section */}
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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-100 shadow-[0_30px_80px_rgba(17,17,17,0.08)] group">
                <motion.img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
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
                  <p className="text-sm font-bold uppercase tracking-wider text-zinc-950 mb-1">On-Time & On-Brief Delivery</p>
                  <p className="text-xs text-zinc-600">Managing complete fabrication complexity & strict venue logistics across DWTC & ADNEC smoothly.</p>
                </motion.div>
              </div>
              <div className="absolute -bottom-10 -left-10 -z-10 h-72 w-72 rounded-full bg-brand-gradient opacity-15 blur-[100px]" />
            </motion.div>

            <div className="lg:col-span-6 lg:pl-6">
              <motion.p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]" {...fadeUp}>
                Excellence in Spatial Branding
              </motion.p>
              <motion.h2 className="mb-6 font-display text-4xl font-bold leading-tight text-zinc-950 md:text-5xl lg:text-6xl" {...fadeUp} transition={{ delay: 0.1 }}>
                We translate creative ideas into <span className="gradient-text">majestic environments</span>.
              </motion.h2>
              <motion.p className="mb-6 text-lg leading-relaxed text-zinc-600" {...fadeUp} transition={{ delay: 0.2 }}>
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
                    whileHover={{ scale: 1.05, borderColor: "rgba(24,24,27,0.3)", backgroundColor: "#fff" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Why Expo Digital Section */}
      <section className="py-24">
        <div className="site-shell">
          <motion.div className="mb-14 max-w-3xl" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Why Choose Us</p>
            <h2 className="mb-5 text-4xl font-display font-bold text-zinc-950 md:text-6xl">Designed to the brief. Built to impress.</h2>
            <p className="text-lg leading-relaxed text-zinc-600">As a premier custom trade show contractor in Dubai, we manage initial concepts, interior fabrication, safety handovers, dismantling, and long-term asset storage smoothly under one roof.</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.div 
                key={item.title} 
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_16px_40px_rgba(17,17,17,0.05)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-5 h-1.5 w-16 rounded-full bg-brand-gradient" />
                <h3 className="mb-4 text-2xl font-display font-bold text-zinc-950">{item.title}</h3>
                <p className="leading-relaxed text-zinc-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Core Services Section */}
      <section className="border-y border-zinc-200 py-24" id="services">
        <div className="site-shell">
          <motion.div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" {...fadeUp}>
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Our Core Capabilities</p>
              <h2 className="text-4xl font-display font-bold text-zinc-950 md:text-6xl">Visual Power. Flawless Assembly.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">From high-impact bespoke design solutions to eco-conscious modular configurations, we engineer custom spaces that command customer engagement.</p>
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
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-500">{service.badge}</span>
                </div>
                <h3 className="mb-4 text-2xl font-display font-bold text-zinc-950 transition-colors group-hover:text-[var(--primary)]">{service.title}</h3>
                <p className="leading-relaxed text-zinc-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Workflow Process Section */}
      <section className="border-t border-zinc-200 py-24">
        <div className="site-shell">
          <motion.div className="mb-20 max-w-3xl" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Production Framework</p>
            <h2 className="font-display text-4xl font-bold text-zinc-950 md:text-6xl">Our path to experiential precision.</h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.num} 
                className="group relative rounded-3xl border border-zinc-200 bg-white p-10 transition-all duration-300 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.04)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-8 font-display text-5xl font-extrabold tracking-tight text-zinc-100 transition-colors group-hover:text-[var(--primary)]/10 md:text-6xl">{step.num}</div>
                <h3 className="mb-4 font-display text-2xl font-bold text-zinc-950">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-600">{step.desc}</p>
                <div className="absolute bottom-0 left-10 right-10 h-[2px] scale-x-0 bg-brand-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Recent Projects Portfolio Section */}
      <section className="py-24" id="projects">
        <div className="site-shell">
          <motion.div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" {...fadeUp}>
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Featured Portfolio</p>
              <h2 className="text-4xl font-display font-bold text-zinc-950 md:text-6xl">Spaces built to captivate.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">A detailed glimpse inside our premium fabrications across Dubai&apos;s primary commercial and retail exhibition hubs.</p>
          </motion.div>
          
          <div className="grid gap-6 lg:grid-cols-3">
            {recentProjects.map((project, index) => (
              <motion.article 
                key={project.title} 
                className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(17,17,17,0.06)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">{project.type}</p>
                  <h3 className="text-2xl font-display font-bold text-zinc-950">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion Section */}
      <section className="border-t border-zinc-200 py-24 md:py-32 relative overflow-hidden" id="faq">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        <div className="site-shell max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary)]">Inquiries & Clarity</p>
            <h2 className="font-display text-4xl font-bold text-zinc-950 md:text-5xl">Frequently Asked Questions</h2>
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

      {/* 11. Quote / Call-To-Action Section */}
      <section className="relative overflow-hidden py-28">
        <div className="site-shell relative z-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="mx-auto mb-12 max-w-4xl text-3xl font-display font-bold leading-tight text-zinc-950 md:text-5xl">
              We consistently exceed our clients&apos; expectations by providing tailor-made solutions that are both <span className="italic gradient-text">eye-catching</span> and functional.
            </h2>
            <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-brand-gradient" />
            <button className="rounded-full bg-[var(--primary)] px-12 py-5 font-bold text-white transition-transform hover:scale-105 shadow-xl shadow-[var(--primary)]/20">
              Let&apos;s Build Something Extraordinary
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}