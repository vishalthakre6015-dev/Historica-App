import React, { useState } from 'react';
import { HistoricalSite } from '../types/history';
import { 
  X, Compass, Calendar, CheckSquare, Square, Copy, Check, 
  MapPin, Clock, ShieldCheck, Download, Printer, Luggage, Sparkles 
} from 'lucide-react';

interface ExpeditionPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  allSites: HistoricalSite[];
  bookmarkedSiteIds: string[];
  onToggleBookmark: (siteId: string) => void;
}

export const ExpeditionPlannerModal: React.FC<ExpeditionPlannerModalProps> = ({
  isOpen,
  onClose,
  allSites,
  bookmarkedSiteIds,
  onToggleBookmark,
}) => {
  const [selectedSiteIds, setSelectedSiteIds] = useState<string[]>(
    bookmarkedSiteIds.length > 0 ? bookmarkedSiteIds : [allSites[0].id, allSites[1].id]
  );
  const [expeditionStyle, setExpeditionStyle] = useState<'classic' | 'deep' | 'leisure'>('classic');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const toggleSite = (id: string) => {
    if (selectedSiteIds.includes(id)) {
      if (selectedSiteIds.length > 1) {
        setSelectedSiteIds(selectedSiteIds.filter(s => s !== id));
      }
    } else {
      setSelectedSiteIds([...selectedSiteIds, id]);
    }
  };

  const selectedSites = allSites.filter(s => selectedSiteIds.includes(s.id));

  // Generate itinerary text
  const generateItineraryText = () => {
    let text = `HISTORICA — CURATED WORLD HERITAGE EXPEDITION ITINERARY\n`;
    text += `Style: ${expeditionStyle.toUpperCase()} · Destinations: ${selectedSites.length}\n`;
    text += `====================================================\n\n`;

    selectedSites.forEach((site, index) => {
      text += `PHASE ${index + 1}: ${site.name.toUpperCase()} (${site.location.city}, ${site.location.country})\n`;
      text += `Era: ${site.timePeriod} | Civilization: ${site.civilization}\n`;
      text += `Best Visiting Window: ${site.visitorGuide.bestTimeToVisit}\n`;
      text += `Morning Mission: Sunrise arrival for undisturbed architectural photography & crowd-free entry.\n`;
      text += `Key Monuments: ${site.visitorGuide.mustSeeSightsOnSite.join(', ')}\n`;
      text += `Cultural Etiquette: ${site.visitorGuide.dressCodeAndEtiquette}\n`;
      text += `UNESCO Conservation Mandate: ${site.visitorGuide.conservationRule}\n\n`;
    });

    text += `ESSENTIAL HERITAGE TRAVEL CHECKLIST:\n`;
    text += `- Sturdy rubber-soled footwear for slick ancient stone surfaces\n`;
    text += `- Modest clothing covering shoulders & knees for sacred sanctums\n`;
    text += `- Pre-booked timed tickets & official museum access\n`;
    text += `- Reusable water flask & sun protection\n`;
    text += `- Strict "Leave No Trace" principle on antique stonework\n`;

    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateItineraryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-[#F8F6F0] rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F2EFE8] border-b border-stone-200">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-800" />
            <h3 className="font-editorial text-xl font-medium text-stone-900">
              Heritage Expedition Planner
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close planner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          
          {/* Step 1: Destination Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-800">
                1. Select Heritage Destinations
              </h4>
              <span className="text-xs text-stone-500 tabular-nums">
                {selectedSiteIds.length} of {allSites.length} Selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {allSites.map(site => {
                const isSelected = selectedSiteIds.includes(site.id);

                return (
                  <button
                    key={site.id}
                    onClick={() => toggleSite(site.id)}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-50 border-amber-400/90 text-stone-900 shadow-2xs'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 text-amber-800" />
                      ) : (
                        <Square className="w-4 h-4 text-stone-300" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900 line-clamp-1">{site.name}</p>
                      <p className="text-[11px] text-stone-500">{site.location.city}, {site.location.country}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Expedition Pace */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-800 mb-3">
              2. Expedition Pace & Focus
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setExpeditionStyle('classic')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  expeditionStyle === 'classic'
                    ? 'bg-white border-amber-800 ring-1 ring-amber-800 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-white'
                }`}
              >
                <span className="font-semibold text-stone-900 text-xs block mb-1">Classic Archaeological Tour</span>
                <p className="text-[11px] text-stone-600 leading-normal">
                  Focused 2-day immersion per site, covering morning ruins and afternoon museum antiquarium collections.
                </p>
              </button>

              <button
                onClick={() => setExpeditionStyle('deep')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  expeditionStyle === 'deep'
                    ? 'bg-white border-amber-800 ring-1 ring-amber-800 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-white'
                }`}
              >
                <span className="font-semibold text-stone-900 text-xs block mb-1">Deep Academic Survey</span>
                <p className="text-[11px] text-stone-600 leading-normal">
                  In-depth 4-day study per monument including off-trail satellite excavations and hydraulic networks.
                </p>
              </button>

              <button
                onClick={() => setExpeditionStyle('leisure')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  expeditionStyle === 'leisure'
                    ? 'bg-white border-amber-800 ring-1 ring-amber-800 shadow-xs'
                    : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-white'
                }`}
              >
                <span className="font-semibold text-stone-900 text-xs block mb-1">Cultural & Photography Pilgrimage</span>
                <p className="text-[11px] text-stone-600 leading-normal">
                  Paced for golden-hour twilight photography, local culinary traditions, and tranquil exploration.
                </p>
              </button>
            </div>
          </div>

          {/* Generated Curated Schedule */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-800 mb-3">
              3. Curated Day-by-Day Expedition Blueprint
            </h4>

            <div className="space-y-4">
              {selectedSites.map((site, index) => (
                <div key={site.id} className="bg-white p-5 rounded-xl border border-stone-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-stone-100 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-800 text-white font-mono text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <h5 className="font-editorial text-base font-semibold text-stone-900">
                        {site.name}
                      </h5>
                    </div>
                    <span className="text-xs text-stone-500 font-medium">
                      {site.location.city}, {site.location.country} · {site.timePeriod}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700">
                    <div className="space-y-1">
                      <p className="font-semibold text-stone-900">Key Monuments to Explore:</p>
                      <p className="leading-relaxed">{site.visitorGuide.mustSeeSightsOnSite.join(' · ')}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-semibold text-amber-900">Visiting Advice & Hours:</p>
                      <p className="leading-relaxed">{site.visitorGuide.bestTimeToVisit}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-lg text-xs text-stone-600 border border-stone-100 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <p>
                      <strong>Preservation Mandate:</strong> {site.visitorGuide.conservationRule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heritage Travel Checklist & Ethics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
              <h5 className="font-semibold text-stone-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <Luggage className="w-3.5 h-3.5 text-amber-800" />
                Essential Expedition Gear Checklist
              </h5>
              <ul className="space-y-1.5 text-stone-600">
                <li>• Sturdy rubber-soled footwear with grip for slick ancient marble</li>
                <li>• Modest clothing (breathable linen covering knees & shoulders)</li>
                <li>• Pre-downloaded digital tickets & passports for secure checkpoints</li>
                <li>• Reusable hydration flask (water is sacred in desert & high-altitude sites)</li>
                <li>• High-SPF sun protection, wide-brim hat & sunglasses</li>
              </ul>
            </div>

            <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200 space-y-2 text-stone-800">
              <h5 className="font-semibold text-amber-950 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                UNESCO Responsible Traveler Code
              </h5>
              <p className="leading-relaxed">
                Ancient stone absorbs skin oils and graffiti that can never be undone. Never climb unmarked stones, purchase undocumented antique coins, or remove fragments from archaeological zones. Support local guides and heritage custodians.
              </p>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#F2EFE8] border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-500">
            Export ready for printing or offline travel notes
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Itinerary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>Print Itinerary</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
