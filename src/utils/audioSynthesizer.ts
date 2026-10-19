/**
 * Procedural Web Audio API soundscape generator and Web Speech API narrator.
 * Creates atmospheric audio environments for historical monuments without external audio file dependencies.
 */

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentType: string | null = null;
  private activeNodes: AudioNode[] = [];
  private intervals: number[] = [];

  private getContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playSoundscape(type: string): void {
    this.stopSoundscape();
    const ctx = this.getContext();
    this.isPlaying = true;
    this.currentType = type;

    switch (type) {
      case 'desert_canyon':
        this.createDesertWind(ctx);
        break;
      case 'cloud_forest':
        this.createCloudForest(ctx);
        break;
      case 'palace_fountains':
        this.createPalaceWater(ctx);
        break;
      case 'sacred_bells':
        this.createTempleBells(ctx);
        break;
      case 'roman_colosseum':
      default:
        this.createAncientAtmosphere(ctx);
        break;
    }
  }

  public stopSoundscape(): void {
    this.isPlaying = false;
    this.currentType = null;
    
    // Stop nodes
    for (const node of this.activeNodes) {
      try {
        if ('stop' in node && typeof (node as AudioScheduledSourceNode).stop === 'function') {
          (node as AudioScheduledSourceNode).stop();
        }
        node.disconnect();
      } catch {
        // ignore already stopped nodes
      }
    }
    this.activeNodes = [];

    // Clear periodic sound triggers
    for (const id of this.intervals) {
      window.clearInterval(id);
    }
    this.intervals = [];
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentType(): string | null {
    return this.currentType;
  }

  /* --- Ambient Sound Synthesizers --- */

  // Gentle desert wind filtered noise
  private createDesertWind(ctx: AudioContext): void {
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Bandpass filter for wind howling
    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(280, ctx.currentTime);
    bandpass.Q.setValueAtTime(3.0, ctx.currentTime);

    // LFO for swaying wind
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.15, ctx.currentTime);
    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(140, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(bandpass.frequency);

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.18, ctx.currentTime);

    whiteNoise.connect(bandpass);
    bandpass.connect(masterGain);
    masterGain.connect(ctx.destination);

    whiteNoise.start();
    lfo.start();

    this.activeNodes.push(whiteNoise, lfo, bandpass, masterGain);

    // Periodic soft distant wind chime
    const chimeTimer = window.setInterval(() => {
      if (!this.isPlaying) return;
      this.playChimeTone(ctx, 587.33, 0.04, 2.5); // D5
    }, 7000);
    this.intervals.push(chimeTimer);
  }

  // Palace courtyard with tranquil trickling water & drone
  private createPalaceWater(ctx: AudioContext): void {
    // Water sound using low-pass noise
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02; // Pink-ish water noise
      lastOut = data[i];
    }

    const water = ctx.createBufferSource();
    water.buffer = noiseBuffer;
    water.loop = true;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(800, ctx.currentTime);

    const waterGain = ctx.createGain();
    waterGain.gain.setValueAtTime(0.15, ctx.currentTime);

    water.connect(lowpass);
    lowpass.connect(waterGain);
    waterGain.connect(ctx.destination);

    // Meditative background drone (C3 & G3)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const droneGain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(130.81, ctx.currentTime); // C3
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(196.00, ctx.currentTime); // G3

    droneGain.gain.setValueAtTime(0.03, ctx.currentTime);

    osc1.connect(droneGain);
    osc2.connect(droneGain);
    droneGain.connect(ctx.destination);

    water.start();
    osc1.start();
    osc2.start();

    this.activeNodes.push(water, lowpass, waterGain, osc1, osc2, droneGain);
  }

  // Sacred temple bells with harmonic resonance
  private createTempleBells(ctx: AudioContext): void {
    // Ambient jungle air noise
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'bandpass';
    lowpass.frequency.setValueAtTime(450, ctx.currentTime);
    lowpass.Q.setValueAtTime(1.5, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, ctx.currentTime);

    noise.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
    this.activeNodes.push(noise, lowpass, gain);

    // Initial strike
    this.playSingingBowl(ctx, 220); // A3

    // Periodic deep temple gong
    const gongTimer = window.setInterval(() => {
      if (!this.isPlaying) return;
      this.playSingingBowl(ctx, 220);
    }, 8500);
    this.intervals.push(gongTimer);
  }

  // Highland cloud forest breeze & open mountain air
  private createCloudForest(ctx: AudioContext): void {
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const highpass = ctx.createBiquadFilter();
    highpass.type = 'bandpass';
    highpass.frequency.setValueAtTime(320, ctx.currentTime);
    highpass.Q.setValueAtTime(2.0, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, ctx.currentTime);

    noise.connect(highpass);
    highpass.connect(gain);
    gain.connect(ctx.destination);
    noise.start();

    // Soft flute tone
    const fluteOsc = ctx.createOscillator();
    fluteOsc.type = 'triangle';
    fluteOsc.frequency.setValueAtTime(440, ctx.currentTime);
    const fluteGain = ctx.createGain();
    fluteGain.gain.setValueAtTime(0.02, ctx.currentTime);

    fluteOsc.connect(fluteGain);
    fluteGain.connect(ctx.destination);
    fluteOsc.start();

    this.activeNodes.push(noise, highpass, gain, fluteOsc, fluteGain);
  }

  // Roman monument ancient stone arch atmosphere
  private createAncientAtmosphere(ctx: AudioContext): void {
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(260, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.16, ctx.currentTime);

    // Sub rumble
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(55, ctx.currentTime); // 55Hz stone resonance
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.04, ctx.currentTime);

    noise.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(ctx.destination);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);

    noise.start();
    subOsc.start();

    this.activeNodes.push(noise, lowpass, gain, subOsc, subGain);
  }

  private playChimeTone(ctx: AudioContext, freq: number, gainAmount: number, duration: number): void {
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gainNode.gain.setValueAtTime(gainAmount, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  }

  private playSingingBowl(ctx: AudioContext, baseFreq: number): void {
    // Tibetan bowl harmonic cluster
    const harmonics = [1, 2.76, 5.4];
    const duration = 7.0;

    harmonics.forEach((mult, index) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * mult, ctx.currentTime);

      const peakGain = 0.05 / (index + 1);
      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(peakGain, ctx.currentTime + 0.4);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    });
  }
}

