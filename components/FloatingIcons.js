"use client";

import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9998] flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Button */}
      <div className="pointer-events-auto flex justify-end">
        <a
          href="https://wa.me/971040000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group flex h-12 md:h-14 items-center rounded-l-full bg-[#00A884] px-3.5 text-white shadow-xl transition-all duration-300 ease-in-out"
        >
          {/* Text slides out independently */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs md:text-sm font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:mr-2.5 group-hover:max-w-[120px] group-hover:opacity-100">
            WhatsApp
          </span>

          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <FaWhatsapp className="h-6 w-6 text-white" />
          </div>
        </a>
      </div>

      {/* Call Us Button */}
      <div className="pointer-events-auto flex justify-end">
        <a
          href="tel:+971040000000"
          aria-label="Call Us"
          className="group flex h-12 md:h-14 items-center rounded-l-full bg-[#0A1145] px-3.5 text-white shadow-xl transition-all duration-300 ease-in-out"
        >
          {/* Text slides out independently */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs md:text-sm font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:mr-2.5 group-hover:max-w-[100px] group-hover:opacity-100">
            Call Us
          </span>

          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <FaPhone className="h-5 w-5 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default FloatingIcons;