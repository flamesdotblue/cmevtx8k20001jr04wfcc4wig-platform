import React from "react";
import { motion } from "framer-motion";
import { Dribbble, Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Ava,\n\nI'm interested in working together.\n\nProject: ${form.get("project")}\nBudget: ${form.get("budget")}\nTimeline: ${form.get("timeline")}\n\nDetails:\n${form.get("details")}\n\n— ${name}\n${form.get("email")}`
    );
    window.location.href = `mailto:hello@avamorgan.design?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative mt-20 md:mt-28">
      <div className="mx-auto max-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let’s build something great</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/70">
            Tell me about your idea and I’ll come back with ways we can partner. I typically respond within 1–2 business days.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" id="name" required />
              <Field label="Email" id="email" type="email" required />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <Field label="Project" id="project" placeholder="Web app, mobile app…" />
              <Field label="Budget" id="budget" placeholder="$10k–$30k" />
              <Field label="Timeline" id="timeline" placeholder="6–8 weeks" />
            </div>
            <div className="mt-4">
              <Field label="Details" id="details" textarea placeholder="Goals, audience, problem, success metrics…" />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button
                type="submit"
                className="rounded-full bg-white px-5 py-3 font-medium text-neutral-900 transition hover:bg-neutral-200"
              >
                Send inquiry
              </button>
              <div className="hidden items-center gap-3 text-white/70 sm:flex">
                <span className="text-xs">Or email</span>
                <a href="mailto:hello@avamorgan.design" className="text-sm underline underline-offset-4">
                  hello@avamorgan.design
                </a>
              </div>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 p-5"
          >
            <div>
              <h3 className="text-lg font-semibold">Capabilities</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• Product strategy & discovery</li>
                <li>• UX research & flows</li>
                <li>• Wireframes & prototypes</li>
                <li>• Visual design & design systems</li>
                <li>• Developer handoff</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Elsewhere</h3>
              <div className="mt-3 flex gap-3">
                <IconLink href="https://dribbble.com" label="Dribbble">
                  <Dribbble className="h-5 w-5" />
                </IconLink>
                <IconLink href="https://linkedin.com" label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </IconLink>
                <IconLink href="https://github.com" label="GitHub">
                  <Github className="h-5 w-5" />
                </IconLink>
                <IconLink href="mailto:hello@avamorgan.design" label="Email">
                  <Mail className="h-5 w-5" />
                </IconLink>
              </div>
              <p className="mt-4 text-xs text-white/60">© {new Date().getFullYear()} Ava Morgan. All rights reserved.</p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, textarea, type = "text", ...props }) {
  const InputTag = textarea ? "textarea" : "input";
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-white/80">{label}</span>
      <InputTag
        name={id}
        id={id}
        type={type}
        className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/20 focus:bg-neutral-900"
        rows={textarea ? 6 : undefined}
        {...props}
      />
    </label>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/80 transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}
