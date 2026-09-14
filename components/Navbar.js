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

  const isActive = (href) => pathname === href;

  const isParentActive = (dropdownItems) => {
    return dropdownItems?.some((item) => pathname === item.href);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

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
      <div className="site-shell flex h-24 sm:h-28 md:h-32 lg:h-32 xl:h-40 2xl:h-48 justify-between items-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 gap-2 sm:gap-3">

        {/* Large Logo */}
        <Link href="/" className="relative z-50 flex items-center shrink-0 max-w-[55%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[30%] xl:max-w-[32%] 2xl:max-w-[34%]">
          <Image
            src="/expo-digital-logo.png"
            alt="Expo Digital Group"
            width={300}
            height={300}
            priority
            className="h-20 sm:h-22 md:h-24 lg:h-24 xl:h-36 2xl:h-44 w-auto object-contain max-w-full"
          />
        </Link>

        {/* Desktop Navigation (lg & above) */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-3.5 2xl:gap-6 flex-1 justify-end min-w-0">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group py-1.5 xl:py-2.5 2xl:py-4 shrink-0">
                <button
                  className={`flex items-center gap-0.5 xl:gap-1 text-[10px] xl:text-[13px] 2xl:text-base font-bold uppercase tracking-[0.075em] xl:tracking-[0.1em] 2xl:tracking-[0.12em] whitespace-nowrap transition-colors hover:text-[var(--primary)] ${
                    isParentActive(link.dropdown)
                      ? "text-[var(--primary)]"
                      : "text-white"
                  }`}
                >
                  {link.name}
                  <ChevronDown
                    size={12}
                    className="xl:size-[14px] 2xl:size-4 transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-1.5 w-46 xl:w-54 2xl:w-60 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                  <div className="rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden py-1 xl:py-1.5 2xl:py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block px-3.5 xl:px-5 2xl:px-6 py-2 xl:py-2.5 2xl:py-3.5 text-[11.5px] xl:text-[13px] 2xl:text-sm font-semibold transition-colors hover:bg-[var(--primary)] hover:text-white ${
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
                className={`group relative text-[10px] xl:text-[13px] 2xl:text-base font-bold uppercase tracking-[0.075em] xl:tracking-[0.1em] 2xl:tracking-[0.12em] whitespace-nowrap transition-colors hover:text-[var(--primary)] py-1 xl:py-1.5 2xl:py-2 shrink-0 ${
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
            className="group relative flex items-center justify-center overflow-hidden rounded-full bg-[var(--primary)] text-white transition-all hover:bg-white hover:text-black shrink-0 whitespace-nowrap px-3 py-1.5 text-[10px] xl:px-5 xl:py-2 xl:text-[12px] 2xl:px-6 2xl:py-2.5 2xl:text-sm font-semibold gap-0.75 xl:gap-1.5 2xl:gap-2 shadow-lg"
          >
            <span className="relative z-10">Get Quote</span>
            <ArrowRight className="relative z-10 h-3 w-3 xl:h-3.5 xl:w-3.5 2xl:h-4 2xl:w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          aria-label="Toggle Navigation Menu"
          className="relative z-50 flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-white lg:hidden focus:outline-none shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={18} className="sm:size-[20px] md:size-[22px] text-white" />
          ) : (
            <Menu size={18} className="sm:size-[20px] md:size-[22px]" />
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
            className="fixed inset-0 w-full h-full z-40 bg-black/95 backdrop-blur-xl lg:hidden overflow-y-auto flex flex-col pt-28 sm:pt-32 md:pt-36"
          >
            <div className="site-shell space-y-4 sm:space-y-5 md:space-y-6 px-5 sm:px-6 pb-16 sm:pb-18 md:pb-20 flex-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-b border-zinc-800/60 pb-3 sm:pb-3.5 md:pb-4"
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdownOpen(!mobileDropdownOpen)
                        }
                        className={`flex w-full items-center justify-between text-sm sm:text-[15px] md:text-base font-bold uppercase tracking-wider transition-colors ${
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
                            <div className="mt-2.5 sm:mt-3 ml-1.5 sm:ml-2 space-y-2.5 sm:space-y-3 border-l-2 border-[var(--primary)] pl-3.5 sm:pl-4 py-0.5 sm:py-1">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className={`block text-[13px] sm:text-sm transition-colors ${
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
                      className={`block text-sm sm:text-[15px] md:text-base font-bold uppercase tracking-wider transition-colors ${
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
                className="pt-3 sm:pt-3.5 md:pt-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--primary)] py-3 sm:py-3.25 md:py-3.5 text-sm sm:text-[15px] md:text-base font-bold uppercase tracking-wider text-white shadow-lg active:scale-95 transition-transform"
                >
                  Start Project
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5" />
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
