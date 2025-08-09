import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

/**
 * Footer Component
 * Displays company information, quick navigation links, resources, and social media icons.
 */
const Footer = () => {
  
  // Smoothly scrolls to the given section ID
  const handleScroll = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">Growly</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Growly is your AI-powered ad creative generator. We help businesses craft
              high-converting ads in seconds—no design or copywriting skills required.
              Boost your ROI with smart automation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 text-primary" />
                <span>ashwany@growly.ai</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 text-primary" />
                <span>+91 856123891</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-3 text-primary" />
                <span>Sector 52, Noida</span>
              </div>
            </div>
          </div>

        {/* Quick Links*/}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: 'Home', target: 'hero' },
              { label: 'How It Works', target: 'how-it-works' },
              { label: 'Features', target: 'features' },
              { label: 'Contact', target: 'contact' }
            ].map(link => (
              <li key={link.label}>
                <button
                  onClick={() => handleScroll(link.target)}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">

            {/* Copyright */}
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Growly. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { icon: <Facebook size={18} />, label: 'Facebook' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={`Follow us on ${social.label}`}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
