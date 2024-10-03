import backgroundImage from '../../assets/background-image.jpg';

export default function HeroSectionComponent() {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            NUCES Khi ACM Student Chapter
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center max-w-xl">
            Join us to explore technology, enhance your skills, and connect with like-minded individuals.
          </p>
        </div>
      </div>
    );
}
