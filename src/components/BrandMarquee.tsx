const brands = [
  "Toyota", "Mazda", "Holden", "Ford", "Hyundai", "Nissan", "Mitsubishi",
  "Honda", "Kia", "Subaru", "Volkswagen", "BMW", "Mercedes-Benz", "Audi",
  "Lexus", "Isuzu", "Jeep", "Suzuki",
];

export const BrandMarquee = () => {
  const list = [...brands, ...brands];
  return (
    <div className="relative overflow-hidden py-10 border-y border-border/60 bg-card/40">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {list.map((b, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-primary-glow transition-smooth"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
};
