import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-sm border-2 border-accent flex items-center justify-center rotate-45">
            <div className="w-1.5 h-1.5 bg-accent" />
          </div>
          <span className="font-display font-black uppercase tracking-widest text-sm">iAdD <span className="text-white">PACE</span></span>
        </div>

        <div className="flex space-x-8 text-xs font-mono text-gray-500">
          <a href="#" className="hover:text-accent transition-colors">Operational Terms</a>
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Capability Support</a>
        </div>

        <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          © 2026 iAdD // SINGAPORE // <span className="text-accent">PACE-AS-A-SERVICE</span>
        </div>
      </div>
    </footer>
  );
};
