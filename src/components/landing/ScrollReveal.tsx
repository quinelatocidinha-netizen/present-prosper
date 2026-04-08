import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  threshold?: number;
}

export default function ScrollReveal({ children, className, stagger = false, threshold = 0.15 }: ScrollRevealProps) {
  const { ref, revealed } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      className={cn(
        stagger ? "stagger-children" : "scroll-reveal",
        revealed && "revealed",
        className
      )}
    >
      {children}
    </div>
  );
}
