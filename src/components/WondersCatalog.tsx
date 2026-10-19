import React, { useState, useMemo } from 'react';
import { HistoricalSite, Era, Region } from '../types/history';
import { HISTORICAL_ERAS, REGIONS } from '../data/historicalSites';
import { Search, MapPin, Clock, Headphones, Eye, Bookmark, BookmarkCheck, ArrowRight, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { getMonumentWikipediaUrl } from '../utils/wikipedia';

interface WondersCatalogProps {
  sites: HistoricalSite[];
  bookmarkedSiteIds: string[];
  onToggleBookmark: (siteId: string) => void;
  onOpenSiteDetail: (site: HistoricalSite) => void;
  onPlayAudio: (site: HistoricalSite) => void;
}

export const WondersCatalog: React.FC<WondersCatalogProps> = ({
  sites,
  bookmarkedSiteIds,
  onToggleBookmark,
  onOpenSiteDetail,
  onPlayAudio,
}) => {
  const [selectedEra, setSelectedEra] = useState<Era>('All Eras');
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSites = useMemo(() => {
    return sites.filter(site => {
      // Era filter
      if (selectedEra !== 'All Eras' && site.eraCategory !== selectedEra) {
        return false;
      }
      // Region filter
      if (selectedRegion !== 'All Regions') {
        if (selectedRegion === 'India') {
          if (site.location.country !== 'India') return false;
        } else if (selectedRegion === 'Asia') {
          if (site.location.region !== 'Asia' || site.location.country === 'India') return false;
        } else if (site.location.region !== selectedRegion) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = site.name.toLowerCase().includes(query);
        const matchesAncient = site.ancientName?.toLowerCase().includes(query);
        const matchesCiv = site.civilization.toLowerCase().includes(query);
        const matchesCountry = site.location.country.toLowerCase().includes(query);
        const matchesCity = site.location.city.toLowerCase().includes(query);
        const matchesSummary = site.summary.toLowerCase().includes(query);
        return matchesName || matchesAncient || matchesCiv || matchesCountry || matchesCity || matchesSummary;
      }
      return true;
    });
  }, [sites, selectedEra, selectedRegion, searchQuery]);

  return (
    <section id="wonders" className="py-16 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-stone-500 mb-2">
              <span>Catalog & Archive</span>
              <span aria-hidden="true">·</span>
              <span>Monuments of Antiquity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-stone-900 tracking-tight">
              Curated World Heritage Monuments
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Immerse yourself in humanity's most breathtaking architectural and archaeological masterpieces, complete with tourist guidelines, excavated relics, and deep historical chronologies.
            </p>
          </div>

          <div className="text-xs text-stone-500 tabular-nums self-start md:self-end">
            Showing <strong className="text-stone-900 font-semibold">{filteredSites.length}</strong> of {sites.length} Catalogued Wonders
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-xs mb-10 space-y-4">
          
          {/* Top row: Search and Region */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by monument, civilization, country, or ancient name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-amber-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {REGIONS.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                    selectedRegion === region.id
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom row: Historical Eras */}
          <div className="flex items-center gap-2 pt-2 border-t border-stone-100 overflow-x-auto">
            <span className="text-xs font-medium text-stone-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Era:
            </span>
            <div className="flex items-center gap-1.5">
              {HISTORICAL_ERAS.map((era) => (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedEra === era
                      ? 'bg-amber-100 text-amber-950 font-semibold border border-amber-300/80'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-transparent'
                  }`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Empty State */}
        {filteredSites.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-xl border border-stone-200">
            <p className="font-editorial text-xl text-stone-800 mb-2">No monuments match your inquiry</p>
            <p className="text-stone-500 text-sm mb-4">Try clearing the search query or selecting "All Eras" and "All Continents".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedEra('All Eras'); setSelectedRegion('All Regions'); }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Monument Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSites.map((site) => {
            const isBookmarked = bookmarkedSiteIds.includes(site.id);

            return (
              <article
                key={site.id}
                className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Visual Frame */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onOpenSiteDetail(site)}>
                    <img
                      src={site.heroImage}
                      alt={site.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Bookmark Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(site.id);
                      }}
                      title={isBookmarked ? 'Remove from expedition plan' : 'Save to expedition plan'}
                      className="absolute top-3 right-3 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white backdrop-blur-xs transition-colors cursor-pointer"
                      aria-label="Bookmark site"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Bookmark className="w-4 h-4 text-stone-200" />
                      )}
                    </button>

                    {/* Bottom Gradient Scrim with Location */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-stone-200">
                        <MapPin className="w-3.5 h-3.5 text-amber-300" />
                        {site.location.city}, {site.location.country}
                      </span>
                      <span className="text-amber-200 font-medium">
                        {site.timePeriod}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Body */}
                  <div className="p-5">
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="font-medium text-stone-700">{site.civilization}</span>
                      <span aria-hidden="true">·</span>
                      <span>{site.location.region}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-800">{site.heritageStatus.split('·')[0].trim()}</span>
                    </div>

                    {/* Monument Title */}
                    <h3 
                      onClick={() => onOpenSiteDetail(site)}
                      className="text-xl font-editorial font-medium text-stone-900 hover:text-amber-900 transition-colors cursor-pointer mb-1 leading-snug"
                    >
                      {site.name}
                    </h3>

                    {site.ancientName && (
                      <p className="text-xs font-serif italic text-stone-400 mb-3">
                        Anciently known as {site.ancientName}
                      </p>
                    )}

                    {/* Tagline / Summary */}
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3 mb-4">
                      {site.summary}
                    </p>

                    {/* Quick Tourist Highlights */}
                    <div className="border-t border-stone-100 pt-3 text-xs text-stone-600 space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                        Visitor Highlights:
                      </p>
                      <p className="line-clamp-1 text-stone-700">
                        ✦ {site.visitorGuide.mustSeeSightsOnSite[0]}
                      </p>
                      <p className="line-clamp-1 text-stone-700">
                        ✦ Best Time: {site.visitorGuide.bestTimeToVisit.split(';')[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenSiteDetail(site)}
                    className="flex-1 py-2 text-xs font-semibold text-stone-900 hover:text-amber-900 hover:bg-stone-50 rounded-md border border-stone-200 transition-colors cursor-pointer text-center"
                  >
                    Examine Dossier
                  </button>

                  <a
                    href={getMonumentWikipediaUrl(site)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-2.5 py-2 text-stone-700 hover:text-amber-900 hover:bg-amber-50 rounded-md border border-stone-200 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                    title={`Read more about ${site.name} on Wikipedia`}
                  >
                    <span className="hidden sm:inline">Wikipedia</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-500 hover:text-amber-800" />
                  </a>

                  <button
                    onClick={() => onPlayAudio(site)}
                    className="p-2 text-stone-700 hover:text-amber-900 hover:bg-amber-50 rounded-md border border-stone-200 transition-colors cursor-pointer"
                    title="Play Audio Guide"
                    aria-label="Play audio guide"
                  >
                    <Headphones className="w-4 h-4 text-amber-800" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
