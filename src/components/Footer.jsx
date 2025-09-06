import React, { useState, useEffect } from "react";

const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-24T15:00:00");

    const updateTime = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTime, 1000);
    updateTime(); // initial call

    return () => clearInterval(interval);
  }, []);

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 1rem",
    padding: "1.2rem 1rem",
    borderRadius: "12px",
    background: "#fef6f9", // soft pastel pink
    color: "#e11d48", // highlight color for numbers
    minWidth: "80px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "default",
  };

  return (
    <footer
      style={{
        background: "#fff0f5", // very soft lavender/pink
        color: "#333",
        padding: "3rem 2rem",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "2rem", fontSize: "2rem", color: "#e11d48" }}>
        Countdown to Our Big Day
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div style={boxStyle}>
          <div style={{ fontSize: "1.6rem", fontWeight: "700" }}>{timeLeft.days}</div>
          <div style={{ fontSize: "0.9rem" }}>Days</div>
        </div>
        <div style={boxStyle}>
          <div style={{ fontSize: "1.6rem", fontWeight: "700" }}>{timeLeft.hours}</div>
          <div style={{ fontSize: "0.9rem" }}>Hours</div>
        </div>
        <div style={boxStyle}>
          <div style={{ fontSize: "1.6rem", fontWeight: "700" }}>{timeLeft.minutes}</div>
          <div style={{ fontSize: "0.9rem" }}>Minutes</div>
        </div>
        <div style={boxStyle}>
          <div style={{ fontSize: "1.6rem", fontWeight: "700" }}>{timeLeft.seconds}</div>
          <div style={{ fontSize: "0.9rem" }}>Seconds</div>
        </div>
      </div>

      <p style={{ marginBottom: "0.5rem" }}>© 2025 Sarah & John. All rights reserved.</p>
      <p style={{ fontSize: "0.9rem", color: "#e11d48" }}>Designed with love ❤️</p>
    </footer>
  );
};

export default Footer;
