import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Rocket, Users, ShieldCheck, Target, Zap } from 'lucide-react';

export const CapabilityVsTechnology = () => {
  return (
    <section id="engineering" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/2 opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 uppercase"
          >
            CAPABILITY <span className="text-accent">VS</span> TECHNOLOGY
          </motion.h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-gray-400 font-light text-lg leading-relaxed">
            Most POCs today focus on showing how technology works. PACE focuses on showing how technology <span className="text-white font-bold italic underline decoration-accent underline-offset-4">wins missions</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/5 hud-border">
          {/* Technology Engineering Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-12 bg-black flex flex-col"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                <Cpu className="text-white/20" />
              </div>
              <div>
                <h3 className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em]">Domain_A</h3>
                <h4 className="text-3xl font-display font-black uppercase tracking-tighter">Tech Engineering</h4>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="font-display font-light text-white/60 leading-relaxed italic text-lg">
                "Demonstrating that a technical component works in a controlled lab environment."
              </div>
              
              <div className="space-y-4 pt-12 border-t border-white/5">
                {["Isolated benchmarks", "Context-independent", "Hardware/Software focus"].map((txt, i) => (
                   <div key={i} className="flex gap-4 items-center text-xs font-mono text-white/30 uppercase tracking-widest">
                      <span className="w-1 h-1 bg-white/10" />
                      {txt}
                   </div>
                ))}
              </div>
            </div>

            <div className="mt-20 p-6 border border-white/10 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
              Output: Proof of Tech Concept
            </div>
          </motion.div>

          {/* Capability Engineering Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-12 bg-accent/5 backdrop-blur-sm flex flex-col relative group"
          >
            <div className="absolute top-0 right-0 p-4">
               <div className="w-4 h-4 border-t border-r border-accent" />
            </div>

            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 border border-accent flex items-center justify-center bg-accent/20">
                <Target className="text-accent" />
              </div>
              <div>
                <h3 className="text-[9px] font-mono text-accent uppercase tracking-[0.4em]">Domain_PACE</h3>
                <h4 className="text-3xl font-display font-black uppercase tracking-tighter">Capability Engineering</h4>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="font-display font-bold text-white text-xl leading-snug">
                "Systematically combining multiple <span className="text-accent underline underline-offset-4 decoration-white/20">complementary technological concepts</span> with mission-specific tactics, techniques, and procedures (TTPs), and human operators to deliver a mission-ready operational capability."
              </div>
              
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] leading-relaxed">
                We go beyond isolated technical demos. We engineer the fusion of hardware, software, human intent, and tactical logic—delivering a system that works in the field, not just on the bench.
              </p>
              
              <div className="space-y-4 pt-12 border-t border-white/10">
                {[
                  "Multi-Concept Tech Integration",
                  "Tactics & Procedures (TTPs) Integration",
                  "Human-Centric Operationalization",
                  "Environmental Contextualization",
                  "Reliability, Repeatability, Certainty"
                ].map((txt, i) => (
                   <div key={i} className="flex gap-4 items-center text-xs font-mono text-accent uppercase tracking-widest font-black">
                      <Zap size={12} className="animate-pulse" />
                      {txt}
                   </div>
                ))}
              </div>
            </div>

            <div className="mt-12 p-4 border border-white/5 bg-black/40 text-[9px] font-mono text-white/40 leading-relaxed uppercase tracking-widest">
               Note: A Proof of (Ops) Concept is distinct from a Tech POC. It validates the <span className="text-accent">Capability</span> as a whole, ensuring that the combined technologies function reliably in the hands of the end-user.
            </div>

            <div className="mt-8 p-6 bg-accent text-white text-center font-display font-black text-xs uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(255,102,0,0.3)]">
              Output: Proof of (Ops) Concept
            </div>
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20 p-8 rounded-3xl border border-white/5 bg-white/[0.02] text-center"
        >
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">The Result</p>
          <p className="text-xl md:text-2xl font-display text-white max-w-4xl mx-auto italic">
            "Whether solving a tactical problem in <span className="text-accent">military operations</span>, <span className="text-accent">homeland security</span>, or <span className="text-accent">commercial domains</span>, we engineer the system for relevance, repeatability, and reliability."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
