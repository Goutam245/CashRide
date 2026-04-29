import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2, Banknote, Truck, FileCheck, ShieldCheck, Recycle, Clock, MapPin, Sparkles, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TrustStrip } from "@/components/TrustStrip";
import { StatsBar } from "@/components/StatsBar";
import { BrandMarquee } from "@/components/BrandMarquee";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import { photos } from "@/lib/photos";

const Home = () => (
  <>
    <SEO
      title="CashRide — Top Cash for Cars & Free Same-Day Removal"
      description="Australia's most trusted car buyer. Instant cash quotes, free same-day pickup, any make or condition. 25,000+ cars bought, paid on the spot."
    />

    {/* HERO */}
    <section className="relative overflow-hidden pt-12 lg:pt-20 pb-24 noise">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-in-up">
          <Eyebrow className="mb-6">
            <Sparkles className="h-3 w-3" /> #1 Cash for Cars Australia
          </Eyebrow>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight mb-6">
            Get top <span className="text-gradient">cash for your car</span> — paid on the spot.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-9 max-w-xl leading-relaxed">
            Free same-day pickup for any make, model or condition. Honest quotes, zero hidden fees,
            and instant payment the moment we collect your vehicle.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button asChild variant="hero" size="xl" className="shadow-elegant">
              <Link to="/sell-my-car">
                Get My Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-primary/30 hover:bg-primary/10">
              <a href="tel:+61400000000">
                <Phone className="h-5 w-5" /> Call 0400 000 000
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            {["Paid on the spot", "Free pickup", "Any condition", "Same-day service"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-foreground/85">
                <CheckCircle2 className="h-4 w-4 text-success" /> {t}
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-elegant glow-ring">
            <img
              src={photos.heroCar}
              alt="Modern luxury car ready for sale"
              className="w-full h-[460px] lg:h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

            {/* Floating quote card */}
            <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-5 border border-primary/30 shadow-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Live Quote</div>
                  <div className="text-3xl font-display font-bold text-gradient">
                    $<Counter end={6850} duration={2200} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">2018 Toyota Corolla · 95k km</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-success font-semibold flex items-center gap-1 justify-end">
                    <TrendingUp className="h-3.5 w-3.5" /> +$420 vs avg
                  </div>
                  <Button asChild variant="hero" size="sm" className="mt-2">
                    <Link to="/sell-my-car">Sell now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -left-4 glass rounded-xl p-3 shadow-elegant animate-float hidden md:flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary-glow" />
            <span className="text-sm font-semibold">Licensed Buyer</span>
          </div>
          <div className="absolute -bottom-4 -right-4 glass rounded-xl p-3 shadow-elegant animate-float hidden md:flex items-center gap-2" style={{ animationDelay: "1.5s" }}>
            <Award className="h-5 w-5 text-gold" />
            <span className="text-sm font-semibold">4.9★ Rated</span>
          </div>
        </div>
      </div>
    </section>

    {/* Brand marquee */}
    <BrandMarquee />

    {/* Trust */}
    <Section className="pt-16 pb-12">
      <Reveal>
        <TrustStrip />
      </Reveal>
    </Section>

    {/* Stats */}
    <Section className="py-12">
      <Reveal><StatsBar /></Reveal>
    </Section>

    {/* HOW IT WORKS */}
    <Section className="bg-card/30">
      <SectionHeader
        eyebrow="How it works"
        title={<>Sell your car in <span className="text-gradient">3 simple steps</span></>}
        description="From quote to cash in your hand — most sellers are done within a single afternoon."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
        {/* connecting line */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {[
          { n: "01", icon: FileCheck, title: "Submit details", desc: "Tell us about your car in 60 seconds. Make, model, year, condition, and a few photos — that's it." },
          { n: "02", icon: Banknote, title: "Get instant quote", desc: "Our buyers send you a firm cash offer based on live wholesale data. No bots, no lowballs." },
          { n: "03", icon: Truck, title: "Free pickup & cash", desc: "We collect the car, hand over cash or instant transfer, and handle all paperwork. Same day, every time." },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="relative glass rounded-2xl p-7 h-full hover-lift glow-ring">
              <div className="absolute -top-3 -right-3 text-6xl font-display font-bold text-primary/10 leading-none">{s.n}</div>
              <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant mb-5">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* SERVICES SHOWCASE */}
    <Section>
      <SectionHeader
        eyebrow="Our services"
        title={<>Whatever you drive, <span className="text-gradient">we'll buy it</span></>}
        description="Cars, utes, 4x4s, vans, trucks — running or not. Three core services, one promise: top cash, zero hassle."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { img: photos.cashHandover, title: "Cash for Cars", desc: "Top dollar for any car in any condition. Quick quotes, instant cash.", to: "/cash-for-cars" },
          { img: photos.towTruck, title: "Free Car Removal", desc: "Same-day removal across the metro. We tow, you cash in. No fees.", to: "/car-removal" },
          { img: photos.heroCar, title: "Sell My Car", desc: "Skip dealer haggles and online listings. Sell direct in under an hour.", to: "/sell-my-car" },
        ].map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <Link to={s.to} className="group block relative rounded-2xl overflow-hidden border border-border hover-lift">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary-glow transition-smooth">{s.title}</h3>
                <p className="text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex items-center gap-2 text-primary-glow font-semibold text-sm">
                  Learn more <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* WHY US — feature grid */}
    <Section className="bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <SectionHeader
        eyebrow="Why CashRide"
        title={<>Built on <span className="text-gradient">trust, speed and fairness</span></>}
        description="Fifteen years, twenty-five thousand cars, one consistent reputation."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { icon: Banknote, title: "Top dollar guaranteed", desc: "We pay up to 30% more than scrap yards thanks to direct dismantling and parts resale. Get the highest legal price for your vehicle." },
          { icon: Clock, title: "Same-day pickup", desc: "Booked before 2pm? We'll be at your door before dinner. No waiting weeks for a wrecker to call you back." },
          { icon: ShieldCheck, title: "Licensed & insured", desc: "Fully licensed motor vehicle dealer with $20M public liability cover. You're protected at every step." },
          { icon: FileCheck, title: "We handle paperwork", desc: "Transfer, deregistration, statutory declarations — we file everything for you, free of charge." },
          { icon: Recycle, title: "Eco-responsible", desc: "Up to 95% of every vehicle is recycled at our EPA-licensed facility. Your old car gets a second life." },
          { icon: Users, title: "Real humans, no bots", desc: "Speak to a friendly local buyer — not a chatbot or call centre. Most quotes turned around in under 60 minutes." },
        ].map((f, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="glass rounded-2xl p-7 h-full hover-lift">
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* PRICING / WHAT WE PAY */}
    <Section>
      <SectionHeader
        eyebrow="What we pay"
        title={<>Real prices, <span className="text-gradient">real cars</span></>}
        description="A snapshot of recent buy-prices from our books. Your quote depends on year, kilometres and condition — but here's the kind of money we pay."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { img: photos.suv, title: "Mid-size SUV", year: "2016 – 2020", price: "$6,500 – $14,000" },
          { img: photos.ute, title: "Dual-cab Ute", year: "2014 – 2022", price: "$8,000 – $22,000" },
          { img: photos.oldCar, title: "Daily Sedan", year: "2008 – 2015", price: "$1,800 – $6,200" },
          { img: photos.damagedCar, title: "Damaged / WOVR", year: "Any year", price: "$400 – $9,000" },
        ].map((p, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="glass rounded-2xl overflow-hidden hover-lift glow-ring">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-smooth hover:scale-110" />
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground mb-1">{p.year}</div>
                <div className="font-display font-bold text-lg mb-2">{p.title}</div>
                <div className="text-gradient font-display font-bold text-xl">{p.price}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* TESTIMONIALS */}
    <Testimonials />

    {/* COVERAGE */}
    <Section className="bg-card/30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <Eyebrow className="mb-5">Coverage</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-5 leading-tight">
            We cover <span className="text-gradient">every metro suburb</span> — and most regional towns too.
          </h2>
          <p className="text-lg text-muted-foreground mb-7 leading-relaxed">
            Our fleet of fully-equipped tow trucks operates 7 days a week from 6am to 8pm. If you're inside any
            major metro area, we can usually be at your door in under 90 minutes. Regional bookings are scheduled
            within 24 – 48 hours, with no extra travel fee for most postcodes.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-7">
            {["Sydney metro", "Melbourne metro", "Brisbane & Gold Coast", "Perth metro", "Adelaide & surrounds", "Newcastle & Central Coast", "Geelong & Ballarat", "Sunshine Coast"].map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary-glow" />
                {c}
              </div>
            ))}
          </div>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Check your suburb <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant glow-ring">
            <img src={photos.truckHighway} alt="Tow truck on the highway" className="w-full h-[480px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[
                { v: "60", s: "min", l: "Avg pickup" },
                { v: "7", s: "days", l: "Open weekly" },
                { v: "0", s: "$", l: "Tow fee" },
              ].map((m, i) => (
                <div key={i} className="glass-strong rounded-xl p-3 text-center border border-primary/20">
                  <div className="text-2xl font-display font-bold text-gradient">{m.v}<span className="text-sm">{m.s}</span></div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>

    {/* FAQ */}
    <Section>
      <SectionHeader
        eyebrow="Questions answered"
        title={<>Frequently asked <span className="text-gradient">questions</span></>}
        description="Everything you need to know before you sell. Still curious? Call us anytime."
      />
      <FAQ />
    </Section>

    <CTASection />
  </>
);

export default Home;
