"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedViaClient, setSubmittedViaClient] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a message subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    // Realistic brief submission experience with fallback to mailto
    setTimeout(() => {
      setStatus("success");
      setSubmittedViaClient(true);
    }, 700);
  };

  const openMailto = () => {
    const encodedSubject = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : "Portfolio Inquiry"
    );
    const encodedBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const resetForm = () => {
    setFormData({ fullName: "", email: "", subject: "", message: "" });
    setErrors({});
    setStatus("idle");
    setSubmittedViaClient(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-border-subtle p-6 sm:p-8 shadow-xs">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-navy">Send a Message</h3>
        <p className="text-xs sm:text-sm text-text-secondary mt-1">
          Fill out this form or click to email directly at{" "}
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-orange font-medium hover:underline"
          >
            {personalInfo.email}
          </a>
          .
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-navy">
            Message Prepared Successfully!
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-navy">{formData.fullName}</strong>. To ensure direct
            delivery to Pemba&apos;s verified inbox, you can launch your email client with this prefilled message:
          </p>

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={openMailto}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-orange text-white text-xs font-semibold hover:bg-orange-hover transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Launch Default Email App</span>
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold text-text-secondary hover:text-navy hover:bg-white border border-slate-200 transition-colors"
            >
              Write Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Full Name <span className="text-orange">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy bg-white transition-colors focus:ring-2 focus:ring-orange/20 focus:border-orange focus:outline-hidden ${
                errors.fullName
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-border-subtle hover:border-slate-300"
              }`}
            />
            {errors.fullName && (
              <p
                id="fullName-error"
                className="mt-1 text-xs text-rose-500 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Email Address <span className="text-orange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy bg-white transition-colors focus:ring-2 focus:ring-orange/20 focus:border-orange focus:outline-hidden ${
                errors.email
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-border-subtle hover:border-slate-300"
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-xs text-rose-500 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Subject <span className="text-orange">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Frontend Project Inquiry"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy bg-white transition-colors focus:ring-2 focus:ring-orange/20 focus:border-orange focus:outline-hidden ${
                errors.subject
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-border-subtle hover:border-slate-300"
              }`}
            />
            {errors.subject && (
              <p
                id="subject-error"
                className="mt-1 text-xs text-rose-500 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
            >
              Message <span className="text-orange">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, or objectives..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-navy bg-white transition-colors focus:ring-2 focus:ring-orange/20 focus:border-orange focus:outline-hidden resize-y ${
                errors.message
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-border-subtle hover:border-slate-300"
              }`}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-xs text-rose-500 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Form Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-orange text-white text-sm font-semibold hover:bg-orange-hover active:scale-[0.99] transition-all shadow-xs cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-orange"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

