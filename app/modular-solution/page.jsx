"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const GALLERY_IMAGES = [
  "/modular-solution/image2.png",
  "/modular-solution/image6.png",
  "/modular-solution/image8.png",
  "/modular-solution/image4.png",
  "/modular-solution/image5.png",
  "/modular-solution/image1.png",
  "/modular-solution/image7.png",
  "/modular-solution/image3.png",
  "/modular-solution/image9.png",
  "/modular-solution/image10.png",
  "/modular-solution/image11.png",
  "/modular-solution/image12.png",
  "/modular-solution/image13.png",
  "/modular-solution/image14.png",
  "/modular-solution/image15.png",
  "/modular-solution/image16.png",
  "/modular-solution/image17.png",
  "/modular-solution/image18.png",
  "/modular-solution/image19.png",
  "/modular-solution/image20.png",
  "/modular-solution/image21.png",
  "/modular-solution/image22.png",
  "/modular-solution/image23.png",
  "/modular-solution/image24.png",
  "/modular-solution/image26.png",
  "/modular-solution/image27.png",
  "/modular-solution/image28.png",
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

  // 1. Strictly intercept right clicks ONLY on the images
  const handleImageRightClick = (e) => {
    e.preventDefault(); // Stop default browser context menu
    e.stopPropagation(); // Stop event from bubbling up to anything else
    setShowPopup(true); // Open the registration modal
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
          Where Innovation Meets Craftsmanship
        </span>

        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          MODULAR SUSTAINABLE BOOTH SYSTEM{" "}
          <span className="text-[var(--primary)]">
            <br />
            (SEG FABRIC)
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-700 lowercase leading-relaxed pb-6 border-b-2 border-[var(--primary)]">
          Where we can transform your SMALL space into a vibrant, customized
          design booth up and ready in a couple of hours. Our expert design team
          can magically transform any space into an appealing and visually
          stunning execution that is guaranteed to make your brand steal the
          show. FORGET THE BORING LOOK OF OCTONORM — THIS CAN ALSO BE USED IN
          YOUR SHELL SCHEME SPACE. Through modern technology and extraordinary
          marketing, we help our customers develop a better understanding of
          your brand by bringing it to life with eye-catching and majestic
          displays, conference booths, mall activations, photo booths,
          backdrops, and feature walls.
        </p>
      </header>

      {/* Gallery Section */}
      <main className="max-w-7xl mx-auto w-full px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(0, visibleCount).map((image, index) => (
            <button
              key={image}
              onClick={() => openImage(index)}
              onContextMenu={handleImageRightClick} // Handled directly on image item
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
          <button
            onClick={closeImage}
            className="absolute top-5 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            &times;
          </button>

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
            onContextMenu={handleImageRightClick} // Intercepts on large lightboxed image
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-1.5 text-sm font-medium rounded-full tracking-wide">
            {selectedIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}