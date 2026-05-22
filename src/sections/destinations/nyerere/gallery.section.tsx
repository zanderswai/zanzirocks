import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { RiStarFill, RiCameraLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "all" | "savanna" | "river" | "big-cats" | "camp";

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
    id: "n1",
    category: "savanna",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1200&auto=format&fit=crop",
    alt: "Elephant herd crossing Nyerere savanna",
    aspect: "portrait",
    review: {
      name: "James K.",
      initials: "JK",
      flag: "🇺🇸",
      quote: "The herd crossed thirty metres in front of us. Nobody breathed.",
      rating: 5,
    },
  },
  {
    id: "n2",
    category: "river",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=1200&auto=format&fit=crop",
    alt: "Rufiji River at golden hour — hippos and birds",
    aspect: "landscape",
    review: {
      name: "Sarah M.",
      initials: "SM",
      flag: "🇬🇧",
      quote: "Nothing prepared me for the Rufiji at dawn. Absolutely nothing.",
      rating: 5,
    },
  },
  {
    id: "n3",
    category: "big-cats",
    image: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=1200&auto=format&fit=crop",
    alt: "Lion resting on rock Nyerere National Park",
    aspect: "landscape",
  },
  {
    id: "n4",
    category: "savanna",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop",
    alt: "Buffalo herd Nyerere plains",
    aspect: "landscape",
    review: {
      name: "Anna L.",
      initials: "AL",
      flag: "🇩🇪",
      quote: "More wildlife in one drive than I'd seen across three other parks.",
      rating: 5,
    },
  },
  {
    id: "n5",
    category: "river",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
    alt: "Rufiji River at dusk — last light over the water",
    aspect: "portrait",
  },
  {
    id: "n6",
    category: "big-cats",
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1200&auto=format&fit=crop",
    alt: "Leopard in acacia tree Nyerere",
    aspect: "landscape",
    review: {
      name: "Marcus T.",
      initials: "MT",
      flag: "🇨🇦",
      quote: "A leopard draped in the acacia. Our guide had spotted it at 200m.",
      rating: 5,
    },
  },
  {
    id: "n7",
    category: "camp",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    alt: "Bush camp fire evening Nyerere",
    aspect: "landscape",
    review: {
      name: "Lena S.",
      initials: "LS",
      flag: "🇳🇱",
      quote: "Dinner under the stars with hyenas calling in the dark. Magical.",
      rating: 5,
    },
  },
  {
    id: "n8",
    category: "savanna",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop",
    alt: "Giraffes at waterhole Nyerere",
    aspect: "portrait",
  },
  {
    id: "n9",
    category: "camp",
    image: "https://images.unsplash.com/photo-1588445599591-efe468e9c3ce?q=80&w=1200&auto=format&fit=crop",
    alt: "Walking safari guide Nyerere bush",
    aspect: "landscape",
  },
];

const FILTERS: { value: Category; label: string }[] = [
  { value: "all",       label: "All" },
  { value: "savanna",   label: "Savanna" },
  { value: "river",     label: "River" },
  { value: "big-cats",  label: "Big Cats" },
  { value: "camp",      label: "Bush Camp" },
];

const PROOF_STATS = [
  { value: "30,893km²", label: "Of untouched wilderness" },
  { value: "4.9★",      label: "Average guest rating" },
  { value: "Zero",      label: "Crowds. Ever." },
];

const ASPECT_CLASS: Record<"portrait" | "landscape", string> = {
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

const COL_OFFSETS = ["", "mt-10", "mt-5"] as const;

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
        ASPECT_CLASS[item.aspect],
      )}
    >
      <img
        alt={item.alt}
        src={item.image}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Category chip */}
      <div className="absolute top-3 left-3">
        <span className="font-label text-[9px] uppercase tracking-widest text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
          {item.category.replace("-", " ")}
        </span>
      </div>

      {!item.review && (
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <RiCameraLine className="size-4 text-white/40" />
        </div>
      )}

      {item.review && (
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          <p className="font-headline text-white text-base leading-snug italic mb-3">
            &ldquo;{item.review.quote}&rdquo;
          </p>
          <Separator className="bg-white/10 mb-3" />
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

export default function NyerereGallerySection() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? ITEMS : ITEMS.filter((i) => i.category === active);

  const columns: GalleryItem[][] = [[], [], []];
  filtered.forEach((item, i) => columns[i % 3].push(item));

  return (
    <section className="mb-32 md:mb-48">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            In the Field
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            No Staging. No Filters. <br />
            <span className="italic text-primary">Just Nyerere.</span>
          </h2>
        </div>

        <p className="text-on-surface-variant text-sm font-light max-w-xs leading-relaxed sm:text-right">
          Shot by real guests on real ZanziRocks safaris.
          Every moment happened exactly as you see it.
        </p>
      </div>

      {/* Filters */}
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

      {/* Masonry */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.map((col, ci) => (
            <div key={ci} className={cn("flex flex-col gap-4", COL_OFFSETS[ci])}>
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

      {/* Social proof strip */}
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
