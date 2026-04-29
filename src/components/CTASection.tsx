import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const CTASection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 gradient-mesh opacity-60" />
    <div className="absolute inset-0 grid-pattern opacity-40" />
    <div className="container relative z-10">
      <Reveal>
        <div className="relative glass-strong rounded-3xl border border-primary/30 p-10 md:p-16 text-center overflow-hidden noise">
          <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.05] mb-5">
            Get your <span className="text-gradient">instant cash offer</span><br />in under 60 seconds.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            No obligation. No hidden fees. Just a fair, accurate price from a licensed buyer with 25,000+ cars under our belt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="hero" size="xl" className="shadow-elegant">
              <Link to="/sell-my-car">
                Get My Free Quote <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-primary/40 hover:bg-primary/10">
              <a href="tel:+61400000000">
                <Phone className="h-5 w-5" /> Call 0400 000 000
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
