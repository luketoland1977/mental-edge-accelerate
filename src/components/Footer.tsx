import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import CallToActionButton from './CallToActionButton'; // Import the component
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-heading mb-4 text-white">Ready to Get Started?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Your journey to peak performance begins today. Let's work together to build the mental edge that separates the winners from the rest.
          We'd love to chat and discuss how we can take your mindset and performance to the next level. Click below to schedule a free consultation or reach out for more information.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-8">
           <CallToActionButton href="/services#booking" variant="primary" className="bg-yellow-400 hover:bg-yellow-500 text-slate-800">
             Book a Free Consultation
           </CallToActionButton>
           <CallToActionButton to="/services" variant="secondary" className="bg-white text-brand-blue border-brand-blue hover:bg-slate-100">
             Explore Services
           </CallToActionButton>
           <CallToActionButton to="/questionnaire" variant="primary">
             Questionnaire
           </CallToActionButton>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://instagram.com/thementallab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Instagram size={28} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="mailto:info@thementallab.com" className="hover:text-white transition-colors">
            <Mail size={28} />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <div className="text-sm text-slate-400 space-y-1">
          <p>Email: info@thementallab.com</p>
          <p>Serving families with mental performance coaching for young athletes and their parents</p>
        </div>
        <p className="text-sm text-slate-400 mt-2">
          &copy; {new Date().getFullYear()} The Mental Lab. All rights reserved.
          {/* Placeholder for Legal and Privacy Info */}
          {/* <Link to="/privacy-policy" className="ml-4 hover:underline">Privacy Policy</Link> */}
          {/* <Link to="/terms-of-service" className="ml-4 hover:underline">Terms of Service</Link> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;