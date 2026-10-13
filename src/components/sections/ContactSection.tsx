"use client";

import React, { useState } from "react";
import { contactDetails, personalInfo } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-border-subtle/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={contactDetails.heading}
          description={contactDetails.subheading}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Quick Launchers */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                Let&apos;s connect directly
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Whether you have an upcoming web project, need assistance building responsive frontend
                interfaces, or want to discuss a full-time role, I&apos;m readily available via email or telephone.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-bg-light border border-border-subtle/80 flex items-start justify-between gap-4 group">
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="p-2.5 rounded-xl bg-orange-light text-orange shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-sm sm:text-base font-bold text-navy hover:text-orange transition-colors truncate block focus-visible:outline-2 focus-visible:outline-orange rounded"
                  >
                    {contactDetails.email}
                  </a>
                  <p className="text-[11px] text-text-secondary mt-0.5">
                    Guaranteed reply within 24 business hours
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(contactDetails.email, "email")}
                className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-white border border-transparent hover:border-border-subtle transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-orange cursor-pointer"
                aria-label="Copy email address to clipboard"
                title="Copy email address"
              >
                {copiedItem === "email" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-bg-light border border-border-subtle/80 flex items-start justify-between gap-4 group">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-orange-light text-orange shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                    className="text-sm sm:text-base font-bold text-navy hover:text-orange transition-colors block focus-visible:outline-2 focus-visible:outline-orange rounded"
                  >
                    {contactDetails.phone}
                  </a>
                  <p className="text-[11px] text-text-secondary mt-0.5">
                    Available during Nepal Standard Time (UTC+5:45)
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(contactDetails.phone, "phone")}
                className="p-2 rounded-lg text-slate-400 hover:text-navy hover:bg-white border border-transparent hover:border-border-subtle transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-orange cursor-pointer"
                aria-label="Copy phone number to clipboard"
                title="Copy phone number"
              >
                {copiedItem === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                href={`mailto:${contactDetails.email}`}
                variant="primary"
                size="md"
                className="group flex-1 sm:flex-initial"
              >
                <Mail className="mr-2 w-4 h-4" />
                <span>{contactDetails.emailButtonLabel}</span>
              </Button>

              <Button
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                variant="outline"
                size="md"
                className="flex-1 sm:flex-initial"
              >
                <Phone className="mr-2 w-4 h-4 text-orange" />
                <span>{contactDetails.phoneButtonLabel}</span>
              </Button>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 pt-4 text-xs text-text-secondary">
              <MapPin className="w-4 h-4 text-orange shrink-0" />
              <span>Kathmandu, Nepal (Open to local & remote engagements worldwide)</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

