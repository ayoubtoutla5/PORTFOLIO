"use client";

import { motion } from "framer-motion";
import { Eye, Wrench } from "lucide-react";
import { imgPath } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  tools: string[];
  image: string | null;
  description: string;
  location: string;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  category,
  tools,
  image,
  description,
  location,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group overflow-hidden flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* Image / Placeholder */}
      <div className="relative h-52 overflow-hidden bg-navy">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imgPath(image)}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full blueprint-bg flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-px bg-gold" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="h-full w-px bg-gold" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <Wrench className="w-8 h-8 text-gold opacity-60" />
              <span className="text-xs text-muted font-code tracking-widest uppercase">
                Plan à venir
              </span>
            </div>
            <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-gold/40" />
            <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-gold/40" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-gold/40" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-gold/40" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 bg-gold text-dark text-sm font-semibold px-4 py-2 rounded-full font-body">
            <Eye className="w-4 h-4" />
            Voir les détails
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-dark/80 backdrop-blur-sm text-gold text-xs px-2 py-1 rounded border border-gold/30 font-body font-semibold">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-2 py-0.5 rounded bg-gold/10 text-gold border border-gold/20 font-body"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gold/10">
          <span className="text-muted text-xs flex items-center gap-1 font-body">
            <span>📍</span> {location}
          </span>
          <span className="text-gold text-xs flex items-center gap-1 font-body font-medium group-hover:underline">
            <Eye className="w-3 h-3" /> Voir détails
          </span>
        </div>
      </div>
    </motion.div>
  );
}
