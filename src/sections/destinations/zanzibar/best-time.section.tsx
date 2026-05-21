import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Season = "peak" | "shoulder" | "low";

type Month = {
  short: string;
  season: Season;
  note: string;
};

const MONTHS: Month[] = [
  { short: "Jan", season: "peak",     note: "Warm & dry" },
  { short: "Feb", season: "peak",     note: "Whale sharks" },
  { short: "Mar", season: "low",      note: "Long rains" },
  { short: "Apr", season: "low",      note: "Heavy rains" },
  { short: "May", season: "low",      note: "Heavy rains" },
  { short: "Jun", season: "peak",     note: "Dry & cool" },
  { short: "Jul", season: "peak",     note: "Best weather" },
  { short: "Aug", season: "peak",     note: "Best weather" },
  { short: "Sep", season: "peak",     note: "Dry season" },
  { short: "Oct", season: "shoulder", note: "Short rains" },
  { short: "Nov", season: "shoulder", note: "Short rains" },
  { short: "Dec", season: "peak",     note: "Warm & sunny" },
];

const BAR_STYLES: Record<Season, string> = {
  peak:     "bg-primary/75 text-on-primary",
  shoulder: "bg-primary/25 text-primary",
  low:      "bg-surface-container-high text-on-surface-variant/50",
};

const LEGEND: { season: Season; label: string; desc: string }[] = [
  { season: "peak",     label: "Peak Season",     desc: "Dry, sunny — ideal for beach & safari" },
  { season: "shoulder", label: "Shoulder Season",  desc: "Short rains, fewer crowds, great value" },
  { season: "low",      label: "Low Season",       desc: "Heavy rains, some lodge closures" },
];

export default function ZanzibarBestTimeSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Header */}
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          Plan Your Visit
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          When to Come to{" "}
          <span className="italic text-primary">Zanzibar</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-md mx-auto leading-relaxed">
          Two dry seasons, separated by rains. Both are worth it — the rains are
          what keep the island so vividly green.
        </p>
      </div>

      {/* Month bars */}
      <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-10">
        {MONTHS.map((m) => (
          <div key={m.short} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "w-full rounded-lg py-5 flex flex-col items-center justify-center gap-1.5",
                "transition-transform duration-200 hover:scale-105 cursor-default",
                BAR_STYLES[m.season],
              )}
            >
              <span className="font-label text-[11px] font-bold leading-none">{m.short}</span>
            </div>
            <span className="font-label text-[9px] uppercase tracking-wide text-on-surface-variant/40 text-center leading-tight hidden md:block">
              {m.note}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-2">
        {LEGEND.map(({ season, label, desc }) => (
          <div key={season} className="flex items-center gap-3">
            <div
              className={cn(
                "size-3 rounded-sm shrink-0",
                BAR_STYLES[season],
              )}
            />
            <div className="flex items-center gap-2">
              <span className="font-label text-[11px] font-bold text-white">{label}</span>
              <span className="font-label text-[10px] text-on-surface-variant/60 hidden sm:inline">
                — {desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Callout strip */}
      <div className="mt-12 rounded-xl border border-primary/15 bg-primary/5 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="size-1.5 rounded-full bg-primary shrink-0 mt-1 sm:mt-0" />
        <p className="text-on-surface-variant text-sm font-light leading-relaxed">
          <span className="text-primary font-bold">Pro tip:</span> February is
          Zanzibar at its most theatrical — peak dry heat, calm seas, and whale
          shark season is in full swing just a 50-minute flight away on Mafia
          Island.
        </p>
      </div>
    </section>
  );
}
