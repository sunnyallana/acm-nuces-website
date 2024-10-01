import WavyBackground from './WavyBackground';

export default function HeroSectionComponent() {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')"}}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            NUCES Khi ACM Student Chapter
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
        </div>
      </div>
    )
  } 