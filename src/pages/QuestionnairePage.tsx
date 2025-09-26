
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import CallToActionButton from '@/components/CallToActionButton';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

interface RatingQuestion {
  id: string;
  text: string;
}

interface ProfileQuestion {
  id: string;
  text: string;
  placeholder: string;
}

const effortQuestions: RatingQuestion[] = [
  { id: "e1", text: "I give full effort in practices, not just in games." },
  { id: "e2", text: "I push myself even when I feel tired, frustrated, or behind." },
  { id: "e3", text: "I hold myself accountable when I fall short of a goal." },
  { id: "e4", text: "I train or prepare even when no one is watching." },
  { id: "e5", text: "I consistently aim to improve, even if I'm already performing well." },
];

const thoughtQuestions: RatingQuestion[] = [
  { id: "t1", text: "I stay focused and present under pressure." },
  { id: "t2", text: "I recover quickly after mistakes or losses." },
  { id: "t3", text: "I use positive self-talk to manage nerves or fear." },
  { id: "t4", text: "I visualize success before competitions or big moments." },
  { id: "t5", text: "I actively work on improving my mental game." },
];

const attitudeQuestions: RatingQuestion[] = [
  { id: "a1", text: "I view failure as feedback, not a reason to quit." },
  { id: "a2", text: "I welcome tough coaching or correction." },
  { id: "a3", text: "I lead by example with my mindset and body language." },
  { id: "a4", text: "I stay mentally engaged, even when things aren’t going my way." },
  { id: "a5", text: "I believe I can grow and develop with effort and time." },
];

const profileQuestions: ProfileQuestion[] = [
  { id: "p1", text: "Describe yourself as a player in your sport. What are your strengths? What role do you play on your team or in competition?", placeholder: "Your role, strengths..." },
  { id: "p2", text: "How would teammates or coaches describe your mindset under pressure? Think about game-time, practice, or moments when things didn’t go your way.", placeholder: "Mindset under pressure..." },
  { id: "p3", text: "Describe who you are off the court/field/etc. — outside of your sport. What matters to you? How do you carry yourself in school, work, or life?", placeholder: "You outside of sports..." },
  { id: "p4", text: "What mental or emotional habits do you want to improve the most? (Examples: focus, confidence, bouncing back from mistakes, leadership, etc.)", placeholder: "Areas for improvement..." },
  { id: "p5", text: "Why do you want to strengthen your mindset right now? What’s driving you to improve? Any big goals or challenges ahead?", placeholder: "Your motivation..." },
];

type FormData = {
  // Contact fields
  name: string;
  email: string;
  phone?: string;
  comment?: string;
  // Rating and profile questions
  [key: string]: string | number | undefined;
};


