import React, { useState, useEffect } from "react";

const WeddingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const highlightColor = "#e11d48";

  useEffect(() => {
    // Wedding date in Philippines time (October 24, 2025)
    const weddingDate = new Date("2025-10-24T00:00:00+08:00");

    const interval = setInterval(() => {
      // Current time in Philippines
      const now = new Date();
      // convert current time to PH time offset
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const nowPH = new Date(utc + 8 * 60 * 60 * 1000);

      const diff = weddingDate - nowPH;
      const days = Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
      setDaysLeft(days);
    }, 1000 * 60 * 60); // every hour

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Our Story", href: "#our-story" },
    { name: "Event Details", href: "#event-details" },
    { name: "The Crew", href: "#wedding-party" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: isScrolled ? "#fff" : "rgba(255,255,255,0.1)",
          boxShadow: isScrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s ease",
          zIndex: 1000,
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {/* Brand */}
          <div
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              color: isScrolled ? "#333" : "#fff",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Jimmy & Elaiza's Wedding
          </div>

          {/* Desktop Menu */}
          <div
            className="desktop-menu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                style={{
                  textDecoration: "none",
                  color: isScrolled ? "#333" : "#fff",
                  fontWeight: 500,
                  transition: "all 0.3s",
                  padding: "0.3rem 0.5rem",
                  borderRadius: "5px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = highlightColor)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isScrolled ? "#333" : "#fff")
                }
              >
                {item.name}
              </a>
            ))}

            {/* Countdown */}
            <div
              style={{
                padding: "0.4rem 0.8rem",
                borderRadius: "20px",
                background: isScrolled ? "#f8d7da" : "rgba(255,255,255,0.2)",
                color: isScrolled ? highlightColor : "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.background = isScrolled
                  ? "#f5c6cb"
                  : "rgba(255,255,255,0.4)";
                e.currentTarget.style.color = highlightColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = isScrolled
                  ? "#f8d7da"
                  : "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = isScrolled ? highlightColor : "#fff";
              }}
            >
              {daysLeft} days left
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem 0",
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: 500,
                fontSize: "1.2rem",
                margin: "0.5rem 0",
                transition: "all 0.3s",
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.color = highlightColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      <div style={{ height: "80px" }}></div>

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .mobile-menu {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WeddingNavigation;
