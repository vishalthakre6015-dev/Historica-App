import React, { useState } from 'react';
import { HistoricalSite } from '../types/history';
import { MapPin, Navigation, Eye, Headphones, ArrowRight, Globe } from 'lucide-react';

interface GlobalHeritageMapProps {
  sites: HistoricalSite[];
  onOpenSiteDetail: (site: HistoricalSite) => void;
  onPlayAudio: (site: HistoricalSite) => void;
}

export const GlobalHeritageMap: React.FC<GlobalHeritageMapProps> = ({
  sites,
  onOpenSiteDetail,
  onPlayAudio
}) => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>(sites[0].id);

  const selectedSite = sites.find(s => s.id === selectedSiteId) || sites[0];

  // Convert lat/lng to SVG percentage (Miller/Mercator simplified projection)
  const getCoordinatesPercentage = (lat: number, lng: number) => {
    // longitude: -180 to 180 -> 0% to 100%
    const x = ((lng + 180) / 360) * 100;
    // latitude: ~75 to -60 -> 0% to 100%
    const clampedLat = Math.max(-60, Math.min(75, lat));
    const y = ((75 - clampedLat) / 135) * 100;
    return { x, y };
  };

  return (
    <section id="heritage-map" className="py-16 bg-[#F4F1EA] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
              <Globe className="w-3.5 h-3.5 text-amber-800" />
              <span>Cartography & Cross-Continental Distribution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-stone-900 tracking-tight">
              Interactive Heritage Map
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Pinpoint the ancient world's grandest capitals, desert trading empires, and cloud-forest citadels across global longitudes.
            </p>
          </div>

          <div className="text-xs text-stone-600">
            Selected: <strong className="text-stone-900">{selectedSite.name}</strong>
          </div>
        </div>

        {/* Map & Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive World Map SVG Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-white p-4 sm:p-6 rounded-2xl border border-stone-300 shadow-xs relative">
            
            {/* Map Frame */}
            <div className="relative aspect-[16/9] w-full bg-[#EBE6DF] rounded-xl overflow-hidden border border-stone-200">
              
              {/* World Map SVG Vector Silhouette */}
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-35 pointer-events-none fill-stone-500">
                {/* Simplified continents paths */}
                {/* North & Central America */}
                <path d="M150,80 Q200,60 250,90 Q300,120 280,180 Q240,240 220,290 Q200,310 180,260 Q130,220 110,160 Z" />
                {/* South America */}
                <path d="M260,280 Q320,310 330,370 Q310,450 270,480 Q230,440 240,360 Z" />
                {/* Europe */}
                <path d="M460,90 Q540,80 560,130 Q530,170 480,180 Q450,150 460,90 Z" />
                {/* Africa */}
                <path d="M470,190 Q560,200 580,270 Q560,370 500,420 Q440,360 450,260 Z" />
                {/* Asia */}
                <path d="M570,90 Q750,70 850,140 Q880,250 800,320 Q700,300 620,220 Q570,180 570,90 Z" />
                {/* Australia */}
                <path d="M780,360 Q860,350 880,410 Q830,460 760,430 Z" />
              </svg>

              {/* Coordinates Grid Overlay */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none border border-stone-300/40 divide-x divide-y divide-stone-300/30">
                <div /><div /><div /><div /><div /><div />
                <div /><div /><div /><div /><div /><div />
                <div /><div /><div /><div /><div /><div />
                <div /><div /><div /><div /><div /><div />
              </div>

              {/* Interactive Monument Markers */}
              {sites.map(site => {
                const { x, y } = getCoordinatesPercentage(site.location.coordinates.lat, site.location.coordinates.lng);
                const isSelected = site.id === selectedSiteId;

                return (
                  <button
                    key={site.id}
                    onClick={() => setSelectedSiteId(site.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer focus:outline-hidden"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    aria-label={`Select ${site.name}`}
                  >
                    {/* Pulsing ring when selected */}
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-amber-500/30 animate-ping" />
                    )}
                    
                    {/* Marker Pin */}
                    <div className={`p-1.5 rounded-full transition-all duration-200 shadow-md ${
                      isSelected 
                        ? 'bg-amber-800 text-white scale-125 ring-2 ring-white' 
                        : 'bg-stone-900 text-stone-200 hover:bg-amber-700 hover:text-white hover:scale-110'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                    </div>

                    {/* Marker Tooltip on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 pointer-events-none whitespace-nowrap bg-stone-900 text-white text-[11px] font-medium py-1 px-2 rounded shadow-md z-30">
                      {site.name} ({site.location.country})
                    </div>
                  </button>
                );
              })}

              {/* Map Legend */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-stone-200 text-[11px] text-stone-600 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-800" />
                  Active Site
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-stone-900" />
                  Catalogued Wonder
                </span>
              </div>

            </div>

            {/* Quick Site Switcher Strip */}
            <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
              <span className="text-xs text-stone-400 font-medium shrink-0">Focus:</span>
              {sites.map(s => {
                const cleanName = s.name.replace(/^(The\s+)/i, '').split(' ')[0];
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSiteId(s.id)}
                    className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                      s.id === selectedSiteId
                        ? 'bg-amber-100 text-amber-900 font-semibold border border-amber-300'
                        : 'text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200'
                    }`}
                  >
                    {cleanName} ({s.location.country === 'India' ? s.location.city.split(',')[0] : s.location.country})
                  </button>
                );
              })}
            </div>

          </div>

          {/* Focused Site Dossier Preview Card (4 cols) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-300 shadow-xs flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-stone-100">
                <img
                  src={selectedSite.heroImage}
                  alt={selectedSite.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] text-amber-300 font-mono">
                  {selectedSite.location.coordinates.lat.toFixed(2)}°N, {selectedSite.location.coordinates.lng.toFixed(2)}°E
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>{selectedSite.civilization}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedSite.timePeriod}</span>
              </div>

              <h3 className="text-xl font-editorial font-medium text-stone-900 mb-2">
                {selectedSite.name}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                {selectedSite.summary}
              </p>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1 mb-4">
                <p className="font-semibold text-stone-900">Visiting Advice:</p>
                <p className="line-clamp-2">{selectedSite.visitorGuide.bestTimeToVisit}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-stone-100">
              <button
                onClick={() => onOpenSiteDetail(selectedSite)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
              >
                <span>Examine Full Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onPlayAudio(selectedSite)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-amber-900 hover:bg-amber-50 rounded-lg border border-amber-200 transition-colors cursor-pointer"
              >
                <Headphones className="w-3.5 h-3.5 text-amber-800" />
                <span>Play Site Audio Guide</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
