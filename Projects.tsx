import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="group border-b border-luxury-border last:border-b-0">
      <div className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} min-h-[60vh]`}>
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 overflow-hidden relative">
           {/* Darken image on hover for contrast with white text if needed, or keep clean */}
           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
           <img 
             src={project.imageUrl} 
             alt={project.title} 
             className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
           />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-luxury-bg md:border-l border-luxury-border relative">
            <div className="absolute top-12 left-12 md:left-24 text-luxury-gold text-xs font-mono">
                {String(index + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
            </div>

            <span className="inline-block px-3 py-1 border border-luxury-gold/30 rounded-full text-[10px] uppercase tracking-widest text-luxury-gold w-fit mb-6">
                {project.status}
            </span>

            <h3 className="font-serif text-3xl md:text-5xl mb-6 text-luxury-text group-hover:italic transition-all duration-300">
                {project.title}
            </h3>
            
            <p className="text-gray-600 font-light leading-relaxed mb-8 max-w-md">
                {project.description}
            </p>

            <div className="flex items-center justify-between border-t border-luxury-border pt-6 mt-auto">
                <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500">Standort</span>
                    <span className="text-luxury-text font-light">{project.location}</span>
                </div>
                <button className="h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-luxury-text hover:bg-luxury-text hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-luxury-bg">
        <div className="container mx-auto px-6 md:px-12 border-l border-r border-luxury-border pt-24 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-luxury-border pb-12">
                <div>
                    <h2 className="font-serif text-4xl md:text-6xl text-luxury-text mb-2">Ausgewählte Arbeiten</h2>
                    <p className="text-gray-500 font-light text-sm tracking-wide">Wir gestalten die Skyline der Zukunft.</p>
                </div>
                <div className="hidden md:block">
                     <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Portfolio 2024-2026</span>
                </div>
            </div>
            
            <div className="border-t border-luxury-border">
                {PROJECTS.map((project, index) => (
                    <ProjectItem key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
};