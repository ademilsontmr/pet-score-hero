-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create table for quiz results and payment tracking
CREATE TABLE public.quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  phone TEXT,
  email TEXT,
  cpf TEXT,
  pet_name TEXT,
  score INTEGER NOT NULL,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
  payment_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert quiz results
CREATE POLICY "Anyone can insert quiz results"
ON public.quiz_results
FOR INSERT
WITH CHECK (true);

-- Policy: Anyone can read quiz results
CREATE POLICY "Anyone can read quiz results"
ON public.quiz_results
FOR SELECT
USING (true);

-- Policy: Anyone can update quiz results
CREATE POLICY "Anyone can update quiz results"
ON public.quiz_results
FOR UPDATE
USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_quiz_results_updated_at
BEFORE UPDATE ON public.quiz_results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();