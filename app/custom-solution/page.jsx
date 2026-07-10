"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCube,
  FaPalette,
  FaTruck,
  FaWrench,
  FaCheckCircle,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLightbulb,
  FaMedal,
} from "react-icons/fa";
import { GiGameConsole } from "react-icons/gi";
import { GrCompliance } from "react-icons/gr";
import { GrSchedules } from "react-icons/gr";
// Moved outside the component to prevent recreation on every single render pass
const GALLERY_IMAGES = [
  "/custom-solution/37.png",
  "/custom-solution/36.png",
  "/custom-solution/35.png",
  "/custom-solution/34.png",
  "/custom-solution/33.png",
  "/custom-solution/32.png",
  "/custom-solution/31.png",
  "/custom-solution/30.png",
  "/custom-solution/29.png",
  "/custom-solution/28.png",
  "/custom-solution/27.png",
  "/custom-solution/26.png",
  "/custom-solution/25.png",
  "/custom-solution/24.png",
  "/custom-solution/23.png",
  "/custom-solution/22.png",
  "/custom-solution/21.png",
  "/custom-solution/19.png",
  "/custom-solution/18.png",
  "/custom-solution/16.png",
  "/custom-solution/15.png",
  "/custom-solution/14.png",
  "/custom-solution/13.png",
  "/custom-solution/12.png",
  "/custom-solution/11.png",
  "/custom-solution/10.png",
  "/custom-solution/9.png",
  "/custom-solution/8.png",
  "/custom-solution/3.png",
];

