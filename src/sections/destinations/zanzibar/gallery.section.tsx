import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import {
  RiStarFill,
  RiInstagramLine,
  RiArrowRightLine,
  RiCameraLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "all" | "beach" | "stone-town" | "marine" | "culture";

type Review = {
  name: string;
  initials: string;
  flag: string;
  quote: string;
  rating: number;
};

type GalleryItem = {
  id: string;
  category: Exclude<Category, "all">;
  image: string;
  alt: string;
  aspect: "portrait" | "landscape";
  review?: Review;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "Zanzibar powder-white beach",
    aspect: "portrait",
    review: {
      name: "Sarah M.",
      initials: "SM",
      flag: "🇬🇧",
      quote:
        "The beach alone was worth the flight. Everything after was a bonus.",
      rating: 5,
    },
  },
  {
    id: "g2",
    category: "stone-town",
    image:
      "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=1200&auto=format&fit=crop",
    alt: "Stone Town carved doorway heritage",
    aspect: "landscape",
    review: {
      name: "Marcus T.",
      initials: "MT",
      flag: "🇨🇦",
      quote: "Stone Town felt like stepping into another era entirely.",
      rating: 5,
    },
  },
  {
    id: "g3",
    category: "marine",
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200&auto=format&fit=crop",
    alt: "Coral reef snorkeling Zanzibar",
    aspect: "landscape",
  },
  {
    id: "g4",
    category: "culture",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    alt: "Zanzibar spice market cloves and cinnamon",
    aspect: "landscape",
    review: {
      name: "Anna L.",
      initials: "AL",
      flag: "🇩🇪",
      quote:
        "The spice tour completely changed how I think about flavour.",
      rating: 5,
    },
  },
  {
    id: "g5",
    category: "beach",
    image:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1200&auto=format&fit=crop",
    alt: "Turquoise Indian Ocean shallows Zanzibar east coast",
    aspect: "portrait",
  },
  {
    id: "g6",
    category: "stone-town",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=1200&auto=format&fit=crop",
    alt: "Traditional dhow boat at golden hour",
    aspect: "landscape",
    review: {
      name: "James K.",
      initials: "JK",
      flag: "🇺🇸",
      quote:
        "That dhow cruise at sunset. My most-shared photo. Ever.",
      rating: 5,
    },
  },
  {
    id: "g7",
    category: "marine",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=1200&auto=format&fit=crop",
    alt: "Marine life Indian Ocean Zanzibar",
    aspect: "landscape",
    review: {
      name: "Lena S.",
      initials: "LS",
      flag: "🇳🇱",
      quote:
        "I came for Zanzibar's beaches. Left having snorkelled with whale sharks.",
      rating: 5,
    },
  },
  {
    id: "g8",
    category: "culture",
    image:
      "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=1200&auto=format&fit=crop",
    alt: "Safari departure through Zanzibar gateway",
    aspect: "portrait",
  },
  {
    id: "g9",
    category: "beach",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    alt: "Zanzibar coastal scenery aerial",
    aspect: "landscape",
    review: {
      name: "Jameson T.",
      initials: "JT",
      flag: "✦",
      quote:
        "Every detail was considered, every moment curated — nothing felt staged.",
      rating: 5,
    },
  },
];

const FILTERS: { value: Category; label: string }[] = [
  { value: "all",        label: "All" },
  { value: "beach",      label: "Beach" },
  { value: "stone-town", label: "Stone Town" },
  { value: "marine",     label: "Marine" },
  { value: "culture",    label: "Culture" },
];

const PROOF_STATS = [
  { value: "500+", label: "Adventures launched" },
  { value: "4.9★", label: "Average guest rating" },
  { value: "42+",  label: "Countries represented" },
];

const ASPECT: Record<"portrait" | "landscape", string> = {
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

// ─── Stars ────────────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <RiStarFill key={i} className="size-2.5 text-[#00b67a]" />
      ))}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-xl",
        ASPECT[item.aspect],
      )}
    >
      {/* Image */}
      <img
        alt={item.alt}
        src={item.image}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Permanent subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Hover: deeper overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Category pill — always visible */}
      <div className="absolute top-3 left-3">
        <span className="font-label text-[9px] uppercase tracking-widest text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
          {item.category.replace("-", " ")}
        </span>
      </div>

      {/* Camera icon — shows when no review */}
      {!item.review && (
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <RiCameraLine className="size-4 text-white/40" />
        </div>
      )}

      {/* Review overlay — slides up on hover */}
      {item.review && (
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          {/* Quote */}
          <p className="font-headline text-white text-base leading-snug italic mb-3">
            &ldquo;{item.review.quote}&rdquo;
          </p>

          <Separator className="bg-white/10 mb-3" />

          {/* Reviewer row */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Avatar className="size-7 border border-white/20 shrink-0">
                <AvatarFallback className="bg-primary-container/20 text-primary text-[10px] font-bold">
                  {item.review.initials}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-label text-[11px] font-bold text-white truncate">
                  {item.review.name}{" "}
                  <span className="text-xs">{item.review.flag}</span>
                </p>
                <Stars count={item.review.rating} />
              </div>
            </div>
            <Badge
              variant="outline"
              className="border-primary/30 text-primary/70 font-label text-[9px] uppercase tracking-widest shrink-0"
            >
              Verified
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const COL_OFFSETS = ["", "mt-8", "mt-4"] as const;

export default function ZanzibarGallerySection() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? ITEMS : ITEMS.filter((i) => i.category === active);

  // Distribute into 3 masonry columns
  const columns: GalleryItem[][] = [[], [], []];
  filtered.forEach((item, i) => columns[i % 3].push(item));

  return (
    <section className="mb-32 md:mb-48">
      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            Through Their Eyes
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Real Moments.{" "}
            <span className="italic text-primary">Real People.</span>
          </h2>
        </div>

        <Button
          variant="outline"
          className="border-outline-variant/30 text-on-surface-variant hover:border-primary/40 hover:text-primary gap-2 font-label uppercase tracking-widest text-[10px] shrink-0"
          asChild
        >
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramLine className="size-4" />
            Follow @zanzirocks
            <RiArrowRightLine className="size-3" />
          </a>
        </Button>
      </div>

      {/* ── Filter tabs ── */}
      <ToggleGroup
        type="single"
        value={active}
        onValueChange={(v) => v && setActive(v as Category)}
        variant="outline"
        size="sm"
        className="flex-wrap justify-start gap-2 mb-8"
        spacing={2}
      >
        {FILTERS.map(({ value, label }) => (
          <ToggleGroupItem
            key={value}
            value={value}
            className={cn(
              "font-label uppercase tracking-widest text-[10px] font-bold",
              "border-outline-variant/20 text-on-surface-variant",
              "data-[state=on]:border-primary data-[state=on]:text-primary data-[state=on]:bg-primary/10",
            )}
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {/* ── Masonry grid ── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.map((col, ci) => (
            <div
              key={ci}
              className={cn("flex flex-col gap-4", COL_OFFSETS[ci])}
            >
              {col.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 rounded-xl border border-outline-variant/10 bg-surface-container">
          <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant/50">
            No photos in this category yet.
          </p>
        </div>
      )}

      {/* ── Social proof strip ── */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10">
        {PROOF_STATS.map(({ value, label }) => (
          <div
            key={label}
            className="bg-surface-container px-8 py-7 flex flex-col gap-1.5 items-center text-center"
          >
            <span className="font-headline text-3xl text-primary">{value}</span>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
              {label}
            </span>
          </div>
        ))}
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
