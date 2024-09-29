import React from "react";
import Sponsor1 from "../../assets/images/sponsors/sponsor1.png";
import Sponsor2 from "../../assets/images/sponsors/sponsor2.png";
import Sponsor3 from "../../assets/images/sponsors/sponsor3.png";
import Sponsor4 from "../../assets/images/sponsors/sponsor4.png";
import Sponsor5 from "../../assets/images/sponsors/sponsor5.png";
import Sponsor6 from "../../assets/images/sponsors/sponsor6.png";
import Sponsor7 from "../../assets/images/sponsors/sponsor7.png";
import Sponsor8 from "../../assets/images/sponsors/sponsor8.png";

const Sponsor = () => {
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

  const scrollContainerStyle = {
    display: 'flex',
    animation: 'scroll 30s linear infinite',
    whiteSpace: 'nowrap',
  };

  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%); // Adjust for the duplicated images
      }
    }
  `;

  // Create a style element for keyframes
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div style={scrollContainerStyle}>
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor}
            alt={`sponsor-${index}`}
            style={{ width: '96px', height: '96px', objectFit: 'contain', margin: '0 10px' }}
            loading="lazy"
          />
        ))}
        {/* Duplicate sponsors for seamless scrolling */}
        {sponsors.map((sponsor, index) => (
          <img
            key={index + sponsors.length}
            src={sponsor}
            alt={`sponsor-${index + sponsors.length}`}
            style={{ width: '96px', height: '96px', objectFit: 'contain', margin: '0 10px' }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;