import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { RiCheckLine, RiCloseLine, RiArrowRightLine, RiWhatsappLine, RiStarFill } from "@remixicon/react";

const INCLUDES = [
  "Return light aircraft (Zanzibar ↔ Serengeti, Tarangire ↔ Zanzibar)",
  "4 nights tented camp — Serengeti, Ngorongoro area, Tarangire (full board)",
  "1 night Stone Town boutique heritage hotel (B&B)",
  "All meals and non-alcoholic drinks (safari days)",
  "Expert guide for all 5 safari days",
  "All Serengeti game drives in private 4WD",
  "Full-day Ngorongoro Crater descent",
  "Guided bush walk — Tarangire",
  "Stone Town guided evening walk",
  "All national park, crater, and conservation fees",
];

const EXCLUDES = [
  "International flights",
  "Travel insurance (required)",
  "Alcoholic beverages",
  "Zanzibar beach hotel (add-on available)",
  "Balloon safari over Serengeti ($450/person)",
  "Spice tour (small group, $35/person)",
  "Gratuities (recommended)",
  "Personal expenses & souvenirs",
];

export default function GrandSafariBookingSection() {
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
          Our most complete package.{" "}
          <span className="italic text-primary">Nothing left out.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-5">Included</p>
            <ul className="flex flex-col gap-3">
              {INCLUDES.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant font-light">
                  <RiCheckLine className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-5">Not Included</p>
            <ul className="flex flex-col gap-3">
              {EXCLUDES.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant/50 font-light">
                  <RiCloseLine className="size-4 text-on-surface-variant/30 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Premium booking card */}
        <div className="rounded-2xl border border-primary/20 bg-surface-container p-6 flex flex-col gap-5 lg:sticky lg:top-24">
          {/* Stars */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <RiStarFill key={i} className="size-3.5 text-primary" />
            ))}
          </div>

          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-1">Price from</p>
            <div className="flex items-baseline gap-3">
              <span className="font-headline text-4xl text-primary">$2,555</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">per person</span>
            </div>
            <p className="font-label text-[10px] text-on-surface-variant/40 mt-1">
              Based on 2 guests · includes all flights
            </p>
          </div>

          <Separator className="bg-primary/10" />

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Duration", value: "6 Days / 5 Nights" },
              { label: "Departure", value: "Zanzibar" },
              { label: "Parks", value: "Serengeti · Ngorongoro · Tarangire" },
              { label: "Best season", value: "Dec – Mar (calving)" },
            ].map((item, i) => (
              <div key={i} className={item.label === "Parks" ? "col-span-2" : ""}>
                <p className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant/40 mb-0.5">{item.label}</p>
                <p className="font-label text-[11px] text-on-surface font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <Separator className="bg-primary/10" />

          <div className="flex flex-col gap-2.5">
            <Button
              asChild
              className="w-full bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs gap-2"
            >
              <Link to="/contact">
                Book This Package <RiArrowRightLine className="size-3" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-primary/30 text-primary hover:bg-primary/8 font-label uppercase tracking-widest text-xs gap-2"
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
