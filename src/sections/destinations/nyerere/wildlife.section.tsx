import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Status = "resident" | "rare" | "seasonal";

type Species = {
  name: string;
  note: string;
  status: Status;
  highlight?: boolean;
};

const SPECIES: Species[] = [
  { name: "African Elephant",  note: "Largest land animal on earth",   status: "resident",  highlight: true },
  { name: "Lion",              note: "Apex predator of the savannah",   status: "resident",  highlight: true },
  { name: "Hippopotamus",      note: "Rufiji River resident",           status: "resident" },
  { name: "Nile Crocodile",    note: "Ancient ambush predator",         status: "resident" },
  { name: "African Buffalo",   note: "Up to 1,000-strong herds",        status: "resident" },
  { name: "Giraffe",           note: "Woodland & riverine edge",        status: "resident" },
  { name: "Leopard",           note: "Elusive nocturnal hunter",        status: "resident" },
  { name: "African Wild Dog",  note: "One of Africa's rarest predators",status: "rare",     highlight: true },
  { name: "Zebra",             note: "Dry-season grassland migrant",    status: "seasonal" },
  { name: "Spotted Hyena",     note: "Clan-based night hunter",         status: "resident" },
  { name: "Impala",            note: "Most abundant antelope",          status: "resident" },
  { name: "Warthog",           note: "Grassland & thicket dweller",     status: "resident" },
];

const STATUS_STYLES: Record<Status, string> = {
  resident: "border-primary/25 text-primary/65",
  rare:     "border-rose-500/30 text-rose-400/75",
  seasonal: "border-sky-500/25 text-sky-400/65",
};

const STATUS_LABEL: Record<Status, string> = {
  resident: "Resident",
  rare:     "Rare Sighting",
  seasonal: "Seasonal",
};

function SpeciesCell({ species, index }: { species: Species; index: number }) {
  return (
    <div
      className={cn(
        "group relative p-6 flex flex-col gap-3 transition-colors duration-200",
        "hover:bg-surface-container-high",
        species.highlight && "bg-surface-container",
      )}
    >
      {/* Number */}
      <span className="font-label text-[10px] text-on-surface-variant/25 tabular-nums font-bold">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Name */}
      <h3
        className={cn(
          "font-headline text-xl leading-tight",
          species.highlight ? "text-white" : "text-on-surface",
        )}
      >
        {species.name}
      </h3>

      {/* Note */}
      <p className="font-label text-[10px] text-on-surface-variant/60 leading-relaxed">
        {species.note}
      </p>

      {/* Status badge */}
      <Badge
        variant="outline"
        className={cn(
          "w-fit font-label uppercase tracking-widest text-[9px] mt-auto",
          STATUS_STYLES[species.status],
        )}
      >
        {STATUS_LABEL[species.status]}
      </Badge>

      {/* Highlight accent line */}
      {species.highlight && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20" />
      )}
    </div>
  );
}

export default function NyerereWildlifeSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            Wildlife Directory
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Who You'll Share <br />
            <span className="italic text-primary">the Wild With.</span>
          </h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4">
          {(Object.entries(STATUS_STYLES) as [Status, string][]).map(([status, style]) => (
            <div key={status} className="flex items-center gap-2">
              <div className={cn("size-1.5 rounded-full border", style)} />
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                {STATUS_LABEL[status]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Species grid */}
      <div className="rounded-xl overflow-hidden border border-outline-variant/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 divide-x divide-y divide-outline-variant/10">
          {SPECIES.map((species, i) => (
            <SpeciesCell key={species.name} species={species} index={i} />
          ))}
        </div>
      </div>

      {/* African Wild Dog callout */}
      <div className="mt-6 rounded-xl border border-rose-500/15 bg-rose-500/5 px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="size-1.5 rounded-full bg-rose-400/70 shrink-0 mt-1 sm:mt-0" />
        <p className="text-on-surface-variant text-sm font-light leading-relaxed">
          <span className="text-rose-400 font-bold">African Wild Dog — </span>
          Nyerere holds one of Africa's last significant wild dog populations.
          Fewer than 700 remain in East Africa. A sighting here is among the
          rarest wildlife encounters on the continent.
        </p>
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
