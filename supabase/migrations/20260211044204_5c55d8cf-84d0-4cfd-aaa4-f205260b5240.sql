
-- Enable RLS on quotes table
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit quotes (public contact form)
CREATE POLICY "Anyone can submit quotes"
ON public.quotes FOR INSERT
WITH CHECK (true);

-- Only admins can view quotes
CREATE POLICY "Admins can view quotes"
ON public.quotes FOR SELECT
USING (public.is_admin());

-- Only admins can update quotes
CREATE POLICY "Admins can update quotes"
ON public.quotes FOR UPDATE
USING (public.is_admin());

-- Only admins can delete quotes
CREATE POLICY "Admins can delete quotes"
ON public.quotes FOR DELETE
USING (public.is_admin());
