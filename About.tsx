import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-luxury-bg text-luxury-text py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 border-l border-r border-luxury-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            
            {/* Image Col */}
            <div className="md:col-span-5 relative">
                <div className="relative z-10 border border-luxury-border p-4 bg-white">
                     {/* 
                        HINWEIS: Bitte speichern Sie Ihr Profilbild als "profile.jpg" im public-Ordner.
                     */}
                     <img 
                        src="/profile.jpg" 
                        onError={(e) => {
                            e.currentTarget.src = "https://www.dsv.org/app/uploads/2025/06/01_Felix-Diemer-fuer-SailGP_Germany-SailGP-Team_Paul-Kohlhoff-scaled.jpg";
                        }}
                        alt="Paul Kohlhoff" 
                        className="w-full aspect-[3/4] object-cover grayscale contrast-110 brightness-105"
                    />
                </div>
                {/* Decorative background element */}
                <div className="absolute top-12 -left-12 w-full h-full border border-luxury-gold/30 -z-0 hidden md:block"></div>
            </div>

            {/* Content Col */}
            <div className="md:col-span-7 flex flex-col justify-center">
                <span className="text-luxury-gold text-xs uppercase tracking-[0.3em] mb-8 block">Der Gründer</span>
                
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                    Strategie auf dem Wasser.<br/>
                    <span className="italic text-gray-500">Weitblick an Land.</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed mb-12">
                    <p className="font-medium text-luxury-text">
                        Paul Kohlhoff steht für eine Kombination aus sportlicher Weltklasse und unternehmerischer Schärfe. Sein Werdegang ist geprägt von zwei parallelen Leidenschaften: Dem Wasser und der Immobilie.
                    </p>
                    <p>
                        Als Segler und Bronzemedaillen-Gewinner hat Paul über ein Jahrzehnt mit drei Olympiateilnahmen kontinuierliche Weltklasse bewiesen. Die Zeit zwischen 2014 und 2024 prägt den ambitionierten Athleten fundamental. Die hier erlernten Kompetenzen – Resilienz, Durchhaltevermögen, Fleiß und analytische Strategieplanung – bilden heute die Basis seines geschäftlichen Handelns.
                    </p>
                    <p>
                        Parallel zur sportlichen Karriere legt Paul 2017 den Grundstein für seine berufliche Laufbahn außerhalb des Sports mit dem Erwerb seiner ersten Eigentumswohnung in Kiel. In den folgenden Jahren wächst das Engagement konsequent, meist partnerschaftlich mit und inspiriert durch etablierte Marktakteure und über die Grenzen Schleswig-Holsteins hinaus.
                    </p>
                    <p>
                        Heute ist er als Investor, Entwickler und Verwalter in verschiedenen Bereichen am Immobilienmarkt aktiv. Paul ist zertifizierter Immobilienverwalter und Teilnehmer am Studiengang <i>Credential of Leadership in Management and Business</i> an der Harvard Business School.
                    </p>
                </div>

                <div className="flex flex-col space-y-4 border-t border-luxury-border pt-8">
                     <p className="text-sm font-light text-gray-500 italic">
                        "Erfolg ist planbar – durch Disziplin, Vision und das richtige Team."
                     </p>
                     <span className="text-xs uppercase tracking-widest text-luxury-text font-medium mt-2">
                         Paul Kohlhoff — Gründer & Geschäftsführer
                     </span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};