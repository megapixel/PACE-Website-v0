import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, Globe, MapPin, Terminal, Phone } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Copy & Info */}
          <div className="lg:col-span-4 self-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-mono text-[10px] uppercase tracking-[0.5em] mb-4"
            >
              Communications Terminal // SG_HQ
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-8">
              INITIATE <br />
              <span className="text-accent">DEPLOYMENT.</span>
            </h2>
            
            <p className="text-lg text-white/50 font-display mb-12 leading-relaxed italic">
              Ready to de-risk your capability? Secure a priority consultation with our senior engineering team to discuss your operational requirements.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Encrypted Comms", val: "ops@i-add.co" },
                { icon: MapPin, label: "Operational Hub", val: "Singapore // Global Deployment" },
                { icon: Terminal, label: "System Status", val: "Active // Accepting Assignments" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                    <item.icon size={16} className="text-white/40 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <div className="text-[8px] font-mono text-white/20 uppercase tracking-widest">{item.label}</div>
                    <div className="text-sm font-mono text-white/70 group-hover:text-white transition-colors uppercase">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-4 border-l-2 border-accent bg-accent/5 text-[9px] font-mono text-accent uppercase leading-relaxed tracking-widest">
              [ NOTICE ] Consultations are restricted to authorized operational units and strategic partners only.
            </div>
          </div>

          {/* Right Column: Systeme.io Integration Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-8 relative"
          >
            <div className="hud-border bg-white/[0.01] backdrop-blur-xl relative overflow-hidden min-h-[600px] md:min-h-[700px]">
              {/* HUD Header for Integration */}
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/[0.03]">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/50">SYSTEME_IO_INTERFACE v1.0</span>
                </div>
                <div className="flex gap-1">
                   <div className="w-8 h-1 bg-accent/20" />
                   <div className="w-4 h-1 bg-accent" />
                </div>
              </div>

              {/* Systeme.io Embed - Using a wrapper for styling */}
              <div className="relative w-full h-[600px] md:h-[650px] p-2">
                {/* 
                  Integrated with Systeme.io account: chris.lo@i-add.co
                  Replace 'YOUR_PAGE_SLUG' with the actual funnel or opt-in page slug.
                */}
                <iframe 
                  src="https://systeme.io/dashboard/calendar/availability" 
                  style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                  scrolling="yes"
                  id="systeme-io-embed"
                  className="w-full h-full grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
                  title="Schedule Deployment Consultation via Systeme.io"
                ></iframe>
                
                {/* Fallback Overlay if needed or for loading vibe */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] scanline" />
              </div>

              {/* HUD Footer for Interface */}
              <div className="p-4 border-t border-white/5 font-mono text-[8px] text-white/20 flex justify-between uppercase tracking-widest">
                <span>SYSTEME_IO_SECURED</span>
                <span>CHRIS.LO@I-ADD.CO</span>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
               <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest flex items-center gap-2">
                  <Phone size={10} className="text-accent" />
                  Direct Line: Request via Comm Terminal
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
