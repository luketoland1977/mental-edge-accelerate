
import React from 'react';
import CallToActionButton from '@/components/CallToActionButton';

const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Unlock Your Mental Edge
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Elite performance isn’t just physical — it starts with the mind. Whether you're an athlete, coach, or team, I help you build the mental toughness to thrive under pressure. In sport and in life, your <span className="font-semibold text-yellow-300">Effort</span>, <span className="font-semibold text-yellow-300">Thought</span>, and <span className="font-semibold text-yellow-300">Attitude</span> determine how fast you reach your peak.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            With Coach C, you'll master your mindset and gain the mental edge — arriving at top performance faster than the competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <CallToActionButton to="/services#booking" variant="primary" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-800">
              Book a Free Consultation
            </CallToActionButton>
            <CallToActionButton to="/services" variant="secondary" className="w-full sm:w-auto bg-white text-sky-600 border-sky-600 hover:bg-sky-50">
              Explore Services
            </CallToActionButton>
            <CallToActionButton to="/questionnaire" variant="primary" className="w-full sm:w-auto">
              Questionnaire
            </CallToActionButton>
          </div>
        </div>
      </section>

      {/* Placeholder for additional sections like "How it works" or "Benefits" */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-slate-800 mb-12">Why Mental Coaching?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Sharpen Focus</h3>
              <p className="text-slate-600">Train your mind to stay present and perform under pressure, minimizing distractions and maximizing concentration when it counts.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Build Resilience</h3>
              <p className="text-slate-600">Learn to bounce back from setbacks, viewing challenges as opportunities for growth and strengthening your resolve.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Manage Energy</h3>
              <p className="text-slate-600">Convert nervousness and anxiety into performance-enhancing energy, maintaining composure and optimizing your physical state.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
