import React, { useState } from 'react';

const Header = ({ onStartFreeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* Multi-layered Logo */}
                <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 to-green-500 rounded-xl shadow-lg lg:w-12 lg:h-12">
                  {/* Inner Layer */}
                  <div className="flex absolute inset-1 justify-center items-center bg-white rounded-lg">
                    <div className="flex justify-center items-center w-6 h-6 bg-gradient-to-br from-purple-400 to-green-400 rounded-lg lg:w-8 lg:h-8">
                      <span className="text-sm font-bold text-white lg:text-lg">T</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Logo Text */}
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                Topmind Care
              </span>
            </div>
          </div>

          <div className='flex gap-5'>
            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-10 lg:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-1 py-2 text-base font-bold text-[#7b39ed] transition-colors duration-200 hover:text-purple-600 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center lg:flex">
              <button 
                onClick={onStartFreeClick}
                className="px-8 py-3 text-base font-semibold text-white bg-purple-600 rounded-xl shadow-md transition-all duration-300 transform hover:bg-purple-700 hover:scale-105 hover:shadow-lg"
              >
                Start Free
              </button>
            </div>
          </div>
        
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 rounded-lg transition-colors duration-200 hover:text-purple-600 hover:bg-purple-50"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 rounded-lg transition-colors duration-200 hover:text-purple-600 hover:bg-purple-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Mobile CTA Button */}
            <div className="px-2 pt-4 pb-2">
              <button 
                onClick={onStartFreeClick}
                className="px-8 py-3 w-full text-base font-semibold text-white bg-purple-600 rounded-xl transition-all duration-300 hover:bg-purple-700"
              >
                Start Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
