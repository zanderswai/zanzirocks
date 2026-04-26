import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

type DestinationType = "safari" | "island" | "gateway";

type Destination = {
  id: string;
  name: string;
  heroTag: string;
  description: string;
  highlights: [string, string, string];
  href: string;
  type: DestinationType;
  image: string;
};

const destinations: Destination[] = [
  {
    id: "zanzibar",
    name: "Zanzibar Island",
    heroTag: "Your Gateway to Everything",
    description:
      "Your base for every adventure in Tanzania. UNESCO Stone Town, Indian Ocean beaches, spice tours — and direct fly-in connections to every safari in our collection.",
    highlights: [
      "UNESCO Stone Town heritage",
      "Direct fly-in to all safari parks",
      "Dhow sunset cruises & spice tours",
    ],
    href: "/destinations/zanzibar",
    type: "island",
    image:
      "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=2671&auto=format&fit=crop",
  },
  {
    id: "nyerere",
    name: "Nyerere National Park",
    heroTag: "Africa's Largest National Park",
    description:
      "Wilder, less crowded, and 45 minutes from Zanzibar by air. The Rufiji River winds through elephant country, and boat safaris bring you face to face with hippos and crocodiles.",
    highlights: [
      "Rufiji River boat safari",
      "Walking safari with armed rangers",
      "Maasai village cultural experience",
    ],
    href: "/destinations/nyerere",
    type: "safari",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "serengeti",
    name: "Serengeti National Park",
    heroTag: "The Great Migration",
    description:
      "The greatest wildlife spectacle on earth. Endless golden plains, the Big Five at every turn, and a wildebeest migration that rewrites the map with each passing season.",
    highlights: [
      "Great Wildebeest Migration",
      "Big Five predators: lion, leopard, cheetah",
      "Seronera — most wildlife-rich corridor",
    ],
    href: "/destinations/serengeti",
    type: "safari",
    image:
      "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "ngorongoro",
    name: "Ngorongoro Crater",
    heroTag: "The World's Largest Intact Caldera",
    description:
      "A world unto itself. The 100-square-mile caldera cradles a permanent community of lions, elephants, flamingos, and the rare black rhino — all accessible in a single half-day descent.",
    highlights: [
      "600m crater descent game drive",
      "Permanent Big Five — no migration needed",
      "Flamingos on the crater lake",
    ],
    href: "/destinations/ngorongoro",
    type: "safari",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
  },
  {
    id: "tarangire",
    name: "Tarangire National Park",
    heroTag: "Land of the Giants",
    description:
      "Follow the elephants. Hundreds strong, moving through ancient baobab forests beside the Tarangire River — the dry-season lifeline that draws every creature in northern Tanzania.",
    highlights: [
      "Largest elephant herds in Tanzania",
      "Iconic ancient baobab trees",
      "Tree pythons & rare bird species",
    ],
    href: "/destinations/tarangire",
    type: "safari",
    image:
      "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "lake-manyara",
    name: "Lake Manyara",
    heroTag: "The Jewel of the Rift Valley",
    description:
      "Famous for tree-climbing lions and flamingo flocks that turn the lake pink. The dramatic Rift Valley escarpment drops into dense groundwater forest — 500+ bird species call it home.",
    highlights: [
      "Famous tree-climbing lions",
      "Massive flamingo flocks on the lake",
      "Rift Valley escarpment panoramas",
    ],
    href: "/destinations/lake-manyara",
    type: "safari",
    image:
      "https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: "mafia-island",
    name: "Mafia Island",
    heroTag: "Swim With Giants",
    description:
      "Swim alongside whale sharks — the world's largest fish — in the marine-protected waters of Mafia Island. The bucket-list moment that starts with a 50-minute scenic flight from Zanzibar.",
    highlights: [
      "Whale shark snorkeling (Oct–Feb season)",
      "Pristine coral reefs & marine reserve",
      "Shore BBQ lunch + Kilindoni city tour",
    ],
    href: "/destinations/mafia-island",
    type: "island",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=2574&auto=format&fit=crop",
  },
];

const TYPE_LABELS: Record<DestinationType, string> = {
  safari: "Safari Destination",
  island: "Island Experience",
  gateway: "Gateway City",
};

// ─── Dot ──────────────────────────────────────────────────────────────────────

function Dot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Go to slide"
      className={cn(
        "rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300",
        active ? "w-6 h-1.5 bg-primary hover:bg-primary" : "size-1.5",
      )}
    />
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const SLIDE_H = "h-[70vh] md:h-[82vh]";

export default function PillarsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const count = destinations.length;

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="mb-32 md:mb-48">
      {/* Heading */}
      <div className="text-center mb-16">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-xs mb-6"
        >
          The Pillars of Experience
        </Badge>
        <h2 className="font-headline text-5xl">Choose Your Horizon</h2>
      </div>

      {/* Carousel */}
      <div className="relative rounded-xl overflow-hidden">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          {/* -ml-0 / pl-0 strip the default gutters for full-bleed slides */}
          <CarouselContent className={cn(SLIDE_H, "-ml-0")}>
            {destinations.map((dest, i) => (
              <CarouselItem
                key={dest.id}
                className="pl-0 relative h-full"
                aria-label={`Slide ${i + 1}: ${dest.name}`}
              >
                {/* Background image */}
                <img
                  alt={dest.name}
                  src={dest.image}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

                {/* Slide content */}
                <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-28 md:pb-32 max-w-3xl">
                  <Badge
                    variant="outline"
                    className="w-fit border-primary/50 text-primary font-label uppercase tracking-[0.25em] text-[10px] mb-5"
                  >
                    {TYPE_LABELS[dest.type]}
                  </Badge>

                  <h3 className="font-headline text-5xl md:text-7xl text-white leading-none mb-5">
                    {dest.heroTag}
                  </h3>

                  <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-6 max-w-lg">
                    {dest.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2 mb-8">
                    {dest.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-[11px] text-white/60 uppercase tracking-widest font-label font-bold"
                      >
                        <span className="size-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-fit bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
                  >
                    <Link to={dest.href}>
                      Explore {dest.name}
                      <RiArrowRightSLine data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Bottom navigation bar */}
          <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-8 md:px-16 py-6 z-10">
            {/* Slide counter */}
            <span className="font-label text-[11px] text-white/40 tracking-[0.35em] uppercase font-bold tabular-nums select-none">
              {String(current + 1).padStart(2, "0")}
              <span className="mx-2 text-white/20">/</span>
              {String(count).padStart(2, "0")}
            </span>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {destinations.map((_, i) => (
                <Dot
                  key={i}
                  active={i === current}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => api?.scrollPrev()}
                className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/25 hover:text-white backdrop-blur-sm"
                aria-label="Previous destination"
              >
                <RiArrowLeftLine />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => api?.scrollNext()}
                className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/25 hover:text-white backdrop-blur-sm"
                aria-label="Next destination"
              >
                <RiArrowRightLine />
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
