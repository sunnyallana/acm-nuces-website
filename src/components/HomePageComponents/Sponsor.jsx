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

  return (
    <div className="flex overflow-hidden w-full">
      <div className="scroll-container flex space-x-10 animate-scroll">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor}
            alt={`sponsor-${index}`}
            className="w-24 h-24 object-contain"
          />
        ))}
        {/* Duplicate the items to create the infinite scroll effect */}
        {sponsors.map((sponsor, index) => (
          <img
            key={index + sponsors.length}
            src={sponsor}
            alt={`sponsor-${index + sponsors.length}`}
            className="w-24 h-24 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
