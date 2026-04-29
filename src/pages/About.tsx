import { Award, Recycle, Users, ShieldCheck, Heart, TrendingUp, Banknote, Truck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TrustStrip } from "@/components/TrustStrip";
import { CTASection } from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import { photos } from "@/lib/photos";

const About = () => (
  <>
    <SEO
      title="About CashRide — 15+ Years Buying Cars Across Australia"
      description="Australia's most trusted car buyer. Family-run, fully licensed, eco-responsible. Learn the story behind 25,000+ cars and 4.9-star reviews."
    />

    <section className="relative overflow-hidden pt-16 pb-20 noise">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <Eyebrow className="mb-5">About us</Eyebrow>
          <h1 className="text-5xl md:text-6xl font-display font-bold leading-[0.98] mb-6">
            A family-run buyer that treats every seller like a <span className="text-gradient">neighbour</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Fifteen years ago we started with one tow truck, one buyer, and one rule: no lowballs, ever. Today we're one of Australia's largest independent car buyers — but the rule hasn't changed.
          </p>
        </div>
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant glow-ring">
            <img src={photos.team} alt="The CashRide team" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>

    <Section className="pt-16 pb-10"><Reveal><TrustStrip /></Reveal></Section>

    {/* Story */}
    <Section>
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
            <img src={photos.garage} alt="Workshop and dismantling facility" className="w-full h-[460px] object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Eyebrow className="mb-5">Our story</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Built on <span className="text-gradient">honest deals</span> and a yard full of broken cars.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              In 2011, our founder Marcus started buying old cars out of a single bay behind a mate's panel-beating shop. He kept getting calls from frustrated sellers — people quoted one price over the phone, then offered half when the tow truck arrived. He decided to do the opposite.
            </p>
            <p>
              Every quote is firm. Every dollar is paid on the spot. No surprise deductions, no last-minute drops. That single principle turned a one-truck operation into a fleet of 18 vehicles, three EPA-licensed dismantling yards, and a 25,000-car track record.
            </p>
            <p>
              Today CashRide is still family-owned and locally operated — and we're still answering every quote ourselves.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>

    {/* Values */}
    <Section className="bg-card/30">
      <SectionHeader
        eyebrow="What we stand for"
        title={<>Four values that <span className="text-gradient">never bend</span></>}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: Heart, title: "Honesty first", desc: "The number we quote is the number you get. No exceptions, no excuses." },
          { icon: ShieldCheck, title: "Fully accountable", desc: "Licensed, insured, ABN-registered. Every transaction is paper-trailed." },
          { icon: Recycle, title: "Eco-responsible", desc: "Up to 95% recycled at our EPA-licensed yards. Nothing dumped, ever." },
          { icon: Users, title: "Local & human", desc: "Family-owned, real people, no overseas call centres or chatbot quotes." },
        ].map((v, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="glass rounded-2xl p-6 h-full hover-lift">
              <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Numbers */}
    <Section>
      <SectionHeader eyebrow="By the numbers" title={<>Fifteen years, <span className="text-gradient">measured</span></>} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {[
          { v: 15, s: " yrs", l: "Buying cars locally", icon: Award },
          { v: 25000, s: "+", l: "Cars purchased", icon: Banknote },
          { v: 18, s: "", l: "Tow trucks in fleet", icon: Truck },
          { v: 95, s: "%", l: "Materials recycled", icon: Recycle },
        ].map((m, i) => (
          <Reveal key={i} delay={i * 80} className="bg-card p-7 text-center">
            <m.icon className="h-7 w-7 text-primary-glow mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
              <Counter end={m.v} suffix={m.s} />
            </div>
            <div className="text-sm text-muted-foreground">{m.l}</div>
          </Reveal>
        ))}
      </div>
    </Section>

    {/* Team grid */}
    <Section className="bg-card/30">
      <SectionHeader
        eyebrow="Meet the team"
        title={<>Real people, <span className="text-gradient">behind every quote</span></>}
        description="No call centres. No outsourced agents. Every car is bought by a member of our local crew."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Marcus Hale", role: "Founder & Senior Buyer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=600&h=600&q=80" },
          { name: "Anya Patel", role: "Operations Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=3&w=600&h=600&q=80" },
          { name: "Lucas Romano", role: "Lead Buyer & Estimator", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=3&w=600&h=600&q=80" },
          { name: "Sophie Tran", role: "Customer Success", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=3&w=600&h=600&q=80" },
          { name: "Jay Williams", role: "Lead Driver", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=3&w=600&h=600&q=80" },
          { name: "Marta Kovac", role: "Recycling Lead", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=3&w=600&h=600&q=80" },
        ].map((m, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="glass rounded-2xl overflow-hidden hover-lift glow-ring">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-smooth hover:scale-105" />
              </div>
              <div className="p-5">
                <h4 className="font-display font-bold text-lg">{m.name}</h4>
                <p className="text-sm text-primary-glow">{m.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Testimonials />

    <CTASection />
  </>
);

export default About;
