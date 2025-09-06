import React from "react";

const EventDetails = () => {
  const cardStyle = {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    background: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const scheduleStepStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    flex: "1",
    position: "relative",
  };

  const scheduleItems = [
    { time: "3:30 PM", emoji: "⏰", description: "Guests arrive at the church" },
    { time: "4:00 PM", emoji: "⛪", description: "Ceremony begins" },
    { time: "5:30 PM", emoji: "📸", description: "Family photos" },
    { time: "6:00 PM", emoji: "🥂", description: "Reception & dinner" },
    { time: "8:00 PM", emoji: "🎶", description: "Dancing and celebration" },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Event Details
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "3rem", lineHeight: 1.6 }}>
        Join us in celebrating our love! Here’s all the important information you’ll need for the big day.
      </p>

      {/* Event Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        {/* Ceremony */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Ceremony"
            style={{ width: "100%", display: "block" }}
          />
          <div style={{ padding: "1rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>Ceremony</h2>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
              Date: June 15, 2025 <br />
              Time: 4:00 PM <br />
              Location: St. Mary’s Church, 123 Wedding Lane, City
            </p>
          </div>
        </div>

        {/* Reception */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
            alt="Reception"
            style={{ width: "100%", display: "block" }}
          />
          <div style={{ padding: "1rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>Reception</h2>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
              Date: June 15, 2025 <br />
              Time: 6:00 PM onwards <br />
              Location: Grand Ballroom, City Hotel
            </p>
          </div>
        </div>

        {/* Dress Code */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
            alt="Dress Code"
            style={{ width: "100%", display: "block" }}
          />
          <div style={{ padding: "1rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>Dress Code</h2>
            <p style={{ color: "#555", lineHeight: 1.6 }}>
              Smart Formal <br />
              Ladies: Cocktail or long dress <br />
              Gentlemen: Suit and tie
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Timeline Schedule */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Wedding Day Schedule</h2>

        <div className="timeline-container">
          {scheduleItems.map((item, idx) => (
            <div key={idx} className="timeline-step">
              <div className="timeline-circle">{item.emoji}</div>
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-desc">{item.description}</div>
            </div>
          ))}
        </div>

        <style>
          {`
            .timeline-container {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              position: relative;
              max-width: 900px;
              margin: 0 auto;
              padding: 0 1rem;
              flex-wrap: nowrap;
            }

            /* horizontal connecting line */
            .timeline-container::before {
              content: "";
              position: absolute;
              top: 25px;
              left: 0;
              width: 100%;
              height: 4px;
              background: #e11d48;
              z-index: 0;
            }

            .timeline-step {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              flex: 1;
              position: relative;
              z-index: 1;
            }

            .timeline-circle {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background: #e11d48;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.5rem;
              margin-bottom: 0.5rem;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }

            .timeline-time {
              font-weight: 700;
              color: #e11d48;
              margin-bottom: 0.25rem;
            }

            .timeline-desc {
              color: #555;
              font-size: 0.9rem;
            }

            /* Mobile responsiveness: vertical layout */
            @media (max-width: 768px) {
              .timeline-container {
                flex-direction: column;
                align-items: center;
              }
              .timeline-container::before {
                display: none;
              }
              .timeline-step {
                flex: none;
                margin-bottom: 2rem;
              }
            }
          `}
        </style>
      </div>

      {/* Location Map */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "1rem" }}>Location Map</h2>
        <iframe
          title="Wedding Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799148865!2d-74.25986768886507!3d40.69767006348507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzQ2LjAiTiA3NMKwMTUnMjkuMCJX!5e0!3m2!1sen!2sus!4v1693985858574!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default EventDetails;
