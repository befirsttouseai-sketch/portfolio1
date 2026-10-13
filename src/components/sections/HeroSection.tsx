import React from "react";
import { heroContent, personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code2, Sparkles, CheckCircle2, Terminal, Layers } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-bg-light/80 via-white to-white"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-light border border-orange/20 text-orange-hover text-xs font-semibold mb-6 shadow-xs animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
              </span>
              <span>{personalInfo.availabilityText}</span>
            </div>

            {/* Eyebrow */}
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-text-secondary mb-3 block">
              {heroContent.eyebrow}
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6">
              {heroContent.headlineMain}{" "}
              <span className="text-orange relative inline-block">
                {heroContent.headlineAccent}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-orange/30 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-8">
              {heroContent.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href={heroContent.primaryCTA.href}
                variant="primary"
                size="lg"
                className="group shadow-sm hover:shadow-md"
              >
                <span>{heroContent.primaryCTA.label}</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                href={heroContent.secondaryCTA.href}
                variant="outline"
                size="lg"
              >
                <span>{heroContent.secondaryCTA.label}</span>
              </Button>
            </div>

            {/* Quick credibility features */}
            <div className="mt-10 pt-8 border-t border-border-subtle w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-bold text-navy">100%</p>
                <p className="text-xs text-text-secondary font-medium mt-0.5">
                  Responsive Design
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">WCAG 2.2</p>
                <p className="text-xs text-text-secondary font-medium mt-0.5">
                  Level AA Accessible
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy">Modern</p>
                <p className="text-xs text-text-secondary font-medium mt-0.5">
                  React & Tailwind Stack
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Code & UI Visual Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative background glow */}
              <div
                className="absolute -top-6 -right-6 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -left-6 w-64 h-64 bg-navy/5 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Realistic Code / Interface Mockup Card */}
              <div className="relative rounded-2xl bg-navy text-white shadow-2xl border border-navy-light/60 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                {/* Browser window titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-dark/90 border-b border-navy-light/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-navy text-xs text-slate-300 font-mono">
                    <Terminal className="w-3 h-3 text-orange" />
                    <span>DeveloperProfile.tsx</span>
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-[10px] text-slate-400 font-mono">UTF-8</span>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                  <div className="flex gap-4">
                    <div className="select-none text-slate-500 text-right pr-2 font-mono">
                      1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11
                    </div>
                    <div className="flex-1">
                      <p>
                        <span className="text-orange">const</span>{" "}
                        <span className="text-blue-400">developer</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">name:</span>{" "}
                        <span className="text-emerald-300">&quot;Pemba Sherpa&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">role:</span>{" "}
                        <span className="text-emerald-300">&quot;Frontend Web Developer&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">coreStack:</span> [
                      </p>
                      <p className="pl-8 text-amber-300">
                        &quot;TypeScript&quot;, &quot;React&quot;, &quot;Tailwind CSS&quot;, &quot;Next.js&quot;
                      </p>
                      <p className="pl-4">],</p>
                      <p className="pl-4">
                        <span className="text-slate-400">focus:</span> &#123;
                      </p>
                      <p className="pl-8 text-sky-300">
                        performance: <span className="text-orange">true</span>, accessibility: <span className="text-orange">true</span>
                      </p>
                      <p className="pl-4">&#125;,</p>
                      <p className="pl-4">
                        <span className="text-slate-400">status:</span>{" "}
                        <span className="text-emerald-400">&quot;Ready for opportunities&quot;</span>
                      </p>
                      <p>&#125;;</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Status Footer */}
                <div className="px-5 py-3.5 bg-navy-dark/95 border-t border-navy-light/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-orange" />
                    <span className="text-slate-300 font-medium">Clean Architecture</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>0 Errors, 0 Warnings</span>
                  </div>
                </div>
              </div>

              {/* Floating UI Badge 1 */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg border border-border-subtle p-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-light flex items-center justify-center text-orange">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">Responsive Layouts</p>
                  <p className="text-[11px] text-text-secondary">Mobile to Ultra-Wide</p>
                </div>
              </div>

              {/* Floating UI Badge 2 */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-border-subtle p-3 flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-orange" />
                <span className="text-xs font-bold text-navy">Semantic & Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

