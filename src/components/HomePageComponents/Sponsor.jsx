import React from 'react';
import Sponsor1 from "../../assets/sponsor1.png"
import Sponsor2 from "../../assets/sponsor2.png"
import Sponsor3 from "../../assets/sponsor3.png"
import Sponsor4 from "../../assets/sponsor4.png"
import Sponsor5 from "../../assets/sponsor5.png"
import Sponsor6 from "../../assets/sponsor6.png"

const sponsorLogos = [
  { id: 1, name: 'Company A', logo: Sponsor1 },
  { id: 2, name: 'Company B', logo: Sponsor2 },
  { id: 3, name: 'Company C', logo: Sponsor3 },
  { id: 4, name: 'Company D', logo: Sponsor4 },
  { id: 5, name: 'Company E', logo: Sponsor5 },
  { id: 6, name: 'Company F', logo: Sponsor6 },
];

const Sponsor = () => {
  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-extrabold text-xl text-center lg:text-4xl text-[#006984] mb-8">
          Our Previous Sponsors
        </h2>
        <div className="relative">
          <div className="flex overflow-x-hidden">
            <div className="flex animate-scroll">
              {[...sponsorLogos, ...sponsorLogos].map((sponsor, index) => (
                <div key={`${sponsor.id}-${index}`} className="mx-4 flex-shrink-0">
                  <div className="w-40 h-16 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;