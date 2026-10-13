"use client";

import React, { useState } from "react";
import { featuredProjects, Project } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-t border-border-subtle/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Gallery"
          title="Featured Projects"
          description="A selection of recent frontend web applications showcasing responsive architecture, clean typography, and interactive user experiences."
        />

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* 'Have a project in mind?' CTA Banner beneath gallery */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-navy via-navy-light to-navy text-white p-8 sm:p-12 border border-navy-light/60 shadow-xl relative overflow-hidden">
          <div
            className="absolute -top-12 -right-12 w-48 h-48 bg-orange/20 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-orange-light/10 text-orange flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Have a project in mind?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              I am open to full-time frontend developer roles, contract opportunities, and
              collaborative web projects. Let&apos;s discuss how I can help bring your digital vision to life.
            </p>

            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="group shadow-md hover:shadow-orange/30"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