const IMAGES_PER_LOAD = 15;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const itemsPerPage = IMAGES_PER_LOAD;
  const totalPages = Math.ceil(GALLERY_IMAGES.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = GALLERY_IMAGES.slice(indexOfFirstItem, indexOfLastItem);

  // Helper to generate page numbers (with ellipsis for large number of pages)
  const getPaginationNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      // If 5 or fewer pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // More than 5 pages: show first, last, current, and adjacent
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

  const openImage = (globalIndex) => {
    setSelectedIndex(globalIndex);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === null || prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === null || prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1,
    );
  };

  const handleImageRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  const services = [
    {
      title: "Bespoke Exhibition Stands",
      description: "Tailor-made designs reflecting your corporate identity",
      icon: FaBuilding,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "3D Design & Visualization",
      description: "Stunning renderings before fabrication",
      icon: FaCube,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Graphics & Branding",
      description: "Premium printing and visual elements",
      icon: FaPalette,
      color: "from-yellow-400 to-amber-500",
    },
    {
      title: "Logistics & Installation",
      description: "Safe delivery and on-site setup",
      icon: FaTruck,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Fabrication & Build",
      description: "High-quality in-house manufacturing",
      icon: FaWrench,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "End-to-End Solutions",
      description: "Complete turnkey exhibition services",
      icon: FaCheckCircle,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const locations = [
    {
      city: "Dubai",
      country: "UAE",
      venue: "DWTC, DEC, Expo City Dubai",
      icon: FaMapMarkerAlt,
    },
    {
      city: "Abu Dhabi",
      country: "UAE",
      venue: "ADNEC",
      icon: FaMapMarkerAlt,
    },
    {
      city: "Riyadh",
      country: "KSA",
      venue: "Riyadh Exhibition Centre",
      icon: FaMapMarkerAlt,
    },
    {
      city: "Jeddah",
      country: "KSA",
      venue: "Regional Exhibition Hub",
      icon: FaMapMarkerAlt,
    },
  ];

  const events = [
    { name: "GITEX Dubai", icon: FaCalendarAlt },
    { name: "Gulfood", icon: FaCalendarAlt },
    { name: "Arab Health", icon: FaCalendarAlt },
    { name: "The Big 5 Saudi", icon: FaCalendarAlt },
    { name: "LEAP Riyadh", icon: FaCalendarAlt },
    { name: "BeautyWorld", icon: FaCalendarAlt },
  ];

  const capabilities = [
    { label: "Shell Scheme Upgrades", icon: GrSchedules },
    { label: "VIP Lounges & Lounges", icon: FaMedal },
    { label: "Interactive Digital Displays", icon: FaLightbulb },
    { label: "Double Decker Stands KSA", icon: FaBuilding },
    { label: "Sustainable Construction", icon: GiGameConsole },
    { label: "Fast Delivery", icon: FaTruck },
    { label: "DWTC Compliance", icon: GrCompliance },
    { label: "Turnkey Solutions", icon: FaCheckCircle },
  ];

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 md:pt-56 overflow-hidden bg-[#EAF4E1]">
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-center">
          <motion.div
            className="max-w-3xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white border border-[var(--primary)]/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-zinc-700">
                Custom Exhibition Solutions
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-950 mb-6 leading-tight">
              Elevate Your Brand with{" "}
              <span className="gradient-text">Bespoke Exhibition Stands</span>
            </h1>

            <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Custom Show Emirates specializes in designing and building world-class exhibition stands that transform your brand presence. From concept to installation—we deliver ROI-driven solutions across the UAE and Saudi Arabia.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-[var(--primary)] to-orange-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-[var(--primary)]/30 transition-all hover:-translate-y-1">
                Get Free 3D Proposal
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-zinc-200 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:shadow-lg">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Complete turnkey exhibition solutions from concept to installation
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative p-8 rounded-2xl border border-zinc-200 hover:border-[var(--primary)]/50 transition-all duration-300 overflow-hidden bg-white hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">
              We Serve Across UAE & KSA
            </h2>
            <p className="text-lg text-zinc-600">
              Premium exhibition stand solutions in your city
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {locations.map((loc, idx) => {
              const Icon = loc.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative bg-white/70 backdrop-blur-md border border-white/50 p-8 rounded-2xl text-center hover:bg-white hover:border-[var(--primary)]/30 transition-all hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Icon className="text-[var(--primary)] text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-zinc-600 mb-3 font-semibold">
                    {loc.country}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {loc.venue}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">
              We Build For Top Events
            </h2>
            <p className="text-lg text-zinc-600">
              Trusted by brands for industry-leading exhibitions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, idx) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-orange-500 to-[var(--secondary)] opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-10 text-white text-center flex flex-col items-center justify-center min-h-32">
                    <Icon className="text-4xl mb-4 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-lg">{event.name}</p>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-12 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">
              What Makes Us Stand Out
            </h2>
            <p className="text-lg text-zinc-600">
              Top 8 Exhibition Stand Builder in Dubai and Regional Leaders
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 text-center hover:bg-white hover:border-[var(--primary)]/30 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Icon className="text-[var(--primary)] text-2xl mx-auto mb-3 group-hover:scale-125 transition-transform" />
                  <p className="font-semibold text-zinc-950 text-sm leading-tight">
                    {capability.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    
      {/* Portfolio Gallery */}
      <section className="py-24 bg-[#EAF4E1]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div className="text-center mb-20" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-zinc-600">
              Showcase of bespoke exhibitions and stands we've crafted for leading brands
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => {
              const globalIndex = indexOfFirstItem + index;
              return (
                <motion.button
                  key={image}
                  onClick={() => openImage(globalIndex)}
                  onContextMenu={handleImageRightClick}
                  className="overflow-hidden rounded-2xl shadow-lg bg-zinc-950/10 aspect-[4/3] cursor-pointer group relative w-full text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary)] border border-zinc-200 hover:border-[var(--primary)]/50 transition-all"
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${globalIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    draggable={false}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                        <FaArrowRight className="text-[var(--primary)]" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-16">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all font-semibold"
              >
                Prev
              </button>

              {/* Page Numbers */}
              {getPaginationNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={page === '...'}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${
                    page === currentPage
                      ? 'bg-[var(--primary)] text-white'
                      : page === '...'
                      ? 'text-zinc-500 cursor-default'
                      : 'border border-zinc-300 text-zinc-700 hover:border-[var(--primary)] hover:text-[var(--primary)]'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all font-semibold"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center select-none backdrop-blur-sm"
          onClick={closeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-4xl hover:text-orange-400 z-50 transition-colors"
          >
            &times;
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 text-white text-5xl hover:text-[var(--primary)] hover:scale-125 z-50 p-2 transition-all"
          >
            &#10094;
          </button>

          <div
            className="relative w-[92vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_IMAGES[selectedIndex]}
              alt={`Image ${selectedIndex + 1}`}
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
            className="absolute right-4 md:right-8 text-white text-5xl hover:text-[var(--primary)] hover:scale-125 z-50 p-2 transition-all"
          >
            &#10095;
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/60 backdrop-blur-md px-6 py-2 text-sm rounded-full border border-white/20">
            {selectedIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
