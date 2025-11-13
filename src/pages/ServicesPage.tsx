import React from 'react';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Target, Trophy } from 'lucide-react';
const services = [{
  title: "Mindset Check-In – 1 Session",
  price: "$125",
  duration: "50 minutes",
  description: "For current or returning clients. This session is designed to refresh, reset, or prepare mentally for key moments. We'll focus on your current challenges and give you tools to move forward with clarity.",
  features: ["Google Meet, Zoom, Facetime", "Availability: Only show certain days/times if needed", "Reminders: 24 hrs + 1 hr before (email or SMS)"],
  calendlyLink: "#",
  // Placeholder
  icon: Clock
}, {
  title: "5-Session Bundle – Build Your Base",
  price: "$575",
  duration: "5x 50-minute sessions",
  description: "This package is ideal for athletes who want to build strong mental performance habits. Includes 5 one-on-one sessions covering goal setting, focus, confidence, resilience, and pre-performance routines.",
  features: ["Flexible scheduling (use a Calendly \"Coupon Code\" or private link after payment)", "Booking Note: After purchasing, you'll receive a private link to schedule your sessions at your convenience."],
  calendlyLink: "#",
  // Placeholder
  icon: Target
}, {
  title: "12-Session Program – Mental Gains Mastery",
  price: "$1250",
  duration: "12x 50-minute sessions",
  description: "This 12-session mental training program is for committed athletes ready to transform how they think, lead, and perform. We'll dive deep into your sport psychology, create a custom mindset plan, and build the habits that unlock elite performance.",
  features: ["Manual intake + private link (for higher commitment, better control) or package sale with private link", "***AS PART OF BOOKING TO BE COMPLETE CLIENT NEEDS TO FILL OUT QUESTIONNAIRE FORM***"],
  calendlyLink: "#",
  // Placeholder
  icon: Trophy
}, {
  title: "20-Session Elite Package",
  price: "$1999",
  duration: "20x 50-minute sessions",
  description: "Our most comprehensive mental training package for serious athletes committed to sustained excellence. This program provides extended support for complete mental performance transformation with ongoing accountability and advanced mental skills development.",
  features: ["Premium support with extended engagement", "Custom mental training plan", "Progress tracking and adjustments throughout the program", "***AS PART OF BOOKING TO BE COMPLETE CLIENT NEEDS TO FILL OUT QUESTIONNAIRE FORM***"],
  calendlyLink: "#",
  icon: CheckCircle
}];
const ServicesPage: React.FC = () => {
  return <div className="container mx-auto px-4 sm:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-heading text-slate-800 mb-4">Coaching Services & Booking</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto" id="booking">
          Invest in your mental game. Choose a package below or book a free consultation to discuss your needs.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map(service => <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <CardTitle className="font-heading text-2xl text-brand-blue">{service.title}</CardTitle>
              <CardDescription className="text-xl font-semibold text-slate-700 pt-1">{service.price} <span className="text-sm font-normal text-slate-500">/ {service.duration}</span></CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
              <p className="text-sm text-muted-foreground italic">Available virtually or in person</p>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <CallToActionButton href={service.calendlyLink} variant="primary" className="w-full">
                Book Now / Learn More
              </CallToActionButton>
              <div className="text-center w-full space-y-1">
                <p className="text-sm text-muted-foreground font-medium">Contact to book a package:</p>
                <p className="text-sm text-foreground">📞 <a href="tel:8084287699" className="hover:text-accent transition-colors">808-428-7699</a></p>
                <p className="text-sm text-foreground">✉️ <a href="mailto:info@mentallab.net" className="hover:text-accent transition-colors">info@mentallab.net</a></p>
              </div>
            </CardFooter>
          </Card>)}
      </div>

      
    </div>;
};
export default ServicesPage;