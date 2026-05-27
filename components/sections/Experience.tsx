"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Briefcase, HardHat, PencilRuler, Calculator, ClipboardList, CheckSquare } from "lucide-react";
import { experiences } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "drafting-compass": <PencilRuler className="w-4 h-4" />,
  "pencil-ruler": <PencilRuler className="w-4 h-4" />,
  "hard-hat": <HardHat className="w-4 h-4" />,
  calculator: <Calculator className="w-4 h-4" />,
  "clipboard-list": <ClipboardList className="w-4 h-4" />,
  "check-square": <CheckSquare className="w-4 h-4" />,
};

export default function Experience() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "1-0": true,
  });

  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="experience" className="py-24 blueprint-bg-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-navy/30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">Parcours</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 relative inline-block">
            Expériences <span className="text-gold">Professionnelles</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, expIdx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: expIdx * 0.2 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 md:left-5 top-6 w-5 h-5 rounded-full bg-gold border-4 border-dark shadow-[0_0_12px_rgba(201,168,76,0.5)]" />

                {/* Card */}
                <div className="glass-card p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="font-display text-xl md:text-2xl font-bold text-gold">
                          {exp.company}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-body font-bold border ${
                            exp.current
                              ? "bg-green-500/10 text-green-400 border-green-500/30"
                              : "bg-gold/10 text-gold border-gold/30"
                          }`}
                        >
                          {exp.current ? (
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full available-dot" />
                              Poste Actuel
                            </span>
                          ) : (
                            exp.type
                          )}
                        </span>
                      </div>
                      <p className="text-white font-body font-semibold">{exp.title}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0 text-right">
                      <span className="flex items-center gap-1.5 text-muted text-sm font-body">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted text-sm font-body">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="text-gold/70 text-xs font-code">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Mission groups */}
                  <div className="space-y-3">
                    {exp.groups.map((group, gIdx) => {
                      const key = `${exp.id}-${gIdx}`;
                      const isOpen = openGroups[key] ?? false;
                      return (
                        <div
                          key={group.name}
                          className="border border-gold/15 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleGroup(key)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-navy/40 hover:bg-navy/70 transition-colors text-left"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-gold">{iconMap[group.icon] ?? <Briefcase className="w-4 h-4" />}</span>
                              <span className="text-silver text-sm font-body font-semibold">
                                {group.name}
                              </span>
                            </div>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-4 h-4 text-gold/60" />
                            </motion.div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <ul className="px-4 py-3 space-y-2 bg-dark/30">
                                  {group.missions.map((mission) => (
                                    <li
                                      key={mission}
                                      className="flex gap-3 text-sm font-body text-silver/80 leading-relaxed"
                                    >
                                      <span className="text-gold mt-1 flex-shrink-0">▸</span>
                                      {mission}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
