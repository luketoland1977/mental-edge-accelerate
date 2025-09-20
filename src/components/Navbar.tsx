import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-brand-blue font-heading">
          <Brain className="w-8 h-8 mr-2" />
          The Mental Lab
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105">Home</Link>
          <Link to="/meet-coach-c" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105">Coaching Services & Booking</Link>
          <Link to="/questionnaire" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105">Questionnaire</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/meet-coach-c" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Coaching Services & Booking
            </Link>
            <Link 
              to="/questionnaire" 
              className="block px-3 py-2 text-gray-700 hover:text-brand-blue hover:bg-gray-50 rounded-md text-base font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Questionnaire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;