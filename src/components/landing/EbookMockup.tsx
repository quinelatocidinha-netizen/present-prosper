import { cn } from "@/lib/utils";

interface EbookMockupProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function EbookMockup({ className, size = "md" }: EbookMockupProps) {
  const sizeClasses = {
    sm: "w-40 h-56 sm:w-48 sm:h-64",
    md: "w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96",
    lg: "w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem]",
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
          "border border-primary/20",
          "transform perspective-800 rotate-y-[-4deg] group-hover:rotate-y-0 transition-transform duration-500"
        )}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "8px 8px 30px -10px hsl(163 67% 50% / 0.15), -2px 0 10px -5px hsl(213 30% 5% / 0.5)",
        }}
      >
        {/* Spine highlight */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent z-10" />
        
        {/* Cover image */}
        <img
          src="/ebook-cover.png"
          alt="Capa do eBook Seu Negócio Mais Profissional no Instagram e no Google"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-primary/5 pointer-events-none" />
      </div>
    </div>
  );
}
