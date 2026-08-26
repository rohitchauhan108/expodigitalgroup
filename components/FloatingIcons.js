"use client";

import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    // Changed top-1/2 -translate-y-1/2 to bottom-10 right-4 (or right-0 if you want them attached to the edge)
    <div className="fixed right-0 bottom-10 z-[9998] flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Button */}
      <div className="pointer-events-auto flex justify-end">
        <a
          href="https://wa.me/971563760187"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group flex h-14 md:h-16 items-center rounded-l-full bg-brand-gradient px-4 md:px-5 text-white shadow-2xl transition-all duration-300 ease-in-out hover:pr-6 hover:shadow-[0_0_30px_rgba(255,121,0,0.35)]"
        >
          {/* Text slides out independently */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm md:text-base font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:mr-3 group-hover:max-w-[140px] group-hover:opacity-100">
            WhatsApp Us
          </span>

          <div className="flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center">
            <FaWhatsapp className="h-8 w-8 md:h-9 md:w-9 text-white drop-shadow-md" />
          </div>
        </a>
      </div>

      {/* Call Us Button */}
      <div className="pointer-events-auto flex justify-end">
        <a
          href="tel:+971563760187"
          aria-label="Call Us"
          className="group flex h-14 md:h-16 items-center rounded-l-full bg-[#0A1145] px-4 md:px-5 text-white shadow-2xl transition-all duration-300 ease-in-out hover:pr-6 hover:shadow-[0_0_25px_rgba(10,17,69,0.4)]"
        >
          {/* Text slides out independently */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm md:text-base font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:mr-3 group-hover:max-w-[110px] group-hover:opacity-100">
            Call Us
          </span>

          <div className="flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center">
            <FaPhone className="h-7 w-7 md:h-8 md:w-8 text-white drop-shadow-md" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FloatingIcons;