import React from "react";
import { Compass, Briefcase, User, Sparkles, Star, MapPin, TrendingUp, CheckCircle2 } from "lucide-react";

interface ProjectMockupProps {
  projectId: string;
  title: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId, title }) => {
  return (
    <div className="w-full aspect-[16/10] bg-navy-dark rounded-xl overflow-hidden border border-border-subtle/80 flex flex-col shadow-inner select-none relative group-hover:scale-[1.01] transition-transform duration-300">
      {/* Browser chrome header bar */}
      <div className="bg-navy px-3.5 py-2 flex items-center justify-between border-b border-navy-light/50">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="bg-navy-dark/80 px-4 py-0.5 rounded-md text-[10px] font-mono text-slate-400 border border-navy-light/40 flex items-center gap-1.5 truncate max-w-[200px]">
          <span className="text-orange">https://</span>
          <span>{projectId}.preview.app</span>
        </div>
        <div className="w-6" />
      </div>

      {/* Mockup Canvas */}
      <div className="flex-1 bg-slate-50 relative overflow-hidden flex flex-col text-navy">
        {projectId === "project-01" && (
          /* Travel & Tourism Mockup */
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 bg-gradient-to-br from-sky-50 via-white to-amber-50/30">
            {/* Travel Mini Nav */}
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-orange" />
                <span className="text-xs font-bold text-navy tracking-tight">HimalayaTours</span>
              </div>
              <div className="hidden sm:flex gap-2 text-[10px] text-slate-500 font-medium">
                <span>Destinations</span>
                <span>Packages</span>
                <span>Guides</span>
              </div>
              <span className="text-[10px] bg-orange text-white px-2 py-0.5 rounded-full font-semibold">
                Explore
              </span>
            </div>

            {/* Travel Hero Banner Card */}
            <div className="bg-gradient-to-r from-navy to-navy-light text-white rounded-lg p-3 sm:p-4 my-auto shadow-xs relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[9px] font-bold uppercase tracking-wider text-orange">
                  Curated Himalayan Journeys
                </span>
                <p className="text-xs sm:text-sm font-extrabold text-white mt-0.5">
                  Everest Base Camp & Annapurna Circuit
                </p>
                <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-300">
                  <span className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> 4.9 (120+ Reviews)
                  </span>
                  <span className="flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-orange" /> Nepal
                  </span>
                </div>
              </div>
            </div>

            {/* Travel Cards Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white p-2 rounded-md border border-slate-200 text-left shadow-2xs">
                <div className="h-8 bg-sky-100 rounded mb-1 flex items-center justify-center text-[10px] font-semibold text-sky-800">
                  Annapurna Trek
                </div>
                <p className="text-[10px] font-bold text-navy truncate">14 Days Expedition</p>
                <p className="text-[9px] text-orange font-semibold">$1,250 / person</p>
              </div>
              <div className="bg-white p-2 rounded-md border border-slate-200 text-left shadow-2xs">
                <div className="h-8 bg-emerald-100 rounded mb-1 flex items-center justify-center text-[10px] font-semibold text-emerald-800">
                  Pokhara Serenity
                </div>
                <p className="text-[10px] font-bold text-navy truncate">7 Days Leisure</p>
                <p className="text-[9px] text-orange font-semibold">$680 / person</p>
              </div>
            </div>
          </div>
        )}

        {projectId === "project-02" && (
          /* Modern Business Website Mockup */
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
            {/* Corporate Mini Nav */}
            <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-navy tracking-tight">ApexConsulting</span>
              </div>
              <div className="hidden sm:flex gap-2 text-[10px] text-slate-500 font-medium">
                <span>Solutions</span>
                <span>Enterprise</span>
                <span>Case Studies</span>
              </div>
              <span className="text-[10px] bg-navy text-white px-2 py-0.5 rounded font-semibold">
                Client Portal
              </span>
            </div>

            {/* Business Hero Content */}
            <div className="my-auto text-left py-1">
              <span className="text-[9px] font-semibold tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full inline-block">
                Strategic Consulting
              </span>
              <p className="text-xs sm:text-sm font-extrabold text-navy mt-1">
                Accelerate Growth With Scalable Digital Operations
              </p>
              <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                Delivering verified operational efficiency and sustainable digital transformation.
              </p>
            </div>

            {/* Metrics & Services Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2 rounded-md border border-slate-200 text-center shadow-2xs">
                <p className="text-[11px] font-extrabold text-navy">+42%</p>
                <p className="text-[8px] text-slate-500 uppercase font-semibold">Efficiency</p>
              </div>
              <div className="bg-white p-2 rounded-md border border-slate-200 text-center shadow-2xs">
                <p className="text-[11px] font-extrabold text-navy">99.9%</p>
                <p className="text-[8px] text-slate-500 uppercase font-semibold">Uptime</p>
              </div>
              <div className="bg-white p-2 rounded-md border border-slate-200 text-center shadow-2xs">
                <p className="text-[11px] font-extrabold text-orange">24/7</p>
                <p className="text-[8px] text-slate-500 uppercase font-semibold">Advisory</p>
              </div>
            </div>
          </div>
        )}

        {projectId === "project-03" && (
          /* Personal Portfolio Mockup */
          <div className="h-full flex flex-col justify-between p-3.5 sm:p-4 bg-white">
            {/* Portfolio Mini Nav */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded bg-navy text-white text-[9px] font-bold flex items-center justify-center">
                  PS
                </div>
                <span className="text-xs font-bold text-navy">Pemba Sherpa</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[9px] text-slate-500 font-medium">Available</span>
              </div>
            </div>

            {/* Editorial Portfolio Hero */}
            <div className="my-auto text-left py-1">
              <span className="text-[9px] font-bold tracking-widest text-orange uppercase">
                Frontend Developer
              </span>
              <p className="text-xs sm:text-sm font-extrabold text-navy mt-1 leading-snug">
                Building Modern Websites That Make an Impact.
              </p>
              <div className="flex gap-1.5 mt-2">
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                  React
                </span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                  TypeScript
                </span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-orange-light text-orange-hover font-semibold">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Clean Project Preview Card */}
            <div className="bg-bg-light p-2 rounded-md border border-slate-200 flex items-center justify-between">
              <div className="text-left">
                <p className="text-[10px] font-bold text-navy">Accessible & Responsive</p>
                <p className="text-[8px] text-slate-500">WCAG 2.2 AA · 60fps Transitions</p>
              </div>
              <span className="text-[9px] text-orange font-bold flex items-center gap-0.5">
                View &rarr;
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

