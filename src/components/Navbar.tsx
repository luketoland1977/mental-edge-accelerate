
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react'; // Example icon

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-brand-blue font-heading">
          <Brain className="w-8 h-8 mr-2" />
          The Mental Lab
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/meet-coach-c" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">Services</Link>
          <Link to="/questionnaire" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">Questionnaire</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
