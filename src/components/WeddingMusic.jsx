import React, { useState, useRef } from "react";

const WeddingMusic = ({ musicUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log("Audio play failed:", error);
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
