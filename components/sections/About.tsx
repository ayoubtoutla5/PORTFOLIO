"use client";

import { motion, type Variants } from "framer-motion";
import { Target, Zap, Users, MapPin, Phone, Mail, Link2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Rigueur",
    desc: "Plans conformes aux normes BAEL/RPS, dossiers techniques irréprochables.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Efficacité",
    desc: "Du concept au dossier de soumission, je livre à temps et avec précision.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Polyvalence",
    desc: "Conception ET suivi terrain — une double compétence rare et précieuse.",
  },
];

const contactItems = [
  { icon: <MapPin className="w-4 h-4" />, label: personalInfo.location, href: null },
  { icon: <Phone className="w-4 h-4" />, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: <Mail className="w-4 h-4" />, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <Link2 className="w-4 h-4" />, label: "Ayoub Toutla", href: personalInfo.linkedin },
];

export default function About() {
  return (
    <section id="profil" className="py-24 blueprint-bg-secondary relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-navy/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Qui suis-je</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 relative inline-block">
            Mon <span className="text-gold">Profil</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </h2>
          <p className="text-muted mt-5 font-body">
            Dessinateur-Projeteur Béton Armé & Technicien Génie Civil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Quote + Description */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-8"
          >
            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              className="relative glass-card p-8"
            >
              <div className="absolute top-4 left-6 text-6xl text-gold/20 font-display leading-none select-none">
                "
              </div>
              <p className="font-display text-xl md:text-2xl text-white italic leading-relaxed pt-4">
                La précision d'un plan, c'est la sécurité d'un ouvrage.
              </p>
              <div className="absolute bottom-4 right-6 text-6xl text-gold/20 font-display leading-none select-none rotate-180">
                "
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-body font-semibold tracking-wide">
                  Toutla Ayoub
                </span>
              </div>
            </motion.blockquote>

            {/* Bio */}
            <motion.div variants={fadeUp} className="glass-card p-6">
              <p className="text-silver leading-relaxed font-body">{personalInfo.bio}</p>
            </motion.div>

            {/* Contact rapide */}
            <motion.div variants={fadeUp} className="glass-card p-6">
              <h3 className="section-label mb-4">Contact rapide</h3>
              <ul className="space-y-3">
                {contactItems.map((item) =>
                  item.href ? (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-silver hover:text-gold transition-colors text-sm font-body group"
                      >
                        <span className="text-gold group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li
                      key={item.label}
                      className="flex items-center gap-3 text-silver text-sm font-body"
                    >
                      <span className="text-gold">{item.icon}</span>
                      {item.label}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">Mes valeurs</span>
              <h3 className="font-display text-2xl text-white mt-2">
                Ce qui me définit
              </h3>
            </motion.div>

            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="glass-card p-6 flex gap-4 group hover:gold-glow cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-body font-bold text-white text-lg mb-1">{v.title}</h4>
                  <p className="text-muted text-sm leading-relaxed font-body">{v.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Mini timeline */}
            <motion.div variants={fadeUp} className="glass-card p-6">
              <h3 className="section-label mb-5">Parcours en bref</h3>
              <div className="relative pl-6 space-y-6">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
                {[
                  { year: "2025", text: "Certification Installations Électriques — NEXANS" },
                  { year: "2024", text: "CDI chez Structure Valley — Bureau d'Études" },
                  { year: "2024", text: "Diplôme Technicien Spécialisé Génie Civil — OFPPT" },
                  { year: "2023", text: "Stage ASTRA CONSEIL — Coordination CES" },
                ].map((item) => (
                  <div key={item.year + item.text} className="flex gap-4 items-start relative">
                    <div className="absolute -left-7 w-3 h-3 rounded-full bg-gold border-2 border-dark mt-1" />
                    <span className="font-code text-gold text-xs font-bold w-10 flex-shrink-0 pt-0.5">
                      {item.year}
                    </span>
                    <p className="text-silver text-sm font-body leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
