import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export const Counter = ({ end, duration = 1800, prefix = "", suffix = "", decimals = 0 }: CounterProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(end * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};
