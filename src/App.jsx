import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500/30 selection:text-white">
      {/* Background aesthetics */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <Navbar />
      <main className="mx-auto max-w-7xl px-6">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
