-- Fix search_path security issue
DROP FUNCTION IF EXISTS public.update_questionnaire_responses_updated_at() CASCADE;

CREATE OR REPLACE FUNCTION public.update_questionnaire_responses_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER update_questionnaire_responses_updated_at
BEFORE UPDATE ON public.questionnaire_responses
FOR EACH ROW
EXECUTE FUNCTION public.update_questionnaire_responses_updated_at();