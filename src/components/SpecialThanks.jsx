import React, { useState } from "react";

const specialThanksList = [
  {
    name: "Mom & Dad",
    message: "Thank you for your unconditional love and support throughout our lives.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Bridesmaids & Groomsmen",
    message: "Your friendship, help, and laughter made this journey unforgettable.",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Grandparents",
    message: "Thank you for your wisdom, guidance, and blessings on our special day.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Wedding Planner",
    message: "Your creativity and organization made everything perfect.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "All Our Guests",
    message: "We are grateful for your presence and sharing this celebration with us.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
];

const SpecialThanksItem = ({ thanks, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  return (
    <div
      style={{
        marginBottom: "1.5rem",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
      }}
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "1rem 1.5rem", background: "#e11d48", color: "#fff" }}>
        <img
          src={thanks.img}
          alt={thanks.name}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "1rem",
            border: "2px solid #fff",
          }}
        />
        <div style={{ flex: 1, fontWeight: 600, fontSize: "1rem" }}>
          {thanks.name}
        </div>
        <span style={{ fontSize: "1.5rem" }}>{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div style={{ padding: "1rem 1.5rem", background: "#fff", color: "#555", lineHeight: 1.6 }}>
          {thanks.message}
        </div>
      )}
    </div>
  );
};

const SpecialThanks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Special Thanks</h1>
      {specialThanksList.map((thanks, index) => (
        <SpecialThanksItem
          key={index}
          thanks={thanks}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default SpecialThanks;
