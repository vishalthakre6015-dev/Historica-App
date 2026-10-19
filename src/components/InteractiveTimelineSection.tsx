import React, { useState } from 'react';
import { HistoricalSite } from '../types/history';
import { Clock, Calendar, ArrowRight, MapPin, Landmark, ExternalLink } from 'lucide-react';
import { getMonumentWikipediaUrl } from '../utils/wikipedia';

interface InteractiveTimelineSectionProps {
  sites: HistoricalSite[];
  onOpenSiteDetail: (site: HistoricalSite) => void;
}

interface EpochSummary {
  eraKey: string;
  epochTitle: string;
  dateRange: string;
  globalContext: string;
  associatedSiteIds: string[];
  wikipediaUrl: string;
}

const EPOCHS: EpochSummary[] = [
  {
    eraKey: 'ancient',
    epochTitle: 'The Megalithic & Bronze Epoch',
    dateRange: '3,000 BCE – 500 BCE',
    globalContext: 'The dawn of statehood, monumental astronomy, written script, and stone masonry along sacred rivers like the Nile, Tigris, Euphrates, and Indus.',
    associatedSiteIds: ['pyramids-giza-egypt'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Bronze_Age'
  },
  {
    eraKey: 'classical',
    epochTitle: 'Classical Antiquity & The Mediterranean Golden Age',
    dateRange: '500 BCE – 500 CE',
    globalContext: 'Philosophical democracy in Athens, monumental civic engineering in Rome, Ashokan rock-cut edicts and Buddhist stupas in India, and Nabataean trade hydrology carved into desert bedrock.',
    associatedSiteIds: ['sanchi-stupa-bhopal', 'ajanta-caves-aurangabad', 'acropolis-athens-greece', 'colosseum-rome', 'petra-jordan'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Classical_antiquity'
  },
  {
    eraKey: 'medieval',
    epochTitle: 'Medieval Civilizations & Sacred High Places',
    dateRange: '500 CE – 1500 CE',
    globalContext: 'Rashtrakuta monolithic mountain temples at Ellora, Chola granite towers in Thanjavur, astronomical sun chariot wheels at Konark, Delhi Sultanate stone minarets, and Vijayanagara stone chariots at Hampi, alongside Khmer temple-cities and Incan mountain citadels.',
    associatedSiteIds: ['ellora-kailasa-temple', 'brihadeeswarar-temple-thanjavur', 'konark-sun-temple-odisha', 'hampi-vittala-temple', 'qutb-minar-iron-pillar-delhi', 'angkor-wat-cambodia', 'machu-picchu-peru'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Middle_Ages'
  },
  {
    eraKey: 'modern',
    epochTitle: 'The Imperial Renaissance & Early Modern World',
    dateRange: '1500 CE – 1850 CE',
    globalContext: 'Mughal architectural symmetry in Agra, the gilded universal sanctuary of Harmandir Sahib in Amritsar, Rajput starry mirror palaces at Amer Fort, and Ming Dynasty stone ramparts securing the northern frontiers of China.',
    associatedSiteIds: ['taj-mahal-agra', 'golden-temple-amritsar', 'amer-fort-jaipur', 'great-wall-china'],
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Early_modern_period'
  }
];

export const InteractiveTimelineSection: React.FC<InteractiveTimelineSectionProps> = ({
  sites,
  onOpenSiteDetail
}) => {
  const [activeEpochIndex, setActiveEpochIndex] = useState<number>(1);

  const activeEpoch = EPOCHS[activeEpochIndex];
  const epochSites = sites.filter(s => activeEpoch.associatedSiteIds.includes(s.id));

  return (
    <section id="chronology" className="py-16 bg-[#F8F6F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Curatorial Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
              <Clock className="w-3.5 h-3.5 text-amber-800" />
              <span>World Chronology</span>
              <span aria-hidden="true">·</span>
              <span>Parallel Histories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-stone-900 tracking-tight">
              The Architecture of Time
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Civilizations rose and built in parallel. Step through humanity's monumental epochs and examine how architectural science evolved in tandem across separated continents.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono">
            Epoch {activeEpochIndex + 1} of {EPOCHS.length}
          </div>
        </div>

        {/* Epoch Navigation Rail */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
          {EPOCHS.map((epoch, idx) => (
            <button
              key={epoch.eraKey}
              onClick={() => setActiveEpochIndex(idx)}
              className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                activeEpochIndex === idx
                  ? 'bg-white border-amber-800 shadow-sm ring-1 ring-amber-800'
                  : 'bg-stone-100 border-stone-200 text-stone-600 hover:bg-white hover:text-stone-900'
              }`}
            >
              <span className="block text-[11px] font-mono text-amber-800 font-semibold mb-1">
                {epoch.dateRange}
              </span>
              <h4 className="text-xs sm:text-sm font-editorial font-medium text-stone-900 leading-snug line-clamp-2">
                {epoch.epochTitle}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Epoch Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          
          <div className="border-b border-stone-100 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-800 uppercase tracking-widest">
                <span>Epoch Focus</span>
                <span aria-hidden="true">·</span>
                <span>{activeEpoch.dateRange}</span>
              </div>

              <a
                href={activeEpoch.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-950 bg-amber-100/80 hover:bg-amber-100 border border-amber-300/80 rounded-lg transition-all cursor-pointer shadow-2xs hover:shadow-xs shrink-0"
                title={`Read more about ${activeEpoch.epochTitle} on Wikipedia`}
              >
                <span>Read More on Wikipedia</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
              </a>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial text-stone-900 mb-2">
              {activeEpoch.epochTitle}
            </h3>
            <p className="text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
              {activeEpoch.globalContext}
            </p>
          </div>

          {/* Monuments associated with this epoch */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-4">
              Wonders Engineered in this Era:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {epochSites.map(site => (
                <div
                  key={site.id}
                  onClick={() => onOpenSiteDetail(site)}
                  className="group p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-400 hover:bg-white hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-stone-200">
                      <img
                        src={site.heroImage}
                        alt={site.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-[10px] text-amber-300 rounded font-medium">
                        {site.timePeriod}
                      </div>
                    </div>

                    <h5 className="font-editorial text-lg text-stone-900 group-hover:text-amber-900 transition-colors mb-1">
                      {site.name}
                    </h5>

                    <p className="text-xs text-stone-500 flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      {site.location.city}, {site.location.country} · {site.civilization}
                    </p>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {site.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs font-medium text-amber-800 gap-2">
                    <a
                      href={getMonumentWikipediaUrl(site)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-600 hover:text-amber-900 bg-stone-100 hover:bg-amber-100/80 px-2 py-1 rounded transition-colors cursor-pointer shrink-0"
                      title={`Read more about ${site.name} on Wikipedia`}
                    >
                      <span>Wikipedia</span>
                      <ExternalLink className="w-3 h-3 text-stone-500 hover:text-amber-800" />
                    </a>

                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Examine History</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
