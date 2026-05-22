import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Phase = "calving" | "northward" | "crossing" | "southward";

type MonthEntry = {
  month: string;
  short: string;
  phase: Phase;
  location: string;
};

const MONTHS: MonthEntry[] = [
  { month: "January",   short: "Jan", phase: "calving",   location: "Ndutu, South Serengeti" },
  { month: "February",  short: "Feb", phase: "calving",   location: "Ndutu — calving peak" },
  { month: "March",     short: "Mar", phase: "calving",   location: "Short grass plains" },
  { month: "April",     short: "Apr", phase: "northward", location: "Western Corridor" },
  { month: "May",       short: "May", phase: "northward", location: "Western Corridor" },
  { month: "June",      short: "Jun", phase: "northward", location: "Grumeti River crossings" },
  { month: "July",      short: "Jul", phase: "crossing",  location: "Mara River crossings begin" },
  { month: "August",    short: "Aug", phase: "crossing",  location: "Mara River — peak crossings" },
  { month: "September", short: "Sep", phase: "crossing",  location: "Northern Serengeti / Maasai Mara" },
  { month: "October",   short: "Oct", phase: "southward", location: "Returning south" },
  { month: "November",  short: "Nov", phase: "southward", location: "Eastern Serengeti" },
  { month: "December",  short: "Dec", phase: "calving",   location: "Short grass plains — preparing" },
];

const PHASE_META: Record<Phase, { label: string; desc: string; barClass: string; textClass: string }> = {
  calving: {
    label: "Calving Season",
    desc: "500,000 wildebeest calves born in 3 weeks. Predator activity peaks. The Ndutu area is at its most dramatic — predators and prey in constant, breathless proximity.",
    barClass: "bg-primary/75",
    textClass: "text-primary",
  },
  northward: {
    label: "Northward Trek",
    desc: "The herds follow the rains north through the Western Corridor. Grumeti River provides the first dramatic crossing opportunity — crocodiles and wildebeest in open conflict.",
    barClass: "bg-amber-500/50",
    textClass: "text-amber-400",
  },
  crossing: {
    label: "Mara River Crossings",
    desc: "The defining image of the migration. Thousands of wildebeest mass on the bank, then launch themselves across the Mara River where crocodiles wait. The most requested wildlife spectacle on earth.",
    barClass: "bg-rose-500/60",
    textClass: "text-rose-400",
  },
  southward: {
    label: "Return South",
    desc: "The herds swing back south through the eastern Serengeti, following the short rains. Game viewing remains exceptional — the animals are everywhere.",
    barClass: "bg-sky-500/40",
    textClass: "text-sky-400",
  },
};

export default function SerengetiMigrationSection() {
  const [activePhase, setActivePhase] = useState<Phase>("crossing");
  const active = PHASE_META[activePhase];

  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          The Great Migration
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          1.5 Million Animals.{" "}
          <span className="italic text-primary">One Endless Circle.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-lg mx-auto leading-relaxed">
          The wildebeest migration never stops — it simply changes location.
          Where you go depends on when you travel. Tap a phase to learn more.
        </p>
      </div>

      {/* Month bar calendar — clickable */}
      <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-10">
        {MONTHS.map((m, i) => {
          const isActive = m.phase === activePhase;
          const meta = PHASE_META[m.phase];
          return (
            <button
              key={i}
              onClick={() => setActivePhase(m.phase)}
              className={cn(
                "flex flex-col items-center gap-2 group",
              )}
              aria-label={`${m.month} — ${meta.label}`}
            >
              <div
                className={cn(
                  "w-full rounded-lg py-5 flex items-center justify-center transition-all duration-200",
                  "hover:scale-105",
                  meta.barClass,
                  isActive ? "ring-2 ring-white/40 ring-offset-1 ring-offset-surface-dim" : "opacity-60 hover:opacity-90",
                )}
              >
                <span className="font-label text-[11px] font-bold text-white">{m.short}</span>
              </div>
              <span className="font-label text-[9px] uppercase tracking-wide text-on-surface-variant/35 text-center leading-tight hidden md:block">
                {m.location.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active phase detail */}
      <div
        className={cn(
          "rounded-xl border p-8 md:p-10 transition-all duration-300",
          "border-outline-variant/10 bg-surface-container",
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
          <div className="flex flex-col gap-2 md:w-56">
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">
              Selected phase
            </p>
            <h3 className={cn("font-headline text-3xl", active.textClass)}>
              {active.label}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {MONTHS.filter((m) => m.phase === activePhase).map((m, i) => (
                <span
                  key={i}
                  className="font-label text-[9px] border border-outline-variant/20 text-on-surface-variant/60 rounded-full px-2 py-0.5"
                >
                  {m.short}
                </span>
              ))}
            </div>
          </div>

          <Separator orientation="vertical" className="hidden md:block bg-outline-variant/10 self-stretch" />

          <div className="flex flex-col gap-3">
            <p className="text-on-surface-variant text-sm leading-relaxed font-light">{active.desc}</p>
            {activePhase === "crossing" && (
              <div className="mt-2 p-4 rounded-lg bg-rose-500/5 border border-rose-500/15">
                <p className="font-label text-[10px] uppercase tracking-widest text-rose-400/70 mb-1">Best months for crossings</p>
                <p className="text-on-surface-variant text-xs font-light">July, August, and September. Book at least 3–6 months in advance — these dates sell out fastest.</p>
              </div>
            )}
            {activePhase === "calving" && (
              <div className="mt-2 p-4 rounded-lg bg-primary/5 border border-primary/15">
                <p className="font-label text-[10px] uppercase tracking-widest text-primary/70 mb-1">Best months for calving</p>
                <p className="text-on-surface-variant text-xs font-light">January and February in the Ndutu area. Cheetah, lion, and wild dog sightings peak during this period.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
