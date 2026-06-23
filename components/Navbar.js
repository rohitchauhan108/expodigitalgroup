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
    { name: "EX.PO", href: "#mopo" },
    // { name: "QuickBuild", href: "#quickbuild" },
    { name: "Display Standrad", href: "#quickbuild" },
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
            className=" w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
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
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[var(--primary)] px-7 py-3 text-sm font-black uppercase tracking-tighter text-white transition-all hover:bg-[var(--primary)] hover:text-black"
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-white pt-24 md:hidden"
          >
            <div className="bg-grid absolute inset-0 opacity-20" />
            <div className="site-shell relative z-10 space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block text-4xl font-display font-black uppercase tracking-tighter text-zinc-900 hover:text-[var(--primary)]"
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
                className="pt-8"
              >
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--primary)] py-5 text-xl font-black uppercase tracking-tighter text-black"
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
