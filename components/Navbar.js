"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Custom Solutions", href: "#solutions" },
    { name: "Modular Solutions", href: "#solutions" },
    // { name: "Bespoke", href: "#bespoke" },
    { name: "Conference EX.PO", href: "#mopo" },
    // { name: "QuickBuild", href: "#quickbuild" },
    { name: "Display Stands", href: "#quickbuild" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#000000] py-0 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : "bg-[#000000] py-0"
      }`}
    >
      <div className="site-shell flex justify-between items-center">
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <Image
            src="/logo1.png"
            alt="Expo Digital Group"
            width={100}
            height={100}
            priority
            className="lg:h-full h-30 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center text-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-[var(--primary)]"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="group relative flex items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] text-white transition-all hover:bg-[var(--primary)] hover:text-black shrink-0 whitespace-nowrap
            /* Small size (Applies when zoomed to 125% or on smaller screens) */
            px-4 py-2.5 text-xs gap-1.5
            /* Large size (Restores original size ONLY on unzoomed, large desktop screens) */
            xl:px-7 xl:py-3 xl:text-sm xl:gap-2"
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="relative z-10 shrink-0 transition-transform group-hover:translate-x-1 h-3.5 w-3.5 xl:h-4 xl:w-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000] text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={20} className="bg-white text-black rounded-full" />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-white pt-24 pb-20 md:hidden"
          >
            <div className="bg-grid absolute bg-black inset-0" />
            <div className="site-shell relative z-10 bg-black space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block lg:text-4xl text-lg font-black uppercase tracking-tighter text-white hover:text-[var(--primary)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className=""
              >
                <Link
                  href="#contact"
                  className="inline-flex lg:w-full items-center justify-center rounded-2xl bg-[var(--primary)] lg:py-5 py-3 px-2 lg:text-xl font-black uppercase tracking-tighter text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project <ArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
