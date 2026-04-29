import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { value: 25000, suffix: "+", label: "Cars Bought", sub: "Across the metro area" },
  { value: 4.9, suffix: "/5", label: "Customer Rating", sub: "From 2,400+ reviews", decimals: 1 },
  { value: 60, suffix: " min", label: "Avg. Pickup", sub: "Same-day, free of charge" },
  { value: 100, prefix: "$", suffix: "M+", label: "Paid to Sellers", sub: "Cash on the spot" },
];

export const StatsBar = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border">
    {stats.map((s, i) => (
      <Reveal key={i} delay={i * 80} className="bg-card p-6 md:p-8">
        <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
          <Counter end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
        </div>
        <div className="font-semibold mb-1">{s.label}</div>
        <div className="text-sm text-muted-foreground">{s.sub}</div>
      </Reveal>
    ))}
  </div>
);
