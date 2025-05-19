
import React from 'react';
import CallToActionButton from '@/components/CallToActionButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: "Mindset Check-In – 1 Session",
    price: "$125",
    duration: "50 minutes",
    description: "For current or returning clients. This session is designed to refresh, reset, or prepare mentally for key moments. We’ll focus on your current challenges and give you tools to move forward with clarity.",
    features: [
      "Google Meet, Zoom, Facetime",
      "Availability: Only show certain days/times if needed",
      "Reminders: 24 hrs + 1 hr before (email or SMS)"
    ],
    calendlyLink: "#", // Placeholder
  },
  {
    title: "5-Session Bundle – Build Your Base",
    price: "$575",
    duration: "5x 50-minute sessions",
    description: "This package is ideal for athletes who want to build strong mental performance habits. Includes 5 one-on-one sessions covering goal setting, focus, confidence, resilience, and pre-performance routines.",
    features: [
      "Flexible scheduling (use a Calendly “Coupon Code” or private link after payment)",
      "Booking Note: After purchasing, you’ll receive a private link to schedule your sessions at your convenience."
    ],
    calendlyLink: "#", // Placeholder
  },
  {
    title: "12-Session Program – Mental Gains Mastery",
    price: "$1250",
    duration: "12x 50-minute sessions",
    description: "This 12-session mental training program is for committed athletes ready to transform how they think, lead, and perform. We’ll dive deep into your sport psychology, create a custom mindset plan, and build the habits that unlock elite performance.",
    features: [
      "Manual intake + private link (for higher commitment, better control) or package sale with private link",
      "***AS PART OF BOOKING TO BE COMPLETE CLIENT NEEDS TO FILL OUT QUESTIONNAIRE FORM***"
    ],
    calendlyLink: "#", // Placeholder
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-heading text-slate-800 mb-4">Coaching Services & Booking</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto" id="booking">
          Invest in your mental game. Choose a package below or book a free consultation to discuss your needs.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-brand-blue">{service.title}</CardTitle>
              <CardDescription className="text-xl font-semibold text-slate-700 pt-1">{service.price} <span className="text-sm font-normal text-slate-500">/ {service.duration}</span></CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <CallToActionButton href={service.calendlyLink} variant="primary" className="w-full">
                Book Now / Learn More
              </CallToActionButton>
            </CardFooter>
          </Card>
        ))}
      </div>

      <section className="bg-slate-100 p-8 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold font-heading text-slate-800 mb-4">Secure Booking & Calendar Sync</h2>
        <p className="text-slate-700 mb-4 max-w-xl mx-auto">
          I use professional scheduling tools like Calendly to ensure a seamless booking experience. These tools integrate directly with Google Calendar, handle payments securely (via Stripe/PayPal for packages), send automated reminders, and manage time zone adjustments.
        </p>
        <p className="text-slate-700 font-semibold">
          To set up your first <span className="text-brand-blue">Free Consultation</span>, please click the button below.
        </p>
        <CallToActionButton href="#" variant="primary" className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-slate-800">
            Book a Free Consultation
        </CallToActionButton>
      </section>
    </div>
  );
};

export default ServicesPage;
