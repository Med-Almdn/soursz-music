import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

type AudioCtx = {
  isPlaying: boolean;
  toggle: () => void;
  stop: () => void;
};

const AudioContext = createContext<AudioCtx | null>(null);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used within AudioProvider');
  return ctx;
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = new Audio('https://drive.google.com/file/d/1UVyfbNY7gzWJU0kkfwplAVeMlxf6ThMz/view?usp=drive_link');
    el.loop = true;
    el.preload = 'metadata';
    el.volume = 0.15;
    audioRef.current = el;

    return () => {
      el.pause();
      el.src = '';
      audioRef.current = null;
    };
  }, []);

  const stop = () => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setIsPlaying(false);
  };

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;

    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      try {
        await el.play(); 
        setIsPlaying(true);
      } catch (e) {
        console.warn('Audio play blocked:', e);
      }
    }
  };

  const value = useMemo(() => ({ isPlaying, toggle, stop }), [isPlaying]);

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>;
};
