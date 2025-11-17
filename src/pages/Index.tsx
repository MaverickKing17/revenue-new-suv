import { ArrowRight, MapPin, Zap, Shield, FileText, TrendingUp, DollarSign, Gauge } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://i.imgur.com/YOUR-LOGO-ID.png" alt="NewSUV.net" className="h-10" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#calculators" className="text-gray-700 hover:text-red-500 transition-colors">Calculators</a>
            <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors">About</a>
            <a href="#resources" className="text-gray-700 hover:text-red-500 transition-colors">Resources</a>
          </nav>
        </div>
      </header>

      {/* Quick Calculator Access Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6 overflow-x-auto">
          <a href="#purchase" className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-500 whitespace-nowrap transition-colors">
            <FileText size={16} />
            Purchase Savings
          </a>
          <a href="#lease" className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-500 whitespace-nowrap transition-colors">
            <TrendingUp size={16} />
            Lease vs Buy
          </a>
          <a href="#loan" className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-500 whitespace-nowrap transition-colors">
            <DollarSign size={16} />
            Auto Loan
          </a>
          <a href="#operating" className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-500 whitespace-nowrap transition-colors">
            <Gauge size={16} />
            Operating Costs
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=900&fit=crop" 
            alt="Luxury car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Credibility Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <span className="text-white text-sm font-medium">
              Canada's Only Real-Time Provincial Tax Calculator Suite
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engineered Clarity for<br />
            Canadian Car Buyers
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Experience unparalleled insight with CRA-level tax precision and real-time provincial tax integration.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Bank of Canada rate tracking updated daily.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 flex items-center gap-3">
              Start Calculating
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Achieve Unparalleled Clarity in Your Financing Decisions
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Engineered with Ultimate Precision. Every calculation backed by official Canadian data sources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="text-red-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Provincial Tax Mastery</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatic HST/GST+PST calculation by postal code. All 13 provincial tax variations handled perfectly.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-red-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Live Data Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank of Canada rates updated daily. Real-time fuel prices and current vehicle incentives.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-red-500" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transparent & Trusted</h3>
              <p className="text-gray-600 leading-relaxed">
                Show all assumptions. Link to data sources. No dealer bias. WCAG 2.1 AA accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Integrated Calculators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Four Integrated Calculators
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 mt-12">
            {/* Calculator 1 */}
            <a href="#purchase" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <FileText className="text-red-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">New Car Purchase Savings</h3>
                  <p className="text-gray-600">Calculate your negotiated savings with provincial tax breakdown</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" size={20} />
              </div>
            </a>

            {/* Calculator 2 */}
            <a href="#lease" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <TrendingUp className="text-red-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Lease vs Buy Calculator</h3>
                  <p className="text-gray-600">Compare lease and purchase options with Canadian terms</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" size={20} />
              </div>
            </a>

            {/* Calculator 3 */}
            <a href="#loan" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <DollarSign className="text-red-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Auto Loan Payment</h3>
                  <p className="text-gray-600">Calculate monthly payments with Bank of Canada rates</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" size={20} />
              </div>
            </a>

            {/* Calculator 4 */}
            <a href="#operating" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-red-500 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <Gauge className="text-red-500 group-hover:text-white transition-colors" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Operating Expenses</h3>
                  <p className="text-gray-600">Estimate annual costs with provincial insurance variations</p>
                </div>
                <ArrowRight className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" size={20} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Proof Band with Stats */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">&lt;1.8s</div>
              <div className="text-gray-600">Calculation Speed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">13</div>
              <div className="text-gray-600">Provincial Tax Systems</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">CRA Accurate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-900 mb-2">Daily</div>
              <div className="text-gray-600">Rate Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=600&fit=crop" 
            alt="Car dealership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Save Thousands?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of Canadian car buyers who use our calculators to negotiate with confidence and clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              Calculate Your Savings
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
              View Our Data Sources
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Legal & Compliance */}
            <div>
              <h3 className="text-white font-bold mb-4">Legal & Compliance</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DMCA Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate Disclosure</a></li>
              </ul>
            </div>

            {/* Trust & Authority */}
            <div>
              <h3 className="text-white font-bold mb-4">Trust & Authority</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Sources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact & Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Calculators */}
            <div>
              <h3 className="text-white font-bold mb-4">Calculators</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Purchase Savings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lease vs Buy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Auto Loan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Operating Costs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog & Insights</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="text-white font-semibold mb-2">Data Sources</h4>
                <p>Tax rates: Canada Revenue Agency • Interest rates: Bank of Canada • Fuel economy: Natural Resources Canada</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Privacy & Security</h4>
                <p>Your calculations are private • No personal data stored • WCAG 2.1 AA compliant</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Accuracy Notice</h4>
                <p>Calculations are estimates. Tax rates correct as of 2025-01-15. Consult professionals before decisions.</p>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              © 2025 NewSUV.net - Canada's Premium Automotive Calculator Suite<br />
              CRA-level tax precision with Tesla-level interface polish
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
