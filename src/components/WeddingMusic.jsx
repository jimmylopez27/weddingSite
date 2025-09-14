import React, { useState, useRef, useEffect } from "react";

const WeddingMusic = ({ musicUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Ensure the audio element is ready
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // reload the audio
    }
  }, [musicUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Audio play failed:", error);
            alert("Audio failed to play. Make sure your file path is correct and your browser allows audio playback.");
          });
      }
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "1rem", marginTop: "4rem" }}>
        Play the music for a better experience
      </p>
      <button
        onClick={togglePlay}
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#e11d48",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
    </div>
  );
};

export default WeddingMusic;
