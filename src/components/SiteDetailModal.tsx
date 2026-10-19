import React, { useState, useEffect, useMemo } from 'react';
import { HistoricalSite } from '../types/history';
import { soundscape, narrator } from '../utils/audioSynthesizer';
import { getSimilarSites } from '../utils/recommendationEngine';
import { 
  X, MapPin, Clock, Landmark, ShieldCheck, Volume2, VolumeX, 
  Play, Pause, Compass, BookOpen, Sparkles, AlertCircle, CheckCircle2,
  Calendar, Layers, Gem, Heart, Share2, Printer, ExternalLink
} from 'lucide-react';
import { getMonumentWikipediaUrl } from '../utils/wikipedia';

interface SiteDetailModalProps {
  site: HistoricalSite | null;
  allSites: HistoricalSite[];
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (siteId: string) => void;
  onOpenExpedition: () => void;
  onSelectSite: (site: HistoricalSite) => void;
}

type TabType = 'history' | 'architecture' | 'timeline' | 'visitor' | 'artifacts' | 'audio';

export const SiteDetailModal: React.FC<SiteDetailModalProps> = ({
  site,
  allSites,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onOpenExpedition,
  onSelectSite,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('history');
  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);
  const [isSpeechPaused, setIsSpeechPaused] = useState(false);
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.95);

  const similarSites = useMemo(() => {
    if (!site) return [];
    return getSimilarSites(site, allSites, 3);
  }, [site, allSites]);

  useEffect(() => {
    if (!isOpen) {
      narrator.stop();
      soundscape.stopSoundscape();
      setIsPlayingSpeech(false);
      setIsSpeechPaused(false);
      setIsPlayingAmbient(false);
    } else {
      setActiveTab('history');
    }
  }, [isOpen]);

  useEffect(() => {
    narrator.setListener((state) => {
      setIsPlayingSpeech(state.isSpeaking);
      setIsSpeechPaused(state.isPaused);
    });
  }, []);

  if (!isOpen || !site) return null;

  const handleToggleSpeech = () => {
    if (isPlayingSpeech && !isSpeechPaused) {
      narrator.pause();
    } else if (isSpeechPaused) {
      narrator.resume();
    } else {
      narrator.speak(site.audioTour.transcript, speechRate);
    }
  };

  const handleStopSpeech = () => {
    narrator.stop();
  };

  const handleToggleAmbient = () => {
    if (isPlayingAmbient) {
      soundscape.stopSoundscape();
      setIsPlayingAmbient(false);
    } else {
      soundscape.playSoundscape(site.audioTour.soundscapeType);
      setIsPlayingAmbient(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-5xl bg-[#F8F6F0] rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Operational Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#F2EFE8] border-b border-stone-200">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
            <span>ACCESSION DOSSIER</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-700 font-semibold">{site.id.toUpperCase()}</span>
            <span aria-hidden="true">·</span>
            <span>{site.heritageStatus.split('·')[0].trim()}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={getMonumentWikipediaUrl(site)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-stone-300 bg-white text-stone-700 hover:text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer shadow-2xs"
              title={`Read more about ${site.name} on Wikipedia`}
            >
              <span>Read More on Wikipedia</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>

            <button
              onClick={() => onToggleBookmark(site.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-100 border-amber-300 text-amber-900' 
                  : 'bg-white border-stone-300 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-700 text-amber-700' : ''}`} />
              <span>{isBookmarked ? 'Saved to Expedition' : 'Save Site'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6">
          
          {/* Header Visual Hero & Core Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pb-6 border-b border-stone-200">
            
            {/* Visual Frame (5 cols) */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-300 shadow-xs bg-stone-900">
              <img
                src={site.heroImage}
                alt={site.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-xs">
                <p className="font-serif italic text-stone-200">
                  {site.name} — Photographed at {site.location.city}, {site.location.country}
                </p>
              </div>
            </div>

            {/* Core Titles & Civilizational Context (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-amber-800 font-medium mb-1">
                  <span>{site.civilization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{site.timePeriod}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {site.location.city}, {site.location.country}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-stone-900 mb-1 leading-tight">
                  {site.name}
                </h2>

                {site.ancientName && (
                  <p className="text-xs font-serif italic text-stone-500 mb-2">
                    Ancient name: <strong className="text-stone-700 font-medium">{site.ancientName}</strong>
                  </p>
                )}

                <p className="text-stone-700 text-sm leading-relaxed mb-3">
                  {site.tagline}
                </p>

                <div className="mb-4">
                  <a
                    href={getMonumentWikipediaUrl(site)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-950 bg-amber-100/70 hover:bg-amber-100 border border-amber-300/80 rounded-lg transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                    title={`Read encyclopedic article about ${site.name} on Wikipedia`}
                  >
                    <span>Read More on Wikipedia</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
                  </a>
                </div>
              </div>

              {/* Quick Audio Guide Launchpad inside header */}
              <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200/90 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-amber-900">
                  <Volume2 className="w-4 h-4 text-amber-800 shrink-0" />
                  <div>
                    <span className="font-semibold block">{site.audioTour.title}</span>
                    <span className="text-amber-700/80 text-[11px]">Duration: {site.audioTour.duration} · Ambient Soundscape</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleSpeech}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-md transition-colors cursor-pointer"
                  >
                    {isPlayingSpeech && !isSpeechPaused ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlayingSpeech && !isSpeechPaused ? 'Pause Narration' : isSpeechPaused ? 'Resume' : 'Play Narration'}</span>
                  </button>

                  <button
                    onClick={handleToggleAmbient}
                    className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                      isPlayingAmbient
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-semibold'
                        : 'bg-white border-amber-200 text-amber-900 hover:bg-amber-100'
                    }`}
                    title="Toggle continuous procedural ambient sound"
                  >
                    {isPlayingAmbient ? <Volume2 className="w-3.5 h-3.5 text-emerald-700" /> : <VolumeX className="w-3.5 h-3.5 text-stone-500" />}
                    <span>{isPlayingAmbient ? 'Atmosphere On' : 'Atmosphere Off'}</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Tab Navigation Controls */}
          <div className="flex items-center gap-1 border-b border-stone-200 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'history'
                  ? 'border-amber-800 text-stone-900 font-semibold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              History & Origins
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'architecture'
                  ? 'border-amber-800 text-stone-900 font-semibold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Architectural Marvels
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'timeline'
                  ? 'border-amber-800 text-stone-900 font-semibold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Chronological Timeline
            </button>
            <button
              onClick={() => setActiveTab('visitor')}
              className={`px-4 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'visitor'
                  ? 'border-amber-800 text-stone-900 font-semibold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Visitor Guide & Tourist Tips
            </button>
            <button
              onClick={() => setActiveTab('artifacts')}
              className={`px-4 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'artifacts'
                  ? 'border-amber-800 text-stone-900 font-semibold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Excavated Artifacts ({site.excavatedArtifacts.length})
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`px-4 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'audio'
                  ? 'border-amber-800 text-stone-900 font-semibold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Audio Transcript
            </button>
          </div>

          {/* TAB 1: HISTORY & ORIGINS */}
          {activeTab === 'history' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3">
                  <h4 className="text-base font-editorial font-medium text-stone-900 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-800" />
                    Imperial Origins & Founding
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {site.deepHistory.originNarrative}
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3">
                  <h4 className="text-base font-editorial font-medium text-stone-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-800" />
                    Decline, Survival & Conservation
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {site.deepHistory.declineOrPreservation}
                  </p>
                </div>

              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2">
                <h4 className="text-base font-editorial font-medium text-stone-900">
                  Global Cultural Significance
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {site.deepHistory.culturalSignificance}
                </p>
              </div>

              {/* Wikipedia External Archival Research Card */}
              <div className="p-4 sm:p-5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-stone-900 block text-sm">
                    Archival Citation & External Literature
                  </span>
                  <p className="text-stone-600 mt-0.5 text-xs">
                    Explore comprehensive historiography, peer-reviewed citations, and archaeological consensus for {site.name}.
                  </p>
                </div>
                <a
                  href={getMonumentWikipediaUrl(site)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg transition-colors cursor-pointer shrink-0 shadow-2xs"
                >
                  <span>Read More on Wikipedia</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURAL MARVELS */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-white p-6 rounded-xl border border-stone-200 space-y-4">
                <h4 className="text-lg font-editorial font-medium text-stone-900">
                  Mastery of Stone & Engineering
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {site.deepHistory.architecturalMarvel}
                </p>
              </div>

              {/* Architectural Then vs Now Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-900">
                    Ancient Configuration:
                  </span>
                  <h5 className="font-editorial text-base text-amber-950 font-medium">
                    {site.reconstruction.ancientTitle}
                  </h5>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {site.reconstruction.ancientDescription}
                  </p>
                </div>

                <div className="p-5 bg-stone-100 rounded-xl border border-stone-200 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-600">
                    Modern Preservation Reality:
                  </span>
                  <h5 className="font-editorial text-base text-stone-900 font-medium">
                    {site.reconstruction.modernTitle}
                  </h5>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {site.reconstruction.modernDescription}
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Documented Architectural Alterations Over Time
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {site.reconstruction.keyChanges.map((change, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-800 font-bold">•</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: CHRONOLOGICAL TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-300">
                {site.keyEventsTimeline.map((event, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-amber-700 border-2 border-[#F8F6F0]" />
                    
                    <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs hover:border-amber-400 transition-colors">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono font-semibold text-amber-900 text-sm">
                          {event.year}
                        </span>
                        {event.eraTag && (
                          <span className="text-stone-500 text-[11px] uppercase tracking-wider">
                            {event.eraTag}
                          </span>
                        )}
                      </div>
                      <h5 className="text-sm font-semibold text-stone-900 mb-1">
                        {event.title}
                      </h5>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: VISITOR GUIDE & TOURIST TIPS */}
          {activeTab === 'visitor' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Top Operational Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs space-y-1">
                  <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px] block">
                    Best Season & Time
                  </span>
                  <p className="text-stone-800 font-medium text-sm">
                    {site.visitorGuide.bestTimeToVisit}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs space-y-1">
                  <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px] block">
                    Opening Hours
                  </span>
                  <p className="text-stone-800 font-medium text-sm">
                    {site.visitorGuide.openingHours}
                  </p>
                </div>

              </div>

              {/* Ticketing & Etiquette */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs space-y-2">
                  <span className="font-semibold text-amber-800 uppercase tracking-wider text-[11px] block">
                    Admission & Tickets
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {site.visitorGuide.admissionInsight}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs space-y-2">
                  <span className="font-semibold text-stone-600 uppercase tracking-wider text-[11px] block">
                    Dress Code & Etiquette
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {site.visitorGuide.dressCodeAndEtiquette}
                  </p>
                </div>
              </div>

              {/* Must-See Sights on Site */}
              <div className="bg-white p-5 rounded-xl border border-stone-200">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3">
                  Essential Monuments & Key Vantage Points
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {site.visitorGuide.mustSeeSightsOnSite.map((sight, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{sight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conservation & Travel Tip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1 text-amber-950">
                  <span className="font-semibold uppercase tracking-wider text-[11px] block">
                    Insider Travel Tip
                  </span>
                  <p className="leading-relaxed">
                    {site.visitorGuide.travelTip}
                  </p>
                </div>

                <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-1 text-rose-950">
                  <span className="font-semibold uppercase tracking-wider text-[11px] block flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-700" />
                    UNESCO Conservation Mandate
                  </span>
                  <p className="leading-relaxed">
                    {site.visitorGuide.conservationRule}
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: EXCAVATED ARTIFACTS */}
          {activeTab === 'artifacts' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <p className="text-xs text-stone-600">
                Major archaeological relics unearthed during on-site excavations, illustrating everyday life, imperial ritual, and artistic mastery:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {site.excavatedArtifacts.map((artifact, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-amber-800 font-semibold uppercase tracking-wider mb-1">
                        <Gem className="w-3 h-3" />
                        <span>{artifact.material}</span>
                      </div>
                      
                      <h5 className="font-editorial text-base font-medium text-stone-900 mb-1">
                        {artifact.name}
                      </h5>
                      
                      <p className="text-xs text-stone-500 mb-3">
                        Dated: <strong>{artifact.estimatedDate}</strong> · Found: {artifact.foundAt}
                      </p>

                      <p className="text-xs text-stone-700 leading-relaxed mb-4">
                        {artifact.significance}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                      <span className="block font-medium text-stone-700">Current Museum Location:</span>
                      <span>{artifact.currentHome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: AUDIO TRANSCRIPT */}
          {activeTab === 'audio' && (
            <div className="space-y-4 bg-white p-6 rounded-xl border border-stone-200 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div>
                  <h4 className="font-editorial text-lg text-stone-900 font-medium">
                    {site.audioTour.title}
                  </h4>
                  <p className="text-xs text-stone-500">Official Narration Script · {site.audioTour.duration}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleToggleSpeech}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors cursor-pointer"
                  >
                    {isPlayingSpeech && !isSpeechPaused ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlayingSpeech && !isSpeechPaused ? 'Pause' : 'Play Narration'}</span>
                  </button>
                  {isPlayingSpeech && (
                    <button
                      onClick={handleStopSpeech}
                      className="px-2.5 py-1.5 text-xs text-stone-700 hover:text-stone-900 bg-stone-100 rounded-lg"
                    >
                      Stop
                    </button>
                  )}
                </div>
              </div>

              <div className="text-stone-800 text-sm sm:text-base leading-relaxed space-y-4 max-w-prose">
                <p className="first-letter:text-4xl first-letter:font-editorial first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-amber-800">
                  {site.audioTour.transcript}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Soundscape Environment: {site.audioTour.soundscapeType.replace('_', ' ').toUpperCase()}</span>
                <span>Supported via Browser Web Speech & Web Audio APIs</span>
              </div>
            </div>
          )}

          {/* SIMILAR SITES RECOMMENDATION SECTION */}
          <div className="pt-6 border-t border-stone-200">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800 block">
                  Curator's Recommendation Engine
                </span>
                <h4 className="font-editorial text-lg text-stone-900 font-medium">
                  Similar Monuments You May Appreciate
                </h4>
              </div>
              <span className="text-xs text-stone-500">
                Correlated by era, masonry, and geography
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {similarSites.map(({ site: simSite, similarityScore, primaryMatchReason }) => (
                <div
                  key={simSite.id}
                  onClick={() => onSelectSite(simSite)}
                  className="group bg-white p-3.5 rounded-xl border border-stone-200 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-2.5 bg-stone-100">
                      <img
                        src={simSite.heroImage}
                        alt={simSite.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-stone-900/85 backdrop-blur-xs text-amber-300 rounded text-[10px] font-mono font-bold">
                        {similarityScore}% Match
                      </div>
                    </div>

                    <h5 className="font-editorial text-sm font-medium text-stone-900 group-hover:text-amber-900 line-clamp-1 mb-0.5">
                      {simSite.name}
                    </h5>

                    <p className="text-[11px] text-stone-500 mb-2">
                      {simSite.location.city}, {simSite.location.country} · {simSite.civilization}
                    </p>

                    <p className="text-[11px] text-amber-900 bg-amber-50/80 p-1.5 rounded border border-amber-200/60 leading-tight line-clamp-2">
                      {primaryMatchReason}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-medium text-amber-800">
                    <span>Examine Monument</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[#F2EFE8] border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <span>Coordinates: {site.location.coordinates.lat.toFixed(4)}° N, {site.location.coordinates.lng.toFixed(4)}° E</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenExpedition();
              }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-amber-950 bg-amber-200 hover:bg-amber-300 border border-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-amber-800" />
              <span>Add to Expedition Planner</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white border border-stone-300 rounded-lg transition-colors cursor-pointer"
            >
              Close Dossier
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
