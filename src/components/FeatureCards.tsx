import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Eye } from "lucide-react";

const features = [
  {
    title: "CRA-Level Tax Precision",
    description: "Real-time calculations using official Canada Revenue Agency tax rates, updated automatically with every federal and provincial change.",
    icon: Shield,
    color: "text-primary",
  },
  {
    title: "Official Data Sources",
    description: "Bank of Canada interest rates, Natural Resources Canada fuel economy data, and provincial tax authorities - no guesswork, just facts.",
    icon: Database,
    color: "text-accent",
  },
  {
    title: "Zero Bias Transparency",
    description: "No dealer markups. No hidden fees. No affiliate pressure. Just pure math showing you the real cost of vehicle ownership.",
    icon: Eye,
    color: "text-success",
  },
];

export const FeatureCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why NewSUV.net is Different
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built by Canadians, for Canadians. Every number verified. Every calculation trusted.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 bg-card"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
