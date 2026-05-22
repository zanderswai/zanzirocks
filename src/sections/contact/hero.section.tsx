import { Badge } from "@/components/ui/badge";
import { RiWhatsappLine } from "@remixicon/react";

export default function ContactHeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20">
      <Badge
        variant="outline"
        className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-6"
      >
        Contact
      </Badge>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
        <div>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-none mb-5">
            Let's plan your{" "}
            <span className="italic text-primary">Tanzania trip.</span>
          </h1>
          <p className="text-on-surface-variant font-light text-base leading-relaxed max-w-md">
            Tell us when you want to travel, what interests you, and we'll put
            together something exceptional. No templates, no packages that don't
            fit — just the right trip for you.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <a
            href="https://wa.me/+255750908776"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 px-5 py-3.5 transition-all duration-200 group"
          >
            <RiWhatsappLine className="size-5 text-primary shrink-0" />
            <div>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 leading-none mb-1">
                Fastest response
              </p>
              <p className="font-label text-sm font-bold text-on-surface">
                Message us on WhatsApp
              </p>
            </div>
          </a>
          <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/30">
            +255 750 908 776 · Usually replies within the hour
          </p>
        </div>
      </div>
    </section>
  );
}
