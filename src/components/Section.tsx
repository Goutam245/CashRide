import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}

export const Section = ({ children, className, id, containerClassName }: SectionProps) => (
  <section id={id} className={cn("relative py-20 md:py-28", className)}>
    <div className={cn("container relative z-10", containerClassName)}>{children}</div>
  </section>
);

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}
export const Eyebrow = ({ children, className }: EyebrowProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow border border-primary/30 bg-primary/10 backdrop-blur-sm",
      className
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
    {children}
  </span>
);

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}
export const SectionHeader = ({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) => (
  <div
    className={cn(
      "max-w-3xl mb-14",
      align === "center" ? "mx-auto text-center" : "",
      className
    )}
  >
    {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] mb-5">
      {title}
    </h2>
    {description && (
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{description}</p>
    )}
  </div>
);
