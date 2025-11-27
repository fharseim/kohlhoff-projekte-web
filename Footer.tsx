import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-xl tracking-widest uppercase text-white">KOHLHOFF PROJEKTE</span>
          <p className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} Kohlhoffprojekte. Alle Rechte vorbehalten.</p>
        </div>
        
        <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Impressum</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Datenschutz</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};