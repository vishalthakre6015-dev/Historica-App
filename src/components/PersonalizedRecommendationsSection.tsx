import React, { useMemo } from 'react';
import { HistoricalSite, RecommendedSite } from '../types/history';
import { getPersonalizedRecommendations } from '../utils/recommendationEngine';
import { Sparkles, Compass, MapPin, ArrowRight, Bookmark, BookmarkCheck, Headphones, Heart, ExternalLink } from 'lucide-react';
import { getMonumentWikipediaUrl } from '../utils/wikipedia';

interface PersonalizedRecommendationsSectionProps {
  allSites: HistoricalSite[];
  bookmarkedSiteIds: string[];
  recentlyViewedSiteIds: string[];
  onOpenSiteDetail: (site: HistoricalSite) => void;
  onToggleBookmark: (siteId: string) => void;
  onPlayAudio: (site: HistoricalSite) => void;
  onOpenExpedition: () => void;
}

export const PersonalizedRecommendationsSection: React.FC<PersonalizedRecommendationsSectionProps> = ({
  allSites,
  bookmarkedSiteIds,
  recentlyViewedSiteIds,
  onOpenSiteDetail,
  onToggleBookmark,
  onPlayAudio,
  onOpenExpedition,
}) => {
  const { recommendations, basisDescription } = useMemo(() => {
    return getPersonalizedRecommendations(bookmarkedSiteIds, recentlyViewedSiteIds, allSites, 3);
  }, [bookmarkedSiteIds, recentlyViewedSiteIds, allSites]);

  if (recommendations.length === 0) return null;

  return (
    <section className="py-14 bg-[#F2EFE8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-amber-800 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Intelligent Architectural Affinity</span>
              <span aria-hidden="true">·</span>
              <span>Recommendation Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-stone-900 tracking-tight">
              Recommended Next Expeditions For You
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
              {basisDescription}. Our recommendation engine correlates civilizational epochs, masonry traditions, and geographic trading corridors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500 hidden sm:inline">
              Saved sites: <strong className="text-stone-800">{bookmarkedSiteIds.length}</strong>
            </span>
            <button
              onClick={onOpenExpedition}
              className="px-3.5 py-1.5 text-xs font-semibold text-amber-950 bg-amber-200 hover:bg-amber-300 border border-amber-300/80 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-amber-800" />
              <span>Review Planned Route</span>
            </button>
          </div>
        </div>

        {/* Recommendations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map(({ site, similarityScore, primaryMatchReason, matchedAttributes }) => {
            const isBookmarked = bookmarkedSiteIds.includes(site.id);

            return (
              <div
                key={site.id}
                className="group bg-white rounded-xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Frame with Affinity Badge */}
                  <div 
                    className="relative aspect-[16/10] bg-stone-100 overflow-hidden cursor-pointer"
                    onClick={() => onOpenSiteDetail(site)}
                  >
                    <img
                      src={site.heroImage}
                      alt={site.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Clean Affinity Score Floating Label */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-stone-900/85 backdrop-blur-xs text-white rounded text-[11px] font-mono flex items-center gap-1.5 border border-stone-700/80">
                      <span className="text-amber-400 font-bold tabular-nums">{similarityScore}%</span>
                      <span className="text-stone-300 text-[10px]">Affinity</span>
                    </div>

                    {/* Bookmark Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(site.id);
                      }}
                      title={isBookmarked ? 'Remove from expedition plan' : 'Save to expedition plan'}
                      className="absolute top-2.5 right-2.5 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white backdrop-blur-xs transition-colors cursor-pointer"
                      aria-label="Bookmark site"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <Bookmark className="w-3.5 h-3.5 text-stone-200" />
                      )}
                    </button>

                    <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-[11px] flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-300" />
                        {site.location.city}, {site.location.country}
                      </span>
                      <span className="text-amber-200 font-medium">{site.timePeriod}</span>
                    </div>
                  </div>

                  {/* Body with Recommendation Rationale */}
                  <div className="p-4 sm:p-5">
                    
                    {/* Recommendation reason banner */}
                    <div className="mb-2.5 text-[11px] text-amber-900 bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 rounded-md leading-snug">
                      <strong className="font-semibold block text-amber-950">Why suggested:</strong>
                      <span className="line-clamp-2">{primaryMatchReason}</span>
                    </div>

                    <h3 
                      onClick={() => onOpenSiteDetail(site)}
                      className="text-lg font-editorial font-medium text-stone-900 hover:text-amber-900 transition-colors cursor-pointer mb-1 leading-snug"
                    >
                      {site.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                      {site.summary}
                    </p>

                    {/* Matched Attributes Tags */}
                    {matchedAttributes.length > 0 && (
                      <div className="flex flex-wrap gap-1 text-[10px] text-stone-500 pt-1">
                        {matchedAttributes.slice(0, 2).map((attr, i) => (
                          <span key={i} className="bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded">
                            {attr}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenSiteDetail(site)}
                    className="flex-1 py-1.5 px-3 text-xs font-semibold text-stone-900 hover:text-amber-900 hover:bg-stone-50 rounded-md border border-stone-200 transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Examine</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <a
                    href={getMonumentWikipediaUrl(site)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 text-stone-700 hover:text-amber-900 hover:bg-amber-50 rounded-md border border-stone-200 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                    title={`Read more about ${site.name} on Wikipedia`}
                  >
                    <span className="hidden sm:inline">Wikipedia</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-500 hover:text-amber-800" />
                  </a>

                  <button
                    onClick={() => onPlayAudio(site)}
                    className="p-1.5 text-stone-700 hover:text-amber-900 hover:bg-amber-50 rounded-md border border-stone-200 transition-colors cursor-pointer"
                    title="Play Audio Guide"
                    aria-label="Play audio guide"
                  >
                    <Headphones className="w-3.5 h-3.5 text-amber-800" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
