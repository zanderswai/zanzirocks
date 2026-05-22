import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Month = {
  short: string;
  isDry: boolean;
};

const MONTHS: Month[] = [
  { short: "Jan", isDry: false },
  { short: "Feb", isDry: false },
  { short: "Mar", isDry: false },
  { short: "Apr", isDry: false },
  { short: "May", isDry: false },
  { short: "Jun", isDry: true },
  { short: "Jul", isDry: true },
  { short: "Aug", isDry: true },
  { short: "Sep", isDry: true },
  { short: "Oct", isDry: true },
  { short: "Nov", isDry: false },
  { short: "Dec", isDry: false },
];

const FACTS = [
  {
    number: "800+",
    unit: "elephants",
    desc: "Congregate at the Tarangire River during peak dry season — the highest density of any park in East Africa.",
  },
  {
    number: "3–4",
    unit: "generations",
    desc: "Many herds contain grandmothers, mothers, and calves — multi-generational families that have used this river for decades.",
  },
  {
    number: "40 km",
    unit: "river length",
    desc: "The Tarangire River flows through the park year-round, serving as the only permanent water source in the dry months.",
  },
];

export default function TarangireElephantsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          The Dry Season Convergence
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          Every Elephant.{" "}
          <span className="italic text-primary">One River.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-lg mx-auto leading-relaxed">
          When the rains leave, the Tarangire River becomes the only permanent
          water source for hundreds of kilometres. Everything that walks, crawls,
          or flies converges on it — and the elephants arrive in their hundreds.
        </p>
      </div>

      {/* Season bar */}
      <div className="rounded-xl border border-outline-variant/10 bg-surface-container p-8 mb-10">
        <div className="flex items-center justify-between mb-3">
          <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40">Annual pattern</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-primary/70 inline-block" />
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">Dry season — peak viewing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-sky-500/30 inline-block" />
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">Wet season</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-1.5">
          {MONTHS.map((m, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "w-full rounded-lg py-6 flex items-center justify-center transition-all duration-200",
                  m.isDry
                    ? "bg-primary/70 ring-1 ring-primary/40"
                    : "bg-sky-500/20",
                )}
              >
                <span className="font-label text-[10px] font-bold text-white">{m.short}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg bg-primary/5 border border-primary/15 p-4">
          <p className="font-label text-[9px] uppercase tracking-widest text-primary/70 mb-1">June – October: The Window</p>
          <p className="text-on-surface-variant text-xs font-light leading-relaxed">
            Elephant numbers swell from a few dozen to over 800. Lions, leopards, wildebeest, and zebra follow the same
            water source — creating the most concentrated wildlife spectacle in the northern circuit outside the Serengeti migration.
          </p>
        </div>
      </div>

      {/* Facts + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Facts */}
        <div className="flex flex-col gap-6">
          {FACTS.map((fact, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-headline text-5xl text-primary">{fact.number}</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">{fact.unit}</span>
              </div>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">{fact.desc}</p>
              {i < FACTS.length - 1 && <Separator className="mt-6 bg-outline-variant/10" />}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop"
            alt="Elephant herd at Tarangire River"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-label text-[9px] uppercase tracking-widest text-white/40 mb-1">Tarangire River</p>
            <p className="font-headline text-xl text-white leading-snug">The same families have gathered here for generations.</p>
          </div>
        </div>
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
