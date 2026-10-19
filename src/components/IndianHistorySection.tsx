import React, { useState, useMemo } from 'react';
import { 
  INDIAN_HISTORY_EPOCHS, 
  IndianHistoryEpoch, 
  ALL_INDIAN_HISTORICAL_PLACES, 
  IndianHistoricalPlace 
} from '../data/indianHistoryEpochs';
import { HistoricalSite } from '../types/history';
import { 
  Sparkles, Compass, Clock, MapPin, Landmark, ArrowRight, 
  Crown, Scroll, ShieldCheck, Flame, BookOpen, Search, Filter, 
  CheckCircle2, Info, Eye, ExternalLink, X, Map, Mountain, Waves
} from 'lucide-react';
import { 
  getEpochWikipediaUrl, 
  getSacredPlaceWikipediaUrl, 
  getMonumentWikipediaUrl 
} from '../utils/wikipedia';

interface IndianHistorySectionProps {
  allSites: HistoricalSite[];
  onOpenSiteDetail: (site: HistoricalSite) => void;
}

type CuratedCircuit = 'all' | 'hill-station' | 'shakti-peeth' | 'ujjain-kashi-jyotirlinga' | 'forts' | 'stepwells';

export const IndianHistorySection: React.FC<IndianHistorySectionProps> = ({
  allSites,
  onOpenSiteDetail
}) => {
  const [selectedEpochId, setSelectedEpochId] = useState<string>(INDIAN_HISTORY_EPOCHS[0].id);
  const [placeSearchQuery, setPlaceSearchQuery] = useState<string>('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('All Regions');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All Types');
  const [selectedCircuit, setSelectedCircuit] = useState<CuratedCircuit>('all');
  const [filterByActiveEpoch, setFilterByActiveEpoch] = useState<boolean>(false);
  const [selectedPlaceForModal, setSelectedPlaceForModal] = useState<IndianHistoricalPlace | null>(null);

  const activeEpoch = INDIAN_HISTORY_EPOCHS.find(e => e.id === selectedEpochId) || INDIAN_HISTORY_EPOCHS[0];

  // Find all catalogued Indian sites with rich 3D/audio dossiers
  const indianSitesWithDossiers = useMemo(() => {
    return allSites.filter(s => s.location.country === 'India');
  }, [allSites]);

  // Filtered Indian places list
  const filteredPlaces = useMemo(() => {
    return ALL_INDIAN_HISTORICAL_PLACES.filter(place => {
      // Curated circuit filter
      if (selectedCircuit === 'hill-station') {
        const isHill = place.architecturalCategory === 'Himalayan & Hill Station Temple' ||
                       place.sacredTradition === 'Himalayan Hill Shrine' ||
                       place.sacredTradition === 'Char Dham' ||
                       place.sacredTradition === 'Panch Kedar' ||
                       place.altitudeOrRiver?.toLowerCase().includes('altitude');
        if (!isHill) return false;
      } else if (selectedCircuit === 'shakti-peeth') {
        const isShakti = place.architecturalCategory === 'Shakti Peeth' ||
                         place.sacredTradition === 'Maha Shakti Peeth' ||
                         place.sacredTradition === 'Tantric Pitha';
        if (!isShakti) return false;
      } else if (selectedCircuit === 'ujjain-kashi-jyotirlinga') {
        const isJyotirlingaOrHoly = place.architecturalCategory === 'Jyotirlinga & Mahatirth' ||
                                    place.sacredTradition === '12 Jyotirlingas' ||
                                    place.id.includes('ujjain') ||
                                    place.id.includes('kashi') ||
                                    place.id.includes('kedarnath') ||
                                    place.id.includes('somnath');
        if (!isJyotirlingaOrHoly) return false;
      } else if (selectedCircuit === 'forts') {
        if (place.architecturalCategory !== 'Hill Fortress') return false;
      } else if (selectedCircuit === 'stepwells') {
        if (place.architecturalCategory !== 'Stepwell & Water Engineering') return false;
      }

      // Epoch filter
      if (filterByActiveEpoch && place.epochId !== selectedEpochId) {
        return false;
      }
      // Region filter
      if (selectedRegionFilter !== 'All Regions' && place.region !== selectedRegionFilter) {
        return false;
      }
      // Category filter
      if (selectedCategoryFilter !== 'All Types' && place.architecturalCategory !== selectedCategoryFilter) {
        return false;
      }
      // Search query
      if (placeSearchQuery.trim() !== '') {
        const q = placeSearchQuery.toLowerCase();
        const matchName = place.name.toLowerCase().includes(q);
        const matchIndigenous = place.indigenousName.toLowerCase().includes(q);
        const matchState = place.state.toLowerCase().includes(q);
        const matchCity = place.cityOrDistrict.toLowerCase().includes(q);
        const matchDynasty = place.dynastyOrPatron.toLowerCase().includes(q);
        const matchCategory = place.architecturalCategory.toLowerCase().includes(q);
        const matchSummary = place.summary.toLowerCase().includes(q);
        const matchTradition = place.sacredTradition?.toLowerCase().includes(q);
        const matchAlt = place.altitudeOrRiver?.toLowerCase().includes(q);
        return matchName || matchIndigenous || matchState || matchCity || matchDynasty || matchCategory || matchSummary || matchTradition || matchAlt;
      }
      return true;
    });
  }, [selectedCircuit, selectedEpochId, filterByActiveEpoch, selectedRegionFilter, selectedCategoryFilter, placeSearchQuery]);

  const handlePlaceCardClick = (place: IndianHistoricalPlace) => {
    if (place.linkedSiteId) {
      const targetSite = allSites.find(s => s.id === place.linkedSiteId);
      if (targetSite) {
        onOpenSiteDetail(targetSite);
        return;
      }
    }
    // If not a linked 3D site, open the informative quick modal
    setSelectedPlaceForModal(place);
  };

  const categories = [
    'All Types',
    'Himalayan & Hill Station Temple',
    'Shakti Peeth',
    'Jyotirlinga & Mahatirth',
    'Rock-Cut Sanctuary',
    'Dravidian Temple',
    'Nagara Temple',
    'Hill Fortress',
    'Mughal & Indo-Islamic',
    'Stepwell & Water Engineering',
    'Buddhist Stupa & Monastic University',
    'Sacred Center'
  ];

  const regions = [
    'All Regions',
    'North India',
    'South India',
    'Western India',
    'Eastern & Central India'
  ];

  const circuitTabs: { id: CuratedCircuit; label: string; countLabel: string }[] = [
    { id: 'all', label: 'All Heritage Places', countLabel: `${ALL_INDIAN_HISTORICAL_PLACES.length}` },
    { id: 'hill-station', label: '🏔️ Hill Station & Himalayan Temples', countLabel: 'Kedarnath, Badrinath, Tungnath, Vaishno Devi' },
    { id: 'shakti-peeth', label: '🔱 51 Sacred Shakti Peethas', countLabel: 'Kamakhya, Jwala Ji, Ambaji, Kalighat' },
    { id: 'ujjain-kashi-jyotirlinga', label: '✨ Ujjain, Kashi & 12 Jyotirlingas', countLabel: 'Kashi Vishwanath, Mahakaleshwar, Somnath' },
    { id: 'forts', label: '🏰 Mountain Fortresses', countLabel: 'Kumbhalgarh, Chittorgarh, Amer, Raigad' },
    { id: 'stepwells', label: '🌊 Stepwells & Hydro-Engineering', countLabel: 'Rani ki Vav, Dholavira, Modhera' }
  ];

  return (
    <section id="indian-history" className="py-16 bg-[#F5F2EB] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-amber-800 mb-2">
              <Landmark className="w-3.5 h-3.5 text-amber-800" />
              <span>Chronicles of Bharat</span>
              <span aria-hidden="true">·</span>
              <span>5,000 Years of Living Civilization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-stone-900 tracking-tight">
              Indian History, Hill Station Temples, Shakti Peethas & Sacred Cities
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-3xl">
              Explore humanity's most extraordinary spiritual and architectural heritage: from Himalayan hill shrines like Kedarnath and Tungnath, to the 51 Shakti Peethas including Kamakhya and Jwala Ji, the holy capitals of Kashi and Ujjain Mahakal, and ancient rock-cut citadels.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono">
            {INDIAN_HISTORY_EPOCHS.length} Epochs · {ALL_INDIAN_HISTORICAL_PLACES.length} Historic Sanctuaries Catalogued
          </div>
        </div>

        {/* Epoch Selector Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8 overflow-x-auto pb-1">
          {INDIAN_HISTORY_EPOCHS.map((epoch, idx) => {
            const isSelected = epoch.id === selectedEpochId;

            return (
              <button
                key={epoch.id}
                onClick={() => setSelectedEpochId(epoch.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400 hover:bg-stone-50'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono block mb-1 ${isSelected ? 'text-amber-400' : 'text-amber-800 font-semibold'}`}>
                    0{idx + 1}
                  </span>
                  <p className="text-xs font-editorial font-medium leading-tight line-clamp-2">
                    {epoch.epochName.split('. ')[1] || epoch.epochName}
                  </p>
                </div>
                <span className={`text-[10px] block mt-2 ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                  {epoch.timeSpan.split('–')[0].replace('c.', '').trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Epoch Deep Dive Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden mb-14">
          
          {/* Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
              <div className="flex flex-wrap items-center gap-3 text-xs text-amber-300 font-mono">
                <span>{activeEpoch.timeSpan}</span>
                <span aria-hidden="true">·</span>
                <span>Dynasties: {activeEpoch.rulingDynasties.join(', ')}</span>
              </div>

              <a
                href={getEpochWikipediaUrl(activeEpoch)}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg transition-all cursor-pointer backdrop-blur-xs shadow-2xs hover:shadow-xs shrink-0"
                title={`Read more about ${activeEpoch.epochName} on Wikipedia`}
              >
                <span>Read More on Wikipedia</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial font-medium text-white mb-3">
              {activeEpoch.epochName}
            </h3>

            <p className="text-stone-200 text-sm sm:text-base max-w-3xl leading-relaxed">
              {activeEpoch.narrativeOverview}
            </p>
          </div>

          {/* Deep Content Grid */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* 3-Column Highlights: Leaders, Architecture, Scientific Breakthroughs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Key Rulers & Visionaries */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
                  <Crown className="w-4 h-4 text-amber-800" />
                  <span>Key Rulers & Luminaries</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  {activeEpoch.keyRulers.map((r, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-amber-800 font-bold">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Civilizational & Scientific Breakthroughs */}
              <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-800" />
                  <span>Civilizational Innovations</span>
                </div>
                <div className="space-y-1.5 text-xs text-stone-700">
                  {activeEpoch.civilizationalBreakthroughs.map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-amber-700 font-semibold text-xs mt-0.5">✦</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Style & Monuments */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wider">
                  <Landmark className="w-4 h-4 text-stone-700" />
                  <span>Architectural Legacy</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed mb-3">
                  {activeEpoch.architecturalStyle}
                </p>
                <div className="border-t border-stone-200 pt-2 text-xs text-stone-600 space-y-1">
                  <span className="font-semibold text-stone-800 block text-[11px] uppercase">Key Monuments:</span>
                  {activeEpoch.monumentHighlights.map((m, i) => (
                    <p key={i} className="line-clamp-1">• {m}</p>
                  ))}
                </div>
              </div>

            </div>

            {/* Philosophy & Global Trade */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-stone-100 text-xs text-stone-700">
              <div className="space-y-1">
                <span className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] block">
                  Philosophical & Spiritual Traditions:
                </span>
                <p className="leading-relaxed">
                  {activeEpoch.philosophicalTraditions.join(' · ')}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] block">
                  Global Trade Corridors:
                </span>
                <p className="leading-relaxed">
                  {activeEpoch.economicAndTradeRoutes}
                </p>
              </div>
            </div>

            {/* Archival Reference & Wikipedia Link Bar */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-stone-50/70 p-3.5 rounded-xl border border-stone-200/80">
              <div className="flex items-center gap-2 text-stone-600">
                <BookOpen className="w-4 h-4 text-amber-800 shrink-0" />
                <span className="text-xs">
                  Curated Archival Digest · Comprehensive historical chronology of <strong>{activeEpoch.epochName.split('. ')[1] || activeEpoch.epochName}</strong>
                </span>
              </div>
              <a
                href={getEpochWikipediaUrl(activeEpoch)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-amber-900 bg-white hover:bg-amber-50 border border-amber-300/80 rounded-lg transition-colors cursor-pointer shrink-0 shadow-2xs"
                title={`Read full Wikipedia encyclopedic article for ${activeEpoch.epochName}`}
              >
                <span>Read More on Wikipedia</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
              </a>
            </div>

          </div>

        </div>

        {/* SECTION 2: SACRED CIRCUITS, HILL TEMPLES, SHAKTI PEETHAS & JYOTIRLINGAS DIRECTORY */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
                <Mountain className="w-4 h-4 text-amber-800" />
                <span>Sacred Geography of Bharat</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 font-medium">
                Hill Station Temples, Shakti Peethas & Sacred Cities
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
                Select a sacred pilgrimage circuit below to explore high-altitude Himalayan shrines, holy Shakti Peethas, the eternal cities of Kashi and Ujjain, or filter by region and architectural typology.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-end">
              <button
                onClick={() => setFilterByActiveEpoch(!filterByActiveEpoch)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                  filterByActiveEpoch
                    ? 'bg-amber-900 text-white border-amber-900'
                    : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {filterByActiveEpoch ? `Filtered to Epoch 0${INDIAN_HISTORY_EPOCHS.findIndex(e => e.id === selectedEpochId) + 1}` : 'Filter by Epoch'}
              </button>
            </div>
          </div>

          {/* CURATED CIRCUITS TAB RAIL */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
            {circuitTabs.map(tab => {
              const isSelected = selectedCircuit === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCircuit(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-amber-900 text-white border-amber-900 shadow-sm'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:border-amber-400'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-2xs mb-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Search */}
              <div className="relative md:col-span-5">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search temple, hill station, deity, or state..."
                  value={placeSearchQuery}
                  onChange={(e) => setPlaceSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-amber-600 focus:bg-white transition-all"
                />
                {placeSearchQuery && (
                  <button
                    onClick={() => setPlaceSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Region Filter */}
              <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto">
                {regions.map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setSelectedRegionFilter(reg)}
                    className={`px-2.5 py-1.5 text-xs rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                      selectedRegionFilter === reg
                        ? 'bg-stone-900 text-white font-medium'
                        : 'text-stone-600 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {reg.replace(' India', '')}
                  </button>
                ))}
              </div>

              {/* Category Select */}
              <div className="md:col-span-3">
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="w-full py-2 px-3 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-hidden focus:border-amber-600 cursor-pointer"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-100">
              <span>Showing <strong>{filteredPlaces.length}</strong> historical sanctuaries</span>
              {(placeSearchQuery || selectedRegionFilter !== 'All Regions' || selectedCategoryFilter !== 'All Types' || selectedCircuit !== 'all' || filterByActiveEpoch) && (
                <button
                  onClick={() => {
                    setPlaceSearchQuery('');
                    setSelectedRegionFilter('All Regions');
                    setSelectedCategoryFilter('All Types');
                    setSelectedCircuit('all');
                    setFilterByActiveEpoch(false);
                  }}
                  className="text-amber-800 hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Grid of Indian Places */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPlaces.map(place => {
              const hasFullDossier = Boolean(place.linkedSiteId);

              return (
                <div
                  key={place.id}
                  onClick={() => handlePlaceCardClick(place)}
                  className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200/80">
                        {place.thumbnailBadge}
                      </span>
                      {place.sacredTradition && (
                        <span className="text-[10px] font-medium text-amber-950 bg-amber-100/70 border border-amber-200 px-2 py-0.5 rounded flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-amber-700" />
                          {place.sacredTradition}
                        </span>
                      )}
                    </div>

                    {/* Place Name */}
                    <h4 className="font-editorial text-lg text-stone-900 group-hover:text-amber-900 transition-colors leading-snug mb-0.5">
                      {place.name}
                    </h4>

                    {place.indigenousName && (
                      <p className="text-[11px] font-serif italic text-stone-400 mb-2">
                        {place.indigenousName}
                      </p>
                    )}

                    {/* Altitude or River indicator */}
                    {place.altitudeOrRiver && (
                      <div className="flex items-center gap-1.5 text-[11px] text-amber-900 bg-amber-50/80 px-2 py-1 rounded mb-2.5 border border-amber-200/50">
                        {place.altitudeOrRiver.toLowerCase().includes('altitude') ? (
                          <Mountain className="w-3 h-3 text-amber-700 shrink-0" />
                        ) : (
                          <Waves className="w-3 h-3 text-amber-700 shrink-0" />
                        )}
                        <span className="line-clamp-1">{place.altitudeOrRiver}</span>
                      </div>
                    )}

                    {/* Metadata line */}
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-3 flex-wrap">
                      <span className="text-amber-800 font-medium">{place.state}</span>
                      <span aria-hidden="true">·</span>
                      <span>{place.timePeriod}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-stone-600">{place.dynastyOrPatron}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                      {place.summary}
                    </p>

                    {/* Engineering & Marvel Highlight Box */}
                    <div className="p-2.5 bg-stone-50 rounded-lg text-[11px] text-stone-700 border border-stone-200/70 space-y-1 mb-2">
                      <strong className="text-stone-900 block font-semibold">Architectural & Sacred Marvel:</strong>
                      <p className="line-clamp-2">{place.engineeringMarvel}</p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs gap-2">
                    <a
                      href={getSacredPlaceWikipediaUrl(place)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-600 hover:text-amber-900 bg-stone-100 hover:bg-amber-100/80 px-2 py-1 rounded transition-colors cursor-pointer shrink-0"
                      title={`Read more about ${place.name} on Wikipedia`}
                    >
                      <span>Wikipedia</span>
                      <ExternalLink className="w-3 h-3 text-stone-500 hover:text-amber-800" />
                    </a>

                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="text-[11px] text-stone-500 hidden sm:inline truncate">
                        Best: {place.touristGuide.bestSeason.split(';')[0]}
                      </span>
                      <span className="font-semibold text-amber-800 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 shrink-0">
                        {hasFullDossier ? '3D Dossier' : 'Field Guide'}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION 3: FEATURED INDIAN CATALOGUED WONDERS WITH FULL 3D/AUDIO DOSSIERS */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 block">
                Primary Field Guides & 3D Architectural Dossiers
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 font-medium">
                Catalogued Wonders of India ({indianSitesWithDossiers.length})
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                Each monument features procedural ambient soundscapes, Web Speech narration, artifact archives, and visitor advice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indianSitesWithDossiers.map(site => (
              <div
                key={site.id}
                onClick={() => onOpenSiteDetail(site)}
                className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={site.heroImage}
                      alt={site.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/75 backdrop-blur-xs text-[10px] text-amber-300 rounded font-medium">
                      {site.civilization}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-1">
                      <span>{site.timePeriod}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-800">{site.location.city.split(',')[0]}</span>
                    </div>

                    <h4 className="font-editorial text-base text-stone-900 group-hover:text-amber-900 transition-colors mb-1 leading-snug line-clamp-1">
                      {site.name}
                    </h4>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-2">
                      {site.summary}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-stone-100 mt-1 flex items-center justify-between text-xs gap-2">
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
                  <span className="font-semibold text-amber-800 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Dossier & Audio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* QUICK INFORMATIONAL MODAL FOR SITES WITHOUT FULL 3D DOSSIER */}
      {selectedPlaceForModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPlaceForModal(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-300 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPlaceForModal(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
              <span>{selectedPlaceForModal.epochLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPlaceForModal.state}</span>
              {selectedPlaceForModal.sacredTradition && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-900 font-bold">{selectedPlaceForModal.sacredTradition}</span>
                </>
              )}
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-stone-900 mb-1">
              {selectedPlaceForModal.name}
            </h3>

            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              {selectedPlaceForModal.indigenousName ? (
                <p className="text-sm font-serif italic text-stone-500">
                  Indigenous Name: <strong className="text-stone-700 font-medium not-italic">{selectedPlaceForModal.indigenousName}</strong>
                </p>
              ) : <div />}

              <a
                href={getSacredPlaceWikipediaUrl(selectedPlaceForModal)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-amber-950 bg-amber-100/80 hover:bg-amber-100 border border-amber-300 rounded-lg transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                title={`Read more about ${selectedPlaceForModal.name} on Wikipedia`}
              >
                <span>Read More on Wikipedia</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
              </a>
            </div>

            {selectedPlaceForModal.altitudeOrRiver && (
              <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950 font-medium mb-4 flex items-center gap-2">
                <Mountain className="w-4 h-4 text-amber-800 shrink-0" />
                <span>{selectedPlaceForModal.altitudeOrRiver}</span>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs mb-5">
              <div>
                <span className="text-stone-400 block text-[10px] uppercase font-semibold">Dynasty / Patron</span>
                <strong className="text-stone-800">{selectedPlaceForModal.dynastyOrPatron}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] uppercase font-semibold">Time Period</span>
                <strong className="text-stone-800">{selectedPlaceForModal.timePeriod}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[10px] uppercase font-semibold">Category</span>
                <strong className="text-stone-800">{selectedPlaceForModal.architecturalCategory}</strong>
              </div>
            </div>

            <div className="space-y-4 text-sm text-stone-700 leading-relaxed mb-6">
              <div>
                <h4 className="font-semibold text-stone-900 mb-1">Historical Context:</h4>
                <p>{selectedPlaceForModal.summary}</p>
              </div>

              <div>
                <h4 className="font-semibold text-stone-900 mb-1">Engineering & Architectural Marvel:</h4>
                <p className="bg-amber-50/80 p-3 rounded-lg border border-amber-200/70 text-xs sm:text-sm text-amber-950">
                  {selectedPlaceForModal.engineeringMarvel}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs">
                <h4 className="font-semibold text-stone-900 text-sm">Visitor & Tourist Field Guide:</h4>
                <p><strong>✦ Best Season:</strong> {selectedPlaceForModal.touristGuide.bestSeason}</p>
                <p><strong>✦ Visiting Hours:</strong> {selectedPlaceForModal.touristGuide.timings}</p>
                <p><strong>✦ Must-See Highlight:</strong> {selectedPlaceForModal.touristGuide.mustSeeHighlight}</p>
                <p><strong>✦ Practical Travel Advice:</strong> {selectedPlaceForModal.touristGuide.travelTip}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 border-t border-stone-200">
              <a
                href={getSacredPlaceWikipediaUrl(selectedPlaceForModal)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-amber-950 bg-amber-100/80 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors cursor-pointer shadow-2xs"
                title={`Read more about ${selectedPlaceForModal.name} on Wikipedia`}
              >
                <span>Read More on Wikipedia</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
              </a>

              <button
                onClick={() => setSelectedPlaceForModal(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg cursor-pointer text-center"
              >
                Close Field Guide
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
