import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Why', href: '#why' },
    { name: 'Programs', href: '#programs' },
    { name: 'Features', href: '#features' },
    { name: 'For Parents', href: '#parents' },
    { name: 'FAQ', href: '#faq' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                {/* Logo Icon - Leaf/Brain Design */}
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-400 to-green-400 rounded-xl transform rotate-12"></div>
                  <div className="absolute inset-1 bg-gradient-to-br from-purple-600 to-green-500 rounded-lg transform -rotate-6"></div>
                  <div className="flex absolute inset-2 justify-center items-center bg-white rounded-md">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                {/* Logo Text */}
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  Topmind Care
                </span>
              </div>
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
            <button className="px-8 py-3 text-base font-semibold text-white bg-purple-600 rounded-xl shadow-md transition-all duration-300 transform hover:bg-purple-700 hover:scale-105 hover:shadow-lg">
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
              <button className="px-8 py-3 w-full text-base font-semibold text-white bg-purple-600 rounded-xl transition-all duration-300 hover:bg-purple-700">
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
