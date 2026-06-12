import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Box, Brain, Database, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-30 grayscale" />
        <div className="absolute inset-0 scanline opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-accent" />
            <div className="text-accent font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
              SEEING TO BELIEVE UNLEASHED
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-display font-extrabold tracking-tighter leading-[0.85] mb-8 uppercase">
            <span className="text-accent underline decoration-white/20 underline-offset-8">TURNKEY</span> <br />
            <span className="text-accent">CAPABILITY</span> <br />
            <span className="text-white/40">IN <span className="text-accent">90 DAYS</span>.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-xl mb-12 leading-relaxed font-light font-display">
            Harnessing COTS technologies to transform mission requirements into <span className="text-accent font-medium">operational</span> realities. 
            Execution at the <span className="text-accent font-medium">speed</span> of innovation.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button className="px-10 py-5 bg-accent text-white font-display font-black text-sm uppercase tracking-widest rounded-none transform transition-all hover:translate-x-2 shadow-[10px_10px_0_rgba(255,102,0,0.2)]">
              Deploy Solution
            </button>
            <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] animate-pulse">
              [ SYSTEM STATUS: READY ]
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="lg:col-span-5 relative group"
        >
          <div className="hud-border p-4 bg-black/40 backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=1200" 
                alt="Operational Context" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* HUD Elements */}
            <div className="absolute top-8 left-8 flex flex-col space-y-1 font-mono text-[8px] text-accent font-bold">
              <span>LAT: 1.3521° N</span>
              <span>LON: 103.8198° E</span>
              <span className="mt-2 text-white/40">SINGAPORE_OPS_TERM</span>
            </div>
            
            <div className="absolute bottom-10 left-8 right-8">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">Architecture Module</div>
                  <div className="text-xl font-display font-bold uppercase tracking-tight">PACE-01_VALIDATED</div>
                </div>
                <div className="w-12 h-12 border-t border-r border-accent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Navigation Bar Like Slixel */}
      <div className="absolute right-0 top-0 bottom-0 w-20 border-l border-white/5 hidden md:flex flex-col items-center justify-center space-y-12 py-10 z-20">
         <div className="rotate-90 text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] whitespace-nowrap">
            Scroll to Explore Capability
         </div>
         <div className="h-24 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>
    </section>
  );
};
