import React from 'react';
import { Landmark, ShieldCheck, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onOpenExpedition: () => void;
  onOpenTrivia: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenExpedition,
  onOpenTrivia,
  onSelectSection,
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Mandate (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xl font-monument font-bold text-white tracking-wider">
              <Landmark className="w-5 h-5 text-amber-500" />
              <span>HISTORICA</span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Dedicated to the preservation, documentation, and respectful exploration of humanity’s monumental architectural heritage. Exploring 5,000 years of living history across six continents.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Supporting UNESCO World Heritage Conservation Principles</span>
            </div>
          </div>

          {/* Curatorial Archives (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Archive & Exhibitions
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => onSelectSection('wonders')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  World Monuments Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSection('indian-history')} 
                  className="hover:text-amber-300 font-medium transition-colors cursor-pointer text-amber-400"
                >
                  Indian History (Chronicles of Bharat)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSection('chronos-lens')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Then & Now Reconstructions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSection('chronology')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  World Civilizations Chronology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectSection('heritage-map')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Cartography Map
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTrivia} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Curator's Historical Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Visitor Ethics & Planning (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Heritage Traveler Resources
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Before setting foot on ancient stone, prepare with verified visiting windows, official ticketing protocols, and sustainable tourism ethics designed to safeguard monuments for millennia.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenExpedition}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-950 bg-amber-300 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer"
              >
                Launch Expedition Planner
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Baseline Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Historica Heritage Archive. All archival reconstructions and field guides curated for cultural education.</p>
          <div className="flex items-center gap-4">
            <span>Venice Charter (1964)</span>
            <span>·</span>
            <span>UNESCO Convention (1972)</span>
            <span>·</span>
            <span>Sustainable Heritage Tourism</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
