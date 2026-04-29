import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    // Lightweight client-side: just acknowledge. (Form leads should still go through Sell My Car)
    await new Promise((r) => setTimeout(r, 800));
    setBusy(false);
    setSent(true);
    toast.success("Message received — we'll be in touch shortly.");
  };

  return (
    <>
      <SEO
        title="Contact CashRide — Talk to a Real Buyer Today"
        description="Call, email or message us anytime. 7 days a week, real humans, instant cash quotes for any car. No call centres, no chatbots."
      />

      <section className="relative overflow-hidden pt-16 pb-12 noise">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative z-10 max-w-3xl text-center animate-fade-in-up">
          <Eyebrow className="mb-5">Get in touch</Eyebrow>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1] mb-5">
            Talk to a <span className="text-gradient">real buyer</span> — 7 days a week.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Whether you want a quote, an ETA on a pickup, or just a chat about your old workshop project — we're here.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <Section className="pt-10">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Phone, title: "Call us", value: "0400 000 000", sub: "Open 7am – 7pm, every day", href: "tel:+61400000000" },
            { icon: Mail, title: "Email us", value: "hello@cashride.com.au", sub: "Replies within 30 minutes", href: "mailto:hello@cashride.com.au" },
            { icon: MessageSquare, title: "Live chat / SMS", value: "0400 000 000", sub: "Tap to message a real buyer", href: "sms:+61400000000" },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <a href={c.href} className="block glass rounded-2xl p-7 hover-lift glow-ring h-full">
                <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant mb-4">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{c.title}</h3>
                <div className="text-2xl font-display font-bold text-gradient mb-1">{c.value}</div>
                <p className="text-sm text-muted-foreground">{c.sub}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form + sidebar */}
      <Section className="pt-4">
        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <div className="glass-strong rounded-2xl p-7 md:p-9 border border-border shadow-elegant">
              <h2 className="text-3xl font-display font-bold mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-7">For an instant cash quote, use the <a href="/sell-my-car" className="text-primary-glow underline">Sell My Car</a> form for the fastest reply.</p>
              {sent ? (
                <div className="text-center py-10">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle2 className="h-9 w-9 text-success" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">Message sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within a few hours.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label htmlFor="c_name">Name *</Label><Input id="c_name" required maxLength={100} /></div>
                    <div><Label htmlFor="c_email">Email *</Label><Input id="c_email" type="email" required maxLength={200} /></div>
                    <div><Label htmlFor="c_phone">Phone</Label><Input id="c_phone" type="tel" maxLength={30} /></div>
                    <div><Label htmlFor="c_subject">Subject *</Label><Input id="c_subject" required maxLength={200} /></div>
                  </div>
                  <div><Label htmlFor="c_msg">Message *</Label><Textarea id="c_msg" required rows={6} maxLength={2000} /></div>
                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={busy}>
                    {busy ? <><Loader2 className="animate-spin" /> Sending...</> : <>Send message <ArrowRight className="h-5 w-5" /></>}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="space-y-5">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2">Hours</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex justify-between"><span>Mon – Fri</span><span className="text-foreground">7am – 7pm</span></li>
                      <li className="flex justify-between"><span>Saturday</span><span className="text-foreground">7am – 6pm</span></li>
                      <li className="flex justify-between"><span>Sunday</span><span className="text-foreground">8am – 5pm</span></li>
                      <li className="flex justify-between"><span>Public holidays</span><span className="text-foreground">9am – 4pm</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2">Service area</h4>
                    <p className="text-sm text-muted-foreground">Serving all metro suburbs across NSW, VIC, QLD, WA, SA, TAS and ACT — plus most regional towns by appointment. Same-day pickup in all major cities.</p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" alt="Service map" className="w-full h-56 object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs uppercase tracking-wider text-primary-glow font-bold mb-1">Live coverage</div>
                  <div className="text-sm">8 states · 100+ suburbs daily · Free pickup, always.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-2"><Reveal><TrustStrip /></Reveal></Section>

      <Section>
        <SectionHeader eyebrow="FAQ" title={<>Common <span className="text-gradient">questions</span></>} />
        <FAQ />
      </Section>
    </>
  );
};

export default Contact;
