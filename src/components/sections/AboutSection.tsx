import React from "react";
import { aboutContent, personalInfo } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layout, CheckCircle, Smartphone, Code, HeartHandshake } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-border-subtle/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Introduction"
          title={aboutContent.heading}
          description="Crafting purposeful digital experiences with precision, empathy, and clean code."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait Card / Visual Monogram Profile */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative border */}
              <div
                className="absolute inset-0 bg-orange/5 rounded-3xl transform rotate-2 border border-orange/20 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl bg-bg-light border border-border-subtle p-8 shadow-sm overflow-hidden">
                {/* Visual Avatar Placeholder & Monogram */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-navy text-white flex flex-col items-center justify-center mx-auto mb-6 shadow-md relative group">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tighter">
                    <span className="text-white">P</span>
                    <span className="text-orange">S</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-300 font-semibold mt-1">
                    Frontend Dev
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-orange flex items-center justify-center text-white text-[10px]">
                    ✓
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy">{personalInfo.name}</h3>
                  <p className="text-sm font-medium text-orange mt-0.5">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    Based in Kathmandu, {personalInfo.location}
                  </p>
                </div>

                {/* Core focus pills */}
                <div className="mt-6 pt-6 border-t border-border-subtle space-y-3">
                  {aboutContent.highlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="flex items-center justify-between text-xs py-1"
                    >
                      <span className="text-text-secondary font-medium">{highlight.label}:</span>
                      <span className="text-navy font-semibold">{highlight.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative and Principles */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-6">
              Bridging design fidelity with robust code structure.
            </h3>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6">
              {aboutContent.body}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-bg-light border border-border-subtle/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-light text-orange shrink-0">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Responsive & Fluid</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    Tailored layout grids that transition effortlessly across devices.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-bg-light border border-border-subtle/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-light text-orange shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Clean Architecture</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    Semantic HTML5 markup and modular, readable component code.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-bg-light border border-border-subtle/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-light text-orange shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Accessibility First</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    High contrast ratios, keyboard navigation, and WCAG compliance.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-bg-light border border-border-subtle/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-light text-orange shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Continuous Learning</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    Actively exploring modern web specifications and frontend tooling.
                  </p>
                </div>
              </div>
            </div>

            <Button
              href={aboutContent.cta.href}
              variant="secondary"
              size="md"
              className="group"
            >
              <span>{aboutContent.cta.label}</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

