import React, { useState, useEffect } from 'react';
import { HistoricalSite } from '../types/history';
import { soundscape, narrator } from '../utils/audioSynthesizer';
import { Volume2, VolumeX, Play, Pause, Square, X, Headphones, ExternalLink } from 'lucide-react';

interface AudioPlayerFloatingBarProps {
  currentSite: HistoricalSite | null;
  onOpenSiteDetail: (site: HistoricalSite) => void;
  onCloseBar: () => void;
}

export const AudioPlayerFloatingBar: React.FC<AudioPlayerFloatingBarProps> = ({
  currentSite,
  onOpenSiteDetail,
  onCloseBar,
}) => {
  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);
  const [isSpeechPaused, setIsSpeechPaused] = useState(false);
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);

  useEffect(() => {
    if (currentSite) {
      // Start both narration and ambient
      narrator.speak(currentSite.audioTour.transcript);
      soundscape.playSoundscape(currentSite.audioTour.soundscapeType);
      setIsPlayingAmbient(true);
    }
  }, [currentSite]);

  useEffect(() => {
    narrator.setListener((state) => {
      setIsPlayingSpeech(state.isSpeaking);
      setIsSpeechPaused(state.isPaused);
    });
  }, []);

  if (!currentSite) return null;

  const handleToggleSpeech = () => {
    if (isPlayingSpeech && !isSpeechPaused) {
      narrator.pause();
    } else if (isSpeechPaused) {
      narrator.resume();
    } else {
      narrator.speak(currentSite.audioTour.transcript);
    }
  };

  const handleToggleAmbient = () => {
    if (isPlayingAmbient) {
      soundscape.stopSoundscape();
      setIsPlayingAmbient(false);
    } else {
      soundscape.playSoundscape(currentSite.audioTour.soundscapeType);
      setIsPlayingAmbient(true);
    }
  };

  const handleClose = () => {
    narrator.stop();
    soundscape.stopSoundscape();
    onCloseBar();
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-700 text-white shadow-2xl px-4 py-3 sm:py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Site thumbnail & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-800 shrink-0 border border-stone-700 hidden sm:block">
            <img
              src={currentSite.heroImage}
              alt={currentSite.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] text-amber-300 uppercase tracking-wider">
              <Headphones className="w-3 h-3 shrink-0" />
              <span className="truncate">Audio Tour: {currentSite.name}</span>
            </div>
            <p className="text-xs text-stone-300 truncate">
              {currentSite.audioTour.title} ({currentSite.audioTour.duration})
            </p>
          </div>
        </div>

        {/* Center Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Narration Play/Pause */}
          <button
            onClick={handleToggleSpeech}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-white transition-colors cursor-pointer"
            aria-label="Toggle narration"
          >
            {isPlayingSpeech && !isSpeechPaused ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5" />
            )}
            <span className="hidden xs:inline">
              {isPlayingSpeech && !isSpeechPaused ? 'Pause' : isSpeechPaused ? 'Resume' : 'Play Narration'}
            </span>
          </button>

          {/* Ambient atmosphere toggle */}
          <button
            onClick={handleToggleAmbient}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
              isPlayingAmbient 
                ? 'bg-emerald-950/80 border-emerald-600 text-emerald-300' 
                : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-white'
            }`}
            title="Toggle procedural ambient soundscape"
          >
            {isPlayingAmbient ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isPlayingAmbient ? 'Atmosphere On' : 'Atmosphere Off'}</span>
          </button>

          {/* Open Dossier */}
          <button
            onClick={() => onOpenSiteDetail(currentSite)}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg border border-stone-700 transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">Examine Dossier</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          {/* Stop / Dismiss */}
          <button
            onClick={handleClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
