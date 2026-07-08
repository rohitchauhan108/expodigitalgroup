"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative border-t border-zinc-200 bg-[#000000] pt-24 pb-12 overflow-hidden"
    >
      <div className="bg-grid absolute inset-0 opacity-10 pointer-events-none" />
      <div className="bg-lines absolute inset-0 opacity-20 pointer-events-none" />

      <div className="site-shell relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/expo-digital-logo.png"
                alt="Expo Digital Group"
                width={180}
                height={64}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mb-8 max-w-xs leading-relaxed text-white font-medium">
              Redefining the art of showcasing excellence through meticulously
              crafted exhibition solutions.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white hover:scale-110 shadow-sm"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-display font-black uppercase tracking-[0.2em] text-white">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                "Custom Solutions",
                // "EX.PO Systems",
                "Modular Solutions",
                "Conference EXPO",
                "Display Stands",
                // "Mall Activations",
                // "Office Interiors",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center text-white font-bold transition-colors hover:text-[var(--primary)]"
                  >
                    <span className="h-[1px] w-0 bg-[var(--primary)] transition-all group-hover:w-4 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-display font-black uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Recent Projects",
                "Our Process",
                "Vision 2030",
                "Get a Quote",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center text-white font-bold transition-colors hover:text-[var(--primary)]"
                  >
                    <span className="h-[1px] w-0 bg-[var(--primary)] transition-all group-hover:w-4 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-display font-black uppercase tracking-[0.2em] text-white">
              Contact Details
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="mt-1 h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-zinc-900 text-[var(--primary)]">
                  <MapPin size={20} />
                </div>
                <span className="leading-relaxed text-white font-bold">
                  Alquoz Industrial Area 4, Capitol Compound, Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-zinc-900 text-[var(--primary)]">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:sales@expodigitalgroup.com"
                  className="text-white font-bold transition-colors hover:text-[var(--primary)]"
                >
                  sales@expodigitalgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-zinc-900 text-[var(--primary)]">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+9710000000"
                  className="text-white font-bold transition-colors hover:text-[var(--primary)]"
                >
                  +971 (0) 4 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-12 md:flex-row">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-white md:text-left">
            © {new Date().getFullYear()} Expo Digital Group. Built for
            Excellence.
          </p>
          {/* Changed justify-start to justify-center, and added md:justify-start */}
          <div className="flex w-full justify-center space-x-8 text-sm font-bold uppercase tracking-widest text-white md:w-auto md:justify-start">
            <Link
              href="#"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-[var(--primary)]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
