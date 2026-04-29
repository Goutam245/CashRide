import { Link } from "react-router-dom";
import { ArrowRight, Banknote, CheckCircle2, ShieldCheck, Phone, TrendingUp, Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TrustStrip } from "@/components/TrustStrip";
import { BrandMarquee } from "@/components/BrandMarquee";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import { photos } from "@/lib/photos";

const CashForCars = () => (
  <>
    <SEO
      title="Cash for Cars — Up to $22,000 Paid On the Spot | CashRide"
      description="Get the highest cash price for your car today. Any make, model, age or condition. Free pickup, paid in cash or instant transfer. Quote in 60 seconds."
    />

    {/* Hero */}
    <section className="relative overflow-hidden pt-16 pb-20 noise">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <Eyebrow className="mb-5"><Banknote className="h-3 w-3" /> Cash for Cars</Eyebrow>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-[0.98] mb-6">
            Top <span className="text-gradient">cash for any car</span>, paid the moment we collect.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            From luxury sedans to old workshop runners — if it has wheels, we'll quote it. Up to 30% more than scrap yards, with cash in your hand the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/sell-my-car">Get Instant Quote <ArrowRight className="h-5 w-5" /></Link></Button>
            <Button asChild variant="outline" size="xl" className="border-primary/30"><a href="tel:+61400000000"><Phone className="h-5 w-5" /> 0400 000 000</a></Button>
          </div>
        </div>
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant glow-ring">
            <img src={photos.cashHandover} alt="Cash payment for a car" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5 border border-primary/30">
              <div className="flex items-center gap-3 mb-2"><Sparkles className="h-4 w-4 text-gold" /><span className="text-xs uppercase tracking-wider font-semibold text-gold">Highest Price Guarantee</span></div>
              <p className="text-sm text-foreground/90">Find a higher written offer from any licensed buyer and we'll beat it by $200 — or pay you $200 just for trying.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <BrandMarquee />

    <Section className="pt-16 pb-10"><Reveal><TrustStrip /></Reveal></Section>

    {/* Why us */}
    <Section>
      <SectionHeader
        eyebrow="Why our prices win"
        title={<>How we pay <span className="text-gradient">30% more</span> than the local wrecker</>}
        description="Most yards just resell your car for scrap metal. We dismantle, recycle, and resell — which means more value flows back to you."
      />
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { icon: TrendingUp, title: "Live wholesale data", desc: "Our buyers price every quote against real-time auction and dismantler data — so the offer reflects the true market, not a guess." },
          { icon: Tag, title: "Direct parts resale", desc: "We strip and resell premium components (engines, gearboxes, panels) ourselves — that margin gets passed back into your offer." },
          { icon: ShieldCheck, title: "No middleman fees", desc: "We're the end buyer, not a broker. There's no commission shaved off the top, no introducer fees, no surprise deductions." },
        ].map((f, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="glass rounded-2xl p-7 h-full hover-lift">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* What we buy */}
    <Section className="bg-card/30">
      <SectionHeader
        eyebrow="What we buy"
        title={<>Every car. <span className="text-gradient">Every condition.</span></>}
        description="Don't have time to clean it? Doesn't start? Already deregistered? Doesn't matter — we still want it."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { img: photos.heroCar, title: "Late-model cars", desc: "Newer cars that still have plenty of life, perfect for resale." },
          { img: photos.suv, title: "SUVs & 4x4s", desc: "High demand for parts and trade-ins — we pay premium prices." },
          { img: photos.ute, title: "Utes & vans", desc: "Tradie utes, work vans, fleet vehicles — running or not." },
          { img: photos.damagedCar, title: "Damaged & write-offs", desc: "Hail, accident, water, statutory write-off — we're licensed to buy." },
          { img: photos.oldCar, title: "Old & unregistered", desc: "20+ year-old cars and deregistered vehicles welcome." },
          { img: photos.scrapyard, title: "Scrap & end-of-life", desc: "Top scrap rates plus we handle all dismantling paperwork." },
          { img: photos.electric, title: "Hybrids & EVs", desc: "Specialist buyers for battery vehicles and high-voltage systems." },
          { img: photos.truckHighway, title: "Trucks & machinery", desc: "Light commercials, vans, and small trucks — bring 'em on." },
        ].map((c, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="glass rounded-2xl overflow-hidden hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-smooth hover:scale-110" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold mb-1">{c.title}</h4>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Process */}
    <Section>
      <SectionHeader
        eyebrow="Selling process"
        title={<>From quote to <span className="text-gradient">cash in 4 steps</span></>}
        description="Fast, transparent, and built around your schedule."
      />
      <div className="space-y-5 max-w-4xl mx-auto">
        {[
          { n: "01", title: "Tell us about your car", desc: "Make, model, year, kilometres and a few photos — most sellers complete this in under 60 seconds via our online form or a 2-minute phone call." },
          { n: "02", title: "Receive your firm cash offer", desc: "A real human buyer reviews your details and sends back a written, no-obligation offer — usually within 30 minutes during business hours." },
          { n: "03", title: "Book your free pickup", desc: "Choose a time that suits you — same-day in metro areas, next-day for outer suburbs and regional towns. Our driver confirms 30 minutes before arrival." },
          { n: "04", title: "Get paid on the spot", desc: "Our buyer verifies the vehicle, signs paperwork, and pays you in cash or instant bank transfer before driving off. Zero waiting." },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="glass rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row gap-5 sm:items-center hover-lift">
              <div className="text-5xl font-display font-bold text-gradient leading-none shrink-0 w-20">{s.n}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Testimonials />

    <Section>
      <SectionHeader eyebrow="FAQ" title={<>Common <span className="text-gradient">questions</span></>} />
      <FAQ />
    </Section>

    <CTASection />
  </>
);

export default CashForCars;
