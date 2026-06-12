import React from 'react';
import { motion } from 'motion/react';
import { Quote as QuoteIcon } from 'lucide-react';

export const Quote = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm font-mono text-accent mb-12 uppercase tracking-[0.5em]">Vision // Execution</div>
          <p className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-10">
            DELIVERING THE <span className="text-accent underline decoration-white/20 underline-offset-12">IMAGINED FUTURE</span> <br />
            IN THE OPERATIONAL PRESENT.
          </p>
          <div className="h-0.5 w-12 bg-white/20 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
