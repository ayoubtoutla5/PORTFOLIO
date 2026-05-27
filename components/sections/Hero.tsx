"use client";

import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, MapPin } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Particles from "@/components/ui/Particles";
import HeroVisual from "@/components/sections/HeroVisual";
import { personalInfo, stats } from "@/lib/data";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center blueprint-bg overflow-hidden"
      style={{ backgroundColor: "#0A0D12" }}
    >
      {/* Particles */}
      <Particles count={50} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(10,13,18,.3), transparent, #0A0D12)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(10,13,18,.4), transparent, rgba(10,13,18,.2))" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6">

            {/* Available badge */}
            <div className="hero-badge inline-flex items-center gap-2 w-fit">
              <span className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold"
                style={{
                  background: "rgba(15,25,35,0.8)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#C9A84C",
                  fontFamily: "var(--font-raleway)",
                }}>
                <span className="w-2 h-2 rounded-full inline-block available-dot"
                  style={{ background: "#4ade80" }} />
                Disponible Immédiatement
              </span>
            </div>

            {/* Name */}
            <div className="hero-name">
              <h1 style={{ fontFamily: "var(--font-playfair)", lineHeight: 1.05 }}>
                <span className="block text-white font-bold"
                  style={{ fontSize: "clamp(56px, 8vw, 96px)" }}>
                  TOUTLA
                </span>
                <span className="block font-bold text-gradient-gold"
                  style={{ fontSize: "clamp(56px, 8vw, 96px)" }}>
                  AYOUB
                </span>
              </h1>
            </div>

            {/* Typewriter subtitle */}
            <div className="hero-sub text-lg md:text-xl font-medium"
              style={{ color: "#E8C97A", fontFamily: "var(--font-raleway)", minHeight: "2rem" }}>
              <TypeAnimation
                sequence={[
                  "Dessinateur-Projeteur Béton Armé", 2000,
                  "Technicien Génie Civil", 2000,
                  "Expert AutoCAD 2D/3D", 2000,
                  "Spécialiste Plans d'Exécution", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor
              />
            </div>

            {/* Description */}
            <p className="hero-bio text-base leading-relaxed max-w-lg"
              style={{ color: "rgba(208,216,228,0.8)", fontFamily: "var(--font-raleway)" }}>
              {personalInfo.bio}
            </p>

            {/* Location */}
            <div className="hero-loc flex items-center gap-2 text-sm"
              style={{ color: "#8B98A8", fontFamily: "var(--font-raleway)" }}>
              <MapPin className="w-4 h-4" style={{ color: "#C9A84C" }} />
              {personalInfo.location}
            </div>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 font-bold px-6 py-3 rounded transition-all duration-300"
                style={{
                  background: "#C9A84C",
                  color: "#0A0D12",
                  fontFamily: "var(--font-raleway)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#E8C97A";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 25px rgba(201,168,76,0.4)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#C9A84C";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                Voir mes projets <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={personalInfo.cvUrl}
                download
                className="flex items-center gap-2 font-bold px-6 py-3 rounded transition-all duration-300"
                style={{
                  border: "1px solid #C9A84C",
                  color: "#C9A84C",
                  fontFamily: "var(--font-raleway)",
                }}
              >
                Télécharger CV <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats grid grid-cols-4 gap-4 pt-4"
              style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold"
                    style={{ color: "#C9A84C", fontFamily: "var(--font-jetbrains)" }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs mt-1 leading-tight"
                    style={{ color: "#8B98A8", fontFamily: "var(--font-raleway)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — HeroVisual ── */}
          <div className="hero-visual hidden lg:flex justify-center items-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "#8B98A8" }}>
        <span className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-raleway)" }}>Scroll</span>
        <div className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)" }} />
      </div>
    </section>
  );
}
