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

type FilterKey = "all" | "elephants" | "baobabs" | "river" | "birds";

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
    src: "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=900&auto=format&fit=crop",
    alt: "Elephant herd at Tarangire waterhole",
    filter: "elephants",
    review: {
      name: "James O.",
      initials: "JO",
      rating: 5,
      text: "Over a hundred elephants at the river at once. My guide said even he had never seen that many in one place. An extraordinary day.",
      country: "United Kingdom",
    },
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=900&auto=format&fit=crop",
    alt: "Ancient baobab tree at sunset",
    filter: "baobabs",
    review: {
      name: "Chiara M.",
      initials: "CM",
      rating: 5,
      text: "We stopped under a baobab that was probably a thousand years old. The silence. The scale. Nothing prepares you for it.",
      country: "Italy",
    },
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=900&auto=format&fit=crop",
    alt: "Wildlife at the Tarangire River at dusk",
    filter: "river",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=900&auto=format&fit=crop",
    alt: "Elephant bull in the savanna",
    filter: "elephants",
    review: {
      name: "Kenji T.",
      initials: "KT",
      rating: 5,
      text: "A huge old bull blocked the track for twenty minutes. Nobody was in a hurry. That is the pace of Tarangire.",
      country: "Japan",
    },
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=900&auto=format&fit=crop",
    alt: "Flamingos at Silale Swamp Tarangire",
    filter: "birds",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=900&auto=format&fit=crop",
    alt: "Lions resting near a baobab tree",
    filter: "baobabs",
    review: {
      name: "Anya R.",
      initials: "AR",
      rating: 5,
      text: "We found tree-climbing lions — three of them lounging in the branches of an acacia right next to a baobab. Pure magic.",
      country: "Australia",
    },
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=900&auto=format&fit=crop",
    alt: "Leopard in the Tarangire landscape",
    filter: "river",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=900&auto=format&fit=crop",
    alt: "Superb starling bird on acacia",
    filter: "birds",
    review: {
      name: "Luisa G.",
      initials: "LG",
      rating: 5,
      text: "I'm a birder and this park was a revelation. 550 species — we ticked over 140 in three days. And the setting is breathtaking.",
      country: "Germany",
    },
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=900&auto=format&fit=crop",
    alt: "Elephant herd moving through baobab forest",
    filter: "elephants",
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "elephants", label: "Elephants" },
  { key: "baobabs", label: "Baobabs" },
  { key: "river", label: "River" },
  { key: "birds", label: "Birds" },
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

export default function TarangireGallerySection() {
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
            Africa's{" "}
            <span className="italic text-primary">Best-Kept Secret.</span>
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

      {/* Masonry */}
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

      {/* Social proof */}
      <div className="mt-14 grid grid-cols-3 gap-px bg-outline-variant/10 rounded-xl overflow-hidden">
        {[
          { value: "4.9★", label: "Average guest rating" },
          { value: "550+", label: "Bird species recorded" },
          { value: "No crowds", label: "Tanzania's hidden gem" },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface-container px-6 py-5 flex flex-col gap-1">
            <span className="font-headline text-2xl text-primary">{stat.value}</span>
            <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">{stat.label}</span>
          </div>
        ))}
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
