import React, { useState, useEffect, useRef } from "react";

const OurStory = () => {
  const images = [
    "one.jpg",
    "two.jpg",
    "three.jpg",
    "four.jpg",
    "five.jpg",
    "six.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextImage, 4000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  return (
    <div
      style={{
        fontFamily: "'Inter', 'Poppins', sans-serif",
        background: "linear-gradient(135deg, #fdf8f3 0%, #faf5f0 25%, #fff9f4 50%, #fefcf9 75%, #fbf6f1 100%)",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Enhanced Floating Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "3%",
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg, rgba(184, 134, 11, 0.15), rgba(251, 191, 36, 0.1))",
          borderRadius: "50%",
          opacity: 0.6,
          animation: "float 7s ease-in-out infinite",
          filter: "blur(1px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "70%",
          right: "5%",
          width: "90px",
          height: "90px",
          background: "linear-gradient(135deg, rgba(139, 69, 19, 0.12), rgba(205, 133, 63, 0.08))",
          borderRadius: "50%",
          opacity: 0.5,
          animation: "float 9s ease-in-out infinite reverse",
          filter: "blur(1px)",
        }}
      />

      {/* Additional subtle elements */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "85%",
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(184, 134, 11, 0.05))",
          borderRadius: "50%",
          opacity: 0.4,
          animation: "float 11s ease-in-out infinite",
        }}
      />

      {/* Main Container */}
      <div style={{ padding: "3rem 2rem", maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "4rem", position: "relative" }}>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              marginBottom: "1rem",
            }}
          >
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "300",
                background: "linear-gradient(135deg, #b45309 0%, #f59e0b 30%, #d97706 70%, #92400e 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "2px",
                margin: 0,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Our Love Story
            </h1>
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100px",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #f59e0b, transparent)",
                borderRadius: "2px",
              }}
            />
          </div>
          
          <p
            style={{
              fontSize: "1.2rem",
              color: "#78716c",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontWeight: "300",
              opacity: 0.9,
            }}
          >
            A journey of two hearts becoming one, filled with endless moments of joy, 
            laughter, and unconditional love that grows stronger with each passing day.
          </p>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            gap: "4rem",
            alignItems: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          {/* Enhanced 3D Carousel */}
          <div
            style={{
              flex: "0 1 550px",
              minWidth: "450px",
              height: "900px",
              position: "relative",
              perspective: "2000px",
              perspectiveOrigin: "center center",
            }}
          >
            {/* Carousel Ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "450px",
                height: "100px",
                transformStyle: "preserve-3d",
                transform: `translate(-50%, -50%) rotateY(${-currentIndex * 60}deg)`,
                transition: "transform 1.2s cubic-bezier(0.4, 0.0, 0.2, 1)",
              }}
            >
              {images.map((image, index) => {
                const angle = index * 60;
                const rotateY = angle;
                const translateZ = 350;
                
                return (
                  <div
                    key={index}
                    style={{
                      position: "absolute",
                      width: "260px",
                      height: "380px",
                      left: "50%",
                      top: "50%",
                      transformOrigin: "center center",
                      transform: `translate(-50%, -50%) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                      transition: "all 1s ease",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        borderRadius: "24px",
                        overflow: "hidden",
                        background: index === currentIndex 
                          ? "linear-gradient(145deg, #ffffff, #f8fafc)" 
                          : "linear-gradient(145deg, #fefefe, #f1f5f9)",
                        padding: "10px",
                        boxShadow: index === currentIndex
                          ? "0 25px 70px rgba(245, 158, 11, 0.25), 0 10px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                          : "0 15px 40px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.05)",
                        transform: index === currentIndex ? "scale(1.08)" : "scale(0.92)",
                        border: index === currentIndex 
                          ? "2px solid rgba(245, 158, 11, 0.2)" 
                          : "1px solid rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <img
                        src={image}
                        alt={`Memory ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "16px",
                          filter: index === currentIndex 
                            ? "brightness(1.05) saturate(1.1) contrast(1.02)" 
                            : "brightness(0.85) saturate(0.95)",
                          transition: "all 1s ease",
                        }}
                      />
                      
                      {/* Enhanced Frame Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          borderRadius: "16px",
                          background: index === currentIndex 
                            ? "linear-gradient(45deg, transparent 20%, rgba(245, 158, 11, 0.08) 40%, rgba(251, 191, 36, 0.05) 60%, transparent 80%)"
                            : "linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Subtle inner shadow for depth */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          borderRadius: "16px",
                          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Controls */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "25px",
              }}
            >
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  background: "linear-gradient(145deg, #ffffff, #f8fafc)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(245, 158, 11, 0.2)",
                  borderRadius: "50%",
                  width: "75px",
                  height: "75px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  color: "#d97706",
                  boxShadow: "0 10px 35px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.15)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.12)";
                  e.target.style.boxShadow = "0 15px 45px rgba(245, 158, 11, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)";
                  e.target.style.background = "linear-gradient(145deg, #fef3c7, #fbbf24)";
                  e.target.style.color = "#92400e";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.15)";
                  e.target.style.background = "linear-gradient(145deg, #ffffff, #f8fafc)";
                  e.target.style.color = "#d97706";
                }}
              >
                {isPlaying ? "⏸" : "▶️"}
              </button>

              {/* Navigation Dots */}
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: index === currentIndex ? "35px" : "14px",
                      height: "14px",
                      borderRadius: "7px",
                      border: "none",
                      background: index === currentIndex 
                        ? "linear-gradient(135deg, #f59e0b, #d97706)"
                        : "rgba(120, 113, 108, 0.25)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: index === currentIndex 
                        ? "0 0 20px rgba(245, 158, 11, 0.4), 0 2px 8px rgba(217, 119, 6, 0.3)"
                        : "none",
                      transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Shortened Text Content */}
          <div
            style={{
              flex: "0 1 450px",
              minWidth: "350px",
              height: "580px",
              padding: "2.5rem",
              background: "linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8))",
              backdropFilter: "blur(25px)",
              borderRadius: "32px",
              border: "1px solid rgba(245, 158, 11, 0.15)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.08), 0 10px 30px rgba(245, 158, 11, 0.05)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Enhanced Decorative Corner Elements */}
            <div
              style={{
                position: "absolute",
                top: "25px",
                left: "25px",
                width: "50px",
                height: "50px",
                border: "2px solid #f59e0b",
                borderRight: "none",
                borderBottom: "none",
                borderRadius: "20px 0 0 0",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "25px",
                right: "25px",
                width: "50px",
                height: "50px",
                border: "2px solid #f59e0b",
                borderLeft: "none",
                borderTop: "none",
                borderRadius: "0 0 20px 0",
                opacity: 0.6,
              }}
            />

            {/* Names Section */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "3.5rem",
                  fontWeight: "300",
                  color: "#b45309",
                  margin: 0,
                  letterSpacing: "1px",
                  position: "relative",
                }}
              >
                Jimboy
                <span
                  style={{
                    display: "block",
                    fontSize: "1.8rem",
                    color: "#f59e0b",
                    margin: "0.5rem 0",
                    fontWeight: "400",
                  }}
                >
                  &
                </span>
                Laiza
              </h2>
              
              {/* Wedding Date */}
              <div
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1rem",
                  color: "#d97706",
                  fontWeight: "400",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Est. Forever
              </div>
            </div>

            {/* Story Text */}
            <div style={{ marginBottom: "3rem" }}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#78716c",
                  marginBottom: "2rem",
                  fontWeight: "300",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                Our story began in the most unexpected place - a quiet coffee shop where two souls 
                discovered their shared passion for literature and wanderlust. From that first 
                conversation, we knew something magical was unfolding.
              </p>
              
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#78716c",
                  marginBottom: "0",
                  fontWeight: "300",
                  lineHeight: 1.7,
                  textAlign: "center",
                }}
              >
                Through countless adventures and quiet moments, we've built a love that grows 
                stronger with each sunrise. Today, we celebrate the beautiful future we're creating together.
              </p>
            </div>

            {/* Enhanced Quote - Fixed Spacing */}
            <div
              style={{
                textAlign: "center",
                padding: "2rem 1.5rem",
                background: "linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(251, 191, 36, 0.05))",
                borderRadius: "20px",
                border: "1px solid rgba(245, 158, 11, 0.15)",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "#b45309",
                position: "relative",
                boxShadow: "inset 0 1px 3px rgba(245, 158, 11, 0.1)",
                marginTop: "auto",
              }}
            >
              <div style={{ 
                fontSize: "2.5rem", 
                color: "#f59e0b", 
                marginBottom: "1rem", 
                opacity: 0.8,
                lineHeight: 1,
              }}>❝</div>
              <div style={{ 
                fontWeight: "400", 
                letterSpacing: "0.5px",
                lineHeight: 1.5,
                margin: "1rem 0",
              }}>
                Two hearts, one love, endless possibilities
              </div>
              <div style={{ 
                fontSize: "2.5rem", 
                color: "#f59e0b", 
                marginTop: "1rem", 
                opacity: 0.8,
                lineHeight: 1,
              }}>❞</div>
            </div>
          </div>
        </div>

        {/* Enhanced Video Section */}
        <div
          style={{
            marginTop: "5rem",
            textAlign: "center",
            padding: "3rem",
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(248, 250, 252, 0.6))",
            backdropFilter: "blur(25px)",
            borderRadius: "32px",
            border: "1px solid rgba(245, 158, 11, 0.12)",
            boxShadow: "0 30px 70px rgba(0, 0, 0, 0.06), 0 10px 30px rgba(245, 158, 11, 0.04)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.8rem",
              color: "#b45309",
              marginBottom: "1rem",
              fontWeight: "300",
              letterSpacing: "1px",
            }}
          >
            Our Journey in Motion
          </h3>
          
          <p
            style={{
              fontSize: "1.1rem",
              color: "#78716c",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              margin: "0 auto 2.5rem auto",
              fontWeight: "300",
              lineHeight: 1.6,
            }}
          >
            Experience the magic of our pre-wedding moments captured in this beautiful film
          </p>

          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              maxWidth: "900px",
              margin: "0 auto",
              borderRadius: "24px",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.12), 0 10px 30px rgba(245, 158, 11, 0.08)",
              border: "2px solid rgba(245, 158, 11, 0.15)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/Ynj_L5TCyws?start=135"
              title="Pre-Wedding Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "22px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=Poppins:wght@300;400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-15px) rotate(60deg) scale(1.05); 
            opacity: 0.4;
          }
          66% { 
            transform: translateY(-8px) rotate(120deg) scale(0.95); 
            opacity: 0.7;
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default OurStory;