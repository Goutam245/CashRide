import { CheckCircle2, Clock, ShieldCheck, Banknote } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Section, SectionHeader, Eyebrow } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TrustStrip } from "@/components/TrustStrip";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import SellMyCarForm from "@/components/SellMyCarForm";
import { photos } from "@/lib/photos";

const SellMyCar = () => (
  <>
    <SEO
      title="Sell My Car Online — Instant Cash Offer in 60 Seconds | CashRide"
      description="Sell your car online in minutes. Submit details, get a firm cash quote, free same-day pickup, paid on the spot. No dealer haggling, no online listings."
    />

    {/* Hero with form */}
    <section className="relative overflow-hidden pt-14 pb-16 noise">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="container relative z-10 grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-2 animate-fade-in-up lg:sticky lg:top-28">
          <Eyebrow className="mb-5">Sell my car</Eyebrow>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1] mb-5">
            Get your <span className="text-gradient">instant cash offer</span> in 60 seconds.
          </h1>
          <p className="text-lg text-muted-foreground mb-7 leading-relaxed">
            Fill in the form, attach a few photos, and get a firm written quote from a real buyer — usually within 30 minutes during business hours. No obligation, no fees, no spam.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { icon: Banknote, t: "Top dollar guarantee — up to 30% over scrap" },
              { icon: Clock, t: "Same-day pickup in most metro suburbs" },
              { icon: ShieldCheck, t: "Licensed dealer · paid in cash or instant transfer" },
              { icon: CheckCircle2, t: "Free vehicle transfer & deregistration paperwork" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-glow">
                  <b.icon className="h-4 w-4" />
                </div>
                <span className="text-foreground/90">{b.t}</span>
              </div>
            ))}
          </div>

          <div className="hidden lg:block relative rounded-2xl overflow-hidden border border-border shadow-elegant">
            <img src={photos.cashHandover} alt="Cash payment" className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs uppercase text-gold tracking-wider font-bold mb-1">★ Highest Price Guarantee</div>
              <div className="text-sm">Beat any written offer or we pay you $200.</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Reveal>
            <SellMyCarForm />
          </Reveal>
        </div>
      </div>
    </section>

    <Section className="pt-12 pb-12"><Reveal><TrustStrip /></Reveal></Section>

    {/* Benefits */}
    <Section className="bg-card/30">
      <SectionHeader
        eyebrow="Why sell with us"
        title={<>Skip the dealer haggle. <span className="text-gradient">Sell direct.</span></>}
        description="No tyre-kickers, no Marketplace messages, no 'will you take half?' Just a real cash offer from a real buyer."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "vs. Trade-in", us: "Top market price", them: "Trade-in is usually 20–40% under value to make room for dealer margin." },
          { title: "vs. Private sale", us: "Same-day cash", them: "Weeks of listings, photos, viewings, no-shows, payment risk and paperwork." },
          { title: "vs. Wreckers", us: "Up to 30% more", them: "Pure scrap pricing — no allowance for resale value or working parts." },
        ].map((c, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="glass rounded-2xl p-7 h-full hover-lift">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">CashRide {c.title}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-success/20 border border-success/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-gradient">{c.us}</div>
                  </div>
                </div>
                <div className="border-t border-border pt-4 text-sm text-muted-foreground">
                  <strong className="text-foreground/80">{c.title}:</strong> {c.them}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section>
      <SectionHeader eyebrow="FAQ" title={<>Selling <span className="text-gradient">questions</span></>} />
      <FAQ />
    </Section>

    <CTASection />
  </>
);

export default SellMyCar;
