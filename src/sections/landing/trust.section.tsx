import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RiStarFill } from "@remixicon/react";

export default function TrustSection() {
  return (
    <section className="mb-32 md:mb-48 flex flex-col items-center justify-center bg-surface-container-low py-32 rounded-lg text-center px-8 border border-outline-variant/5">
      <Badge variant="secondary" className="gap-2 mb-8 font-label uppercase tracking-[0.4em] text-xs font-bold">
        <RiStarFill className="text-green-500 size-3" />
        Trustpilot Excellent
      </Badge>

      <h2 className="text-4xl md:text-5xl font-headline italic mb-12 max-w-3xl leading-relaxed">
        &ldquo;An unparalleled standard of service. ZanziRocks doesn&rsquo;t just show you Tanzania; they let you feel it.&rdquo;
      </h2>

      <div className="flex items-center gap-6">
        <Separator className="w-12 bg-primary" />
        <span className="font-label text-primary tracking-widest uppercase text-[10px] font-bold">
          Jameson Thorne, Forbes Travel
        </span>
        <Separator className="w-12 bg-primary" />
      </div>
    </section>
  );
}
