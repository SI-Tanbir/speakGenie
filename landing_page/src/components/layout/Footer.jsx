import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Left Column: Brand and Copyright */}
          <div className="space-y-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="overflow-hidden relative w-10 h-10 bg-gradient-to-br from-green-300 via-blue-300 to-purple-400 rounded-lg">
                <div className="grid absolute inset-0 grid-cols-2 grid-rows-2">
                  <div className="bg-green-300"></div>
                  <div className="bg-blue-300"></div>
                  <div className="bg-purple-400"></div>
                  <div className="bg-purple-500"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-800">Topmind Care</span>
            </div>
            
            {/* Tagline */}
            <p className="text-sm text-gray-600">
              Mindfulness for growing minds.
            </p>
            
            {/* Copyright */}
            <p className="text-sm text-gray-600">
              © 2025 Mindery Kids.
            </p>
          </div>

          {/* Middle Column: Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800">Contact</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-600 transition-colors hover:text-purple-700">
                Instagram
              </a>
              <a href="#" className="text-purple-600 transition-colors hover:text-purple-700">
                YouTube
              </a>
              <a href="#" className="text-purple-600 transition-colors hover:text-purple-700">
                X
              </a>
            </div>
          </div>

          {/* Right Column: Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800">Legal</h3>
            <div className="flex items-center space-x-2">
              <a href="#" className="text-purple-600 transition-colors hover:text-purple-700">
                Privacy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-purple-600 transition-colors hover:text-purple-700">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
