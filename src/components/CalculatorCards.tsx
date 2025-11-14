import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const calculators = [
  {
    title: "Purchase Savings Calculator",
    description: "Compare financing vs. cash purchase and find hidden savings",
    icon: DollarSign,
    popular: true,
    color: "text-primary",
  },
  {
    title: "Lease vs Buy Calculator",
    description: "Real-time comparison with tax implications for both options",
    icon: Calculator,
    popular: false,
    color: "text-accent",
  },
  {
    title: "EV Cost Calculator",
    description: "Total cost of ownership including incentives and fuel savings",
    icon: Zap,
    popular: false,
    color: "text-success",
  },
  {
    title: "Auto Loan Calculator",
    description: "Calculate payments with current Bank of Canada rates",
    icon: TrendingUp,
    popular: false,
    color: "text-accent",
  },
];

export const CalculatorCards = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Choose Your Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CRA-level tax precision with Tesla-level interface polish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {calculators.map((calc, index) => (
            <Card
              key={index}
              className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              {calc.popular && (
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 ${calc.color}`}>
                  <calc.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {calc.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {calc.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  Launch Calculator
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
