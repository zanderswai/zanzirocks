import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { RiCheckLine, RiCloseLine, RiArrowRightLine, RiWhatsappLine } from "@remixicon/react";

const INCLUDES = [
  "Return light aircraft (Zanzibar ↔ Nyerere)",
  "2 nights tented camp (full board)",
  "All meals and non-alcoholic drinks",
  "Expert FGASA-qualified guide",
  "River boat safari (minimum 1 session)",
  "Game drives in private 4WD",
  "Guided walking safari",
  "All park and conservation fees",
  "Airside transfers",
];

const EXCLUDES = [
  "International flights",
  "Zanzibar accommodation (add-on available)",
  "Travel insurance (required)",
  "Alcoholic beverages",
  "Gratuities (recommended)",
  "Curio shop purchases",
];

export default function NyerereBookingSection() {
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
          Everything covered.{" "}
          <span className="italic text-primary">You just arrive.</span>
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

        {/* Booking card */}
        <div className="rounded-2xl bg-surface-container border border-outline-variant/10 p-6 flex flex-col gap-5 lg:sticky lg:top-24">
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-1">Price from</p>
            <div className="flex items-baseline gap-3">
              <span className="font-headline text-4xl text-primary">$1,200</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">per person</span>
            </div>
            <p className="font-label text-[10px] text-on-surface-variant/40 mt-1">Based on 4 guests sharing · solo supplement applies</p>
          </div>

          <Separator className="bg-outline-variant/10" />

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Duration", value: "3 Days / 2 Nights" },
              { label: "Access", value: "Fly-In from Zanzibar" },
              { label: "Group size", value: "2 – 8 guests" },
              { label: "Best season", value: "June – October" },
            ].map((item, i) => (
              <div key={i}>
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
                Book This Safari <RiArrowRightLine className="size-3" />
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
