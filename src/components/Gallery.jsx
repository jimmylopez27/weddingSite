import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1581291519195-ef11498d1cf0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1612831455543-9c43e9b0ed85?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80",
];

const Gallery = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Gallery</h1>

      <div className="masonry-gallery">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="masonry-item"
            style={{
              marginBottom: "10px",
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              style={{
                width: "100%",
                display: "block",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </div>

      <style>
        {`
          .masonry-gallery {
            column-count: 3;
            column-gap: 10px;
          }
          .masonry-item img:hover {
            transform: scale(1.05);
          }

          /* Responsive columns */
          @media (max-width: 1024px) {
            .masonry-gallery {
              column-count: 2;
            }
          }
          @media (max-width: 600px) {
            .masonry-gallery {
              column-count: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
