import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const FACTS = [
  { value: "8–12m",  label: "Average whale shark length" },
  { value: "#1",     label: "World's largest fish" },
  { value: "~60",    label: "Whale sharks per season on Mafia" },
  { value: "0",      label: "Danger to humans — filter feeders only" },
];

const MARINE_LIFE = [
  { name: "Whale Shark",      note: "Rhincodon typus — Oct to Feb" },
  { name: "Manta Ray",        note: "Wingspan up to 7m" },
  { name: "Hawksbill Turtle", note: "Critically endangered" },
  { name: "Reef Fish",        note: "300+ tropical species" },
  { name: "Coral Gardens",    note: "Marine Protected Area" },
];

export default function MafiaWhaleSharkSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Cinematic full-width image panel */}
      <div className="relative rounded-xl overflow-hidden h-[55vh] mb-16">
        <img
          alt="Whale shark in open ocean — Mafia Island"
          src="https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=2670&auto=format&fit=crop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Overlaid headline */}
        <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-10 max-w-3xl">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            The Encounter
          </Badge>
          <h2 className="font-headline text-4xl md:text-6xl text-white leading-tight">
            The Length of a School Bus.{" "}
            <span className="italic text-primary">Two Metres Below You.</span>
          </h2>
        </div>
      </div>

      {/* Two-column: editorial left, facts right */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 mb-16">
        <div className="flex flex-col gap-5 text-on-surface-variant text-sm leading-relaxed font-light">
          <p>
            The whale shark is the world's largest fish — not a whale, despite
            the name. It is a shark that feeds on plankton, filtering thousands
            of litres of ocean water through gill rakers the size of your hand.
            It is completely harmless, utterly unhurried, and nothing — nothing
            — prepares you for the moment one appears beneath your fins.
          </p>
          <p>
            Mafia Island sits at the heart of a Marine Protected Area in the
            southern Tanzanian coast. Between October and February, concentrations
            of whale sharks gather here in numbers found at very few places on
            earth. Our expert local boat crews know exactly where to search, how
            to approach without disturbing them, and how to put you in the water
            at the perfect moment.
          </p>
          <p>
            This is a day trip from Zanzibar. A 50-minute morning flight, a
            boat ride, a briefing, and then the ocean opens up around you.
            You'll be back for dinner — with a memory that lasts a lifetime.
          </p>
        </div>

        {/* Fact column */}
        <div className="flex flex-col gap-4">
          {FACTS.map(({ value, label }) => (
            <div
              key={label}
              className="flex items-center gap-5 p-5 rounded-xl border border-outline-variant/10 bg-surface-container"
            >
              <span className="font-headline text-3xl text-primary shrink-0 w-20 text-center">
                {value}
              </span>
              <Separator orientation="vertical" className="h-8 bg-outline-variant/20" />
              <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marine life strip */}
      <div className="flex flex-col gap-3">
        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-2">
          Also in the water
        </p>
        <div className="flex flex-wrap gap-3">
          {MARINE_LIFE.map(({ name, note }) => (
            <div
              key={name}
              className="flex flex-col gap-1 px-5 py-3 rounded-xl border border-outline-variant/10 bg-surface-container hover:border-primary/20 transition-colors duration-200"
            >
              <span className="font-label text-[11px] font-bold text-white">{name}</span>
              <span className="font-label text-[9px] text-on-surface-variant/50">{note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
