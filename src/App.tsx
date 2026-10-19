import React, { useState, useEffect } from 'react';
import { HISTORICAL_SITES } from './data/historicalSites';
import { HistoricalSite } from './types/history';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChronosLensSection } from './components/ChronosLensSection';
import { WondersCatalog } from './components/WondersCatalog';
import { IndianHistorySection } from './components/IndianHistorySection';
import { PersonalizedRecommendationsSection } from './components/PersonalizedRecommendationsSection';
import { InteractiveTimelineSection } from './components/InteractiveTimelineSection';
import { GlobalHeritageMap } from './components/GlobalHeritageMap';
import { SiteDetailModal } from './components/SiteDetailModal';
import { ExpeditionPlannerModal } from './components/ExpeditionPlannerModal';
import { HistoryTriviaModal } from './components/HistoryTriviaModal';
import { AudioPlayerFloatingBar } from './components/AudioPlayerFloatingBar';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedSiteForDetail, setSelectedSiteForDetail] = useState<HistoricalSite | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isExpeditionModalOpen, setIsExpeditionModalOpen] = useState(false);
  const [isTriviaModalOpen, setIsTriviaModalOpen] = useState(false);
  const [activeAudioSite, setActiveAudioSite] = useState<HistoricalSite | null>(null);
  const [recentlyViewedSiteIds, setRecentlyViewedSiteIds] = useState<string[]>(['colosseum-rome']);
  
  // Persisted bookmarks for expedition planning
  const [bookmarkedSiteIds, setBookmarkedSiteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('historica_bookmarked_sites');
      return saved ? JSON.parse(saved) : ['colosseum-rome', 'petra-jordan', 'machu-picchu-peru'];
    } catch {
      return ['colosseum-rome', 'petra-jordan', 'machu-picchu-peru'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('historica_bookmarked_sites', JSON.stringify(bookmarkedSiteIds));
    } catch {
      // ignore
    }
  }, [bookmarkedSiteIds]);

  const handleToggleBookmark = (siteId: string) => {
    setBookmarkedSiteIds(prev => 
      prev.includes(siteId) ? prev.filter(id => id !== siteId) : [...prev, siteId]
    );
  };

  const handleOpenSiteDetail = (site: HistoricalSite) => {
    setSelectedSiteForDetail(site);
    setIsDetailModalOpen(true);
    setRecentlyViewedSiteIds(prev => [site.id, ...prev.filter(id => id !== site.id)].slice(0, 8));
  };

  const handleCloseSiteDetail = () => {
    setIsDetailModalOpen(false);
  };

  const handlePlayAudio = (site: HistoricalSite) => {
    setActiveAudioSite(site);
    setRecentlyViewedSiteIds(prev => [site.id, ...prev.filter(id => id !== site.id)].slice(0, 8));
  };

  const handleSelectSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-stone-900 selection:bg-amber-200 selection:text-amber-950">
      
      {/* 3-Zone Navigation */}
      <Navbar
        onOpenExpedition={() => setIsExpeditionModalOpen(true)}
        onOpenTrivia={() => setIsTriviaModalOpen(true)}
        onSelectSection={handleSelectSection}
      />

      <main className="flex-1">
        {/* Curatorial Hero Section */}
        <HeroSection
          featuredSite={HISTORICAL_SITES[0]}
          onExploreWonders={() => handleSelectSection('wonders')}
          onOpenSiteDetail={handleOpenSiteDetail}
          onOpenThenNow={() => handleSelectSection('chronos-lens')}
          onExploreIndianHistory={() => handleSelectSection('indian-history')}
        />

        {/* Chronos Lens: Interactive Then vs Now Architectural Reconstruction */}
        <ChronosLensSection
          sites={HISTORICAL_SITES}
          onOpenSiteDetail={handleOpenSiteDetail}
        />

        {/* Personalized Recommendation Engine Section */}
        <PersonalizedRecommendationsSection
          allSites={HISTORICAL_SITES}
          bookmarkedSiteIds={bookmarkedSiteIds}
          recentlyViewedSiteIds={recentlyViewedSiteIds}
          onOpenSiteDetail={handleOpenSiteDetail}
          onToggleBookmark={handleToggleBookmark}
          onPlayAudio={handlePlayAudio}
          onOpenExpedition={() => setIsExpeditionModalOpen(true)}
        />

        {/* Wonders Catalog: Filterable Historical Sites Archive */}
        <WondersCatalog
          sites={HISTORICAL_SITES}
          bookmarkedSiteIds={bookmarkedSiteIds}
          onToggleBookmark={handleToggleBookmark}
          onOpenSiteDetail={handleOpenSiteDetail}
          onPlayAudio={handlePlayAudio}
        />

        {/* Chronicles of Bharat: 5,000 Years of Indian History & Heritage */}
        <IndianHistorySection
          allSites={HISTORICAL_SITES}
          onOpenSiteDetail={handleOpenSiteDetail}
        />

        {/* World Chronology & Parallel Historical Epochs */}
        <InteractiveTimelineSection
          sites={HISTORICAL_SITES}
          onOpenSiteDetail={handleOpenSiteDetail}
        />

        {/* Interactive Cartography World Map */}
        <GlobalHeritageMap
          sites={HISTORICAL_SITES}
          onOpenSiteDetail={handleOpenSiteDetail}
          onPlayAudio={handlePlayAudio}
        />
      </main>

      {/* Institutional Curatorial Footer */}
      <Footer
        onOpenExpedition={() => setIsExpeditionModalOpen(true)}
        onOpenTrivia={() => setIsTriviaModalOpen(true)}
        onSelectSection={handleSelectSection}
      />

      {/* Persistent Audio Guide Floating Bar */}
      <AudioPlayerFloatingBar
        currentSite={activeAudioSite}
        onOpenSiteDetail={handleOpenSiteDetail}
        onCloseBar={() => setActiveAudioSite(null)}
      />

      {/* Modal: Deep Accession Dossier & Visitor Guide with Similar Sites Recommendations */}
      <SiteDetailModal
        site={selectedSiteForDetail}
        allSites={HISTORICAL_SITES}
        isOpen={isDetailModalOpen}
        onClose={handleCloseSiteDetail}
        isBookmarked={selectedSiteForDetail ? bookmarkedSiteIds.includes(selectedSiteForDetail.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onOpenExpedition={() => setIsExpeditionModalOpen(true)}
        onSelectSite={handleOpenSiteDetail}
      />

      {/* Modal: Heritage Expedition Planner */}
      <ExpeditionPlannerModal
        isOpen={isExpeditionModalOpen}
        onClose={() => setIsExpeditionModalOpen(false)}
        allSites={HISTORICAL_SITES}
        bookmarkedSiteIds={bookmarkedSiteIds}
        onToggleBookmark={handleToggleBookmark}
      />

      {/* Modal: Curator's Historical Secrets & Trivia */}
      <HistoryTriviaModal
        isOpen={isTriviaModalOpen}
        onClose={() => setIsTriviaModalOpen(false)}
      />

    </div>
  );
}
