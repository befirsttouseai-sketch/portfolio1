"use client";

import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import { Monogram } from "@/components/ui/Monogram";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-xs py-3.5"
          : "bg-white/80 backdrop-blur-xs py-5"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-orange rounded-lg"
          aria-label={`${personalInfo.name} - Back to top`}
          onClick={closeMenu}
        >
          <Monogram size="md" showText={true} />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors relative focus-visible:outline-2 focus-visible:outline-orange ${
                  isActive
                    ? "text-orange font-semibold"
                    : "text-text-secondary hover:text-navy hover:bg-bg-light"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-orange rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            className="group shadow-xs hover:shadow"
          >
            Let&apos;s Talk
            <ArrowUpRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2.5 rounded-lg text-navy hover:text-orange hover:bg-bg-light transition-colors focus-visible:outline-2 focus-visible:outline-orange"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[69px] bottom-0 bg-white/98 backdrop-blur-xl border-b border-border-subtle md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-8 flex flex-col h-full justify-between max-w-md mx-auto">
          <div className="flex flex-col space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-text-secondary px-3 pb-2">
              Navigation
            </span>
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-orange-light text-orange-hover"
                      : "text-navy hover:bg-bg-light"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-border-subtle flex flex-col gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full text-center"
              onClick={closeMenu}
            >
              Let&apos;s Talk
            </Button>
            <p className="text-center text-xs text-text-secondary">
              {personalInfo.email} · {personalInfo.phone}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

