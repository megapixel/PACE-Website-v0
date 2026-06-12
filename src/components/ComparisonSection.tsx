import React from 'react';
import { motion } from 'motion/react';
import { CircleDot, XCircle, CheckCircle2, Zap, Clock, ShieldAlert, Target, Workflow, Briefcase } from 'lucide-react';

export const ComparisonSection = () => {
  const points = [
    { label: "Design Philosophy", trad: "Technology-first", pace: "Mission-first" },
    { label: "Vendor Model", trad: "Fragmented", pace: "Integrated System" },
    { label: "Timeline", trad: "Uncertain / 18mo+", pace: "Turnkey / 90 DAYS" },
    { label: "Output Type", trad: "Learning Tool", pace: "Validated CAPABILITY" },
    { label: "Risk Mitigation", trad: "Pushed to Ops", pace: "Resolved Pre-Deployment" }
  ];

  return (
    <section id="comparison" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
           <div className="text-accent font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Strategic Alpha</div>
           <h2 className="text-5xl font-display font-black tracking-tighter uppercase">The Competitive <br /><span className="text-accent underline decoration-white/10 underline-offset-8">Advantage</span></h2>
        </div>

        <div className="hud-border overflow-hidden bg-white/[0.01]">
          <div className="grid grid-cols-3 border-b border-white/10 font-mono text-[10px] uppercase tracking-widest bg-white/[0.03]">
             <div className="p-6 border-r border-white/10">Parameter</div>
             <div className="p-6 border-r border-white/10 text-white/40">Traditional Procurement</div>
             <div className="p-6 text-accent"><span className="text-white">PACE</span> METHODOLOGY</div>
          </div>
          {points.map((p, i) => (
             <div key={i} className="grid grid-cols-3 border-b border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors">
                <div className="p-8 border-r border-white/10 font-display font-bold text-sm tracking-tight">{p.label}</div>
                <div className="p-8 border-r border-white/10 font-mono text-[11px] text-white/30 italic">{p.trad}</div>
                <div className="p-8 font-mono text-[11px] text-accent font-black tracking-widest uppercase">{p.pace}</div>
             </div>
          ))}
        </div>

        <div className="mt-12 flex justify-between items-center text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
           <span>SYSTEM_LOG_v2.04</span>
           <span>VALIDATED_STRATEGY</span>
           <span>iAdD_INTERNAL_REF</span>
        </div>
      </div>
    </section>
  );
};
