import { Shield, Award, Banknote, Clock, Star, BadgeCheck } from "lucide-react";

const items = [
  { icon: Shield, label: "Fully Licensed & Insured" },
  { icon: BadgeCheck, label: "ABN Registered Buyer" },
  { icon: Banknote, label: "Paid On the Spot" },
  { icon: Clock, label: "Same-Day Pickup" },
  { icon: Star, label: "4.9/5 from 2,400+ Reviews" },
  { icon: Award, label: "15+ Years Experience" },
];

export const TrustStrip = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
    {items.map((it, i) => (
      <div
        key={i}
        className="glass rounded-xl p-4 flex items-center gap-3 hover-lift glow-ring"
      >
        <div className="h-10 w-10 shrink-0 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground shadow-elegant">
          <it.icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-medium leading-tight">{it.label}</span>
      </div>
    ))}
  </div>
);
