import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between pointer-events-auto border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 border border-accent flex items-center justify-center p-2 relative">
             <div className="w-full h-full bg-accent/20" />
             <div className="absolute top-0 right-0 w-1 h-1 bg-accent" />
             <div className="absolute bottom-0 left-0 w-1 h-1 bg-accent" />
          </div>
          <div className="flex flex-col -space-y-1">
             <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none">iAdD</span>
             <span className="font-mono text-[9px] text-accent uppercase tracking-[0.3em] font-black"><span className="text-white">PACE</span> Protocol</span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center space-x-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-end"
          >
            <div className="text-[10px] font-mono text-accent font-black tracking-widest uppercase">Singapore</div>
            <UTMClock />
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Desktop Bottom-Left Navigation */}
      <div className="hidden md:flex fixed bottom-12 left-12 z-50 flex-col space-y-4 pointer-events-auto">
        {['Problem', 'Engineering', 'Methodology', 'Comparison', 'Contact'].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/30 hover:text-accent transition-all flex items-center group"
          >
            <span className="w-4 h-[1px] bg-accent/0 group-hover:bg-accent mr-3 transition-all duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              {item === 'Comparison' ? 'The PACE Difference' : item}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black border-b border-white/5 pointer-events-auto"
        >
          <div className="flex flex-col p-8 space-y-6">
            {['Problem', 'Engineering', 'Methodology', 'Comparison', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-black text-white uppercase tracking-tighter hover:text-accent transition-colors"
              >
                {item === 'Comparison' ? 'The PACE Difference' : item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const UTMClock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Singapore',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat('en-GB', options);
  const timeString = formatter.format(time);

  return (
    <div className="flex items-baseline gap-2 font-mono">
       <span className="text-xl font-black text-white tabular-nums tracking-tighter">{timeString}</span>
       <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest">SGT</span>
    </div>
  );
};
