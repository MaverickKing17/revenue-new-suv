import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay (60-70% opacity as per PDF requirements) */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content Overlay - PRESERVE EXISTING DESIGN */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 max-w-7xl mx-auto">
        
        {/* Main Heading - EXACT EXISTING TEXT */}
        <h1 className="text-center mb-6">
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            Know Your Real Payment
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-500">
            Before the Dealer Does
          </div>
        </h1>

        {/* Subheading - PRESERVE EXISTING */}
        <p className="text-white/90 text-xl md:text-2xl text-center max-w-3xl mb-4">
          Engineered Clarity. Zero Bias. Maximum Savings.
        </p>
        
        <p className="text-white/70 text-lg text-center mb-10">
          Canada's Premium Real-Time Car Buying Calculator Suite
        </p>

        {/* CTA Button - PRESERVE EXISTING ORANGE COLOR */}
        <button className="group bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
          Start Calculating - It's Free
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
