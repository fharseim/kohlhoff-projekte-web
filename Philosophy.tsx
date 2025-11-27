import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="bg-luxury-bg text-luxury-text">
      <div className="container mx-auto px-6 md:px-12 border-l border-r border-luxury-border">
        {/* Top Border */}
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Block - Title */}
            <div className="py-24 md:py-32 pr-12 border-b md:border-b-0 md:border-r border-luxury-border">
                <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] block mb-6">
                  Unsere Philosophie
                </span>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.15]">
                  Inspiration <br/>
                  <span className="italic text-gray-500">als Antrieb.</span>
                </h2>
                <div className="mt-12 space-y-6">
                   <p className="text-gray-600 font-light leading-relaxed max-w-md">
                     Wir schauen über den Tellerrand hinaus! Als Gestalter öffnen wir die Augen für das deutsche Umland und internationale Impulse.
                   </p>
                   <p className="text-gray-600 font-light leading-relaxed max-w-md">
                     Getrieben durch Inspiration pflegen wir ein großes nationales Netzwerk und legen großen Wert auf partnerschaftliche Zusammenarbeit.
                   </p>
                </div>
            </div>

            {/* Right Block - Grid of values */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
                
                <div className="p-12 border-b border-r border-luxury-border group hover:bg-black/5 transition-colors duration-500">
                    <span className="font-serif text-3xl text-luxury-gold mb-4 block">01</span>
                    <h3 className="uppercase tracking-widest text-sm mb-4 font-medium">Mehrwerte schaffen</h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                        Unser Fokus liegt darin, aus allen an unserer Arbeit Beteiligten Profiteure unseres Drives zu machen.
                    </p>
                </div>

                <div className="p-12 border-b border-luxury-border group hover:bg-black/5 transition-colors duration-500">
                    <span className="font-serif text-3xl text-luxury-gold mb-4 block">02</span>
                    <h3 className="uppercase tracking-widest text-sm mb-4 font-medium">Anspruch</h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                        Wir erschaffen Wohnraum und Gewerbeflächen nicht nur nach höchsten ästhetischen, sondern auch individualisierten Ansprüchen.
                    </p>
                </div>

                <div className="p-12 border-r border-b md:border-b-0 border-luxury-border group hover:bg-black/5 transition-colors duration-500">
                    <span className="font-serif text-3xl text-luxury-gold mb-4 block">03</span>
                    <h3 className="uppercase tracking-widest text-sm mb-4 font-medium">Netzwerk</h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                        Partnerschaftliche Zusammenarbeit ist unser Fundament. Wir verbinden Kompetenzen für visionäre Ergebnisse.
                    </p>
                </div>

                <div className="p-12 border-b md:border-b-0 border-luxury-border group hover:bg-black/5 transition-colors duration-500">
                    <span className="font-serif text-3xl text-luxury-gold mb-4 block">04</span>
                    <h3 className="uppercase tracking-widest text-sm mb-4 font-medium">Weitblick</h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                        Der Blick über den Tellerrand – für Projekte, die durch internationale Einflüsse und regionalen Charme überzeugen.
                    </p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};