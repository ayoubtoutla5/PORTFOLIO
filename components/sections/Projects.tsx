"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, projectCategories } from "@/lib/data";

type Project = (typeof projects)[0];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  return (
    <>
      <section id="projets" className="py-24 blueprint-bg-secondary relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 to-dark/50 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="section-label">Réalisations</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 relative inline-block">
              Mes <span className="text-gold">Projets</span>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </h2>
            <p className="text-muted mt-5 font-body max-w-lg mx-auto">
              Réalisations en bureau d&apos;études et sur chantier — cliquez sur un projet pour voir les plans et photos
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-body font-semibold border transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-gold text-dark border-gold"
                    : "bg-transparent text-muted border-gold/20 hover:border-gold/50 hover:text-silver"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  tools={project.tools}
                  image={project.image}
                  description={project.description}
                  location={project.location}
                  index={i}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted font-body">
              Aucun projet dans cette catégorie pour le moment.
            </div>
          )}
        </div>
      </section>

      {/* Project modal (rendered outside section to avoid z-index issues) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
