import React from 'react';
import { motion } from 'motion/react';
import { Compass, Cpu, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

export const PaceMethodology = () => {
  const steps = [
    {
      id: 'PHASE_01',
      title: 'DESIGN',
      label: 'EXPLORATION',
      context: 'CONOPS // MISSION CONTEXT',
      points: [
        'Defining mission use cases & operational plans',
        'Validating mission problem statements',
        'Performance & safety constraint mapping'
      ],
      outcome: 'Validated mission problem; performance & safety constraints agreed.',
      icon: Compass
    },
    {
      id: 'PHASE_02',
      title: 'ARCHITECT',
      label: 'EXPERIMENTATION',
      context: 'SYSTEMS // ENGINEERING',
      points: [
        'Engineering the system solution blueprint',
        'Testing "smallest credible proof" increments',
        'Time-to-TRL (Technical Readiness Level) metrics'
      ],
      outcome: 'Measured evidence strength; Documented Time-to-TRL (weeks per level).',
      icon: Cpu
    },
    {
      id: 'PHASE_03',
      title: 'ASSEMBLE',
      label: 'EXPLOITATION',
      context: 'VALIDATION // DELIVERY',
      points: [
        'Integrating tech stacks into working POC',
        'Stabilizing solution for operational handover',
        'Live demonstration of translated capability'
      ],
      outcome: 'Transition-ready "Scale Package" with trial plans & testable requirements.',
      icon: Layers
    }
  ];

  return (
    <section id="methodology" className="py-32 bg-[#020202] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
             <div className="sticky top-32">
                <div className="text-accent font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Methodology</div>
                <h2 className="text-5xl font-display font-black tracking-tighter leading-none mb-8 uppercase">The <span className="text-accent underline decoration-white/20 underline-offset-8">PACE</span> <br />Cycle</h2>
                <div className="p-4 border-l border-accent/30 text-white/40 text-[10px] font-mono uppercase leading-loose">
                   Disciplined capability engineering: Shifting from <span className="text-white">Exploration</span> to <span className="text-white">Experimentation</span> to <span className="text-white">Exploitation</span>.
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="hud-border p-8 bg-white/[0.02] flex flex-col min-h-[500px] group relative"
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/10 uppercase">{step.label}</div>
                
                <div className="text-[9px] font-mono text-white/30 mb-8 flex justify-between">
                   <span>{step.id}</span>
                   <span>STP_{i+1}</span>
                </div>
                
                <step.icon className="text-accent mb-6" size={32} />
                <h3 className="text-4xl font-display font-black mb-1 uppercase tracking-tighter">{step.title}</h3>
                <div className="text-[10px] font-mono text-accent/60 mb-8 uppercase tracking-[0.2em]">{step.context}</div>
                
                <div className="space-y-4 mb-12">
                   {step.points.map((p, pi) => (
                      <div key={pi} className="flex gap-3 text-[11px] font-mono text-white/60 leading-relaxed">
                         <span className="text-accent/40 font-bold">»</span>
                         {p}
                      </div>
                   ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/5">
                   <div className="text-[9px] font-mono text-accent uppercase tracking-widest mb-2">Key Learning Outcome</div>
                   <p className="text-xs text-white/40 font-display italic leading-relaxed">
                      "{step.outcome}"
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
