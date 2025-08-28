import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="group inline-flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/20"
          >
            <span className="font-bold">AM</span>
          </motion.div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Ava Morgan</p>
            <p className="text-xs text-white/60">Product Designer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
          >
            Let’s talk
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4 shadow-2xl backdrop-blur md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-white px-4 py-2 text-center text-sm font-medium text-neutral-900"
            >
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
