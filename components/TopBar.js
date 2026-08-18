"use client";

import React from "react";
import { FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="relative z-[100] w-full bg-[#0A1145]">
      <div className="site-shell flex items-center justify-between gap-4 h-10 md:h-12">
        <div className="flex items-center gap-3 md:gap-6 text-white">
          <a
            href="mailto:sales@expodigitalgroup.com"
            className="flex items-center gap-2 text-[11px] md:text-sm font-bold text-white/90 hover:text-[var(--primary)] transition-colors group"
          >
            <MdOutlineEmail className="text-xs md:text-base text-[var(--primary)] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline uppercase tracking-wider">
              Sales@ExpoDigitalGroup.COM
            </span>
            <span className="sm:hidden uppercase tracking-wider">
              Sales@ExpoDigitalGroup
            </span>
          </a>

          <span className="hidden md:block w-px h-4 bg-white/15" />

          <a
            href="tel:+971040000000"
            className="flex items-center gap-2 text-[11px] md:text-sm font-bold text-white/90 hover:text-[var(--primary)] transition-colors group"
          >
            <FaPhone className="text-[10px] md:text-xs text-[var(--primary)] group-hover:scale-110 transition-transform" />
            <span className="uppercase tracking-wider">
              +971 (0) 4 000 0000
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all"
          >
            <FaFacebookF className="w-3 h-3" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all"
          >
            <FaInstagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all"
          >
            <FaTwitter className="w-3 h-3" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:flex w-7 h-7 rounded-full border border-white/10 items-center justify-center text-white/70 hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all"
          >
            <FaLinkedinIn className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
