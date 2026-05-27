"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  badge: string;
  delay?: number;
}

export default function SkillBar({ name, level, badge, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const badgeColor =
    badge === "Expert"
      ? "bg-gold/20 text-gold border-gold/40"
      : badge === "Avancé"
      ? "bg-gold-light/10 text-gold-light border-gold-light/30"
      : badge === "Notions"
      ? "bg-silver/10 text-silver border-silver/20"
      : "bg-muted/10 text-muted border-muted/20";

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-silver text-sm font-medium font-body">{name}</span>
        <div className="flex items-center gap-2">
          <span className="font-code text-gold text-sm">{level}%</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-body font-semibold tracking-wide ${badgeColor}`}
          >
            {badge}
          </span>
        </div>
      </div>
      <div className="relative h-2 bg-navy rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-white/5 rounded-full" />
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: "linear-gradient(to right, #C9A84C, #E8C97A)",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gold-light rounded-full shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
        </motion.div>
      </div>
    </div>
  );
}
