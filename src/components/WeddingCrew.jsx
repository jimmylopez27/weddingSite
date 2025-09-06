import React, { useState } from "react";

const crewMembers = [
  {
    name: "John Doe",
    role: "Best Man",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    description: "John has been a lifelong friend and will stand by the groom's side.",
  },
  {
    name: "Jane Smith",
    role: "Maid of Honor",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    description: "Jane is the bride's sister and her trusted confidante.",
  },
  {
    name: "Emily Johnson",
    role: "Bridesmaid",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    description: "Emily is a dear friend who brings joy wherever she goes.",
  },
  {
    name: "Michael Lee",
    role: "Groomsman",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    description: "Michael is the groom's cousin and a trusted companion.",
  },
  {
    name: "Sarah Brown",
    role: "Bridesmaid",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    description: "Sarah is a fun-loving friend who brightens every event.",
  },
  {
    name: "Carlos Rivera",
    role: "Ninong",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=400&q=80",
    description: "Carlos is a close family friend and honored ninong.",
  },
  {
    name: "Maria Lopez",
    role: "Ninang",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    description: "Maria has guided the couple and is an esteemed ninang.",
  },
  {
    name: "Anna Kim",
    role: "Bridesmaid",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    description: "Anna is a close friend and always full of energy.",
  },
  {
    name: "David Park",
    role: "Groomsman",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=400&q=80",
    description: "David is the groom's longtime friend and supporter.",
  },
];

const CrewCard = ({ member }) => (
  <div
    style={{
      textAlign: "center",
      padding: "1rem",
      borderRadius: "12px",
      background: "#fff",
      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
    }}
  >
    <img
      src={member.img}
      alt={member.name}
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
        marginBottom: "1rem",
      }}
    />
    <h3 style={{ margin: "0.5rem 0", fontSize: "1.25rem" }}>{member.name}</h3>
    <p style={{ fontWeight: "600", color: "#e11d48", marginBottom: "0.5rem" }}>{member.role}</p>
    <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.5 }}>{member.description}</p>
  </div>
);

const WeddingCrew = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + crewMembers.length) % crewMembers.length);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % crewMembers.length);
  };

  const getVisibleCrew = () => {
    let visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(crewMembers[(startIndex + i) % crewMembers.length]);
    }
    return visible;
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Wedding Crew</h1>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <button
          onClick={prevSlide}
          style={{
            fontSize: "2rem",
            background: "#e11d48",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            overflow: "hidden",
            width: "calc(300px * 3 + 2rem * 2)", // 3 cards width + gap
          }}
        >
          {getVisibleCrew().map((member, idx) => (
            <CrewCard key={idx} member={member} />
          ))}
        </div>

        <button
          onClick={nextSlide}
          style={{
            fontSize: "2rem",
            background: "#e11d48",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default WeddingCrew;
