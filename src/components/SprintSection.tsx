import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export const SprintSection = () => {
  const sprintData = [
    {
      weeks: 'W1–2',
      title: 'DESIGNING',
      desc: 'Problem confirmation, TRL baselining, and data security risk assessments.',
      progress: '███--------------------------',
      gate: 'Gate A',
      gateDesc: 'Scope & Measurement Approved'
    },
    {
      weeks: 'W3–6',
      title: 'ARCHITECTING (BUILD)',
      desc: 'Architecture spikes, instrumentation, and first proof increments.',
      progress: '-------████-----------------',
      gate: 'Gate B',
      gateDesc: 'Demo-able Proof'
    },
    {
      weeks: 'W7–10',
      title: 'ARCHITECTING (TEST)',
      desc: 'Operational scenario trials; Evidence Strength scoring; maturity assessment updates.',
      progress: '----------------████--------',
      gate: 'Gate C',
      gateDesc: 'Evidence Review'
    },
    {
      weeks: 'W11–12',
      title: 'ASSEMBLING',
      desc: 'Consolidating handover package; final demo; transition acceptance.',
      progress: '-------------------------███-',
      gate: 'Gate D',
      gateDesc: 'Transition Accepted'
    }
  ];

  const gates = [
    { id: 'A', week: 'W2', title: 'Scope & Measurement Approved', criteria: 'Named Sponsor & user groups confirmed; KPI baselines & success thresholds formally agreed.' },
    { id: 'B', week: 'W6', title: 'Demo-able Proof', criteria: 'Proof works end-to-end in a staged environment; automated measurement collection is stable.' },
    { id: 'C', week: 'W10', title: 'Evidence Review', criteria: 'Measured evidence ties directly to KPIs; maturity claims supported by TRL benchmarks.' },
    { id: 'D', week: 'W13', title: 'Transition Accepted', criteria: 'Receiving organization (PMO/Vendor) accepts the handover package and assigns path owner.' }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-mono text-[10px] uppercase tracking-[0.5em] mb-4"
          >
            Temporal Engineering // 90-Day Cycle
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-6">
            The 90-Day <span className="text-accent underline decoration-white/10 underline-offset-8">Sprint</span>
          </h2>
          <p className="text-white/40 max-w-2xl font-display font-light text-xl leading-relaxed">
            The PACE model executes in a 12-week sprint using "Go/Pivot/Stop" logic to systematically reduce unknown critical risks.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="space-y-4 mb-32">
          {sprintData.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="grid lg:grid-cols-12 gap-8 items-center p-8 border border-white/5 hover:border-accent/30 bg-white/[0.01] transition-all group"
            >
              <div className="lg:col-span-1 font-mono text-sm text-accent font-black tracking-tighter">{phase.weeks}</div>
              <div className="lg:col-span-3">
                 <h4 className="font-display font-black text-white text-lg uppercase tracking-tight mb-1">{phase.title}</h4>
                 <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{phase.gate} // {phase.gateDesc}</p>
              </div>
              <div className="lg:col-span-5 text-xs text-white/50 leading-relaxed font-mono italic">
                 {phase.desc}
              </div>
              <div className="lg:col-span-3 font-mono text-[10px] text-accent tracking-[0.2em] bg-accent/5 p-4 border border-accent/10">
                 {phase.progress}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decision Gates */}
        <div className="grid lg:grid-cols-4 gap-6">
          {gates.map((gate, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="hud-border p-6 bg-white/[0.02] border-white/10 flex flex-col group hover:bg-accent/5 hover:border-accent/40 transition-all"
            >
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                <Hexagon size={20} className="text-white/20 group-hover:text-accent group-hover:animate-spin transition-all" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                 <span className="text-accent font-mono text-xs font-black">GATE {gate.id}</span>
                 <span className="w-1 h-1 rounded-full bg-white/20" />
                 <span className="text-[10px] font-mono text-white/30">{gate.week}</span>
              </div>
              <h5 className="font-display font-bold text-white text-lg mb-4 leading-tight group-hover:text-accent transition-colors uppercase">{gate.title}</h5>
              <div className="mt-auto">
                 <div className="text-[8px] font-mono text-white/30 uppercase tracking-widest mb-2">Requirement</div>
                 <p className="text-[10px] font-mono text-white/50 leading-relaxed">{gate.criteria}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center">
           <div className="w-px h-20 bg-gradient-to-b from-accent to-transparent" />
           <div className="p-8 border border-accent/20 bg-accent/5 max-w-3xl text-center">
              <p className="font-display text-white italic text-lg mb-4">
                "We demonstrate the POC live to prove that the concept translated into real operational capability works."
              </p>
              <div className="text-accent font-mono text-xs font-black uppercase tracking-widest">
                 Show by doing // Validated Operational Excellence
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
