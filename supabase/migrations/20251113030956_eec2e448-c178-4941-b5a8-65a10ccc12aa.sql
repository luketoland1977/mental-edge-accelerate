-- Add policy allowing users to view their own roles
-- This is a permissive policy that allows users to see what roles they have
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);