import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type Destination = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  type: string;
  region: string;
  bestTime: string;
  tag: string;
  image: string;
  imageAlt: string;
  facts: [string, string, string];
  gradientAccent: string;
};

const DESTINATIONS: Destination[] = [
  {
    id: "zanzibar",
    slug: "destinations/zanzibar",
    name: "Zanzibar",
    tagline: "Your gateway to everything Tanzania has to offer.",
    type: "Island",
    region: "Indian Ocean",
    bestTime: "Jun – Oct",
    tag: "Your Base Camp",
    image: "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Zanzibar pristine beach with turquoise water",
    facts: ["UNESCO Stone Town — 1,000 years of history", "Coral reef snorkelling & diving", "30-min flight to mainland safari parks"],
    gradientAccent: "from-sky-900/40",
  },
  {
    id: "serengeti",
    slug: "destinations/serengeti",
    name: "Serengeti",
    tagline: "1.5 million animals. One endless circle.",
    type: "National Park",
    region: "Northern Circuit",
    bestTime: "Jul – Sep",
    tag: "Bucket List",
    image: "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Wildebeest herd in the Serengeti at golden hour",
    facts: ["World's greatest wildlife spectacle", "Mara River crossings Jul–Sep", "Year-round big cat sightings"],
    gradientAccent: "from-amber-900/40",
  },
  {
    id: "nyerere",
    slug: "destinations/nyerere",
    name: "Nyerere",
    tagline: "Africa's largest park — and almost no one's heard of it.",
    type: "National Park",
    region: "Southern Tanzania",
    bestTime: "Jun – Oct",
    tag: "Off The Beaten Path",
    image: "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Rufiji River boat safari through Nyerere National Park",
    facts: ["30,893 km² — twice the size of Denmark", "Rufiji River boat safaris", "Largest wild dog population in Africa"],
    gradientAccent: "from-emerald-900/40",
  },
  {
    id: "ngorongoro",
    slug: "destinations/ngorongoro",
    name: "Ngorongoro",
    tagline: "The world's largest intact volcanic caldera.",
    type: "UNESCO Heritage Site",
    region: "Northern Circuit",
    bestTime: "Year-round",
    tag: "World Famous",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Ngorongoro Crater panorama with wildlife on the crater floor",
    facts: ["260 km² enclosed ecosystem", "~25,000 large animals on the crater floor", "One of Africa's last wild black rhino"],
    gradientAccent: "from-stone-900/50",
  },
  {
    id: "tarangire",
    slug: "destinations/tarangire",
    name: "Tarangire",
    tagline: "800 elephants. Ancient baobabs. Zero crowds.",
    type: "National Park",
    region: "Northern Circuit",
    bestTime: "Jun – Oct",
    tag: "Hidden Gem",
    image: "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Elephant herd under ancient baobab trees in Tarangire",
    facts: ["Highest elephant density in East Africa", "1,000-year-old baobab forests", "550+ bird species"],
    gradientAccent: "from-orange-900/40",
  },
  {
    id: "mafia",
    slug: "destinations/mafia",
    name: "Mafia Island",
    tagline: "The only place on earth where you can swim with whale sharks in a protected marine park.",
    type: "Marine Park",
    region: "Indian Ocean",
    bestTime: "Oct – Feb",
    tag: "Bucket List",
    image: "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Whale shark swimming in crystal clear Indian Ocean water off Mafia Island",
    facts: ["Swim with 10m whale sharks", "Pristine coral reefs & snorkelling", "Chumbe Island day trip option"],
    gradientAccent: "from-blue-900/50",
  },
];

type CardSize = "feature" | "tall" | "medium" | "wide";

