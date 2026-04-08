import { cn } from "@/lib/utils";

interface EbookMockupProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function EbookMockup({ className, size = "md" }: EbookMockupProps) {
  const sizeClasses = {
    sm: "w-48 h-64",
    md: "w-64 h-80 md:w-72 md:h-96",
    lg: "w-72 h-96 md:w-80 md:h-[28rem]",
  };

  return (
    <div className={cn("relative group", className)} aria-hidden="true">
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl scale-90 group-hover:scale-100 transition-transform duration-700" />
      
      {/* Book shadow */}
      <div className="absolute inset-x-4 bottom-0 h-8 bg-background/80 blur-xl rounded-full" />
      
      {/* Book body */}
      <div
        className={cn(
          sizeClasses[size],
          "relative rounded-lg overflow-hidden shadow-2xl",
          "bg-gradient-to-br from-secondary to-card",
          "border border-primary/20",
          "transform perspective-800 rotate-y-[-4deg] group-hover:rotate-y-0 transition-transform duration-500"
        )}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "8px 8px 30px -10px hsl(163 67% 50% / 0.15), -2px 0 10px -5px hsl(213 30% 5% / 0.5)",
        }}
      >
        {/* Spine highlight */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
        
        {/* Cover content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          {/* Top badge */}
          <div className="mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-primary">
              Guia Prático
            </span>
          </div>
          
          {/* Title */}
          <h3 className="font-serif text-lg md:text-xl font-bold text-foreground leading-tight mb-3">
            Seu Negócio Mais Profissional
          </h3>
          <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
            no Instagram e no Google
          </p>
          
          {/* Decorative line */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
          
          {/* Bottom icons */}
          <div className="flex gap-3 text-primary/60">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
              <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-primary/5 pointer-events-none" />
      </div>
    </div>
  );
}
