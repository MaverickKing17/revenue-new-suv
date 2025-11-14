import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-highway-traffic-from-above-1945-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
          Know Your Real Payment
          <br />
          <span className="text-primary">Before the Dealer Does</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Engineered Clarity. Zero Bias. Maximum Savings.
          <br />
          Canada's Premium Real-Time Car Buying Calculator Suite
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          Start Calculating - It's Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