export const soundscape = new SoundscapeEngine();

/**
 * Text-to-Speech Narrator for audio guides
 */
class SpeechNarrator {
  private utterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private isPaused = false;
  private onStateChange: ((state: { isSpeaking: boolean; isPaused: boolean }) => void) | null = null;

  public setListener(cb: (state: { isSpeaking: boolean; isPaused: boolean }) => void) {
    this.onStateChange = cb;
  }

  public speak(text: string, rate: number = 0.95): void {
    if (!('speechSynthesis' in window)) {
      return;
    }
    this.stop();

    const cleanText = text.replace(/<[^>]*>?/gm, '');
    this.utterance = new SpeechSynthesisUtterance(cleanText);
    this.utterance.rate = rate;
    this.utterance.pitch = 0.95;

    // Pick a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Serena') || v.name.includes('Daniel')));
    if (naturalVoice) {
      this.utterance.voice = naturalVoice;
    }

    this.utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      this.notify();
    };

    this.utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.notify();
    };

    this.utterance.onerror = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.notify();
    };

    window.speechSynthesis.speak(this.utterance);
  }

  public pause(): void {
    if ('speechSynthesis' in window && this.isSpeaking && !this.isPaused) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  public resume(): void {
    if ('speechSynthesis' in window && this.isPaused) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  public stop(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
      this.notify();
    }
  }

  public getState() {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
    };
  }

  private notify() {
    if (this.onStateChange) {
      this.onStateChange({ isSpeaking: this.isSpeaking, isPaused: this.isPaused });
    }
  }
}

export const narrator = new SpeechNarrator();
