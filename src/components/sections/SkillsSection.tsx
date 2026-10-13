import React from "react";
import { skillCategories } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Code2,
  Palette,
  Terminal,
  Check,
  Globe,
  FileCode,
  Layers,
  LayoutGrid,
  ShieldCheck,
  Eye,
  GitBranch,
  FolderGit2,
  Package,
  Wrench,
} from "lucide-react";
import { FigmaIcon } from "@/components/ui/BrandIcons";

// Map skill names to appropriate Lucide icons
const getSkillIcon = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes("html")) return <Globe className="w-4 h-4 text-orange" />;
  if (normalized.includes("css3") || normalized.includes("flexbox"))
    return <Layers className="w-4 h-4 text-blue-500" />;
  if (normalized.includes("javascript")) return <FileCode className="w-4 h-4 text-amber-500" />;
  if (normalized.includes("typescript")) return <Code2 className="w-4 h-4 text-sky-600" />;
  if (normalized.includes("react")) return <Code2 className="w-4 h-4 text-cyan-500" />;
  if (normalized.includes("tailwind")) return <Palette className="w-4 h-4 text-teal-500" />;
  if (normalized.includes("responsive")) return <LayoutGrid className="w-4 h-4 text-indigo-500" />;
  if (normalized.includes("accessibility")) return <Eye className="w-4 h-4 text-emerald-600" />;
  if (normalized.includes("design systems") || normalized.includes("ui/ux"))
    return <Palette className="w-4 h-4 text-purple-500" />;
  if (normalized.includes("github")) return <FolderGit2 className="w-4 h-4 text-slate-700" />;
  if (normalized.includes("git")) return <GitBranch className="w-4 h-4 text-orange" />;
  if (normalized.includes("npm")) return <Package className="w-4 h-4 text-red-500" />;
  if (normalized.includes("browser")) return <Wrench className="w-4 h-4 text-blue-600" />;
  if (normalized.includes("figma")) return <FigmaIcon className="w-4 h-4 text-pink-500" />;
  return <Check className="w-4 h-4 text-orange" />;
};

export const SkillsSection: React.FC = () => {
  const categoryMeta = [
    {
      icon: <Code2 className="w-5 h-5 text-orange" />,
      badge: "Core Engineering",
      description: "Translating mockups into interactive, maintainable client-side applications.",
    },
    {
      icon: <Palette className="w-5 h-5 text-orange" />,
      badge: "Design Systems & UI",
      description: "Crafting structured, accessible interfaces that adapt across all viewports.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-orange" />,
      badge: "Tooling & Workflow",
      description: "Version control, modern package management, and developer tools for agile delivery.",
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-bg-light/60 border-t border-border-subtle/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Proficiency"
          title="Skills & Technologies"
          description="A structured overview of the frontend tools, languages, and methodologies I utilize to build modern websites."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const meta = categoryMeta[index] || categoryMeta[0];
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-border-subtle shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-light flex items-center justify-center">
                      {meta.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary bg-bg-light px-2.5 py-1 rounded-md border border-border-subtle/60">
                      {meta.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-text-secondary mb-6 leading-relaxed">
                    {meta.description}
                  </p>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-border-subtle/60">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-light border border-border-subtle text-xs font-medium text-navy hover:border-orange/40 hover:bg-white transition-all shadow-2xs"
                    >
                      {getSkillIcon(skill.name)}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality commitment note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-border-subtle max-w-3xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-text-secondary text-center sm:text-left">
            <span className="font-semibold text-navy">Committed to Best Practices:</span> Every
            project is developed strictly adhering to semantic HTML, responsive layout principles,
            and standard accessibility guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};
