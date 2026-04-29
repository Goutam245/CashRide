import { useState } from "react";
import { z } from "zod";
import { Loader2, Upload, X, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a phone number").max(30),
  location: z.string().trim().min(2, "Suburb or postcode").max(120),
  make: z.string().trim().min(1, "Required").max(50),
  model: z.string().trim().min(1, "Required").max(50),
  year: z.coerce.number().int().min(1950).max(new Date().getFullYear() + 1),
  mileage: z.coerce.number().int().min(0).max(2_000_000).optional().or(z.literal("")),
  condition: z.string().min(1, "Required"),
  asking_price: z.coerce.number().min(0).max(1_000_000).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

const SellMyCarForm = () => {
  const [photos, setPhotos] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(e.target.files ?? []);
    const valid = incoming.filter((f) => f.type.startsWith("image/") && f.size <= 8 * 1024 * 1024);
    if (valid.length !== incoming.length) toast.error("Photos must be images under 8MB");
    setPhotos((prev) => [...prev, ...valid].slice(0, 8));
  };

  const removePhoto = (i: number) => setPhotos((p) => p.filter((_, idx) => idx !== i));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message || "Please check your details");
      return;
    }
    setSubmitting(true);
    try {
      // Upload photos to storage
      const photoUrls: string[] = [];
      for (const file of photos) {
        const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-z0-9.-]/gi, "_")}`;
        const { error: upErr } = await supabase.storage.from("vehicle-photos").upload(path, file);
        if (upErr) throw upErr;
        const { data } = supabase.storage.from("vehicle-photos").getPublicUrl(path);
        photoUrls.push(data.publicUrl);
      }

      const d = parsed.data;
      const { error } = await supabase.from("vehicle_submissions").insert({
        full_name: d.full_name,
        email: d.email,
        phone: d.phone,
        location: d.location,
        make: d.make,
        model: d.model,
        year: d.year,
        mileage: d.mileage === "" ? null : (d.mileage as number),
        condition: d.condition,
        asking_price: d.asking_price === "" ? null : (d.asking_price as number),
        notes: d.notes === "" ? null : (d.notes as string),
        photo_urls: photoUrls,
      });
      if (error) throw error;

      // Fire notification (non-blocking)
      supabase.functions.invoke("notify-submission", {
        body: { name: d.full_name, email: d.email, phone: d.phone, vehicle: `${d.year} ${d.make} ${d.model}` },
      }).catch(() => {});

      setDone(true);
      toast.success("Thanks! We'll be in touch shortly.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="glass-strong rounded-2xl p-10 text-center shadow-elegant border border-success/30 animate-scale-in">
        <div className="h-16 w-16 mx-auto mb-5 rounded-full bg-success/20 flex items-center justify-center">
          <CheckCircle2 className="h-9 w-9 text-success" />
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Quote request received!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We'll review your vehicle details and reply within a few hours with a firm cash offer. Keep your phone handy.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-2xl p-6 md:p-8 shadow-elegant border border-border space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="full_name">Full name *</Label>
          <Input id="full_name" name="full_name" required maxLength={100} />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required maxLength={255} />
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required maxLength={30} />
        </div>
        <div>
          <Label htmlFor="location">Suburb / Postcode *</Label>
          <Input id="location" name="location" required maxLength={120} />
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="font-semibold mb-4">Vehicle details</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="make">Make *</Label>
            <Input id="make" name="make" required placeholder="e.g. Toyota" maxLength={50} />
          </div>
          <div>
            <Label htmlFor="model">Model *</Label>
            <Input id="model" name="model" required placeholder="e.g. Corolla" maxLength={50} />
          </div>
          <div>
            <Label htmlFor="year">Year *</Label>
            <Input id="year" name="year" type="number" required min={1950} max={new Date().getFullYear() + 1} />
          </div>
          <div>
            <Label htmlFor="mileage">Mileage (km)</Label>
            <Input id="mileage" name="mileage" type="number" min={0} />
          </div>
          <div>
            <Label htmlFor="condition">Condition *</Label>
            <Select name="condition" required>
              <SelectTrigger><SelectValue placeholder="Select condition" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="fair">Fair</SelectItem>
                <SelectItem value="poor">Poor / not running</SelectItem>
                <SelectItem value="damaged">Damaged / written off</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="asking_price">Asking price ($)</Label>
            <Input id="asking_price" name="asking_price" type="number" min={0} placeholder="Optional" />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" name="notes" rows={3} maxLength={1000} placeholder="Anything else we should know?" />
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <Label className="block mb-2">Photos (up to 8)</Label>
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl p-6 cursor-pointer hover:bg-secondary/50 transition-smooth">
          <Upload className="h-6 w-6 text-muted-foreground mb-2" />
          <span className="text-sm text-muted-foreground">Click to upload photos (JPG/PNG, max 8MB each)</span>
          <input type="file" accept="image/*" multiple className="hidden" onChange={handlePhotos} />
        </label>
        {photos.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
            {photos.map((file, i) => (
              <div key={i} className="relative group aspect-square rounded-lg overflow-hidden border border-border">
                <img src={URL.createObjectURL(file)} alt={`upload-${i}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute top-1 right-1 bg-background/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-smooth"
                  aria-label="Remove photo"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitting}>
        {submitting ? <><Loader2 className="animate-spin" /> Sending...</> : "Get my free quote"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We'll never share your details. Quote is obligation-free.
      </p>
    </form>
  );
};

export default SellMyCarForm;
