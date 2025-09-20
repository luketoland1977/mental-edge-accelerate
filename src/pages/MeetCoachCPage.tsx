import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToActionButton from '@/components/CallToActionButton';
import { Award, BookOpen, GraduationCap, Users, Zap, Target, Medal, Trophy } from 'lucide-react';

const MeetCoachCPage: React.FC = () => {
  const ctaButtons = (
    <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 mt-8">
      <CallToActionButton to="/services#booking" variant="primary">Book a Free Consultation</CallToActionButton>
      <CallToActionButton to="/services" variant="secondary">Explore Services</CallToActionButton>
      <CallToActionButton to="/questionnaire" variant="primary">Questionnaire</CallToActionButton>
    </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-heading text-slate-800 mb-4">🧠 About The Mental Lab</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover the philosophy, experience, and transformative approach behind The Mental Lab.</p>
      </header>

      <Tabs defaultValue="approach" className="w-full">
        <TabsList className="grid w-full grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 mb-8 h-auto p-1 bg-transparent">
          <TabsTrigger value="approach" className="border border-slate-900">Our Approach</TabsTrigger>
          <TabsTrigger value="philosophy" className="border border-slate-900">Why The Mental Lab?</TabsTrigger>
          <TabsTrigger value="results" className="border border-slate-900">The Transformation</TabsTrigger>
          <TabsTrigger value="bio" className="border border-slate-900">Our Story</TabsTrigger>
          <TabsTrigger value="education" className="border border-slate-900">Credentials</TabsTrigger>
          {/* <TabsTrigger value="testimonials">Testimonials</TabsTrigger> */}
        </TabsList>

        <TabsContent value="approach" className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold font-heading text-brand-blue mb-4">Our Approach: Building Mental Strength for Success</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            In our coaching, we focus on the essential skills every athlete needs to develop a competitive mental edge:
          </p>
          <ul className="list-none space-y-4 mb-6">
            <li className="flex items-start"><Target className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span><strong className="text-slate-800">Focus:</strong> Training the mind to stay sharp, even in high-pressure situations.</span></li>
            <li className="flex items-start"><Medal className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span><strong className="text-slate-800">Resilience:</strong> Bouncing back from failure, making it a stepping stone for success.</span></li>
            <li className="flex items-start"><Zap className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" /><span><strong className="text-slate-800">Energy Management:</strong> Converting nervousness and anxiety into performance-enhancing energy.</span></li>
          </ul>
          <p className="text-slate-700 mb-4 leading-relaxed">
            These are skills we've been taught, but more importantly, they are skills we've applied on the field with athletes who have gone on to achieve success. Our goal is to help athletes master their mental game, so they can reach their fullest potential.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We've worked with athletes of all ages — from middle school players to collegiate athletes, and with coaches and parents, too. The mental game is not just for athletes, but for everyone around them.
          </p>
          {ctaButtons}
        </TabsContent>

        <TabsContent value="philosophy" className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold font-heading text-brand-blue mb-4">Why Choose The Mental Lab? Our Philosophy – What Sets Us Apart</h2>
          <h3 className="text-xl font-semibold font-heading text-slate-700 mb-3">Mindset is Everything</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            What sets us apart is our combination of hands-on coaching experience and a solid foundation in sport psychology. We understand the unique pressures athletes face and the mental blocks that can hinder their performance. More importantly, we know how to guide athletes through those challenges and unlock the mental strength they already possess.
          </p>
          <p className="text-slate-700 leading-relaxed">
            When you work with The Mental Lab, you'll gain tools that will help you stay focused, confident, and resilient, both on the field and in life.
          </p>
          {ctaButtons}
        </TabsContent>

        <TabsContent value="results" className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold font-heading text-brand-blue mb-4">The Transformation – Results You Can Expect</h2>
          <h3 className="text-xl font-semibold font-heading text-slate-700 mb-3">Transform Your Mindset, Transform Your Game</h3>
          <p className="text-slate-700 mb-4 leading-relaxed">
            It's not just about building the perfect pre-game routine. It's about mastering your mind to stay focused under pressure, bounce back from mistakes, and perform at your best when it matters most. In our coaching, you'll learn:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 pl-4">
            <li>Mental preparation strategies</li>
            <li>How to handle high-pressure moments</li>
            <li>How to consistently perform at your peak</li>
            <li>The tools to turn setbacks into opportunities for growth</li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            Our clients consistently see improvements in both mental clarity and performance—leading to more wins, better focus, and a stronger overall mindset.
          </p>
          {ctaButtons}
        </TabsContent>

        <TabsContent value="bio" className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold font-heading text-brand-blue mb-4">About The Mental Lab: Our Journey</h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            The Mental Lab was founded by a coach who has been immersed in the world of sports for over 20 years — as a college basketball player, assistant high school coach, and middle school head coach.
          </p>
          <p className="text-slate-700 mb-4 leading-relaxed">
            Throughout our coaching history, we saw how mental blocks often stood between athletes and their potential. We've coached:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4 pl-4">
            <li>Boys' basketball teams to three straight championship appearances</li>
            <li>Girls' teams to undefeated seasons and league titles</li>
            <li>Middle schoolers to multiple finals in just three years</li>
          </ul>
          <p className="text-slate-700 mb-4 leading-relaxed">
            But it was during these moments of competition that we realized something deeper — the need to coach the mental game just as much as the physical one. <strong>And we noticed that the athletes who thrived had parents who knew how to support, not pressure.</strong>
          </p>
          <p className="text-slate-700 leading-relaxed">
            That passion led to earning a Master's in Sport Psychology at the prestigious John F. Kennedy University (now National University). Since then, we've helped athletes in sports like basketball, golf, tennis, baseball, and softball develop the mindset they need to thrive — <strong>while teaching their parents how to be part of the solution.</strong>
          </p>
          {ctaButtons}
        </TabsContent>
        
        <TabsContent value="education" className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold font-heading text-brand-blue mb-4">Credentials & Experience</h2>
           <ul className="list-none space-y-4 text-slate-700 mb-6">
            <li className="flex items-start"><GraduationCap className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" /><span><strong className="text-slate-800">Master's in Sport Psychology</strong> - John F. Kennedy University (now National University)</span></li>
            <li className="flex items-start"><Trophy className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" /><span><strong className="text-slate-800">20+ Years Coaching Experience:</strong> College player, high school assistant, middle school head coach</span></li>
            <li className="flex items-start"><Target className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" /><span><strong className="text-slate-800">Specialization:</strong> Youth athlete mental performance & family systems integration</span></li>
            <li className="flex items-start"><Medal className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" /><span><strong className="text-slate-800">Sports Experience:</strong> Basketball, golf, tennis, baseball, softball, and more</span></li>
          </ul>
          <p className="text-slate-700 leading-relaxed">
            After two decades on the court, The Mental Lab was created to help families build mental toughness together, creating athletes who perform their best when it matters most.
          </p>
          {ctaButtons}
        </TabsContent>

        {/* <TabsContent value="testimonials">
          <h2 className="text-2xl font-bold font-heading text-brand-blue mb-4">Client Success Stories</h2>
          <p className="text-slate-700">Testimonials will be added here soon.</p>
          {ctaButtons}
        </TabsContent> */}
      </Tabs>
    </div>
  );
};

export default MeetCoachCPage;