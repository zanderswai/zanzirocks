import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const STATS = [
  { value: "UNESCO", label: "World Heritage Site" },
  { value: "1,651km²", label: "Island Area" },
  { value: "45 min", label: "Fly to Safari Parks" },
  { value: "~350k", label: "Population" },
];

const MOSAIC = [
  {
    alt: "Stone Town carved doorways — UNESCO heritage heart of Zanzibar",
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=1200&auto=format&fit=crop",
    className: "col-span-1 row-span-2",
  },
  {
    alt: "Zanzibar east coast beach — turquoise Indian Ocean shallows",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    className: "col-span-1 row-span-1",
  },
  {
    alt: "Zanzibar spice market — cloves, vanilla and cinnamon",
    src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    className: "col-span-1 row-span-1",
  },
];

export default function ZanzibarOverviewSection() {
  return (
    <section className="py-24 md:py-32 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── Left: text ── */}
        <div className="lg:sticky lg:top-24">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-6"
          >
            The Island
          </Badge>

          <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-8">
            More Than a Beach.{" "}
            <br className="hidden md:block" />
            <span className="italic text-primary">A World Apart.</span>
          </h2>

          <div className="flex flex-col gap-5 text-on-surface-variant text-sm leading-relaxed font-light">
            <p>
              Zanzibar is where the Indian Ocean meets the soul of East Africa.
              Its labyrinthine Stone Town — a living, breathing UNESCO World
              Heritage Site — carries five centuries of Swahili, Arab, Persian,
              and colonial history in every carved doorway and coral-stone wall.
            </p>
            <p>
              But Zanzibar is not just history. The beaches of the east coast
              rival any in the world: powder white, turquoise-fringed, and
              largely uncrowded outside peak months. Beneath the surface, coral
              gardens burst with colour, and the waters between October and
              February host the largest congregation of whale sharks on the
              East African coast — a short flight away on Mafia Island.
            </p>
            <p>
              For ZanziRocks guests, Zanzibar is the beginning. From its
              international airport, every safari in our collection is 45
              minutes to a few hours away. You arrive, you settle — and then
              Tanzania opens up in all directions.
            </p>
          </div>

          <Separator className="my-10 bg-outline-variant/15" />

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <p className="font-headline text-2xl text-primary">{value}</p>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/70 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: mosaic ── */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[540px]">
          {MOSAIC.map(({ alt, src, className }) => (
            <div key={alt} className={`${className} rounded-xl overflow-hidden`}>
              <img
                alt={alt}
                src={src}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
