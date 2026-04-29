import { Link } from "react-router-dom";
import { ArrowRight, Truck, Phone, Clock, MapPin, Recycle, FileCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import { photos } from "@/lib/photos";

const CarRemoval = () => (
  <>
    <SEO
      title="Free Car Removal — Same-Day Pickup, Any Vehicle | CashRide"
      description="Free same-day car removal anywhere in the metro area. Damaged, scrap, unregistered or end-of-life — we tow it for free and pay you cash."
    />

    <section className="relative overflow-hidden pt-16 pb-20 noise">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <Eyebrow className="mb-5"><Truck className="h-3 w-3" /> Free Car Removal</Eyebrow>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-[0.98] mb-6">
            <span className="text-gradient">Free same-day removal</span> for any car, anywhere.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Got a car taking up your driveway? We'll tow it away today — at no cost to you — and hand over cash before we leave. Damaged, scrap, abandoned, written off — all welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/sell-my-car">Book Free Removal <ArrowRight className="h-5 w-5" /></Link></Button>
            <Button asChild variant="outline" size="xl" className="border-primary/30"><a href="tel:+61400000000"><Phone className="h-5 w-5" /> 0400 000 000</a></Button>
          </div>
        </div>
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant glow-ring">
            <img src={photos.towTruck} alt="Tow truck collecting a car" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute top-6 right-6 glass-strong rounded-xl p-4 border border-success/30 animate-pulse-glow">
              <div className="text-xs uppercase tracking-wider text-success font-bold mb-1">Available now</div>
              <div className="text-sm font-semibold">Next pickup slot: <span className="text-success">Today</span></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <Section className="pt-16 pb-10"><Reveal><TrustStrip /></Reveal></Section>

    {/* Live numbers */}
    <Section className="py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {[
          { v: 60, s: " min", l: "Average arrival time" },
          { v: 100, s: "%", l: "Free of charge, always" },
          { v: 7, s: " days", l: "Operating week" },
          { v: 95, s: "%", l: "Materials recycled" },
        ].map((m, i) => (
          <Reveal key={i} delay={i * 60} className="bg-card p-7 text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
              <Counter end={m.v} suffix={m.s} />
            </div>
            <div className="text-sm text-muted-foreground">{m.l}</div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Service grid */}
    <Section>
      <SectionHeader
        eyebrow="What we remove"
        title={<>If it has <span className="text-gradient">four wheels</span> — we'll take it.</>}
        description="From driveway dust-collectors to insurance write-offs, our crew handles every type of removal."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: photos.damagedCar, title: "Accident & damaged cars", desc: "Front-end smashes, rollovers, hail damage — fully insured tow crews and salvage equipment." },
          { img: photos.oldCar, title: "Old & unregistered", desc: "Vehicles deregistered for years, no plates, no rego papers — we handle the dec, you pocket the cash." },
          { img: photos.scrapyard, title: "End-of-life & scrap", desc: "Engine seized, gearbox gone, body rusted through — top scrap rates and EPA-licensed recycling." },
          { img: photos.ute, title: "Trucks, utes, vans", desc: "Tradie utes, work vans, light commercials and box trucks — heavy-duty trucks on standby." },
          { img: photos.suv, title: "4x4s & SUVs", desc: "Stuck offroad, rolled, broken-down chassis — we recover and remove from any access." },
          { img: photos.electric, title: "Hybrid & EV vehicles", desc: "Specialist removal for battery vehicles, including safe high-voltage isolation and transport." },
        ].map((c, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="glass rounded-2xl overflow-hidden hover-lift glow-ring">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-smooth hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Process timeline */}
    <Section className="bg-card/30">
      <SectionHeader
        eyebrow="How it works"
        title={<>From phone call to <span className="text-gradient">empty driveway</span> in under 4 hours</>}
      />
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />
        {[
          { icon: Phone, time: "0 min", title: "Call or submit form", desc: "Two-minute conversation. We confirm vehicle, location, and a firm cash quote on the call." },
          { icon: FileCheck, time: "15 min", title: "Booking confirmed", desc: "You receive an SMS with your driver's name, ETA, and the agreed cash amount." },
          { icon: Truck, time: "60–180 min", title: "Pickup & payment", desc: "Driver inspects, signs paperwork, hands over cash, loads the car. You're done." },
          { icon: Recycle, time: "Same week", title: "Eco recycling", desc: "Vehicle is dismantled at our EPA-licensed facility — 95% of materials recovered." },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="relative flex gap-5 mb-6 md:pl-2">
              <div className="shrink-0 h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant z-10">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="glass rounded-xl p-5 flex-1 hover-lift">
                <div className="text-xs uppercase tracking-wider text-primary-glow font-semibold mb-1">{s.time}</div>
                <h3 className="text-xl font-display font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Coverage banner */}
    <Section>
      <Reveal>
        <div className="relative glass-strong rounded-3xl border border-primary/30 p-10 md:p-14 overflow-hidden noise">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <Eyebrow className="mb-5"><MapPin className="h-3 w-3" /> Coverage</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                Servicing <span className="text-gradient">all metro suburbs</span> & most regional towns.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sydney, Melbourne, Brisbane, Perth, Adelaide, Newcastle, Geelong, Sunshine Coast, Gold Coast, Wollongong, Hobart and Canberra metropolitan areas — plus regional pickups by appointment.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary-glow" /> 7am – 7pm, every day of the year
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Inner suburbs", "Outer suburbs", "Regional NSW", "Regional VIC", "Regional QLD", "Country WA", "South Australia", "Tasmania"].map((c) => (
                <div key={c} className="glass rounded-lg p-3 flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-success" /> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>

    <Testimonials />

    <Section>
      <SectionHeader eyebrow="FAQ" title={<>Removal <span className="text-gradient">questions</span></>} />
      <FAQ />
    </Section>

    <CTASection />
  </>
);

export default CarRemoval;
