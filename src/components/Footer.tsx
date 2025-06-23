
import { Instagram, Facebook, Link } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hotel-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-hotel-gold">
              Owucrown Hotel
            </h3>
            <p className="font-inter text-sm mb-4 opacity-90">
              Experience luxury and elegance in the heart of Abeokuta. 
              Your comfort is our commitment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-hotel-gold rounded-full flex items-center justify-center text-hotel-navy hover:bg-hotel-gold-light transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-hotel-gold rounded-full flex items-center justify-center text-hotel-navy hover:bg-hotel-gold-light transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-hotel-gold rounded-full flex items-center justify-center text-hotel-navy hover:bg-hotel-gold-light transition-colors">
                <Link className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li><a href="#rooms" className="opacity-90 hover:text-hotel-gold transition-colors">Rooms & Suites</a></li>
              <li><a href="#dining" className="opacity-90 hover:text-hotel-gold transition-colors">Dining</a></li>
              <li><a href="#events" className="opacity-90 hover:text-hotel-gold transition-colors">Events</a></li>
              <li><a href="#about" className="opacity-90 hover:text-hotel-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="opacity-90 hover:text-hotel-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Services</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li className="opacity-90">24/7 Room Service</li>
              <li className="opacity-90">Concierge Service</li>
              <li className="opacity-90">Airport Transfer</li>
              <li className="opacity-90">Laundry Service</li>
              <li className="opacity-90">Business Center</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Contact</h4>
            <div className="space-y-2 font-inter text-sm">
              <p className="opacity-90">Abeokuta, Ogun State, Nigeria</p>
              <p className="opacity-90">+234 803 XXX XXXX</p>
              <p className="opacity-90">info@owucrownhotel.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-inter text-sm opacity-70">
            © 2024 Owucrown Hotel. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
