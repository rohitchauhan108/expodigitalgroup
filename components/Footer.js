"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Facebook,
  Linkedin,
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

          {/* 3rd Column: Contact Details */}
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

          {/* 4th Column: Locations & Addresses */}
          <div>
            <h4 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Locations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-2 border-r border-zinc-800">
                <span className="font-bold text-white text-sm">Dubai</span>
                <p className="text-xs text-white mt-1 leading-relaxed">
                  Expo Digital Fz LLC &bull; Nishyama Technical Services LLC
                </p>
              </div>

              <div className="p-2">
                <span className="font-bold text-white text-sm">KSA</span>
                <p className="text-xs text-white mt-1 leading-relaxed">
                  Expo Digital Riyadh
                </p>
              </div>

              <div className="p-2 border-r border-zinc-800">
                <span className="font-bold text-white text-sm">India</span>
                <p className="text-xs text-white mt-1 leading-relaxed">
                  EXPO Worldwide Pvt Ltd &bull; Mumbai, Bangalore, Delhi
                </p>
              </div>

              <div className="p-2">
                <span className="font-bold text-white text-sm">Europe</span>
                <p className="text-xs text-white mt-1 leading-relaxed">
                  Expo UG
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-t border-zinc-200 pt-12">
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
