"use client";

import { motion, type Variants } from "framer-motion";
import { skills } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};


export default function Skills() {
  return (
    <section id="competences" className="py-24 blueprint-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/20 to-dark/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Expertise technique</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 relative inline-block">
            Mes <span className="text-gold">Compétences</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </h2>
          <p className="text-muted mt-5 font-body max-w-lg mx-auto">
            Maîtrise des outils de conception assistée par ordinateur et des normes de construction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Colonne 1 — Logiciels */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">Logiciels</span>
              <h3 className="font-display text-xl text-white mt-1">Outils DAO / Calcul</h3>
            </motion.div>

            <div className="flex flex-col gap-3">
              {skills.software.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={fadeUp}
                  className="py-2.5 px-3 rounded-lg border border-gold/10 bg-gold/5 hover:border-gold/30 hover:bg-gold/10 transition-colors"
                >
                  <span className="font-body text-sm text-silver">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 — Compétences techniques */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">Savoir-faire</span>
              <h3 className="font-display text-xl text-white mt-1">Compétences Techniques</h3>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-body font-semibold rounded-md border border-gold/20 bg-gold/5 text-silver hover:border-gold/50 hover:text-gold hover:bg-gold/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Colonne 3 — Langues */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="glass-card p-8 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">Communication</span>
              <h3 className="font-display text-xl text-white mt-1">Langues</h3>
            </motion.div>

            <div className="flex flex-col gap-4">
              {skills.languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  variants={fadeUp}
                  className="py-3 border-b border-gold/10 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm font-semibold text-silver">{lang.name}</span>
                    <span className="font-code text-xs text-muted">{lang.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
