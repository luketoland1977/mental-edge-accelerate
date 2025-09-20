import React from 'react';
import CallToActionButton from '@/components/CallToActionButton';
import neuralBackground from '@/assets/neural-background.jpg';
import { Trophy, Target, Dumbbell, Medal, Focus, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section 
        className="py-20 md:py-32 relative text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.8), rgba(79, 70, 229, 0.8)), url(${neuralBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            We Train Families, Not Just Athletes
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-300">
            Mental Performance Coaching for Young Athletes & Their Parents
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Elite performance isn't just physical — it starts with the mind. At The Mental Lab, we believe the athletes who truly excel have parents who understand how to be part of the mental performance solution.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
            "The Mental Performance Coach Who Makes Parents Part of the Solution"
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <CallToActionButton to="/meet-coach-c" variant="primary" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
              Learn About Our Approach
            </CallToActionButton>
            <CallToActionButton to="/services" variant="secondary" className="w-full sm:w-auto bg-white text-sky-600 border-sky-600 hover:bg-sky-50">
              Family Coaching Programs
            </CallToActionButton>
            <CallToActionButton to="/questionnaire" variant="primary" className="w-full sm:w-auto">
              Get Started Today
            </CallToActionButton>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">Sound Familiar?</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">These are the challenges we hear from families every day</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Your Athlete Has the Talent...</h3>
              <p className="text-slate-600">They dominate in practice, work harder than anyone, and have all the physical skills. But when it matters most - in competition - something holds them back.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">You Want to Help...</h3>
              <p className="text-slate-600">As a parent, you see their potential and want to support their mental game. But everything you try seems to create more pressure instead of confidence.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Traditional Coaching Isn't Enough</h3>
              <p className="text-slate-600">Technical skills and physical training can only take them so far. At higher levels, mental fitness separates good athletes from great ones.</p>
            </div>
          </div>
          <div className="mt-12 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">The missing piece isn't more physical training.</h3>
            <p className="text-lg">It's a family approach to mental performance.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-heading text-slate-800 mb-8">Why Choose The Mental Lab?</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              What sets us apart is the combination of hands-on coaching experience and a deep foundation in sport psychology. We understand the unique pressures athletes face — the mental blocks, the nerves, the weight of expectation — and we know how to guide them through it.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              But here's what makes The Mental Lab truly different: <strong>We work with the entire family system</strong> because we've learned that the athletes who truly excel have parents who understand how to be part of the mental performance solution.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Working with us means gaining practical tools to stay focused, confident, and resilient, both on the field and in life — for both <strong>athletes AND their parents</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mental Strength Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-slate-800 mb-4">Building Mental Strength for Success</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">Success in sports isn't just physical — it's deeply mental. We help athletes AND their families train the three essential skills to build a winning mindset:</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Focus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Focus</h3>
              <p className="text-slate-600">Staying mentally sharp and present, even in high-pressure moments. We teach athletes how to maintain concentration while helping parents create distraction-free support.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Resilience</h3>
              <p className="text-slate-600">Learning to bounce back from failure and using setbacks as fuel for growth. Both athletes and parents learn healthy responses to disappointment and mistakes.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-blue mb-3">Energy Management</h3>
              <p className="text-slate-600">Transforming nervousness and anxiety into performance-ready energy. Families work together to channel pre-game nerves productively instead of fighting them.</p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-brand-blue text-white rounded-lg max-w-4xl mx-auto">
            <p className="text-lg font-semibold">These skills aren't just theory — they're what we've taught and applied directly with athletes who've gone on to achieve major milestones, supported by parents who became their greatest mental performance assets.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;