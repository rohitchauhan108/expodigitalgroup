"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Handle scroll effect for desktop header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevents the background content from scrolling underneath the active mobile menu overlay
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Solutions",
      dropdown: [
        { name: "Custom Solutions", href: "custom-solution" },
        { name: "Modular Solutions", href: "modular-solution" },
      ],
    },
    { name: "Conference EXPO", href: "#expo" },
    { name: "Display Stands", href: "#quickbuild" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-[#000000] py-0 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : "bg-[#000000] py-0"
      }`}
    >
      <div className="site-shell flex h-36 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <Image
            src="/expo-digital-logo.png"
            alt="Expo Digital Group"
            width={100}
            height={100}
            priority
            className="lg:h-36 h-30 w-auto object-fill"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-white hover:text-[var(--primary)] transition-colors">
                  {link.name}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div className="absolute left-0 top-full mt-3 w-64 rounded-xl bg-black shadow-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 overflow-hidden">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-4 text-sm font-semibold text-white hover:bg-[var(--primary)] hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="group relative text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-[var(--primary)]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[var(--primary)] transition-all group-hover:w-full" />
              </Link>
            )
          )}

          {/* CTA Button */}
          <Link
            href="#contact"
            className="group relative flex items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] text-white transition-all hover:text-black shrink-0 whitespace-nowrap px-4 py-2.5 text-xs gap-1.5 xl:px-7 xl:py-3 xl:text-sm xl:gap-2"
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed inset-0 w-full h-fit z-40 bg-black md:hidden overflow-y-auto flex flex-col"
          >
            {/* NEW HEADER TRACK RIGHT INSIDE SCREEN TO RENDER LOGO AND CLOSE LINK ACCURATELY */}
            <div className="site-shell flex h-36 justify-between items-center shrink-0">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <Image
                  src="/expo-digital-logo.png"
                  alt="Expo Digital Group"
                  width={100}
                  height={100}
                  priority
                  className="h-30 w-auto object-fill"
                />
              </Link>
              
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links Body */}
            <div className="site-shell space-y-7 pb-20 flex-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(!mobileDropdownOpen)
                        }
                        className="flex w-full items-center justify-between text-lg font-black uppercase tracking-tight text-white"
                      >
                        {link.name}
                        <ChevronDown
                          className={`transition-transform ${
                            mobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 ml-5 space-y-4 border-l border-gray-700 pl-5">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileDropdownOpen(false);
                                  }}
                                  className="block text-gray-300 hover:text-[var(--primary)]"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-black uppercase tracking-tight text-white hover:text-[var(--primary)]"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--primary)] py-4 text-lg font-black uppercase text-white"
                >
                  Start Project
                  <ArrowRight className="ml-2" />
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