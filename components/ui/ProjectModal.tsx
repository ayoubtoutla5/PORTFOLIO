"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";
import { imgPath } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  tools: string[];
  image: string | null;
  description: string;
  location: string;
  year?: string;
  phase?: string;
  highlights?: string[];
  fullDescription?: string;
  gallery?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const gallery: string[] =
    project?.gallery ?? (project?.image ? [project.image] : []);

  const prevImage = useCallback(() => {
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((i) => (i + 1) % gallery.length);
  }, [gallery.length]);

  useEffect(() => {
    setActiveIndex(0);
    setLightboxOpen(false);
  }, [project?.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) setLightboxOpen(false);
        else onClose();
      }
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    if (project) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, lightboxOpen, onClose, prevImage, nextImage]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/90 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-3 md:inset-6 lg:inset-12 z-50 flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── LEFT: Image gallery ── */}
            <div className="lg:w-[60%] flex flex-col bg-navy/60 min-h-0">
              {/* Main image */}
              <div
                className="relative flex-1 min-h-52 overflow-hidden cursor-zoom-in bg-dark/40 flex items-center justify-center"
                onClick={() => gallery.length > 0 && setLightboxOpen(true)}
              >
                {gallery.length > 0 ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      src={imgPath(gallery[activeIndex])}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                ) : (
                  <span className="text-muted text-sm font-code">
                    Aucune image disponible
                  </span>
                )}

                {/* Zoom hint */}
                {gallery.length > 0 && (
                  <div className="absolute bottom-3 right-3 bg-dark/70 backdrop-blur-sm text-gold text-xs px-2 py-1 rounded-full flex items-center gap-1 pointer-events-none">
                    <ZoomIn className="w-3 h-3" />
                    Zoom
                  </div>
                )}

                {/* Counter */}
                {gallery.length > 1 && (
                  <div className="absolute top-3 left-3 bg-dark/70 backdrop-blur-sm text-muted text-xs px-2 py-1 rounded-full font-code pointer-events-none">
                    {activeIndex + 1} / {gallery.length}
                  </div>
                )}

                {/* Prev / Next arrows */}
                {gallery.length > 1 && (
                  <>
                    <button
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-dark/60 hover:bg-gold/20 text-white hover:text-gold p-2 rounded-full transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-dark/60 hover:bg-gold/20 text-white hover:text-gold p-2 rounded-full transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails strip */}
              {gallery.length > 1 && (
                <div className="flex gap-2 p-3 overflow-x-auto bg-dark/40 border-t border-gold/10 flex-shrink-0">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
                        i === activeIndex
                          ? "border-gold shadow-[0_0_8px_rgba(201,168,76,0.5)]"
                          : "border-transparent opacity-50 hover:opacity-75"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgPath(img)}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── RIGHT: Details ── */}
            <div className="lg:w-[40%] p-6 overflow-y-auto flex flex-col gap-5 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-dark/60 hover:bg-gold/20 text-muted hover:text-gold p-2 rounded-full transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category + Title */}
              <div className="pr-10">
                <span className="text-xs font-code text-gold border border-gold/30 bg-gold/10 px-2 py-0.5 rounded-full">
                  {project.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mt-3 leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-2 text-xs font-body">
                {project.location && (
                  <span className="flex items-center gap-1.5 text-muted bg-navy/60 px-3 py-1 rounded-full border border-gold/10">
                    <MapPin className="w-3 h-3 text-gold" />
                    {project.location}
                  </span>
                )}
                {project.year && (
                  <span className="flex items-center gap-1.5 text-muted bg-navy/60 px-3 py-1 rounded-full border border-gold/10">
                    <Calendar className="w-3 h-3 text-gold" />
                    {project.year}
                  </span>
                )}
                {project.phase && (
                  <span className="flex items-center gap-1.5 text-muted bg-navy/60 px-3 py-1 rounded-full border border-gold/10">
                    <Layers className="w-3 h-3 text-gold" />
                    Phase {project.phase}
                  </span>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-gold text-xs font-code uppercase tracking-widest mb-2">
                  Description
                </h4>
                <p className="text-silver/80 text-sm leading-relaxed font-body">
                  {project.fullDescription ?? project.description}
                </p>
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-gold text-xs font-code uppercase tracking-widest mb-2">
                    Points clés
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-silver/70 flex items-start gap-2 font-body"
                      >
                        <span className="text-gold mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools */}
              <div>
                <h4 className="text-gold text-xs font-code uppercase tracking-widest mb-2">
                  Outils utilisés
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20 font-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── LIGHTBOX (full-screen zoom) ── */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/96 z-[60] flex items-center justify-center"
                onClick={() => setLightboxOpen(false)}
              >
                {/* Close */}
                <button
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-all z-10"
                  onClick={() => setLightboxOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Counter */}
                {gallery.length > 1 && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-code">
                    {activeIndex + 1} / {gallery.length}
                  </div>
                )}

                {/* Arrows */}
                {gallery.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Full image */}
                <motion.img
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  src={imgPath(gallery[activeIndex])}
                  alt={project.title}
                  className="max-w-[92vw] max-h-[92vh] object-contain rounded-lg select-none cursor-zoom-out"
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                />

                {/* Hint */}
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs font-code">
                  Cliquer en dehors pour fermer · ← → pour naviguer · Échap pour
                  quitter
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
