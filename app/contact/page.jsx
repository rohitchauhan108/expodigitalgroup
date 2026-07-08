"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EAF4E1] text-[#0A1145]">
      <Navbar />

      {/* Main Content Container - Added pt-28 and md:pt-36 to push content below the fixed Navbar */}
      <main className="flex-grow flex items-center justify-center p-56">
        <div className="max-w-6xl w-full flex flex-col gap-20">
          {/* Top Section: Image Left, Form Right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Left Column: Image Container with matching asymmetry */}
            <div className="col-span-1 md:col-span-5 flex justify-center w-full">
              <div className="group relative w-full max-w-sm aspect-[3/4]">
                {/* Border (Always Visible) */}
                <div className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-bl-[80px] rounded-tr-[80px] rounded-tl-2xl rounded-br-2xl border-3 border-[var(--primary)]" />

                {/* Image */}
                <div className="relative z-10 w-full h-full overflow-hidden bg-white rounded-bl-[80px] rounded-tr-[80px] rounded-tl-2xl rounded-br-2xl transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3">
                  <img
                    src="/contact.png"
                    alt="Contact visual asset"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Form and Socials */}
            {/* Right Column: Form and Socials Block Container */}
            <div className="col-span-1 md:col-span-7 w-full">
              <div className="bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-tl-2xl rounded-br-2xl rounded-tr-[50px] rounded-bl-[50px] border border-[#0A1145]/10 shadow-[0_8px_32px_0_rgba(10,17,69,0.03)] flex flex-col justify-center transition-all duration-500 hover:shadow-[0_12px_40px_0_rgba(10,17,69,0.06)]">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--primary)] mb-3 block">
                  Get in Touch
                </span>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-10 tracking-wide text-left text-[var(--primary)] font-semibold">
                  Contact Us
                </h1>

                <form
                  className="space-y-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="relative group">
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b border-[#0A1145]/20 pb-3 text-lg focus:outline-none focus:border-[#0A1145] placeholder:text-[#0A1145]/40 rounded-none transition-colors duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      placeholder="E-mail"
                      className="w-full bg-transparent border-b border-[#0A1145]/20 pb-3 text-lg focus:outline-none focus:border-[#0A1145] placeholder:text-[#0A1145]/40 rounded-none transition-colors duration-300"
                    />
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      id="message"
                      placeholder="Message"
                      className="w-full bg-transparent border-b border-[#0A1145]/20 pb-3 text-lg focus:outline-none focus:border-[#0A1145] placeholder:text-[#0A1145]/40 rounded-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pt-6">
                    <button
                      type="submit"
                      className="bg-[var(--primary)] text-white font-medium py-4 px-10 rounded-xl hover:bg-black transition-all duration-300 cursor-pointer text-center tracking-wide shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>

                    {/* Social Icons integrated via elegant architectural lines */}
                    <div className="flex items-center gap-4 self-start sm:self-center">
                      <span className="hidden sm:inline-block w-6 h-[1px] bg-[#0A1145]/20"></span>
                      <div className="flex items-center space-x-4">
                        <a
                          href="#"
                          aria-label="Facebook"
                          className="p-2.5 rounded-full border border-[#0A1145]/10 bg-white/40 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-black"
                        >
                          <Facebook className="w-4 h-4 fill-current stroke-none" />
                        </a>
                        <a
                          href="#"
                          aria-label="Instagram"
                          className="p-2.5 rounded-full border border-[#0A1145]/10 bg-white/40 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-black"
                        >
                          <Instagram className="w-4 h-4 stroke-current stroke-[2]" />
                        </a>
                        <a
                          href="#"
                          aria-label="Twitter"
                          className="p-2.5 rounded-full border border-[#0A1145]/10 bg-white/40 hover:bg-[var(--primary)] hover:text-white transition-all duration-300 text-black"
                        >
                          <Twitter className="w-4 h-4 fill-current stroke-none" />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
            </div>
            <div className="w-full border-t border-[var(--primary)]"></div>
            <h1 className="relative px-4 text-[var(--primary)] text-sm tracking-widest font-bold uppercase">
              Info
            </h1>
            <div className="w-full border-t border-[var(--primary)]"></div>
          </div>

          {/* Bottom Section: Architectural Asymmetric Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Phone */}
            <div className="group bg-white/40 backdrop-blur-sm p-8 rounded-tl-xl rounded-br-xl rounded-tr-3xl rounded-bl-3xl border border-[#0A1145]/10 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_12px_30px_rgba(10,17,69,0.04)] transition-all duration-300 flex flex-col justify-between items-center min-h-[140px]">
              <h3 className="font-bold text-xl tracking-[0.15em] uppercase text-[var(--primary)] opacity-80 flex items-center gap-3">
                <FaPhone />Phone
              </h3>
              <a
                href="tel:+97140000000"
                className="text-lg text-black hover:text-[var(--primary)] transition-colors inline-block tracking-tight mt-4 break-words"
              >
                +971 (0) 4 000 0000
              </a>
            </div>

            {/* Box 2: Email */}
            <div className="group bg-white/40 backdrop-blur-sm p-8 rounded-tl-xl rounded-br-xl rounded-tr-3xl rounded-bl-3xl border border-[#0A1145]/10 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_12px_30px_rgba(10,17,69,0.04)] transition-all duration-300 flex flex-col justify-between items-center min-h-[140px]">
              <h3 className="font-bold text-xl tracking-[0.15em] uppercase text-[var(--primary)] opacity-80 flex items-center gap-3">
                <MdOutlineEmail />Contact Email
              </h3>
              <a
                href="mailto:sales@expodigitalgroup.com"
                className="text-lg text-black hover:text-[var(--primary)] transition-colors inline-block tracking-tight mt-4 break-words"
              >
                sales@expodigitalgroup.com
              </a>
            </div>

            {/* Box 3: Address */}
            <div className="group bg-white/40 backdrop-blur-sm p-8 rounded-tl-xl rounded-br-xl rounded-tr-3xl rounded-bl-3xl border border-[#0A1145]/10 hover:-translate-y-1 hover:bg-white/60 hover:shadow-[0_12px_30px_rgba(10,17,69,0.04)] transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[140px]">
              <h3 className="font-bold text-xl tracking-[0.15em] uppercase text-[var(--primary)] opacity-80 flex items-center gap-3">
                <IoLocationOutline />Based in
              </h3>
              <p className="text-lg text-black leading-relaxed mt-4">
                Alquoz Industrial Area 4, Capitol Compound, Dubai, UAE
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Page;
