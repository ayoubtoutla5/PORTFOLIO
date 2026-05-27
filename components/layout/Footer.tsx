import { navLinks, personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/15 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex flex-col leading-none mb-3">
              <span className="font-display text-2xl font-bold text-white tracking-wide">
                TOUTLA
              </span>
              <span className="font-display text-2xl font-bold text-gold tracking-widest">
                AYOUB
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed font-body italic">
              "Conçu avec précision, comme mes plans."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="section-label mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted text-sm hover:text-gold transition-colors font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="section-label mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted font-body">
              <li>📍 {personalInfo.location}</li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-gold transition-colors">
                  📞 {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-gold transition-colors"
                >
                  ✉️ {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  🔗 LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-body">
          <span>
            © 2025{" "}
            <span
              className="text-gold text-lg leading-none"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              Mehdi Ennaciri
            </span>
            . Tous droits réservés.
          </span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-gold rounded-full inline-block" />
              <span>Dessinateur-Projeteur Béton Armé — Casablanca</span>
            </div>
            <span className="text-gold/30">·</span>
            <span
              className="text-gold text-lg leading-none"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              Mehdi Ennaciri
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
