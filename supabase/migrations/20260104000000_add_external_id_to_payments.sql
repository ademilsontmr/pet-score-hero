-- Add external_id column to payments table
-- This stores the ID from AbacatePay API (bill_xxxxx)
ALTER TABLE public.payments ADD COLUMN IF NOT EXISTS external_id TEXT;

-- Create an index on external_id for faster queries
CREATE INDEX IF NOT EXISTS idx_payments_external_id ON public.payments(external_id);