function DestinationCard({ dest, size }: { dest: Destination; size: CardSize }) {
  const heightCls = {
    feature: "h-[480px] lg:h-[560px]",
    tall: "h-[400px] lg:h-[560px]",
    medium: "h-[320px]",
    wide: "h-[320px]",
  }[size];

  return (
    <Link
      to={`/${dest.slug}`}
      id={dest.id}
      className={cn(
        "group relative block rounded-2xl overflow-hidden",
        heightCls,
      )}
      aria-label={dest.name}
    >
      {/* Image */}
      <img
        src={dest.image}
        alt={dest.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient layers */}
      <div className={cn("absolute inset-0 bg-gradient-to-t", dest.gradientAccent, "to-transparent opacity-60")} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

      {/* Top badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <Badge
          variant="secondary"
          className="font-label uppercase tracking-widest text-[8px] bg-black/40 backdrop-blur-sm border-white/10 text-white/70"
        >
          {dest.type}
        </Badge>
        <span className="font-label text-[8px] uppercase tracking-widest text-primary/80 bg-black/30 backdrop-blur-sm border border-primary/20 rounded-full px-2 py-0.5">
          {dest.tag}
        </span>
      </div>

      {/* Bottom content — always visible */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-label text-[8px] uppercase tracking-widest text-white/40">{dest.region}</span>
          <span className="text-white/20">·</span>
          <span className="font-label text-[8px] uppercase tracking-widest text-white/40">{dest.bestTime}</span>
        </div>

        <h2
          className={cn(
            "font-headline text-white leading-none",
            size === "feature" ? "text-5xl md:text-6xl" : size === "tall" ? "text-4xl" : "text-3xl",
          )}
        >
          {dest.name}
        </h2>

        {/* Hover reveal */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-white/60 text-xs font-light leading-relaxed pt-2 pb-3 max-w-sm">
              {dest.tagline}
            </p>
            <ul className="flex flex-col gap-1.5 mb-4">
              {dest.facts.map((fact, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px] text-white/55 font-light">
                  <span className="mt-[3px] size-1.5 rounded-full bg-primary shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="font-label text-[8px] uppercase tracking-widest text-white/30">
            Explore destination
          </span>
          <span className="flex items-center gap-1 font-label text-[8px] uppercase tracking-widest text-white/30 group-hover:text-primary transition-colors duration-300 font-bold">
            View <RiArrowRightLine className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function MafiaWideCard({ dest }: { dest: Destination }) {
  return (
    <Link
      to={`/${dest.slug}`}
      id={dest.id}
      className="group relative block rounded-2xl overflow-hidden lg:col-span-3"
      aria-label={dest.name}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] h-[300px] lg:h-[260px]">
        {/* Content panel */}
        <div className="relative z-10 bg-surface-container flex flex-col justify-between p-7 lg:p-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="font-label uppercase tracking-widest text-[8px]"
              >
                {dest.type}
              </Badge>
              <span className="font-label text-[8px] uppercase tracking-widest text-primary/70 border border-primary/20 rounded-full px-2 py-0.5">
                {dest.tag}
              </span>
            </div>

            <div>
              <p className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant/40 mb-1">
                {dest.region} · {dest.bestTime}
              </p>
              <h2 className="font-headline text-4xl text-on-surface leading-none">{dest.name}</h2>
            </div>

            <p className="text-on-surface-variant text-xs font-light leading-relaxed max-w-xs">
              {dest.tagline}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-[10px] px-5 h-8 gap-1.5 group-hover:gap-2.5 transition-all"
            >
              Explore <RiArrowRightLine className="size-3" />
            </Button>
            <ul className="hidden sm:flex flex-col gap-1">
              {dest.facts.slice(0, 2).map((fact, i) => (
                <li key={i} className="flex items-center gap-1.5 text-[10px] text-on-surface-variant/50 font-light">
                  <span className="size-1 rounded-full bg-primary/60 shrink-0" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image panel */}
        <div className="relative overflow-hidden hidden lg:block">
          <img
            src={dest.image}
            alt={dest.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container/80 via-transparent to-transparent" />
        </div>
      </div>
    </Link>
  );
}

export default function DestinationsGridSection() {
  const [zanzibar, serengeti, nyerere, ngorongoro, tarangire, mafia] = DESTINATIONS;

  return (
    <section className="pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Row 1: Feature + Tall */}
        <div className="lg:col-span-2">
          <DestinationCard dest={zanzibar} size="feature" />
        </div>
        <div>
          <DestinationCard dest={serengeti} size="tall" />
        </div>

        {/* Row 2: Three equal medium */}
        <DestinationCard dest={nyerere} size="medium" />
        <DestinationCard dest={ngorongoro} size="medium" />
        <DestinationCard dest={tarangire} size="medium" />

        {/* Row 3: Mafia editorial wide */}
        <MafiaWideCard dest={mafia} />
      </div>

      {/* CTA strip */}
      <div className="mt-16 rounded-2xl border border-outline-variant/10 bg-surface-container p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-2">Not sure where to start?</p>
          <h3 className="font-headline text-3xl md:text-4xl leading-tight">
            Let us build your{" "}
            <span className="italic text-primary">perfect itinerary.</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Button
            asChild
            className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
          >
            <Link to="/contact">
              Plan My Trip <RiArrowRightLine />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label uppercase tracking-widest text-xs px-8"
          >
            <Link to="/packages">Browse Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
