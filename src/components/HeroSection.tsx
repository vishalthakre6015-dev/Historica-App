import React from 'react';
import { Compass, Headphones, Sparkles, ArrowRight, ShieldCheck, Clock, MapPin, Eye } from 'lucide-react';
import { HistoricalSite } from '../types/history';

interface HeroSectionProps {
  featuredSite: HistoricalSite;
  onExploreWonders: () => void;
  onOpenSiteDetail: (site: HistoricalSite) => void;
  onOpenThenNow: () => void;
  onExploreIndianHistory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredSite,
  onExploreWonders,
  onOpenSiteDetail,
  onOpenThenNow,
  onExploreIndianHistory
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F0] border-b border-stone-200">
      {/* Editorial Header Composition */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-12 lg:pt-14 lg:pb-16">
        
        {/* Curatorial Header Lead */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-stone-500">
            <span>Global Heritage Archive</span>
            <span aria-hidden="true">·</span>
            <span>Monuments & Living Chronologies</span>
            <span aria-hidden="true">·</span>
            <span>5,000 BCE – 1850 CE</span>
          </div>

          <button
            onClick={onExploreIndianHistory}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-950 border border-amber-300 hover:bg-amber-200 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-amber-700" />
            <span>Featured: Indian Hill Temples, Shakti Peethas & Ujjain Kaadhi</span>
            <ArrowRight className="w-3 h-3 text-amber-800" />
          </button>
        </div>

        {/* 2-Column Split: Editorial Prose & Cinematic Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Column 1: Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium text-stone-900 tracking-tight leading-[1.12] mb-6" style={{ textWrap: 'balance' }}>
                Where stone remembers the rise & fall of empires.
              </h1>
              
              <div className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 space-y-4">
                <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-900">
                  Across continents and millennia, humanity has carved its deepest beliefs, triumphs, and cosmic geometries into living rock and marble. From the sun-aligned terraces of Machu Picchu to the acoustic vaults of Rome, the Himalayan peaks of Kedarnath, and the eternal holy ghats of Kashi and Ujjain, these sanctuaries stand as the enduring memory of our collective civilization.
                </p>
                <p className="text-stone-600 text-sm sm:text-base">
                  Explore curated architectural chronologies, listen to authentic site audio guides, examine archaeological relics, and see reconstructed ancient wonders compared with their modern preserved states.
                </p>
              </div>
            </div>

            {/* Interactive Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWonders}
                className="flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Explore Ancient Wonders</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreIndianHistory}
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-800" />
                <span>Indian History & Sacred Temples</span>
              </button>

              <button
                onClick={onOpenThenNow}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-amber-800" />
                <span>Then vs. Now</span>
              </button>
            </div>
          </div>

          {/* Column 2: Cinematic Focal Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div 
              onClick={() => onOpenSiteDetail(featuredSite)}
              className="group relative flex-1 min-h-[380px] lg:min-h-[460px] rounded-xl overflow-hidden border border-stone-300/80 bg-stone-200 cursor-pointer shadow-md transition-all hover:shadow-xl"
            >
              <img
                src={featuredSite.heroImage}
                alt="Roman Colosseum at golden hour"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Scrim Overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-amber-300 mb-1">
                  <span>Featured Monument</span>
                  <span aria-hidden="true">·</span>
                  <span>Flavian Dynasty</span>
                  <span aria-hidden="true">·</span>
                  <span>Rome, Italy</span>
                </div>
                
                <h3 className="text-2xl font-editorial font-medium mb-1">
                  The Flavian Amphitheatre
                </h3>
                
                <p className="text-xs text-stone-200 line-clamp-2 mb-3">
                  Inaugurated in 80 CE with 100 days of imperial games; engineered in travertine, tufa, and Roman concrete.
                </p>

                <div className="flex items-center justify-between text-xs font-medium text-amber-200 pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1.5">
                    <Headphones className="w-3.5 h-3.5" />
                    Audio Guide & Subterranean Tour
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    View Archival Dossier →
                  </span>
                </div>
              </div>
            </div>

            {/* Curatorial Caption */}
            <p className="text-xs font-serif italic text-stone-500 mt-2.5 px-1">
              Fig. 1 — Exterior travertine arcade and southern exposed hypogeum of the Colosseum at twilight. Archival Collection Rome.
            </p>
          </div>

        </div>

        {/* Curatorial Operational Utility Ribbon (Full width row below hero) */}
        <div className="mt-12 pt-6 border-t border-stone-300/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-stone-700">
          <div>
            <span className="block text-stone-500 uppercase tracking-wider text-[11px] mb-0.5">Global Heritage</span>
            <p className="font-semibold text-stone-900 text-sm tabular-nums">1,199 World Heritage Sites</p>
            <span className="text-stone-500">Across 168 nations documented</span>
          </div>

          <div>
            <span className="block text-stone-500 uppercase tracking-wider text-[11px] mb-0.5">Chronological Scope</span>
            <p className="font-semibold text-stone-900 text-sm">Bronze Age to 18th Century</p>
            <span className="text-stone-500">Continuously updated research</span>
          </div>

          <div>
            <span className="block text-stone-500 uppercase tracking-wider text-[11px] mb-0.5">Conservation Standard</span>
            <p className="font-semibold text-stone-900 text-sm flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              UNESCO Monitored
            </p>
            <span className="text-stone-500">Sustainable tourist guidelines</span>
          </div>

          <div>
            <span className="block text-stone-500 uppercase tracking-wider text-[11px] mb-0.5">Auditory Immersion</span>
            <p className="font-semibold text-stone-900 text-sm flex items-center gap-1">
              <Headphones className="w-4 h-4 text-amber-800" />
              Procedural Soundscapes
            </p>
            <span className="text-stone-500">Synthesized ambient atmospheres</span>
          </div>
        </div>

      </div>
    </section>
  );
};
