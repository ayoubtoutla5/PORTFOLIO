"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Zap, MapPin, Calendar } from "lucide-react";
import { education, certifications } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="w-6 h-6" />,
  "book-open": <BookOpen className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
};

export default function Education() {
  return (
    <section id="formations" className="py-24 blueprint-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-navy/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">Académique</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 relative inline-block">
            Formations & <span className="text-gold">Certifications</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Formations */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="section-label mb-4">Formations</h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card p-6 flex gap-5 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  {iconMap[edu.icon] ?? <GraduationCap className="w-6 h-6" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-bold text-white leading-snug mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-silver text-sm font-body mb-2">{edu.school}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted font-body">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="font-code text-gold/60 text-sm font-bold">{edu.period.split(" — ")[1] ?? edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="section-label mb-4">Certifications</h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 group border-gold/25"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center text-gold">
                    {iconMap[cert.icon] ?? <Award className="w-5 h-5" />}
                  </div>
                  <span className="font-code text-gold font-bold text-lg">{cert.year}</span>
                </div>
                <h4 className="font-body font-bold text-white text-sm leading-snug mb-2">
                  {cert.title}
                </h4>
                <p className="text-gold text-xs font-body font-semibold mb-2">
                  {cert.organization}
                </p>
                <p className="text-muted text-xs font-body leading-relaxed italic">
                  {cert.description}
                </p>
                {/* Gold accent bar */}
                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-gold to-transparent rounded" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
