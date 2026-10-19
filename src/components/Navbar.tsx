import React, { useState } from 'react';
import { Compass, BookOpen, Clock, Headphones, MapPin, Menu, X, Landmark } from 'lucide-react';

interface NavbarProps {
  onOpenExpedition: () => void;
  onOpenTrivia: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenExpedition, onOpenTrivia, onSelectSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onSelectSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F0]/95 backdrop-blur-md border-b border-stone-200/90 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 text-xl font-monument tracking-wider font-bold text-stone-900 whitespace-nowrap shrink-0 group"
        >
          <Landmark className="w-5 h-5 text-amber-700 transition-transform group-hover:scale-110" />
          <span>HISTORICA</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-700">
          <button 
            onClick={() => handleNavClick('wonders')} 
            className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Wonders
          </button>
          <button 
            onClick={() => handleNavClick('indian-history')} 
            className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer font-semibold text-amber-900"
          >
            Indian History & Temples
          </button>
          <button 
            onClick={() => handleNavClick('chronos-lens')} 
            className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Then & Now
          </button>
          <button 
            onClick={() => handleNavClick('chronology')} 
            className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Chronology
          </button>
          <button 
            onClick={() => handleNavClick('heritage-map')} 
            className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            World Map
          </button>
          <button 
            onClick={onOpenTrivia} 
            className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-stone-500" />
            <span>Quiz</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button 
            onClick={onOpenExpedition}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-amber-950 bg-amber-200/80 hover:bg-amber-300 border border-amber-300/80 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-amber-800" />
            <span>Plan Expedition</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#F8F6F0] px-6 py-4 space-y-3">
          <button 
            onClick={() => handleNavClick('wonders')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-800 hover:text-amber-800"
          >
            Wonders Catalog
          </button>
          <button 
            onClick={() => handleNavClick('indian-history')} 
            className="block w-full text-left py-2 text-sm font-semibold text-amber-900 hover:text-amber-800"
          >
            Indian History & Sacred Temples (Shakti Peeth, Ujjain, Kedarnath)
          </button>
          <button 
            onClick={() => handleNavClick('chronos-lens')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-800 hover:text-amber-800"
          >
            Then & Now Reconstructions
          </button>
          <button 
            onClick={() => handleNavClick('chronology')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-800 hover:text-amber-800"
          >
            World Chronology
          </button>
          <button 
            onClick={() => handleNavClick('heritage-map')} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-800 hover:text-amber-800"
          >
            Interactive Heritage Map
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenTrivia(); }} 
            className="block w-full text-left py-2 text-sm font-medium text-stone-800 hover:text-amber-800"
          >
            Curator's Historical Quiz
          </button>
          <div className="pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenExpedition(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-amber-950 bg-amber-200 hover:bg-amber-300 rounded-lg"
            >
              <Compass className="w-4 h-4 text-amber-800" />
              <span>Plan Expedition</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
