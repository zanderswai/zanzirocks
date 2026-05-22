import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiCheckLine, RiCloseLine, RiWhatsappLine } from "@remixicon/react";

const INCLUDES = [
  "Return flights Zanzibar ↔ Mafia Island",
  "Complimentary hotel transfers from Zanzibar",
  "Whale shark boat adventure",
  "Snorkelling gear provided",
  "BBQ lunch, snacks & soft drinks",
  "Kilindoni City Tour (time permitting)",
  "Conservation fees",
  "All taxes & VAT",
];

const EXCLUDES = [
  "Travel insurance",
  "Visa fees",
  "Any activities not listed above",
];

export default function MafiaPackageSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-12">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          The Package
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          Everything Included.{" "}
          <span className="italic text-primary">Nothing to Arrange.</span>
        </h2>
      </div>

      <div className="rounded-xl overflow-hidden border border-outline-variant/10 grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
        {/* Left: includes / excludes */}
        <div className="bg-surface-container p-8 md:p-12 flex flex-col gap-8">
          <div>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-5">
              What's Included
            </p>
            <ul className="flex flex-col gap-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <RiCheckLine className="size-4 text-[#00b67a] mt-0.5 shrink-0" />
                  <span className="text-sm text-on-surface-variant font-light leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="bg-outline-variant/10" />

          <div>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-5">
              Not Included
            </p>
            <ul className="flex flex-col gap-3">
              {EXCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <RiCloseLine className="size-4 text-on-surface-variant/40 mt-0.5 shrink-0" />
                  <span className="text-sm text-on-surface-variant/60 font-light leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: booking panel */}
        <div className="bg-surface-container-low border-t lg:border-t-0 lg:border-l border-outline-variant/10 p-8 md:p-12 flex flex-col gap-6 justify-center">
          <div>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-2">
              Package code EEAD1
            </p>
            <h3 className="font-headline text-3xl text-white mb-1">
              Mafia Island Whale Shark Adventure
            </h3>
            <p className="font-label text-[11px] text-on-surface-variant/60 uppercase tracking-wide">
              Day Trip · Departing from Zanzibar
            </p>
          </div>

          <Separator className="bg-outline-variant/10" />

          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-5xl text-primary">$550</span>
              <span className="font-label text-[11px] text-on-surface-variant/50 uppercase tracking-wide">/ adult</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-3xl text-primary/70">$450</span>
              <span className="font-label text-[10px] text-on-surface-variant/40 uppercase tracking-wide">/ child (12 &amp; under)</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs gap-2"
            >
              <Link to="/packages/mafia-island-whale-shark-adventure-day-trip">
                Book This Trip
                <RiArrowRightLine data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-outline-variant/30 text-on-surface-variant hover:border-primary/40 hover:text-primary gap-2 font-label uppercase tracking-widest text-[10px]"
            >
              <a href="https://wa.me/255777415192" target="_blank" rel="noopener noreferrer">
                <RiWhatsappLine className="size-4" />
                WhatsApp Our Team
              </a>
            </Button>
          </div>

          <p className="font-label text-[10px] text-on-surface-variant/40 text-center leading-relaxed">
            Season: October–February peak. Available year-round
            subject to weather and whale shark presence.
          </p>
        </div>
      </div>
    </section>
  );
}
