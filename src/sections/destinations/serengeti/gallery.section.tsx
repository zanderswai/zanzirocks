import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { RiStarFill, RiVerifiedBadgeFill } from "@remixicon/react";
import { cn } from "@/lib/utils";

type FilterKey = "all" | "migration" | "big-cats" | "plains" | "camp";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  filter: FilterKey;
  review?: {
    name: string;
    initials: string;
    rating: number;
    text: string;
    country: string;
  };
};

const ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=900&auto=format&fit=crop",
    alt: "Wildebeest herd crossing the Mara River",
    filter: "migration",
    review: {
      name: "Thomas V.",
      initials: "TV",
      rating: 5,
      text: "The crossing was unlike anything I have ever witnessed. Thousands of animals — pure primal chaos.",
      country: "Netherlands",
    },
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=900&auto=format&fit=crop",
    alt: "Lion pride resting on kopje",
    filter: "big-cats",
    review: {
      name: "Amara D.",
      initials: "AD",
      rating: 5,
      text: "We found a pride of 18 lions on our very first drive. I completely lost count of how many photos I took.",
      country: "Canada",
    },
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=900&auto=format&fit=crop",
    alt: "Endless Serengeti plains at golden hour",
    filter: "plains",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1567608198472-6796ad9466a2?q=80&w=900&auto=format&fit=crop",
    alt: "Cheetah mother and cubs on the open grasslands",
    filter: "big-cats",
    review: {
      name: "Priya S.",
      initials: "PS",
      rating: 5,
      text: "A cheetah with four cubs, not 15 metres from the vehicle. My guide had been watching this family for three years.",
      country: "India",
    },
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1508768787810-6adc1f613514?q=80&w=900&auto=format&fit=crop",
    alt: "Wildebeest migration across the open Serengeti plains",
    filter: "migration",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=900&auto=format&fit=crop",
    alt: "Luxury tented camp under acacia tree",
    filter: "camp",
    review: {
      name: "Lucas F.",
      initials: "LF",
      rating: 5,
      text: "Falling asleep to hyena calls outside the tent. Waking to a sunrise that turned everything gold. Nothing compares.",
      country: "France",
    },
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=900&auto=format&fit=crop",
    alt: "Leopard in acacia tree at dusk",
    filter: "big-cats",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=900&auto=format&fit=crop",
    alt: "Serengeti kopje landscape at dawn",
    filter: "plains",
    review: {
      name: "Sarah M.",
      initials: "SM",
      rating: 5,
      text: "Our guide found a leopard with a fresh kill in a tree. We sat with her for two hours. Absolute silence in the vehicle — just awe.",
      country: "Australia",
    },
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=900&auto=format&fit=crop",
    alt: "Hot air balloon over Serengeti at sunrise",
    filter: "plains",
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "migration", label: "Migration" },
  { key: "big-cats", label: "Big Cats" },
  { key: "plains", label: "Plains & Sky" },
  { key: "camp", label: "Camp Life" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <RiStarFill key={i} className="size-3 text-primary" />
      ))}
    </div>
  );
}

export default function SerengetiGallerySection() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = filter === "all" ? ITEMS : ITEMS.filter((i) => i.filter === filter);
  const columns: GalleryItem[][] = [[], [], []];
  filtered.forEach((item, i) => columns[i % 3].push(item));
  const colOffsets = ["", "mt-10", "mt-5"];

  return (
    <section className="mb-32 md:mb-48">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            Gallery
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Seen Through{" "}
            <span className="italic text-primary">Our Guests' Eyes.</span>
          </h2>
        </div>
        <ToggleGroup
          type="single"
          value={filter}
          onValueChange={(v) => v && setFilter(v as FilterKey)}
          className="flex-wrap justify-start sm:justify-end gap-1.5"
        >
          {FILTERS.map((f) => (
            <ToggleGroupItem
              key={f.key}
              value={f.key}
              className="font-label text-[9px] uppercase tracking-widest border border-outline-variant/20 px-3 py-1 h-auto rounded-full data-[state=on]:bg-primary data-[state=on]:text-on-primary data-[state=on]:border-primary"
            >
              {f.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Masonry grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {columns.map((col, ci) => (
          <div key={ci} className={cn("flex flex-col gap-4", colOffsets[ci])}>
            {col.map((item) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {item.review && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5 gap-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="size-7 border border-primary/30">
                        <AvatarFallback className="text-[9px] font-label bg-primary/10 text-primary">
                          {item.review.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-label text-[10px] text-white font-bold">{item.review.name}</p>
                        <p className="font-label text-[8px] uppercase tracking-widest text-white/40">{item.review.country}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <RiVerifiedBadgeFill className="size-3 text-primary" />
                        <span className="font-label text-[8px] text-primary/70 uppercase tracking-wide">Verified</span>
                      </div>
                    </div>
                    <Separator className="bg-white/10" />
                    <StarRating rating={item.review.rating} />
                    <p className="text-white/80 text-xs font-light leading-relaxed italic">
                      &ldquo;{item.review.text}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Social proof strip */}
      <div className="mt-14 grid grid-cols-3 gap-px bg-outline-variant/10 rounded-xl overflow-hidden">
        {[
          { value: "4.9★", label: "Average guest rating" },
          { value: "30,000 km²", label: "Of pure wilderness" },
          { value: "Year-round", label: "Wildlife viewing" },
        ].map((stat, i) => (
          <div key={i} className="bg-surface-container px-6 py-5 flex flex-col gap-1">
            <span className="font-headline text-2xl text-primary">{stat.value}</span>
            <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">{stat.label}</span>
          </div>
        ))}
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
