"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { ProjectMockup } from "./ProjectMockup";
import { X, CheckCircle, ExternalLink, Clock, Layers, ShieldCheck } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/70 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border-subtle z-10 flex flex-col animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-border-subtle flex items-center justify-between z-20">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-light text-orange-hover px-2.5 py-0.5 rounded">
              {project.category}
            </span>
            <span className="text-xs font-mono text-text-secondary">
              {project.id}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-navy hover:bg-bg-light transition-colors focus-visible:outline-2 focus-visible:outline-orange"
            aria-label="Close project details dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Mockup Preview */}
          <div className="rounded-xl overflow-hidden shadow-xs border border-border-subtle">
            <ProjectMockup projectId={project.id} title={project.title} />
          </div>

          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-navy">
              {project.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Architecture & Features */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange" />
              <span>Core Features & Implementation Highlights</span>
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-text-secondary bg-bg-light/80 p-3 rounded-lg border border-border-subtle/60"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-navy border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Production Notice */}
          <div className="p-4 rounded-xl bg-orange-light/40 border border-orange/20 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-orange shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-navy">Editable Showcase:</strong> This initial showcase is
              configured for straightforward customization. Real production URLs, GitHub repository links,
              and live screenshots can be updated directly in the centralized project data schema.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-bg-light px-6 py-4 border-t border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-orange hover:bg-orange-hover px-4 py-2 rounded-lg transition-colors"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-white border border-slate-200 px-3 py-1.5 rounded-lg">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Live Demo Coming Soon</span>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg text-navy hover:bg-white transition-colors border border-border-subtle"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
