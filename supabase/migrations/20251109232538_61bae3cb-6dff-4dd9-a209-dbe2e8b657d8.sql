-- Create questionnaire_responses table
CREATE TABLE public.questionnaire_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  comment TEXT,
  effort_score INTEGER NOT NULL,
  thought_score INTEGER NOT NULL,
  attitude_score INTEGER NOT NULL,
  total_score INTEGER NOT NULL,
  effort_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
  thought_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
  attitude_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
  profile_responses JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.questionnaire_responses ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (anyone can submit and view)
CREATE POLICY "Anyone can insert questionnaire responses" 
ON public.questionnaire_responses 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view questionnaire responses" 
ON public.questionnaire_responses 
FOR SELECT 
USING (true);

-- Prevent updates and deletes for data integrity
CREATE POLICY "No one can update questionnaire responses" 
ON public.questionnaire_responses 
FOR UPDATE 
USING (false);

CREATE POLICY "No one can delete questionnaire responses" 
ON public.questionnaire_responses 
FOR DELETE 
USING (false);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_questionnaire_responses_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_questionnaire_responses_updated_at
BEFORE UPDATE ON public.questionnaire_responses
FOR EACH ROW
EXECUTE FUNCTION public.update_questionnaire_responses_updated_at();

-- Add indexes for better query performance
CREATE INDEX idx_questionnaire_responses_email ON public.questionnaire_responses(email);
CREATE INDEX idx_questionnaire_responses_created_at ON public.questionnaire_responses(created_at DESC);