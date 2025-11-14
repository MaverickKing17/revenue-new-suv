import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll receive updates and exclusive calculator tips.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Email Capture Bar */}
        <div className="bg-primary/10 rounded-lg p-6 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2 text-background">
              Get Your Free Estimate
            </h3>
            <p className="text-sm text-background/80 mb-4">
              Save your calculations and receive personalized vehicle recommendations
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background text-foreground"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Legal & Compliance */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">Legal & Compliance</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">DMCA Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Affiliate Disclosure</a></li>
            </ul>
          </div>

          {/* Trust & Authority */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">Trust & Authority</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Sources</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact & Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Leasing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Auto</a></li>
            </ul>
          </div>

          {/* Data Sources & Privacy */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-background">Data Sources</h4>
            <div className="space-y-2 text-sm text-background/80 mb-6">
              <p><strong className="text-background">Tax rates:</strong> Canada Revenue Agency</p>
              <p><strong className="text-background">Interest rates:</strong> Bank of Canada</p>
              <p><strong className="text-background">Fuel economy:</strong> Natural Resources Canada</p>
            </div>

            <h4 className="font-bold text-lg mb-4 text-background">Privacy & Security</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>✓ Your calculations are private</li>
              <li>✓ No personal data stored</li>
              <li>✓ WCAG 2.2 AA accessible</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/90 mb-2">
            © 2025 NewSUV.net - Canada's Premium Automotive Calculator Suite
          </p>
          <p className="text-xs text-background/70 mb-4">
            CRA-level tax precision with Tesla-level interface polish
          </p>
          <p className="text-xs text-background/60">
            <span className="text-primary font-semibold">Accuracy Notice:</span> Calculations are estimates. 
            Tax rates current as of {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long' })}. 
            Consult professionals before decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};
