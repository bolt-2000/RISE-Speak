import React, { useState, useRef, useEffect } from 'react';
import styles from './Player.module.css';

export default function Player({ episode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (episode && audioRef.current) {
      // Reset player state when episode changes
      setIsPlaying(false);
      setCurrentTime(0);
      audioRef.current.currentTime = 0;
    }
  }, [episode]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume;
        setIsMuted(false);
      } else {
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  if (!episode) {
    return (
      <div className={styles.playerContainer}>
        <div className={styles.noEpisode}>
          <div className={styles.noEpisodeIcon}>🎧</div>
          <h2>No Episode Selected</h2>
          <p>Choose an episode from the sidebar to start listening</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.playerContainer}>
      <div className={styles.episodeInfo}>
        <div className={styles.episodeArtwork}>
          <img src={episode.thumbnail} alt={episode.title} />
        </div>
        <div className={styles.episodeDetails}>
          <h1 className={styles.episodeTitle}>{episode.title}</h1>
          <p className={styles.episodeHost}>{episode.host}</p>
          <span className={styles.episodeDuration}>{episode.duration}</span>
        </div>
      </div>

      <div className={styles.playerControls}>
        <div className={styles.mainControls}>
          <button className={styles.controlButton}>⏮</button>
          <button 
            className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`}
            onClick={togglePlay}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className={styles.controlButton}>⏭</button>
        </div>

        <div className={styles.progressSection}>
          <span className={styles.timeDisplay}>{formatTime(currentTime)}</span>
          <div className={styles.progressBar} onClick={handleSeek}>
            <div className={styles.progressTrack}>
              <div 
                className={styles.progressFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <span className={styles.timeDisplay}>{formatTime(duration)}</span>
        </div>

        <div className={styles.volumeControls}>
          <button className={styles.volumeButton} onClick={toggleMute}>
            {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      >
        {/* Demo audio source - replace with actual episode audio */}
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}