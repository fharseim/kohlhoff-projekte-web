import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-luxury-bg text-luxury-text border-t border-luxury-border">
      <div className="container mx-auto px-6 md:px-12 border-l border-r border-luxury-border">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
            
            {/* Left: Info - Updated to match the specific layout requested */}
            <div className="py-24 md:py-32 md:pr-16 border-b md:border-b-0 md:border-r border-luxury-border flex flex-col justify-between">
                
                {/* Header Information */}
                <div className="space-y-8 uppercase tracking-[0.15em] text-sm font-medium leading-loose">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl tracking-normal normal-case mb-6">
                            Kohlhoff Projekte
                        </h2>
                        <p className="text-gray-500">
                            Ein <span className="font-bold text-luxury-text">Toishi</span> Unternehmen
                        </p>
                        <p>
                            Geschäftsführer: Paul Kohlhoff
                        </p>
                    </div>

                    <address className="not-italic block mt-8">
                        Paul-Schröder-Strasse 1<br/>
                        24229 Dänischenhagen<br/>
                        Deutschland
                    </address>

                    <div className="mt-8">
                        <p>M: +49 175 7430219</p>
                        <p>E: <a href="mailto:INFO@KOHLHOFFPROJEKTE.DE" className="hover:text-luxury-gold transition-colors">INFO@KOHLHOFFPROJEKTE.DE</a></p>
                    </div>
                </div>

                {/* Career & Logo Section */}
                <div className="mt-16 md:mt-0 space-y-12">
                    <div className="uppercase text-xs tracking-[0.15em] leading-relaxed max-w-sm">
                        <p className="mb-4">Zur Zeit haben wir keine Stellen zu besetzen.</p>
                        <p>Für Initiativbewerbungen halten wir immer ein Auge offen.</p>
                    </div>

                    {/* KP Logo Box */}
                    <div className="w-48 h-48 bg-black flex items-center justify-center">
                        <span className="text-white font-bold text-7xl tracking-tighter">KP</span>
                    </div>
                </div>
            </div>

            {/* Right: Form */}
            <div className="py-24 md:py-32 md:pl-16 flex flex-col justify-center bg-gray-100/50">
                <div className="mb-12">
                     <h3 className="font-serif text-3xl text-gray-400 mb-2">Kontakt aufnehmen</h3>
                     <div className="w-12 h-[1px] bg-luxury-gold"></div>
                </div>

                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative group">
                        <input 
                            type="text" 
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-xl focus:outline-none focus:border-luxury-gold transition-colors text-luxury-text placeholder-transparent peer"
                            placeholder="NAME"
                            id="name"
                        />
                        <label htmlFor="name" className="absolute left-0 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 uppercase tracking-widest text-sm">
                            Name
                        </label>
                    </div>

                    <div className="relative group">
                        <input 
                            type="email" 
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-xl focus:outline-none focus:border-luxury-gold transition-colors text-luxury-text placeholder-transparent peer"
                            placeholder="E-MAIL"
                            id="email"
                        />
                         <label htmlFor="email" className="absolute left-0 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 uppercase tracking-widest text-sm">
                            E-Mail
                        </label>
                    </div>

                    <div className="relative group">
                        <textarea 
                            rows={3}
                            className="w-full bg-transparent border-b border-gray-300 py-4 text-xl focus:outline-none focus:border-luxury-gold transition-colors text-luxury-text placeholder-transparent peer resize-none"
                            placeholder="NACHRICHT"
                            id="message"
                        />
                         <label htmlFor="message" className="absolute left-0 top-4 text-gray-400 transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-luxury-gold peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-gray-400 uppercase tracking-widest text-sm">
                            Nachricht
                        </label>
                    </div>
                    
                    <button type="submit" className="group flex items-center gap-4 text-luxury-text hover:text-luxury-gold transition-colors duration-300 pt-4">
                        <span className="uppercase tracking-[0.2em] text-sm font-semibold">Anfrage Senden</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </section>
  );
};