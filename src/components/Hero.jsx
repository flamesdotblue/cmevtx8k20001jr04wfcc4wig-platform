import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Figma, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative pt-10 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            <span>Available for freelance — Q4</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            I design thoughtful interfaces that feel effortless
          </h1>
          <p className="mt-4 text-white/70 md:text-lg">
            I’m Ava, a UI/UX designer crafting elegant product experiences for startups
            and brands. I blend research, accessibility, and visual polish to ship
            design that converts.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center text-xs text-white/60 sm:max-w-md">
            <Stat kpi="40+" label="Shipped Projects" />
            <Stat kpi="120%" label="Avg. KPI Uplift" />
            <Stat kpi="8 yrs" label="Experience" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30 p-2 shadow-2xl ring-1 ring-white/10 md:w-80">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-neutral-900/60 backdrop-blur">
              <div className="text-center">
                <Figma className="mx-auto h-12 w-12 text-white/90" />
                <p className="mt-2 text-sm text-white/70">UI • UX • Design Systems</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-lg font-semibold text-white">{kpi}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/60">{label}</p>
    </div>
  );
}
