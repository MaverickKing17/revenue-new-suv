import { Hero } from "@/components/Hero";
import { CalculatorCards } from "@/components/CalculatorCards";
import { FeatureCards } from "@/components/FeatureCards";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CalculatorCards />
      <FeatureCards />
      <LeadMagnet />
      <Footer />
    </div>
  );
};

export default Index;
