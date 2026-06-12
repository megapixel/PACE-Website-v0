import React from 'react';
import { motion } from 'motion/react';
import { Layout, Cpu, Layers, ShipWheel } from 'lucide-react';

const steps = [
  {
    icon: Layout,
    title: "Design",
    subtitle: "CONOPS",
    description: "Definition of mission-driven use cases and operational context. We translate requirements into a Concept of Operations."
  },
  {
    icon: Cpu,
    title: "Architect",
    subtitle: "SYSTEM ENGINEERING",
    description: "Engineering the full system solution across heterogeneous technologies and COTS platforms."
  },
  {
    icon: Layers,
    title: "Assemble",
    subtitle: "VALIDATION",
    description: "Integration and validation into a working Proof-of-Concept. Real-world testing for operational readiness."
  },
  {
    icon: ShipWheel,
    title: "Deliver",
    subtitle: "TURNKEY CAPABILITY",
    description: "Handover of a mission-ready <span className=\"text-accent font-bold\">capability</span> baseline, ready for deployment <span className=\"text-accent underline underline-offset-4 decoration-white/20\">in under 90 days</span>."
  }
];

export const Features = () => {
  return (
    <section id="solution" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-mono text-sm mb-4 uppercase tracking-[0.2em]"
          >
            The <span className="text-white font-black">PACE</span> Solution
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            END-TO-END <span className="text-accent">CAPABILITY</span> REALIZATION
          </h2>
          <p className="text-gray-400 leading-relaxed font-light">
            We deliver more than prototypes. We deliver proof of capability through a proprietary process anchored on engineering precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.04] hover:border-accent/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                <step.icon size={120} />
              </div>
              
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                <step.icon className="w-6 h-6" />
              </div>
              
              <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2">Step {index + 1}: {step.subtitle}</div>
              <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-accent transition-colors">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
