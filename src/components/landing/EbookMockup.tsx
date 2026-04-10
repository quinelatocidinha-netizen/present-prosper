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
    <div className={cn("relative", className)} aria-hidden="true">
      <div
        className={cn(
          sizeClasses[size],
          "relative rounded-lg overflow-hidden"
        )}
      >
        <img
          src="/ebook-cover.png"
          alt="Capa do eBook Seu Negócio Mais Profissional no Instagram e no Google"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
