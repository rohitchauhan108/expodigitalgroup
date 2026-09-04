"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Phone,
} from "lucide-react";

const locations = [
  {
    city: "UAE",
    companies: [
      {
        name: "Expo Digital (FZ) LLC",
        address: "Capital Compound, Al Quoz Industrial Area 2, Dubai, UAE",
        color: "var(--primary)",
      },
      {
        name: "Nishyama Technical Services LLC",
        address: "Al Quoz Industrial Area 3, Warehouse No. 2-3, Dubai, UAE (Opposite Al Quoz Mall)",
        color: "var(--secondary)",
      },
    ],
  },
  {
    city: "KSA",
    companies: [
      {
        name: "Expo Digital Riyadh (Riyadh)",
        address: "Al Sulay, Riyadh - 14275, Warehouse - 11-12",
        color: "var(--primary)",
      },
    ],
  },
  {
    city: "India",
    companies: [{ name: "EXPO Worldwide Pvt Ltd", color: "var(--primary)" }],
    subText: "Mumbai • Bangalore • Delhi",
  },
  {
    city: "Europe",
    companies: [{ name: "Expo UG", color: "var(--primary)" }],
  },
];

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
            <Link href="/" className="inline-block mb-1">
              <Image
                src="/expo-digital-logo.png"
                alt="Expo Digital Group"
                width={240}
                height={80}
                className="h-44 w-auto object-contain"
              />
            </Link>
            <p className="mb-8 max-w-xs leading-relaxed text-white font-medium">
              Redefining the art of showcasing excellence through meticulously
              crafted exhibition solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/ExhibitionsEventsActivationsBespokefurniture/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/expo-digital-llc-b09950210" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-[var(--primary)] transition-all hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white hover:scale-110 shadow-sm"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Custom Solutions", href: "/custom-solution" },
                { name: "Modular Solutions", href: "/modular-solution" },
                { name: "Conference EXPO", href: "/conference-expo" },
                { name: "Display Stands", href: "/display-stands" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-white font-bold transition-colors hover:text-[var(--primary)]"
                  >
                    <span className="h-[1px] w-0 bg-[var(--primary)] transition-all group-hover:w-4 group-hover:mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/#about" },
                { name: "Recent Projects", href: "/#projects" },
                { name: "Our Process", href: "/#services" },
                { name: "Vision 2030", href: "/#why-us" },
                { name: "Get a Quote", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-white font-bold transition-colors hover:text-[var(--primary)]"
                  >
                    <span className="h-[1px] w-0 bg-[var(--primary)] transition-all group-hover:w-4 group-hover:mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact Details
            </h4>
            <div className="space-y-6">
            

              <div className="flex items-center space-x-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-zinc-900 text-[var(--primary)]">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:sales@expodigitalgroup.com"
                  className="text-white font-bold transition-colors hover:text-[var(--primary)] text-sm"
                >
                  sales@expodigitalgroup.com
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-zinc-900 text-[var(--primary)]">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+971563760187"
                  className="text-white font-bold transition-colors hover:text-[var(--primary)] text-sm"
                >
                  +971 563760187
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
            <h3 className="text-sm font-bold uppercase tracking-[0.35em] text-white whitespace-nowrap">
              Our <span className="gradient-text">Locations</span>
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                className="group relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[var(--primary)]/40 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 group-hover:from-[var(--primary)]/10 group-hover:to-[var(--secondary)]/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-gradient/10 border border-[var(--primary)]/20 transition-transform duration-300 group-hover:scale-110">
                      <MapPin size={20} className="text-[var(--primary)]" />
                    </div>
                    <h4 className="text-xl font-bold gradient-text">
                      {loc.city}
                    </h4>
                  </div>
                  
                  <div className="space-y-2.5">
                    {loc.companies.map((co, cIdx) => (
                      <div 
                        key={cIdx}
                        className="relative rounded-lg border bg-zinc-800/60 backdrop-blur-sm px-3 py-2.5 transition-all duration-300 hover:bg-zinc-800"
                        style={{ borderColor: `${co.color}40` }}
                      >
                        <div className="flex items-start gap-2">
                          <div 
                            className="mt-1 shrink-0 w-4 h-4 rounded border flex items-center justify-center"
                            style={{ backgroundColor: `${co.color}20`, borderColor: `${co.color}60` }}
                          >
                            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: co.color }} />
                          </div>
                          <p className="text-sm font-black text-white leading-snug">
                            {co.name}
                          </p>
                        </div>
                        {co.address && (
                          <p className="mt-2 pl-6 text-xs leading-relaxed text-zinc-400">
                            {co.address}
                          </p>
                        )}
                      </div>
                    ))}
                    {loc.subText && (
                      <p className="px-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                        {loc.subText}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center border-t border-zinc-800 pt-12">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-white">
            &copy; {new Date().getFullYear()} Expo Digital Group. Built for
            Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
