import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { Statistics } from './components/Statistics';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Concierge } from './components/Concierge';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-luxury-bg min-h-screen text-luxury-text font-sans selection:bg-luxury-gold selection:text-white cursor-none md:cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Statistics />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Concierge />
    </div>
  );
};

export default App;