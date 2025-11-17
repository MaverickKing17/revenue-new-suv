const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* NEW LOGO - Replace old logo */}
        <div className="flex items-center">
          <img 
            src="/newsuv-logo.png" 
            alt="NewSUV.net" 
            className="h-10 md:h-12"
          />
        </div>

        {/* Navigation - PRESERVE EXISTING */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#calculators" className="text-gray-700 hover:text-red-500 transition-colors">
            Calculators
          </a>
          <a href="#about" className="text-gray-700 hover:text-red-500 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-red-500 transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
