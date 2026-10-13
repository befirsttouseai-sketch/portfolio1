"use client";

import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import { Monogram } from "@/components/ui/Monogram";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-navy-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-light/40">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Monogram size="md" />
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block">
                  {personalInfo.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-orange font-semibold">
                  {personalInfo.title}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Frontend web developer passionate about crafting clean, responsive, and
              accessible digital interfaces that bridge aesthetic design and resilient code.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.availabilityText}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-150 focus-visible:outline-2 focus-visible:outline-orange rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-orange">
              Direct Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group focus-visible:outline-2 focus-visible:outline-orange rounded"
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4 text-orange shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group focus-visible:outline-2 focus-visible:outline-orange rounded"
                  aria-label={`Call phone number ${personalInfo.phone}`}
                >
                  <Phone className="w-4 h-4 text-orange shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-orange shrink-0" />
                <span>Kathmandu, {personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved. Built with React, Next.js & Tailwind CSS.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-light text-slate-300 hover:text-white hover:bg-orange transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-orange"
            aria-label="Back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
