"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (href) => pathname === href;

  // Helper function to check if any child link in a dropdown is active
  const isParentActive = (dropdownItems) => {
    return dropdownItems?.some((item) => pathname === item.href);
  };

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu overlay is active
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
        { name: "Custom Solutions", href: "/custom-solution" },
        { name: "Modular Solutions", href: "/modular-solution" },
      ],
    },
    { name: "Conference EXPO", href: "/conference-expo" },
    { name: "Promotions", href: "/promotions" },
    { name: "Display Stands", href: "/display-stands" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="relative w-full z-[9999] bg-[#000000] border-b border-zinc-900 py-0">
      <div className="site-shell flex h-28 md:h-36 lg:h-44 xl:h-52 justify-between items-center px-4 md:px-8">
        
        {/* Large Logo */}
        <Link href="/" className="relative z-50 flex items-center shrink-0">
          <Image
            src="/expo-digital-logo.png"
            alt="Expo Digital Group"
            width={300}
            height={300}
            priority
            className="h-24 md:h-32 lg:h-40 xl:h-48 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation (lg & above) */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-7">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group py-4">
                <button
                  className={`flex items-center gap-1 text-xs xl:text-sm font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors hover:text-[var(--primary)] ${
                    isParentActive(link.dropdown)
                      ? "text-[var(--primary)]"
                      : "text-white"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 w-60 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                  <div className="rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-6 py-3.5 text-sm xl:text-base font-semibold transition-colors hover:bg-[var(--primary)] hover:text-white ${
                          isActive(item.href)
                            ? "bg-[var(--primary)] text-white"
                            : "text-zinc-200"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative text-xs xl:text-base font-bold uppercase tracking-[0.15em] whitespace-nowrap transition-colors hover:text-[var(--primary)] py-2 ${
                  isActive(link.href)
                    ? "text-[var(--primary)]"
                    : "text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[var(--primary)] transition-all group-hover:w-full ${
                    isActive(link.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            )
          )}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group relative flex items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] text-white transition-all hover:bg-white hover:text-black shrink-0 whitespace-nowrap px-4 py-2 text-xs xl:px-6 xl:py-2.5 xl:text-sm font-semibold gap-2 shadow-lg"
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          aria-label="Toggle Navigation Menu"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white lg:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-full z-40 bg-black/95 backdrop-blur-xl lg:hidden overflow-y-auto flex flex-col pt-32"
          >
            <div className="site-shell space-y-6 px-6 pb-20 flex-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-zinc-800/60 pb-4"
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(!mobileDropdownOpen)
                        }
                        className={`flex w-full items-center justify-between text-base font-bold uppercase tracking-wider transition-colors ${
                          isParentActive(link.dropdown)
                            ? "text-[var(--primary)]"
                            : "text-white"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`transition-transform duration-300 ${
                            mobileDropdownOpen
                              ? "rotate-180 text-[var(--primary)]"
                              : "text-zinc-400"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 ml-2 space-y-3 border-l-2 border-[var(--primary)] pl-4 py-1">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className={`block text-sm transition-colors ${
                                    isActive(item.href)
                                      ? "text-[var(--primary)] font-semibold"
                                      : "text-zinc-300 hover:text-white"
                                  }`}
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
                      className={`block text-base font-bold uppercase tracking-wider transition-colors ${
                        isActive(link.href)
                          ? "text-[var(--primary)]"
                          : "text-white hover:text-[var(--primary)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--primary)] py-3.5 text-base font-bold uppercase tracking-wider text-white shadow-lg active:scale-95 transition-transform"
                >
                  Start Project
                  <ArrowRight className="ml-2 h-5 w-5" />
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