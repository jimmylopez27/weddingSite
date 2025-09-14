import React, { useState, useEffect } from "react";

const WeddingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const highlightColor = "#e11d48";

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

  const handleProfileClick = () => {
    // Add your profile management logic here
    console.log("Manage Profile clicked");
  };

  return (
    <>
      <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          {/* Brand */}
          <div 
            className="brand"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Jimmy & Elaiza's Wedding
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="desktop-menu hidden md:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}

            {/* Manage Profile Button */}
            <button 
              className="profile-btn"
              onClick={handleProfileClick}
            >
              Manage Profile
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <button 
          className="mobile-profile-btn"
          onClick={() => {
            handleProfileClick();
            setMenuOpen(false);
          }}
        >
          Manage Profile
        </button>
      </div>

      {/* Spacer */}
      <div className="nav-spacer"></div>

      <style jsx>{`
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          padding: 1rem 2rem;
        }

        .nav-container.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .brand {
          font-weight: 700;
          font-size: 1.5rem;
          color: ${isScrolled ? '#1f2937' : '#ffffff'};
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: -0.025em;
        }

        .brand:hover {
          color: ${highlightColor};
          transform: scale(1.02);
        }

        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: ${isScrolled ? '#374151' : '#ffffff'};
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          position: relative;
        }

        .nav-link:hover {
          color: ${highlightColor};
          background: ${isScrolled ? 'rgba(225, 29, 72, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
          transform: translateY(-1px);
        }

        .profile-btn {
          background: ${highlightColor};
          color: white;
          border: none;
          padding: 0.5rem 1.25rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(225, 29, 72, 0.3);
        }

        .profile-btn:hover {
          background: #be185d;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(225, 29, 72, 0.4);
        }

        .mobile-menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .mobile-menu-toggle:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 24px;
          height: 18px;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: ${isScrolled ? '#1f2937' : '#ffffff'};
          border-radius: 1px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:first-child {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:last-child {
          transform: translateY(-8px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          z-index: 999;
          padding: 1.5rem 2rem;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-link {
          display: block;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          font-size: 1.1rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: ${highlightColor};
          padding-left: 0.5rem;
        }

        .mobile-nav-link:last-of-type {
          border-bottom: none;
          margin-bottom: 1rem;
        }

        .mobile-profile-btn {
          width: 100%;
          background: ${highlightColor};
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-profile-btn:hover {
          background: #be185d;
          transform: translateY(-1px);
        }

        .nav-spacer {
          height: 80px;
        }

        /* Responsive utilities */
        .hidden {
          display: none;
        }

        @media (min-width: 768px) {
          .md\\:flex {
            display: flex;
          }
          
          .md\\:hidden {
            display: none;
          }
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default WeddingNavigation;