const QuestionnairePage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    
    try {
      // Calculate scores for each section
      const effortScore = effortQuestions.reduce((sum, q) => sum + Number(data[q.id] || 0), 0);
      const thoughtScore = thoughtQuestions.reduce((sum, q) => sum + Number(data[q.id] || 0), 0);
      const attitudeScore = attitudeQuestions.reduce((sum, q) => sum + Number(data[q.id] || 0), 0);
      const totalScore = effortScore + thoughtScore + attitudeScore;

      // Format the data for email
      const emailData = {
        // Contact information
        name: data.name || 'Not provided',
        email: data.email || 'Not provided',
        phone: data.phone || 'Not provided',
        comment: data.comment || 'Not provided',
        // Scores
        effort_score: effortScore,
        thought_score: thoughtScore,
        attitude_score: attitudeScore,
        total_score: totalScore,
        // Rating responses
        effort_responses: effortQuestions.map(q => `${q.text}: ${data[q.id] || 'Not answered'}`).join('\n'),
        thought_responses: thoughtQuestions.map(q => `${q.text}: ${data[q.id] || 'Not answered'}`).join('\n'),
        attitude_responses: attitudeQuestions.map(q => `${q.text}: ${data[q.id] || 'Not answered'}`).join('\n'),
        // Profile responses
        profile_responses: profileQuestions.map(q => `${q.text}\nAnswer: ${data[q.id] || 'Not answered'}`).join('\n\n'),
        submission_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      // You'll need to replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        emailData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
      window.scrollTo(0, 0);
      toast({
        title: "Success!",
        description: "Your questionnaire has been submitted successfully.",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to submit questionnaire. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const renderRatingSection = (title: string, questions: RatingQuestion[], sectionPrefix: string) => (
    <section className="mb-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold font-heading text-brand-blue mb-6">{sectionPrefix.toUpperCase()}: {title}</h2>
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <Label htmlFor={q.id} className="block text-md font-medium text-slate-700 mb-2">
            {index + 1}. {q.text}
          </Label>
          <RadioGroup defaultValue="" id={q.id} {...register(q.id, { required: "This field is required" })} className="flex space-x-4">
            {[1, 2, 3, 4, 5].map(value => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={String(value)} id={`${q.id}-${value}`} />
                <Label htmlFor={`${q.id}-${value}`}>{value}</Label>
              </div>
            ))}
          </RadioGroup>
          {errors[q.id] && <p className="text-red-500 text-sm mt-1">{errors[q.id]?.message as string}</p>}
        </div>
      ))}
    </section>
  );

  const renderProfileSection = (title: string, questions: ProfileQuestion[]) => (
    <section className="mb-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold font-heading text-brand-blue mb-6">{title}</h2>
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <Label htmlFor={q.id} className="block text-md font-medium text-slate-700 mb-2">
            {index + 16}. {q.text}
          </Label>
          <Textarea
            id={q.id}
            {...register(q.id, { required: "This field is required" })}
            placeholder={q.placeholder}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
          />
          {errors[q.id] && <p className="text-red-500 text-sm mt-1">{errors[q.id]?.message as string}</p>}
        </div>
      ))}
    </section>
  );

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12 text-center">
        <h1 className="text-3xl font-bold font-heading text-slate-800 mb-6">Thank You for Completing the Questionnaire!</h1>
        <p className="text-lg text-slate-700 mb-4">Your responses have been recorded.</p>
        <p className="text-lg text-slate-700 mb-8">
          Coach C will review your submission. To discuss your results and next steps, please schedule your free Mindset Review Call.
        </p>
        <CallToActionButton href="#" variant="primary" className="bg-yellow-400 hover:bg-yellow-500 text-slate-800">
          Schedule My Free Mindset Review Call
        </CallToActionButton>
         <div className="mt-8 p-6 bg-slate-100 rounded-lg text-left max-w-lg mx-auto">
          <h3 className="text-xl font-semibold font-heading text-slate-700 mb-3">Understanding Your Results (General Guide):</h3>
          <p className="text-sm text-slate-600 mb-2"><strong>Effort, Thought, Attitude Scores (each out of 25):</strong></p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li><strong>60–75 (Total for all 3):</strong> Mentally Strong — You’re operating at a high level, but there’s always room to sharpen.</li>
            <li><strong>40–59 (Total for all 3):</strong> Growth Zone — You have solid habits, but there are mental gaps that need targeted work.</li>
            <li><strong>Below 40 (Total for all 3):</strong> Red Zone — Major mindset leaks are holding you back. Let’s fix that.</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">A detailed review will be provided during your call.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 bg-slate-50">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold font-heading text-slate-800 mb-4">CCMG Questionnaire</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Please rate each statement from 1 to 5, where: <br />
          <span className="font-semibold">1 = Never true | 2 = Rarely | 3 = Sometimes | 4 = Often | 5 = Always true</span>
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
        {/* Contact Information Section */}
        <section className="mb-10 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold font-heading text-brand-blue mb-6">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="block text-md font-medium text-slate-700 mb-2">
                Name *
              </Label>
              <Input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Your full name"
                className="w-full"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name?.message as string}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="block text-md font-medium text-slate-700 mb-2">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                placeholder="your.email@example.com"
                className="w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message as string}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="block text-md font-medium text-slate-700 mb-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="(555) 123-4567"
                className="w-full"
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="comment" className="block text-md font-medium text-slate-700 mb-2">
                Additional Comments
              </Label>
              <Textarea
                id="comment"
                {...register("comment")}
                placeholder="Any additional information you'd like to share..."
                rows={3}
                className="w-full"
              />
            </div>
          </div>
        </section>

        {renderRatingSection("Effort", effortQuestions, "Section 1")}
        {renderRatingSection("Thought", thoughtQuestions, "Section 2")}
        {renderRatingSection("Attitude", attitudeQuestions, "Section 3")}
        {renderProfileSection("Player Profile — Reflection", profileQuestions)}

        <div className="text-center mt-10">
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-brand-blue text-white hover:bg-brand-blue-dark px-10 py-6 text-lg disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Submit Questionnaire'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionnairePage;
