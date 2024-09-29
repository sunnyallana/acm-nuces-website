import React, { useEffect, useState } from "react";
import Sponsor1 from "../../assets/images/sponsors/sponsor1.png";
import Sponsor2 from "../../assets/images/sponsors/sponsor2.png";
import Sponsor3 from "../../assets/images/sponsors/sponsor3.png";
import Sponsor4 from "../../assets/images/sponsors/sponsor4.png";
import Sponsor5 from "../../assets/images/sponsors/sponsor5.png";
import Sponsor6 from "../../assets/images/sponsors/sponsor6.png";
import Sponsor7 from "../../assets/images/sponsors/sponsor7.png";
import Sponsor8 from "../../assets/images/sponsors/sponsor8.png";

const Sponsor = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const sponsors = [
    Sponsor1,
    Sponsor2,
    Sponsor3,
    Sponsor4,
    Sponsor5,
    Sponsor6,
    Sponsor7,
    Sponsor8,
  ];

  useEffect(() => {
    const imgPromises = sponsors.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve; // Resolve when the image is loaded
      });
    });

    Promise.all(imgPromises).then(() => {
      setImagesLoaded(true); // Set state to true when all images are loaded
    });
  }, []);

  const scrollContainerStyle = {
    display: 'flex',
    animation: 'scroll 30s linear infinite',
    whiteSpace: 'nowrap',
  };

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } // Adjust for duplicated images
          }

          .sponsor-image {
            width: 96px;
            height: 96px;
            object-fit: contain;
            margin: 0 10px;
          }

          .placeholder {
            width: 96px;
            height: 96px;
            margin: 0 10px;
            background-color: #f0f0f0; /* Light gray placeholder */
          }
        `}
      </style>

      <div style={scrollContainerStyle}>
        {!imagesLoaded
          ? Array(8).fill(0).map((_, index) => (
              <div key={index} className="placeholder" />
            ))
          : sponsors.map((sponsor, index) => (
              <img
                key={index}
                src={sponsor}
                alt={`sponsor-${index}`}
                className="sponsor-image"
                loading="lazy"
              />
            ))}
        {/* Duplicate sponsors for seamless scrolling */}
        {imagesLoaded && sponsors.map((sponsor, index) => (
          <img
            key={index + sponsors.length}
            src={sponsor}
            alt={`sponsor-${index + sponsors.length}`}
            className="sponsor-image"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;