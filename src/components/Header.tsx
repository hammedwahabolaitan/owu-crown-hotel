
import { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Events', href: '#events' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-hotel-navy">
              Owucrown Hotel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-hotel-charcoal hover:text-hotel-gold transition-colors duration-300 font-inter"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+234" className="flex items-center text-hotel-charcoal hover:text-hotel-gold transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-inter">Call Us</span>
            </a>
            <Button className="bg-hotel-gold hover:bg-hotel-gold-dark text-hotel-navy font-inter font-medium">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-hotel-charcoal" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-hotel-charcoal hover:text-hotel-gold transition-colors duration-300 font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <a href="tel:+234" className="flex items-center text-hotel-charcoal hover:text-hotel-gold transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-inter">Call Us</span>
                </a>
                <Button className="bg-hotel-gold hover:bg-hotel-gold-dark text-hotel-navy font-inter font-medium w-full">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
