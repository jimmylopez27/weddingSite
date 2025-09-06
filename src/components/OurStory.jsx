import React, { useState, useEffect, useRef } from "react";

const OurStory = () => {
  const images = [
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1755380749576-c2372cc487a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1755464903932-e6edc1a4f872?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextImage, 3000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  const getPrevIndex = () => (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1rem", color: "#e11d48" }}>
        Our Story
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "3rem", lineHeight: 1.6 }}>
        From the moment we met, our journey has been filled with love, laughter, and countless memories.
        Here's a glimpse into our story together.
      </p>

      {/* Carousel + Text Row Centered */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Carousel */}
        <div
          style={{
            flex: "0 1 450px", // slightly wider
            minWidth: "350px",
            position: "relative",
            height: "650px", // portrait
          }}
        >
          <img
            src={images[getPrevIndex()]}
            alt="Previous"
            style={{
              position: "absolute",
              left: "0",
              top: "10%",
              width: "75%",
              height: "85%",
              objectFit: "cover",
              borderRadius: "12px",
              filter: "brightness(0.6)",
              transform: "scale(0.8)",
              transition: "all 0.5s ease",
              zIndex: 1,
            }}
          />
          <img
            src={images[currentIndex]}
            alt="Current"
            style={{
              position: "absolute",
              left: "12.5%",
              top: "0",
              width: "75%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              transition: "all 0.5s ease",
              zIndex: 2,
            }}
          />
          <img
            src={images[getNextIndex()]}
            alt="Next"
            style={{
              position: "absolute",
              right: "0",
              top: "10%",
              width: "75%",
              height: "85%",
              objectFit: "cover",
              borderRadius: "12px",
              filter: "brightness(0.6)",
              transform: "scale(0.8)",
              transition: "all 0.5s ease",
              zIndex: 1,
            }}
          />

          {/* Smaller Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              position: "absolute",
              bottom: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(225, 29, 72, 0.25)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "1rem",
              zIndex: 3,
            }}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>

        {/* Text */}
        <div
          style={{
            flex: "0 1 350px",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "5rem",
              color: "#e11d48",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Jimboy & Laiza
          </h2>

          <p style={{ color: "#555", lineHeight: 1.6, fontSize: "1.15rem" }}>
            We first met at a coffee shop and instantly connected over our shared love for books and travel.
            Every adventure we’ve shared has brought us closer together.
          </p>
          <p style={{ color: "#555", lineHeight: 1.6, fontSize: "1.15rem" }}>
            Over the years, we’ve built a life filled with joy, support, and laughter.
            Our love story continues to grow each day, and we can’t wait to celebrate our next chapter with you.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div style={{ textAlign: "center", marginBottom: "2rem", marginTop: "3rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#e11d48" }}>Pre-Wedding Video</h2>

        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/Ynj_L5TCyws?start=135"
            title="Pre-Wedding Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px" }}
          ></iframe>
        </div>

        <p style={{ marginTop: "0.5rem", color: "#555", lineHeight: 1.5 }}>
          Our pre-wedding video captures the magical moments and memories leading up to our special day.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
