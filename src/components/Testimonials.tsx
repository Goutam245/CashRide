import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { customerAvatars } from "@/lib/photos";

interface Testimonial {
  id: string;
  author_name: string;
  location: string | null;
  rating: number;
  quote: string;
}

const fallback: Testimonial[] = [
  { id: "f1", author_name: "Sarah M.", location: "Parramatta, NSW", rating: 5, quote: "The whole process was unreal. Got a quote in 2 minutes, they showed up the same afternoon, paid me cash and towed the car for free. Easiest sale I've ever made." },
  { id: "f2", author_name: "James R.", location: "Footscray, VIC", rating: 5, quote: "I had a written-off ute that nobody else would touch. CashRide gave me $2,300 on the spot — way more than the wreckers offered. Professional crew, no haggling." },
  { id: "f3", author_name: "Priya K.", location: "Logan, QLD", rating: 5, quote: "Old Camry sat in my driveway for two years. One call, one form, and it was gone the next day with cash in my account. Genuinely couldn't fault them." },
  { id: "f4", author_name: "Daniel T.", location: "Mandurah, WA", rating: 5, quote: "Quoted $1,800 over the phone, paid me $1,800 when they arrived. No 'oh actually it's worth less' nonsense. Refreshing to deal with honest people." },
  { id: "f5", author_name: "Maria L.", location: "Adelaide, SA", rating: 5, quote: "After my husband passed, I had no idea what to do with his old workshop cars. The team was kind, patient, and gave me a fair price for all three. Highly recommend." },
  { id: "f6", author_name: "Tom P.", location: "Gosford, NSW", rating: 5, quote: "Booked online at 9am, money in my account by 2pm. The driver was polite, professional, and explained every step. Top-tier service." },
];

const Testimonials = () => {
  const [items, setItems] = useState<Testimonial[]>(fallback);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("id, author_name, location, rating, quote")
      .eq("published", true)
      .order("display_order", { ascending: true })
      .then(({ data }) => {
        if (data && data.length > 0) setItems(data);
      });
  }, []);

  return (
    <Section className="bg-card/30">
      <SectionHeader
        eyebrow="What sellers say"
        title={<>Trusted by <span className="text-gradient">25,000+ Australians</span></>}
        description="Honest quotes, friendly drivers, instant payment. Here's what real customers think."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 6).map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <article className="relative h-full glass rounded-2xl p-7 hover-lift glow-ring overflow-hidden">
              <Quote className="absolute -top-2 -right-2 h-24 w-24 text-primary/10" />
              <div className="flex gap-0.5 mb-4 text-gold relative z-10">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">"{t.quote}"</p>
              <footer className="flex items-center gap-3 relative z-10">
                <img
                  src={customerAvatars[i % customerAvatars.length]}
                  alt={t.author_name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-semibold text-sm">{t.author_name}</p>
                  {t.location && <p className="text-xs text-muted-foreground">{t.location}</p>}
                </div>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <span><strong className="text-foreground">4.9/5</strong> · 2,400+ Google Reviews</span>
        </div>
        <div>★ Rated <strong className="text-foreground">#1</strong> car buyer in 2024</div>
        <div>★ <strong className="text-foreground">98%</strong> would recommend</div>
      </div>
    </Section>
  );
};

export default Testimonials;
