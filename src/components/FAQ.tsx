import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How fast can you pick up my car?",
    a: "In most metro suburbs we can be at your door the same day — often within 60 minutes of accepting our quote. Outer regions are typically next-day. There's no charge for pickup, ever.",
  },
  {
    q: "Do you really pay cash on the spot?",
    a: "Yes. We pay in cash or instant bank transfer the moment we collect the vehicle and verify ID and ownership documents. No waiting, no excuses, no last-minute price drops.",
  },
  {
    q: "What condition do you accept?",
    a: "Any condition — running, not running, accident-damaged, mechanical failure, water-damaged, written off, end-of-life. We're licensed wreckers and recyclers, so we take vehicles other buyers refuse.",
  },
  {
    q: "What paperwork do I need?",
    a: "Photo ID and proof you own the vehicle (rego papers, transfer slip, or purchase invoice). If you've lost the rego, that's fine too — we'll guide you through a quick statutory declaration.",
  },
  {
    q: "Will you buy unregistered or written-off cars?",
    a: "Absolutely. Unregistered, deregistered, statutory write-offs and repairable write-offs are all welcome. We handle the deregistration paperwork on your behalf.",
  },
  {
    q: "How is my quote calculated?",
    a: "We assess year, make, model, kilometres, condition, and current scrap and parts value. Our buyers have 15+ years of experience and access to live wholesale data, so quotes are accurate and final.",
  },
  {
    q: "Is the service free?",
    a: "100%. Quotes, pickup, towing, paperwork and deregistration are all free. The number we quote is the number you walk away with.",
  },
  {
    q: "Are you environmentally responsible?",
    a: "Yes — we operate licensed dismantling facilities that recycle up to 95% of every vehicle's materials, including fluids, metals, plastics and glass, in line with EPA standards.",
  },
];

export const FAQ = () => (
  <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-3">
    {faqs.map((f, i) => (
      <AccordionItem
        key={i}
        value={`item-${i}`}
        className="glass rounded-xl border border-border/60 px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-elegant transition-smooth"
      >
        <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-base">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
