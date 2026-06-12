import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, ArrowRightLeft, ShieldAlert } from 'lucide-react';

export const ProblemSection = () => {
  const points = [
    {
      title: "Innovation Contradiction",
      desc: "Innovation requires experimentation, iteration, and learning—a process fundamental to progress but often at odds with mission constraints."
    },
    {
      title: "Operational Certainty",
      desc: "Operations require absolute predictability and confidence. There is no room for 'learning on the fly' when lives or strategic assets are on the line."
    }
  ];

  const gapPoints = [
    "Promising technologies remain stuck in experimentation loops",
    "Operational units hesitate to adopt unproven solutions",
    "Integration risk shifts to the point of deployment—where failure is unacceptable"
  ];

  return (
    <section id="problem" className="py-32 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,102,0,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-mono text-[10px] uppercase tracking-[0.5em] mb-6"
            >
              The Core Problem // Gap Analysis
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-[0.85] mb-8 uppercase">
              THE <span className="text-accent">INNOVATION-OPS</span> <br />
              CONTRADICTION.
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl text-white/80 font-display leading-relaxed">
                In defense and security operations, <span className="text-accent underline decoration-white/20 underline-offset-4 font-bold italic">failure is not an option</span>. Capabilities must function reliably, repeatedly, and under pressure.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 border-t border-white/10 pt-8">
                {points.map((p, i) => (
                  <div key={i}>
                    <h4 className="text-accent font-mono text-[10px] uppercase tracking-widest mb-2">{p.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hud-border p-8 bg-red-500/[0.02] border-red-500/10">
              <h3 className="text-xs font-mono text-red-500 uppercase tracking-widest mb-6">Persistent Gap Consequences</h3>
              <div className="space-y-4">
                {gapPoints.map((gp, i) => (
                  <div key={i} className="flex gap-4 items-start text-white/50 text-sm">
                    <span className="text-accent font-bold">»</span>
                    {gp}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 text-red-500 font-mono text-[10px] font-bold uppercase tracking-widest bg-red-500/10 p-3">
                 <span className="text-lg">👉</span>
                 Delayed Capability // Increased Risk // Reduced Advantage
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="hud-border p-2 bg-black">
              <div className="relative aspect-video overflow-hidden">
                <video 
                  src="https://storage.googleapis.com/static.v7.applet.insiders.google.com/ais_dev_6a23ocdmdbpt4salc7fmtr-787819384906.asia-east1.run.app/artifact/Innovation-Ops_Gap_explainer.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                   <span className="text-[8px] font-mono text-white/50 uppercase tracking-widest">Live_Analysis_Feed</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between font-mono text-[8px] text-white/20 uppercase tracking-[0.4em]">
               <span>Ref: Gap_Explainer_Video_01</span>
               <span>Duration: 03:22</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
