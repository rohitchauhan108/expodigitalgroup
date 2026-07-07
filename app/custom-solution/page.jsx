"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Moved outside the component to prevent recreation on every single render pass
const GALLERY_IMAGES = [
  "/custom-solution/image2.png",
  "/custom-solution/image6.png",
  "/custom-solution/image8.png",
  "/custom-solution/image4.png",
  "/custom-solution/image5.png",
  "/custom-solution/image1.png",
  "/custom-solution/image7.png",
  "/custom-solution/image3.png",
  "/custom-solution/image9.png",
  "/custom-solution/image10.png",
  "/custom-solution/image11.png",
  "/custom-solution/image12.png",
  "/custom-solution/image13.png",
  "/custom-solution/image14.png",
  "/custom-solution/image15.png",
  "/custom-solution/image16.png",
  "/custom-solution/image17.png",
  "/custom-solution/image18.png",
  "/custom-solution/image19.png",
  "/custom-solution/image20.png",
  "/custom-solution/image21.png",
  "/custom-solution/image22.png",
  "/custom-solution/image23.png",
  "/custom-solution/image24.png",
  "/custom-solution/image26.png",
  "/custom-solution/image27.png",
  "/custom-solution/image28.png",
  "/custom-solution/image29.png",
  "/custom-solution/image30.png",
];

const IMAGES_PER_LOAD = 9;

export default function Page() {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + IMAGES_PER_LOAD, GALLERY_IMAGES.length),
    );
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

  // Strictly intercept right clicks ONLY on protected image interfaces
  const handleImageRightClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    setShowPopup(true); 
  };

  // Keyboard Controls
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

  // Disable page scroll while lightbox is open
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

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4E1]">
      <Navbar />

      {/* Hero Header */}
      <header className="flex-grow flex flex-col items-center justify-center text-center gap-6 px-6 py-16 mt-28 max-w-4xl mx-auto">
        <span className="bg-gray-300 font-semibold px-4 py-1.5 rounded-full text-[var(--primary)] text-xs md:text-sm uppercase tracking-wider">
          ELEVATING BRANDS THROUGH INNOVATION
        </span>

        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          PREMIUM EXHIBITION STAND BUILDER IN{" "}
          <span className="text-[var(--primary)]">
            <br /> UAE & KSA
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-700 lowercase leading-relaxed pb-6 border-b-2 border-[var(--primary)]">
          Elevate your brand with bespoke exhibition stands in Dubai, Abu Dhabi,
          and Riyadh. Custom Show Emirates is a leading exhibition stand builder
          in the UAE & KSA, delivering turnkey solutions from 3D design and
          fabrication to graphics, logistics, and on-site installation. We
          specialize in custom, modular, double-decker, and island exhibition
          stands that create memorable brand experiences and maximize ROI.
          Trusted for major venues including DWTC, ADNEC, DEC, Expo City Dubai,
          and Riyadh Exhibition Centre, we provide fast, high-quality execution
          for events like GITEX, Gulfood, Arab Health, LEAP Riyadh, and The Big
          5 Saudi. Get a free 3D stand design proposal and quote for your next
          exhibition.
        </p>
      </header>

      {/* Gallery Section */}
      <main className="max-w-7xl mx-auto w-full px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(0, visibleCount).map((image, index) => (
            <button
              key={image}
              onClick={() => openImage(index)}
              onContextMenu={handleImageRightClick} 
              className="overflow-hidden rounded-lg shadow-md bg-zinc-950/10 aspect-video cursor-pointer group relative w-full text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Gallery display showcase ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                draggable={false}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < GALLERY_IMAGES.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              See More
            </button>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center select-none"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Trigger */}
          <button
            onClick={closeImage}
            className="absolute top-5 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 text-white text-5xl hover:scale-110 active:scale-95 transition-all z-50 p-2 focus:outline-none"
            aria-label="Previous image"
          >
            &#10094;
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative w-[92vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={handleImageRightClick}
          >
            <Image
              src={GALLERY_IMAGES[selectedIndex]}
              alt={`Expanded showcase display ${selectedIndex + 1}`}
              fill
              priority
              draggable={false}
              className="object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 text-white text-5xl hover:scale-110 active:scale-95 transition-all z-50 p-2 focus:outline-none"
            aria-label="Next image"
          >
            &#10095;
          </button>

          {/* Image Index Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-1.5 text-sm font-medium rounded-full tracking-wide">
            {selectedIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}