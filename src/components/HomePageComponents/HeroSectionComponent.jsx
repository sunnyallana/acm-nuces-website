import React from 'react';
import WavyBackground from './WavyBackground';
import { AuroraBackground } from './AuroraBackground';

export default function HeroSectionComponent() {
    return (
        // <AuroraBackground>
        //     <div className="flex flex-col items-center justify-center text-black">
        //         <h1 className="text-4xl md:text-6xl font-bold mb-4">
        //             Welcome to ACM NUCES
        //         </h1>
        //         <p className="text-lg md:text-xl mb-6 text-center max-w-xl">
        //             Join us to explore technology, enhance your skills, and connect with like-minded individuals.
        //         </p>
        //         <a
        //             href="/learn-more"
        //             className="px-6 py-3 bg-[#257fb5] hover:bg-[#0b466d] text-white font-semibold rounded-lg transition duration-200"
        //         >
        //             Learn More
        //         </a>
        //     </div>
        // </AuroraBackground>
        <WavyBackground className="flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to ACM NUCES
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center max-w-xl">
                Join us to explore technology, enhance your skills, and connect with like-minded individuals.
            </p>
            <a
                href="/learn-more"
                className="px-6 py-3 bg-[#257fb5] hover:bg-[#0b466d] text-white font-semibold rounded-lg transition duration-200"
            >
                Learn More
            </a>
        </WavyBackground>
    );
}