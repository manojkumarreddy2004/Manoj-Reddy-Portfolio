import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">
              {title}
            </h2>
             <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
