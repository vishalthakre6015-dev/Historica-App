import React, { useState } from 'react';
import { HistoricalSite } from '../types/history';
import { Sparkles, Eye, ArrowLeftRight, Clock, MapPin, CheckCircle2, Info } from 'lucide-react';

interface ChronosLensSectionProps {
  sites: HistoricalSite[];
  onOpenSiteDetail: (site: HistoricalSite) => void;
}

export const ChronosLensSection: React.FC<ChronosLensSectionProps> = ({ sites, onOpenSiteDetail }) => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>(sites[0].id);
  const [activeView, setActiveView] = useState<'ancient' | 'modern' | 'split'>('split');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const currentSite = sites.find(s => s.id === selectedSiteId) || sites[0];

  return (
    <section id="chronos-lens" className="py-16 bg-[#F4F1EA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-amber-800 mb-2">
              <Eye className="w-3.5 h-3.5 text-amber-800" />
              <span>Architectural Reconstruction</span>
              <span aria-hidden="true">·</span>
              <span>Chronos Lens</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-stone-900 tracking-tight">
              Then vs. Now: Reconstructed Ancient Splendour
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Witness how centuries of weather, earthquakes, conquest, and stone quarrying transformed glowing imperial monuments into the storied ruins we protect today.
            </p>
          </div>

          {/* Site Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg overflow-x-auto">
            {sites.slice(0, 5).map(site => (
              <button
                key={site.id}
                onClick={() => setSelectedSiteId(site.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedSiteId === site.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-300/60'
                }`}
              >
                {site.name.split(' ')[0]} {site.location.country}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-xl overflow-hidden border border-stone-300 shadow-md bg-stone-900 select-none">
              
              {/* Image Underlay: The Modern / Baseline state */}
              <img
                src={currentSite.heroImage}
                alt={currentSite.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* View Overlay Modes */}
              {activeView === 'ancient' && (
                <div className="absolute inset-0 bg-stone-950/75 backdrop-blur-[1px] p-8 flex flex-col justify-center text-white transition-opacity">
                  <div className="text-xs uppercase tracking-widest text-amber-300 mb-2 font-medium">
                    Historical Reconstruction · {currentSite.timePeriod}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial mb-4 text-amber-100">
                    {currentSite.reconstruction.ancientTitle}
                  </h3>
                  <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                    {currentSite.reconstruction.ancientDescription}
                  </p>
                  <div className="text-xs text-stone-300 space-y-1.5 border-t border-stone-700/80 pt-4">
                    <p className="font-semibold text-amber-200">Reconstructed Architectural Features:</p>
                    {currentSite.reconstruction.keyChanges.slice(0, 2).map((item, idx) => (
                      <p key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400">✦</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {activeView === 'modern' && (
                <div className="absolute inset-0 bg-stone-950/70 p-8 flex flex-col justify-end text-white transition-opacity">
                  <div className="text-xs uppercase tracking-widest text-emerald-300 mb-2 font-medium">
                    Contemporary Preservation State
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-editorial mb-2 text-white">
                    {currentSite.reconstruction.modernTitle}
                  </h3>
                  <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-4 max-w-xl">
                    {currentSite.reconstruction.modernDescription}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Protected under UNESCO International Heritage Charter</span>
                  </div>
                </div>
              )}

              {activeView === 'split' && (
                <div className="absolute inset-0 flex">
                  {/* Left Side: Ancient Narrative Overlay */}
                  <div 
                    className="h-full bg-stone-950/85 text-white p-6 sm:p-8 flex flex-col justify-between border-r border-amber-400/80 overflow-hidden transition-all duration-75"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-amber-300 font-semibold block mb-1">
                        Then · Original Splendour
                      </span>
                      <h4 className="text-xl sm:text-2xl font-editorial text-amber-100 mb-2 line-clamp-1">
                        {currentSite.reconstruction.ancientTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-4">
                        {currentSite.reconstruction.ancientDescription}
                      </p>
                    </div>

                    <div className="pt-2 text-[11px] text-amber-200/90 font-medium">
                      Drag slider right to expand ancient vision →
                    </div>
                  </div>

                  {/* Right Side: Modern Overlay */}
                  <div 
                    className="h-full bg-transparent text-white p-6 sm:p-8 flex flex-col justify-end overflow-hidden"
                    style={{ width: `${100 - sliderPosition}%` }}
                  >
                    <div className="bg-stone-950/75 backdrop-blur-xs p-4 rounded-lg border border-stone-700/60">
                      <span className="text-[11px] uppercase tracking-widest text-emerald-300 font-semibold block mb-1">
                        Now · Present Ruin
                      </span>
                      <h4 className="text-lg font-editorial text-white mb-1 line-clamp-1">
                        {currentSite.reconstruction.modernTitle}
                      </h4>
                      <p className="text-xs text-stone-200 line-clamp-2">
                        {currentSite.reconstruction.modernDescription}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* View Controller Float */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1 p-1 bg-stone-900/90 backdrop-blur-md rounded-lg border border-stone-700 text-xs">
                <button
                  onClick={() => setActiveView('ancient')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    activeView === 'ancient' ? 'bg-amber-700 text-white font-medium' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Ancient Vision
                </button>
                <button
                  onClick={() => setActiveView('split')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    activeView === 'split' ? 'bg-amber-700 text-white font-medium' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Split Slider
                </button>
                <button
                  onClick={() => setActiveView('modern')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    activeView === 'modern' ? 'bg-amber-700 text-white font-medium' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  Modern State
                </button>
              </div>

              {/* Interactive Range Slider (Visible in split mode) */}
              {activeView === 'split' && (
                <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center gap-3 bg-stone-900/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-stone-700 text-white">
                  <span className="text-xs text-amber-300 font-medium whitespace-nowrap">Then (Ancient)</span>
                  <input
                    type="range"
                    min="15"
                    max="85"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-ew-resize h-1.5 bg-stone-700 rounded-lg"
                    aria-label="Comparison slider"
                  />
                  <span className="text-xs text-emerald-300 font-medium whitespace-nowrap">Now (Present)</span>
                </div>
              )}

            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 px-1">
              <span>{currentSite.name} · {currentSite.civilization}</span>
              <button 
                onClick={() => onOpenSiteDetail(currentSite)}
                className="text-amber-900 font-medium hover:underline cursor-pointer"
              >
                Open Full Historical Dossier & Audio Guide →
              </button>
            </div>
          </div>

          {/* Explanatory Transformation Analysis (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-stone-200 shadow-xs space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-1">
                Evolution & Metamorphosis
              </div>
              <h3 className="text-xl font-editorial font-medium text-stone-900">
                Centuries of Transformation
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                How time, human intervention, and geological forces reshaped {currentSite.name}.
              </p>
            </div>

            {/* Key Architectural Changes List */}
            <div className="space-y-3.5">
              {currentSite.reconstruction.keyChanges.map((change, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-900 font-medium flex items-center justify-center text-xs mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-snug">{change}</p>
                </div>
              ))}
            </div>

            {/* Archaeological Insight Callout */}
            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-stone-900">
                <Info className="w-4 h-4 text-amber-800" />
                <span>Curator's Conservation Note</span>
              </div>
              <p className="leading-relaxed">
                Modern conservation ethics (under the Venice Charter of 1964) forbid "faking" the ancient state. Restorers preserve remaining authenticity, distinguish new stone from antique masonry, and maintain reversible interventions for future generations.
              </p>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={() => onOpenSiteDetail(currentSite)}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer text-center"
              >
                Inspect All Excavated Relics & Visitor Guide
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
