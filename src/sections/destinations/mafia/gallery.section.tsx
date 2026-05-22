import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { RiStarFill, RiCameraLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type Category = "all" | "ocean" | "reef" | "island" | "encounter";
type Review = { name: string; initials: string; flag: string; quote: string; rating: number };
type GalleryItem = { id: string; category: Exclude<Category, "all">; image: string; alt: string; aspect: "portrait" | "landscape"; review?: Review };

const ITEMS: GalleryItem[] = [
  {
    id: "m1", category: "encounter",
    image: "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=1200&auto=format&fit=crop",
    alt: "Whale shark encounter open ocean Mafia Island", aspect: "portrait",
    review: { name: "Anna L.", initials: "AL", flag: "🇩🇪", quote: "I've dived three oceans. Nothing came close to this moment.", rating: 5 },
  },
  {
    id: "m2", category: "ocean",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200&auto=format&fit=crop",
    alt: "Snorkelling in clear Mafia Island waters", aspect: "landscape",
    review: { name: "James K.", initials: "JK", flag: "🇺🇸", quote: "The visibility was extraordinary. You could see for forty metres.", rating: 5 },
  },
  {
    id: "m3", category: "reef",
    image: "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=1200&auto=format&fit=crop",
    alt: "Coral reef marine life Mafia Island MPA", aspect: "landscape",
  },
  {
    id: "m4", category: "island",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "Mafia Island shore and clear shallows", aspect: "landscape",
    review: { name: "Sarah M.", initials: "SM", flag: "🇬🇧", quote: "We had lunch on the shore and the ocean was completely deserted. Perfect.", rating: 5 },
  },
  {
    id: "m5", category: "encounter",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    alt: "Underwater ocean encounter Mafia Island", aspect: "portrait",
  },
  {
    id: "m6", category: "island",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    alt: "Kilindoni town Mafia Island local market", aspect: "landscape",
    review: { name: "Marcus T.", initials: "MT", flag: "🇨🇦", quote: "Kilindoni felt like the real Tanzania — completely unhurried, genuine.", rating: 5 },
  },
  {
    id: "m7", category: "ocean",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=1200&auto=format&fit=crop",
    alt: "Boat at dawn Mafia Island departure", aspect: "landscape",
  },
  {
    id: "m8", category: "reef",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1200&auto=format&fit=crop",
    alt: "Turquoise shallow reef Mafia Island", aspect: "portrait",
    review: { name: "Lena S.", initials: "LS", flag: "🇳🇱", quote: "The colours underwater were like nothing in the Mediterranean.", rating: 5 },
  },
  {
    id: "m9", category: "island",
    image: "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=1200&auto=format&fit=crop",
    alt: "Mafia Island coastal scenery afternoon light", aspect: "landscape",
  },
];

const FILTERS: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "encounter", label: "Encounters" },
  { value: "ocean", label: "Open Ocean" },
  { value: "reef", label: "Reef" },
  { value: "island", label: "Island" },
];

const PROOF = [
  { value: "$550", label: "Adults per person" },
  { value: "4.9★", label: "Average guest rating" },
  { value: "Oct–Feb", label: "Peak whale shark season" },
];

const COL_OFFSETS = ["", "mt-10", "mt-5"] as const;
const ASPECT_CLASS: Record<"portrait" | "landscape", string> = { portrait: "aspect-[3/4]", landscape: "aspect-[4/3]" };

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => <RiStarFill key={i} className="size-2.5 text-[#00b67a]" />)}
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className={cn("group relative w-full overflow-hidden rounded-xl", ASPECT_CLASS[item.aspect])}>
      <img alt={item.alt} src={item.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute top-3 left-3">
        <span className="font-label text-[9px] uppercase tracking-widest text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
          {item.category}
        </span>
      </div>
      {!item.review && (
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <RiCameraLine className="size-4 text-white/40" />
        </div>
      )}
      {item.review && (
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          <p className="font-headline text-white text-base leading-snug italic mb-3">&ldquo;{item.review.quote}&rdquo;</p>
          <Separator className="bg-white/10 mb-3" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Avatar className="size-7 border border-white/20 shrink-0">
                <AvatarFallback className="bg-primary-container/20 text-primary text-[10px] font-bold">{item.review.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-label text-[11px] font-bold text-white truncate">{item.review.name} <span className="text-xs">{item.review.flag}</span></p>
                <Stars count={item.review.rating} />
              </div>
            </div>
            <Badge variant="outline" className="border-primary/30 text-primary/70 font-label text-[9px] uppercase tracking-widest shrink-0">Verified</Badge>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MafiaGallerySection() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? ITEMS : ITEMS.filter((i) => i.category === active);
  const columns: GalleryItem[][] = [[], [], []];
  filtered.forEach((item, i) => columns[i % 3].push(item));

  return (
    <section className="mb-32 md:mb-48">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
        <div>
          <Badge variant="outline" className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4">
            In the Water & On the Shore
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Seen Through <span className="italic text-primary">Their Masks.</span>
          </h2>
        </div>
        <p className="text-on-surface-variant text-sm font-light max-w-xs leading-relaxed sm:text-right">
          Real guests. Real encounters. Shot on the day of their trip.
        </p>
      </div>

      <ToggleGroup type="single" value={active} onValueChange={(v) => v && setActive(v as Category)} variant="outline" size="sm" className="flex-wrap justify-start gap-2 mb-8" spacing={2}>
        {FILTERS.map(({ value, label }) => (
          <ToggleGroupItem key={value} value={value} className={cn("font-label uppercase tracking-widest text-[10px] font-bold border-outline-variant/20 text-on-surface-variant data-[state=on]:border-primary data-[state=on]:text-primary data-[state=on]:bg-primary/10")}>
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.map((col, ci) => (
            <div key={ci} className={cn("flex flex-col gap-4", COL_OFFSETS[ci])}>
              {col.map((item) => <GalleryCard key={item.id} item={item} />)}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 rounded-xl border border-outline-variant/10 bg-surface-container">
          <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant/50">No photos in this category yet.</p>
        </div>
      )}

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10">
        {PROOF.map(({ value, label }) => (
          <div key={label} className="bg-surface-container px-8 py-7 flex flex-col gap-1.5 items-center text-center">
            <span className="font-headline text-3xl text-primary">{value}</span>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">{label}</span>
          </div>
        ))}
      </div>
      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
