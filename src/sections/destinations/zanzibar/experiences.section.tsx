import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  RiAnchorLine,
  RiBuilding2Line,
  RiLeafLine,
  RiShipLine,
  RiFlightTakeoffLine,
  RiSunLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

type Experience = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
};

const EXPERIENCES: Experience[] = [
  {
    icon: RiBuilding2Line,
    title: "Stone Town Heritage Walk",
    desc: "Wind through 500 years of living history — carved doors, Persian baths, bustling bazaars, and the house where Freddie Mercury was born.",
    tag: "Culture",
    tagColor: "border-amber-500/30 text-amber-400/70",
  },
  {
    icon: RiLeafLine,
    title: "Spice Farm Tour",
    desc: "Zanzibar earned its name 'Spice Island' for good reason. Touch, smell, and taste cloves, vanilla, cinnamon, and black pepper at a working farm.",
    tag: "Culture",
    tagColor: "border-amber-500/30 text-amber-400/70",
  },
  {
    icon: RiAnchorLine,
    title: "Coral Reef Snorkeling",
    desc: "The reefs off Mnemba Atoll and Chumbe Island are among the most biodiverse in the Indian Ocean — turtles, rays, and 150+ reef fish species await.",
    tag: "Marine",
    tagColor: "border-sky-500/30 text-sky-400/70",
  },
  {
    icon: RiShipLine,
    title: "Sunset Dhow Cruise",
    desc: "Board a traditional Arab dhow as the sun turns the Indian Ocean gold. Spiced tea, fresh fruit, and an East African horizon that stops conversation cold.",
    tag: "Experience",
    tagColor: "border-primary/30 text-primary/70",
  },
  {
    icon: RiFlightTakeoffLine,
    title: "Safari Launchpad",
    desc: "Zanzibar Airport connects you to every safari park in our collection — Nyerere in 45 minutes, Serengeti in under 2 hours. No wasted travel days.",
    tag: "Adventure",
    tagColor: "border-emerald-500/30 text-emerald-400/70",
  },
  {
    icon: RiSunLine,
    title: "Beach & Watersports",
    desc: "Nungwi, Kendwa, Paje — each beach has its own character. Kitesurfing, paddleboarding, stand-up sessions, or just doing nothing especially well.",
    tag: "Leisure",
    tagColor: "border-rose-500/30 text-rose-400/70",
  },
];

function ExperienceCell({ exp, index }: { exp: Experience; index: number }) {
  const { icon: Icon, title, desc, tag, tagColor } = exp;
  return (
    <div
      className={cn(
        "group bg-surface-container p-8 flex flex-col gap-5",
        "hover:bg-surface-container-high transition-colors duration-300",
        // right border on col 1 & 2 (not last col)
        index % 3 !== 2 && "md:border-r border-outline-variant/10",
        // bottom border on rows except last
        index < 3 && "border-b border-outline-variant/10",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="p-2.5 rounded-lg bg-primary/8 border border-primary/15 group-hover:bg-primary/15 transition-colors duration-300">
          <Icon className="size-5 text-primary" />
        </div>
        <Badge
          variant="outline"
          className={cn(
            "font-label uppercase tracking-widest text-[9px] shrink-0",
            tagColor,
          )}
        >
          {tag}
        </Badge>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-headline text-xl text-white">{title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}

export default function ZanzibarExperiencesSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Heading row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            What to Experience
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Six Reasons to{" "}
            <span className="italic text-primary">Linger.</span>
          </h2>
        </div>
        <p className="text-on-surface-variant text-sm font-light max-w-xs leading-relaxed md:text-right">
          Zanzibar rewards those who look past the beach. Each layer reveals
          something more unexpected.
        </p>
      </div>

      {/* Grid */}
      <div className="rounded-xl overflow-hidden border border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCell key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <Separator className="mt-24 bg-outline-variant/10" />
    </section>
  );
}
