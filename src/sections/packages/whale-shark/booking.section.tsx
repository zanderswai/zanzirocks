import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { RiCheckLine, RiCloseLine, RiArrowRightLine, RiWhatsappLine } from "@remixicon/react";

const INCLUDES = [
  "Return speedboat transfer (Stone Town ↔ Mafia)",
  "Full snorkel equipment",
  "Mafia Island Marine Park fees",
  "Professional marine guide in the water",
  "Safety briefing and marine park orientation",
  "Coral reef snorkelling session",
  "Light lunch (fresh Swahili seafood)",
  "Water and refreshments on board",
];

const EXCLUDES = [
  "Flights to Zanzibar",
  "Zanzibar accommodation",
  "Travel insurance (required)",
  "Alcoholic beverages",
  "Gratuities (recommended)",
  "Personal expenses & souvenirs",
];

export default function WhaleSharkBookingSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="mb-12">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          What's Included
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          Everything you need.{" "}
          <span className="italic text-primary">Nothing you don't.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
        {/* Includes / Excludes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-5">Included</p>
            <ul className="flex flex-col gap-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant font-light">
                  <RiCheckLine className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-5">Not Included</p>
            <ul className="flex flex-col gap-3">
              {EXCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant/50 font-light">
                  <RiCloseLine className="size-4 text-on-surface-variant/30 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking card */}
        <div className="rounded-2xl bg-surface-container border border-outline-variant/10 p-6 flex flex-col gap-5 lg:sticky lg:top-24">
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-1">Price per person</p>
            <div className="flex items-baseline gap-3">
              <span className="font-headline text-4xl text-primary">$550</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">Adult</span>
            </div>
            <p className="font-label text-[10px] text-on-surface-variant/40 mt-1">$450 per child (under 12)</p>
          </div>

          <Separator className="bg-outline-variant/10" />

          <div className="grid grid-cols-2 gap-3 text-xs">
            {[
              { label: "Duration", value: "1 Day" },
              { label: "Departure", value: "Stone Town" },
              { label: "Group size", value: "2 – 12" },
              { label: "Best season", value: "Oct – Feb" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant/40 mb-0.5">{item.label}</p>
                <p className="font-label text-[11px] text-on-surface font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <Separator className="bg-outline-variant/10" />

          <div className="flex flex-col gap-2.5">
            <Button
              asChild
              className="w-full bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs gap-2"
            >
              <Link to="/contact">
                Book This Trip <RiArrowRightLine className="size-3" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high font-label uppercase tracking-widest text-xs gap-2"
            >
              <Link to="/contact">
                <RiWhatsappLine className="size-3.5 text-emerald-400" />
                WhatsApp Us
              </Link>
            </Button>
          </div>

          <p className="text-center font-label text-[9px] uppercase tracking-widest text-on-surface-variant/30">
            No payment required to enquire
          </p>
        </div>
      </div>
    </section>
  );
}
