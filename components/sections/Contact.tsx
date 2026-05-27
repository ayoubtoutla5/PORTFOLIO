"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail, Link2, Download, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulate send — integrate EmailJS or Formspree here
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: personalInfo.location,
      href: null,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Ayoub Toutla",
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 blueprint-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-navy/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Restons en contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 relative inline-block">
            <span className="text-gold">Contactez</span>-moi
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </h2>
          <p className="text-muted mt-5 font-body max-w-lg mx-auto">
            Disponible immédiatement pour tout projet ou collaboration
          </p>
          {/* Available badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-sm px-4 py-2 rounded-full font-body font-semibold">
            <span className="w-2 h-2 bg-green-400 rounded-full available-dot" />
            Disponible pour poste fixe ou missions freelance
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Form ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
              >
                <CheckCircle className="w-16 h-16 text-green-400" />
                <h3 className="font-display text-2xl text-white">Message envoyé !</h3>
                <p className="text-muted font-body">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-gold border border-gold/30 px-4 py-2 rounded font-body text-sm hover:bg-gold/10 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl text-white mb-6">Envoyez un message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label mb-2 block">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="w-full bg-navy/60 border border-gold/20 text-white text-sm px-4 py-3 rounded-lg font-body placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="section-label mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full bg-navy/60 border border-gold/20 text-white text-sm px-4 py-3 rounded-lg font-body placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="section-label mb-2 block">Objet</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Objet de votre message"
                    className="w-full bg-navy/60 border border-gold/20 text-white text-sm px-4 py-3 rounded-lg font-body placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="section-label mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="w-full bg-navy/60 border border-gold/20 text-white text-sm px-4 py-3 rounded-lg font-body placeholder:text-muted focus:outline-none focus:border-gold/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-dark font-body font-bold px-6 py-3 rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-dark border-t-transparent" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {sending ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Info + CV ── */}
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="section-label mb-5">Informations de contact</h3>
              <div className="space-y-4">
                {contacts.map((c) =>
                  c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-muted text-xs font-body uppercase tracking-wider">{c.label}</p>
                        <p className="text-silver text-sm font-body group-hover:text-gold transition-colors">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div key={c.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-muted text-xs font-body uppercase tracking-wider">{c.label}</p>
                        <p className="text-silver text-sm font-body">{c.value}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* CV Download */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4 text-gold">
                <Download className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl text-white mb-2">Mon Curriculum Vitæ</h3>
              <p className="text-muted text-sm font-body mb-5">
                Téléchargez mon CV complet en format PDF
              </p>
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-dark font-body font-bold px-6 py-3 rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,168,76,0.4)]"
              >
                <Download className="w-4 h-4" />
                Télécharger CV (PDF)
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
