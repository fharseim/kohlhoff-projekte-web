import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
          alt="Architectural Detail"
          className="w-full h-full object-cover opacity-90 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        {/* Stronger Gradient for Blackstone-style contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 border-t border-white/20 pt-12">
          
          <div className="w-full md:w-3/4">
             {/* Headline */}
             <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white tracking-tight">
               <span className="block animate-[reveal_1s_cubic-bezier(0.77,0,0.175,1)_0.2s_forwards] translate-y-full">
                 Building for
               </span>
               <span className="block animate-[reveal_1s_cubic-bezier(0.77,0,0.175,1)_0.4s_forwards] translate-y-full text-gray-300">
                 Generations.
               </span>
             </h1>
          </div>

          <div className="w-full md:w-1/4 pb-2 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards] flex flex-col justify-end">
            <p className="text-white/80 text-sm font-light leading-relaxed mb-8">
              Wir investieren in außergewöhnliche Immobilien und entwickeln Landmark-Projekte mit höchster Präzision.
            </p>
            
            <a href="#projects" className="group flex items-center gap-3 text-white hover:text-luxury-gold transition-colors duration-300 cursor-none">
               <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
                  <ArrowDown size={16} />
               </div>
               <span className="text-xs uppercase tracking-widest">Entdecken</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};