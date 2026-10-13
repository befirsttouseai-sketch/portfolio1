import React from "react";
import { processSteps } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbulb, Compass, Code2, CheckCheck } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <Lightbulb key="1" className="w-5 h-5 text-orange" />,
    <Compass key="2" className="w-5 h-5 text-orange" />,
    <Code2 key="3" className="w-5 h-5 text-orange" />,
    <CheckCheck key="4" className="w-5 h-5 text-orange" />,
  ];

  return (
    <section id="approach" className="py-20 sm:py-28 bg-bg-light/60 border-t border-border-subtle/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workflow & Methodology"
          title="Development Approach"
          description="How I approach building frontends — structured, iterative, and focused on maintainability and user accessibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-border-subtle shadow-xs hover:shadow-md transition-all duration-200 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center">
                    {stepIcons[index]}
                  </div>
                  <span className="text-xl font-mono font-extrabold text-navy/20 group-hover:text-orange transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2.5 group-hover:text-orange transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Bottom accent indicator */}
              <div className="mt-6 pt-4 border-t border-border-subtle/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">
                  Phase {stepItem.step}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

