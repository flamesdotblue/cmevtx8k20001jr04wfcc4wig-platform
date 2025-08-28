import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, PenTool, Smartphone, BarChart } from "lucide-react";

const work = [
  {
    title: "Fintech Onboarding Redesign",
    desc: "Reduced time-to-first-value by 37% through streamlined flows and progressive disclosure.",
    tag: "Product Design",
    icon: <Smartphone className=\"h-5 w-5\" />,
    accent: "from-indigo-500/20 to-fuchsia-500/20",
  },
  {
    title: "SaaS Analytics Dashboard",
    desc: "Built a modular design system and data visualizations improving task success by 28%.",
    tag: "Design Systems",
    icon: <BarChart className=\"h-5 w-5\" />,
    accent: "from-cyan-400/20 to-indigo-500/20",
  },
  {
    title: "E-commerce Mobile App",
    desc: "Introduced gesture-first patterns and micro-interactions raising conversion by 19%.",
    tag: "Mobile UX",
    icon: <PenTool className=\"h-5 w-5\" />,
    accent: "from-fuchsia-500/20 to-cyan-400/20",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative mt-16 md:mt-28">
      <div className="mb-8 flex items-end justify-between md:mb-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            A peek at recent projects across fintech, SaaS, and commerce. I lead
            end-to-end from research to polished visuals, partnering closely with
            product and engineering.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 md:inline-flex"
        >
          Request case study
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {work.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-0.5 shadow-2xl"
          >
            <div className={`rounded-[22px] bg-neutral-950/80 p-5 backdrop-blur`}>
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent}`} />
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                  {item.icon}
                  <span>{item.tag}</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/50 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white md:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{item.desc}</p>

              <div className="mt-4 flex items-center gap-3 text-xs text-white/60">
                <Badge>Research</Badge>
                <Badge>Wireframes</Badge>
                <Badge>UI</Badge>
                <Badge>Prototype</Badge>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/70">
        Need more? Full case studies available upon request.
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
      {children}
    </span>
  );
}
