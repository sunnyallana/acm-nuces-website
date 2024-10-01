import WavyBackground from './WavyBackground';

export default function HeroSectionComponent() {
    return (
        <WavyBackground className="flex flex-col items-center justify-center text-white p-4 pl-0  sm:p-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                Welcome to ACM NUCES
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center max-w-xl">
                Join us to explore technology, enhance your skills, and connect with like-minded individuals.
            </p>
            <a
                href="/learn-more"
                className="px-6 py-3 bg-[#227ebd] hover:bg-[#257fb5] text-white font-semibold rounded-lg transition duration-200"
            >
                Learn More
            </a>
        </WavyBackground>
    );
} 