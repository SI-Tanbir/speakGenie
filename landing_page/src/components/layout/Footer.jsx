const Footer = () => {
  const socialLinks = [
    { name: 'Contact', href: '#contact', icon: '📧' },
    { name: 'Instagram', href: '#instagram', icon: '📷' },
    { name: 'YouTube', href: '#youtube', icon: '📺' },
    { name: 'X', href: '#twitter', icon: '🐦' }
  ];

  const legalLinks = [
    { name: 'Legal', href: '#legal' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-green-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              {/* Logo Text */}
              <span className="text-2xl font-bold">
                Topmind Care
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-6">
              Mindfulness for growing minds. Helping children build focus, kindness, and confidence through engaging meditation experiences.
            </p>
            <p className="text-gray-400 text-sm">
              © 2023 Mindery Kids. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <div className="space-y-4">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                Made with ❤️ for children's mental wellness
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🔒 100% Safe & Secure</span>
              <span>👶 Child-First Design</span>
              <span>📱 Mobile Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
