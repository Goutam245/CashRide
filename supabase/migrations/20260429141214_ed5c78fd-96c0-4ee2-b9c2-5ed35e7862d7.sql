-- Lock down has_role execution
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM anon, authenticated, public;

-- Drop overly broad SELECT on storage objects; public bucket URLs still serve images directly
DROP POLICY IF EXISTS "Public can view vehicle photos" ON storage.objects;
CREATE POLICY "Admins can list vehicle photos" ON storage.objects
  FOR SELECT TO authenticated USING (bucket_id = 'vehicle-photos' AND public.has_role(auth.uid(), 'admin'));