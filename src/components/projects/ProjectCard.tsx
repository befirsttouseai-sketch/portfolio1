import React from "react";
import { Project } from "@/data/portfolioData";
import { ProjectMockup } from "./ProjectMockup";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Info, Clock, Check } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article className="bg-white rounded-2xl border border-border-subtle overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Mockup Preview Area */}
        <div className="p-4 sm:p-5 bg-bg-light/70 border-b border-border-subtle relative">
          <ProjectMockup projectId={project.id} title={project.title} />

          {/* Category Tag Overlay */}
          <div className="absolute top-7 left-7">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-navy/90 text-white px-2.5 py-1 rounded-md backdrop-blur-xs">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-bold text-orange uppercase tracking-wider">
              {project.id.replace("-", " 0")}
            </span>
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="text-xs text-text-secondary hover:text-navy flex items-center gap-1 font-medium transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-orange rounded"
              aria-label={`View detailed breakdown for ${project.title}`}
            >
              <Info className="w-3.5 h-3.5 text-orange" />
              <span>Full Details</span>
            </button>
          </div>

          <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-text-secondary line-clamp-3 mb-5 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key highlights list */}
          <ul className="mb-6 space-y-1.5 text-xs text-slate-600">
            {project.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-bg-light text-navy border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 py-4 bg-bg-light/40 border-t border-border-subtle flex items-center justify-between gap-3">
        {/* Live Project Action */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-orange hover:bg-orange-hover px-3.5 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-orange shadow-xs"
          >
            <span>View Live</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200/80 px-3 py-1.5 rounded-lg cursor-not-allowed select-none"
            title="Live link placeholder will be provided upon deployment"
          >
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Link coming soon</span>
          </div>
        )}

        {/* Source Code Action */}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-orange transition-colors focus-visible:outline-2 focus-visible:outline-orange"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>
        ) : (
          <span
            className="text-xs text-slate-400 font-medium cursor-not-allowed select-none"
            title="Repository placeholder will be linked upon public release"
          >
            Source coming soon
          </span>
        )}
      </div>
    </article>
  );
};
