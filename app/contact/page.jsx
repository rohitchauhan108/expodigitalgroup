"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import TopBar from "@/components/TopBar";
import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";
import { FaPhone, FaArrowRight } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessKey = "7bc5515b-a67d-4951-bf47-ae26939f2619";

    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const payload = {
        access_key: accessKey,
        to: "rohitrankmantra12@gmail.com",
        subject: `New Contact Inquiry from ${formData.firstName} ${formData.lastName}`,
        from_name: "Expo Digital Group Website",
        to_name: "Sales Team",
        reply_to: formData.email,
        First_Name: formData.firstName,
        Last_Name: formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        Service: formData.service,
        Message: formData.message || "—",
        Privacy_Agreed: formData.privacy ? "Yes" : "No",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message:
            "Thank you! Your inquiry has been received. Our team will get back to you within 24 hours.",
        });
        resetForm();
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message:
          err.message ||
          "We couldn't send your message right now. Please try again or contact us directly at sales@expodigitalgroup.com.",
      });
    }
  };

  const serviceOptions = [
    "Custom Exhibition Stand Design & Build",
    "Modular Sustainable Stand System",
    "Conference & Expo Booth Solutions",
    "Promotions & Mall Activations",
    "Furniture & AV Rentals",
    "Large Format Printing / Branding",
    "Turnkey Event Project Management",
  ];

  const inquiryBullets = [
    {
      title: "In-House Production",
      text: "100% fabrication at our factory compound. Full quality control on every build from cutting to final assembly.",
    },
    {
      title: "Certified for Major Venues",
      text: "Fully certified for all major Middle Eastern exhibition venues and premier global event spaces.",
    },
    {
      title: "500+ Successful Projects",
      text: "Proven track record delivering premium exhibition stands, brand activations, and conference booths across UAE, KSA, Oman, and India.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#EAF4E1] text-zinc-900">
      <TopBar />
      <Navbar />

      {/* =============================== */}
      {/* SECTION 1: HERO BANNER */}
      {/* =============================== */}
      <section className="relative pt-36 md:pt-48 pb-24 md:pb-32 overflow-hidden bg-[#EAF4E1]">
        <div className="site-shell relative z-10">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="mb-4 text-md font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Premium Exhibition Stand Builders • Get in Touch
            </p>
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl lg:text-6xl leading-[1.1]">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-600 md:text-lg">
              Whether it&apos;s a bespoke exhibition booth, modular system, or
              full conference pavilion — our team delivers precision, speed, and
              brand-accurate execution across the Middle East, India & Europe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact-form"
                className="w-full sm:w-auto rounded-full bg-[var(--primary)] px-10 py-4 font-bold text-white transition-transform hover:scale-105 shadow-lg shadow-[var(--primary)]/10 flex items-center justify-center gap-2 group"
              >
                Get a Free Design Quote
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+971563760187"
                className="w-full sm:w-auto rounded-full border border-zinc-200 bg-white px-10 py-4 font-bold text-zinc-950 transition-all hover:bg-zinc-50 flex items-center justify-center gap-2"
              >
                <FaPhone className="w-4 h-4 text-[var(--primary)]" />
                Call Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 2: HOW WE CAN HELP + CLIENT ADVISORY */}
      {/* =============================== */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-zinc-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px)] bg-[size:10%_100%] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="site-shell relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:items-start">
            {/* LEFT: Get in Touch */}
            <motion.div className="lg:col-span-6" {...fadeUp}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
                Get in Touch
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
                How we can help <span className="gradient-text">transform</span>{" "}
                your next exhibition presence.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-zinc-600">
                Whether you&apos;re launching a premium bespoke booth, a fast
                modular setup, or a full conference exhibition floor — our
                design, fabrication, and logistics teams manage the entire
                project end-to-end.
              </p>

              <div className="border-t border-zinc-200 pt-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 rounded-full bg-brand-gradient" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    Operational Reach
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "UAE" },
                    { label: "KSA" },
                    { label: "India" },
                    { label: "Europe" },
                  ].map((loc, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-zinc-200 bg-white p-4 hover:border-[var(--primary)]/30 transition-colors group/loc flex items-center justify-center"
                    >
                      <p className="text-xl md:text-2xl font-black gradient-text tracking-tight">
                        {loc.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Dedicated Client Advisory card */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="group relative rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)] overflow-hidden">
                <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-brand-gradient opacity-10 blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 group-hover:bg-[var(--primary)]/10 transition-colors">
                      <FaPhone className="text-2xl text-[var(--primary)]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 border border-zinc-100 px-4 py-2 rounded-full">
                      06-hr Response
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl md:text-3xl font-bold text-zinc-950 group-hover:text-[var(--primary)] transition-colors">
                    Dedicated Client Advisory
                  </h3>
                  <p className="leading-relaxed text-zinc-600 mb-8 text-sm md:text-lg">
                    Submit design briefs anytime, 24/7. Our technical and
                    accounts teams review every inquiry and respond within one
                    business day.
                  </p>

                  <div className="border-t border-zinc-100 pt-6 space-y-5">
                    <a
                      href="mailto:sales@expodigitalgroup.com"
                      className="flex items-center gap-4 text-zinc-900 font-bold hover:text-[var(--primary)] transition-colors group/item"
                    >
                      <div className="w-11 h-11 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover/item:bg-[var(--primary)]/10 transition-colors">
                        <MdOutlineEmail className="text-xl text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">
                          Email
                        </p>
                        <p className="text-sm md:text-lg">
                          sales@expodigitalgroup.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+971563760187"
                      className="flex items-center gap-4 text-zinc-900 font-bold hover:text-[var(--primary)] transition-colors group/item"
                    >
                      <div className="w-11 h-11 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover/item:bg-[var(--primary)]/10 transition-colors">
                        <FaPhone className="text-lg text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">
                          Phone
                        </p>
                        <p className="text-sm md:text-lg">+971 563760187</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 text-zinc-900 group/item">
                      <div className="w-11 h-11 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover/item:bg-[var(--primary)]/10 transition-colors shrink-0">
                        <IoTimeOutline className="text-xl text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">
                          Hours
                        </p>
                        <p className="text-sm md:text-lg font-bold">
                          Monday – Friday, 9:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 3: INQUIRY + FORM (TWO CARDS) */}
      {/* =============================== */}
      <section
        id="contact-form"
        className="py-24 md:py-28 border-y border-zinc-200 relative overflow-hidden"
      >
        {/* Ambient blur */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="site-shell relative z-10">
          <motion.div
            className="mb-16 max-w-3xl text-center mx-auto"
            {...fadeUp}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Inquiry & Sourcing
            </p>
            <h2 className="text-3xl font-bold text-zinc-950 md:text-5xl tracking-tight">
              Request Pricing or{" "}
              <span className="gradient-text">Submit an Inquiry</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 max-w-2xl mx-auto">
              Our design and estimating team is ready to build your custom
              concept. Share your requirements below and we&apos;ll respond with
              a tailored plan within 24 hours.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            {/* LEFT CARD: Request Pricing Info */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="group relative rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)] h-full flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-2 w-12 rounded-full bg-brand-gradient transition-all duration-300 group-hover:w-20" />
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Expo Advantage
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 mb-6 group-hover:text-[var(--primary)] transition-colors">
                  Why partner with Expo Digital?
                </h3>

                <p className="text-base leading-relaxed text-zinc-600 mb-10">
                  From Large Format Printing/Branding to on-site handover — we own every part of the
                  process, so you don&apos;t have to.
                </p>

                <div className="border-t border-zinc-100 pt-8 space-y-6 flex-1">
                  {inquiryBullets.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2
                          className="w-4 h-4 text-[var(--primary)]"
                          strokeWidth={2.5}
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-zinc-950 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-base text-zinc-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom quote pill */}
                <div className="mt-10 p-5 md:p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <p className="text-xs text-base italic text-zinc-600 leading-relaxed">
                    &ldquo;Designed to the brief. Engineered to dominate the
                    exhibition floor.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD: CONTACT FORM */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="group relative rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)] overflow-hidden">
                {status.success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center text-center py-6 md:py-10"
                  >
                    <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-brand-gradient opacity-10 blur-[70px] pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-brand-gradient opacity-10 blur-[80px] pointer-events-none" />

                    <div className="relative mb-8">
                      <div className="absolute inset-0 rounded-full bg-[var(--secondary)]/20 animate-ping" />
                      <div className="relative w-24 h-24 rounded-full bg-brand-gradient flex items-center justify-center shadow-2xl shadow-[var(--secondary)]/20">
                        <CheckCircle2
                          className="w-12 h-12 text-white"
                          strokeWidth={3}
                        />
                      </div>
                    </div>

                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] gradient-text">
                      Message Successfully Sent
                    </p>
                    <h3 className="mb-5 text-3xl md:text-4xl font-black tracking-tight text-zinc-950 leading-tight">
                      Thank you for reaching out!
                    </h3>
                    <p className="mb-10 max-w-lg text-base md:text-lg leading-relaxed text-zinc-600">
                      {status.message ||
                        "Your inquiry has been received. Our sales and design team will review your request and get back to you within 24 hours."}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setStatus({
                          loading: false,
                          success: false,
                          error: false,
                          message: "",
                        })
                      }
                      className="rounded-full border-2 border-zinc-200 bg-white px-10 py-4 font-bold text-zinc-900 transition-all hover:scale-105 hover:border-[var(--primary)]/40 hover:bg-[var(--primary)]/5 flex items-center gap-2 group"
                    >
                      <FaArrowRight className="w-4 h-4 transition-transform -rotate-180 group-hover:-translate-x-1" />
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* First name + Last name */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                          First Name{" "}
                          <span className="text-[var(--primary)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                          Last Name{" "}
                          <span className="text-[var(--primary)]">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                          Email <span className="text-[var(--primary)]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                          Phone <span className="text-[var(--primary)]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Service dropdown */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                        What do you need help with?{" "}
                        <span className="text-[var(--primary)]">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all appearance-none cursor-pointer pr-12"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FF7900' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1.25rem center",
                          backgroundSize: "1.25rem",
                        }}
                      >
                        <option value="">Select the service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-900 mb-3">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide details about your exhibition booth, event date, venue, sizing requirements, or any reference designs..."
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition-all resize-none"
                      />
                    </div>

                    {/* Honeypot spam protection */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      readOnly
                    />

                    {/* Privacy checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-zinc-300 text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer shrink-0"
                      />
                      <label className="text-xs text-base text-zinc-600 cursor-pointer font-medium">
                        <span className="text-[var(--primary)] font-bold">
                          *
                        </span>{" "}
                        Yes, I agree with the privacy policy.
                      </label>
                    </div>

                    {/* Error banner only (success takes over the whole card) */}
                    {status.error && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 rounded-2xl border border-red-300/50 bg-red-50 p-4 md:p-5"
                      >
                        <div className="w-6 h-6 rounded-full bg-red-500 shrink-0 mt-0.5 flex items-center justify-center text-white text-sm font-bold">
                          !
                        </div>
                        <div className="flex-1">
                          <p className="text-sm md:text-base font-bold text-red-800 mb-1">
                            Oops — couldn&apos;t send your message
                          </p>
                          <p className="text-sm md:text-base font-semibold text-red-700 leading-relaxed">
                            {status.message}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Submit button - matches home page CTA style */}
                    <button
                      type="submit"
                      disabled={status.loading}
                      className="group relative w-full sm:w-auto rounded-full bg-[var(--primary)] lg:px-12 px-10 py-5 font-bold text-white transition-all hover:scale-105 shadow-xl shadow-[var(--primary)]/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status.loading ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SECTION 4: CONTACT INFO CARDS ROW */}
      {/* =============================== */}
      <section className="py-24 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        <div className="site-shell">
          <motion.div
            className="mb-16 max-w-3xl text-center mx-auto"
            {...fadeUp}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Direct Contact
            </p>
            <h2 className="text-3xl font-bold leading-tight text-zinc-950 md:text-4xl lg:text-5xl">
              Reach Out Through Your{" "}
              <span className="gradient-text">Preferred Channel</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="group relative rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 group-hover:bg-[var(--primary)]/10 transition-colors">
                    <FaPhone className="text-lg text-[var(--primary)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 border border-zinc-100 px-3 py-1 rounded-full">
                    Fast Callback
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-950 group-hover:text-[var(--primary)] transition-colors">
                  Phone
                </h3>
                <a
                  href="tel:+971563760187"
                  className="text-xl md:text-2xl font-black text-zinc-950 hover:text-[var(--primary)] transition-colors inline-block leading-relaxed break-words"
                >
                  +971 563760187
                </a>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-[var(--primary)] transition-colors">
                <span>Call During Business Hours</span>
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="group relative rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 group-hover:bg-[var(--primary)]/10 transition-colors">
                    <MdOutlineEmail className="text-xl text-[var(--primary)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 border border-zinc-100 px-3 py-1 rounded-full">
                    24-hr Response
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-zinc-950 group-hover:text-[var(--primary)] transition-colors">
                  Email
                </h3>
                <a
                  href="mailto:sales@expodigitalgroup.com"
                  className="text-xl md:text-2xl font-black text-zinc-950 hover:text-[var(--primary)] transition-colors inline-block leading-relaxed break-words"
                >
                  sales@expodigitalgroup.com
                </a>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-[var(--primary)] transition-colors">
                <span>Send Project Brief</span>
                <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>

            {/* Global Presence / Address Full Width Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="group relative rounded-3xl border border-zinc-200 bg-white p-8 md:p-10 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(17,17,17,0.06)] md:col-span-2 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-gradient opacity-10 blur-[80px] pointer-events-none" />

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 group-hover:bg-[var(--primary)]/10 transition-colors">
                  <IoLocationOutline className="text-2xl text-[var(--primary)]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full">
                  Global Presence
                </span>
              </div>

              <h3 className="mb-8 text-2xl md:text-3xl font-bold text-zinc-950 group-hover:text-[var(--primary)] transition-colors relative z-10">
                Our Locations
              </h3>

              {/* 4 Highlighted Location Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
                {/* Dubai Card */}
                <div className="group/card relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--primary)]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover/card:opacity-[0.04] transition-opacity duration-400 pointer-events-none" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IoLocationOutline className="text-[var(--primary)] text-lg" />
                    </div>
                  </div>
                  <h4 className="mb-5 text-2xl md:text-3xl font-black gradient-text tracking-tight">
                    UAE
                  </h4>
                  <div className="space-y-3">
                    <div className="group/co relative rounded-xl border border-[var(--primary)]/20 bg-zinc-50/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-sm">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-md bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                        </div>
                        <p className="text-sm md:text-[15px] font-black text-zinc-950 leading-snug">
                          Expo Digital (FZ) LLC
                        </p>
                      </div>
                      <p className="mt-3 pl-7 text-sm md:text-base font-semibold leading-relaxed text-zinc-700">
                        Capital Compound, Al Quoz Industrial Area 2, Dubai, UAE
                      </p>
                    </div>
                    <div className="group/co relative rounded-xl border border-[var(--secondary)]/20 bg-zinc-50/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-sm">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-md bg-[var(--secondary)]/15 border border-[var(--secondary)]/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                        </div>
                        <p className="text-sm md:text-[15px] font-black text-zinc-950 leading-snug">
                          Nishyama Technical Services LLC
                        </p>
                      </div>
                      <p className="mt-3 pl-7 text-sm md:text-base font-semibold leading-relaxed text-zinc-700">
                        Al Quoz Industrial Area 3, Warehouse No. 2-3, Dubai, UAE
                        (Opposite Al Quoz Mall)
                      </p>
                    </div>
                  </div>
                </div>

                {/* KSA Card */}
                <div className="group/card relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--primary)]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover/card:opacity-[0.04] transition-opacity duration-400 pointer-events-none" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IoLocationOutline className="text-[var(--primary)] text-lg" />
                    </div>
                  </div>
                  <h4 className="mb-5 text-2xl md:text-3xl font-black gradient-text tracking-tight">
                    KSA
                  </h4>
                  <div className="group/co relative rounded-xl border border-[var(--primary)]/20 bg-zinc-50/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-md bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      </div>
                      <p className="text-sm md:text-[15px] font-black text-zinc-950 leading-snug">
                        Expo Digital Riyadh (Riyadh)
                      </p>
                    </div>
                    <p className="mt-3 pl-7 text-sm md:text-base font-semibold leading-relaxed text-zinc-700">
                      Al Sulay, Riyadh - 14275, Warehouse - 11-12
                    </p>
                  </div>
                </div>

                {/* India Card */}
                <div className="group/card relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--primary)]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover/card:opacity-[0.04] transition-opacity duration-400 pointer-events-none" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IoLocationOutline className="text-[var(--primary)] text-lg" />
                    </div>
                  </div>
                  <h4 className="mb-5 text-2xl md:text-3xl font-black gradient-text tracking-tight">
                    India
                  </h4>
                  <div className="space-y-3">
                    <div className="group/co relative rounded-xl border border-[var(--primary)]/20 bg-zinc-50/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-sm">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-md bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                        </div>
                        <p className="text-sm md:text-[15px] font-black text-zinc-950 leading-snug">
                          Expo Worldwide Pvt LTD
                        </p>
                      </div>
                      <p className="mt-3 pl-7 text-sm md:text-base font-semibold leading-relaxed text-zinc-700">
                        Head Office, Gami Industrial Area, Office No. C-39A,
                        2nd Floor, Navi Mumbai, Thane - 400705, Maharashtra
                      </p>
                    </div>
                    <p className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      Mumbai • Bangalore • Delhi
                    </p>
                  </div>
                </div>

                {/* Europe Card */}
                <div className="group/card relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--primary)]/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover/card:opacity-[0.04] transition-opacity duration-400 pointer-events-none" />
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <IoLocationOutline className="text-[var(--primary)] text-lg" />
                    </div>
                  </div>
                  <h4 className="mb-5 text-2xl md:text-3xl font-black gradient-text tracking-tight">
                    Europe
                  </h4>
                  <div className="group/co relative rounded-xl border border-[var(--primary)]/20 bg-zinc-50/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-md bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                      </div>
                      <p className="text-sm md:text-[15px] font-black text-zinc-950 leading-snug">
                          Expo Works
                      </p>
                    </div>
                    <p className="mt-3 pl-7 text-sm md:text-base font-semibold leading-relaxed text-zinc-700">
                      Nadarzyn, 05-830, Near Warsaw, Poland
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      <FloatingIcons />
      <Footer />
    </div>
  );
}

export default Page;
