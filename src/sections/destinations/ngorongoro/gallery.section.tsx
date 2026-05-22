import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { RiStarFill, RiCameraLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type Category = "all" | "predators" | "crater" | "flamingos" | "camp";
type Review = { name: string; initials: string; flag: string; quote: string; rating: number };
type GalleryItem = { id: string; category: Exclude<Category, "all">; image: string; alt: string; aspect: "portrait" | "landscape"; review?: Review };

const ITEMS: GalleryItem[] = [
  { id: "ng1", category: "predators", image: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=1200&auto=format&fit=crop", alt: "Lion pride Ngorongoro Crater floor", aspect: "portrait", review: { name: "Marcus T.", initials: "MT", flag: "🇨🇦", quote: "Six lion prides by 9am. Six. I stopped counting after a while.", rating: 5 } },
  { id: "ng2", category: "crater", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop", alt: "Ngorongoro Crater aerial panorama dawn", aspect: "landscape", review: { name: "Sarah M.", initials: "SM", flag: "🇬🇧", quote: "The descent into the crater at dawn was one of the most beautiful things I've ever seen.", rating: 5 } },
  { id: "ng3", category: "flamingos", image: "https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1200&auto=format&fit=crop", alt: "Flamingos crater lake Ngorongoro", aspect: "landscape" },
  { id: "ng4", category: "predators", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1200&auto=format&fit=crop", alt: "Leopard Ngorongoro forest edge", aspect: "landscape", review: { name: "Anna L.", initials: "AL", flag: "🇩🇪", quote: "The leopard appeared from nowhere. Our guide had spotted it at 300 metres. Extraordinary.", rating: 5 } },
  { id: "ng5", category: "crater", image: "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=1200&auto=format&fit=crop", alt: "Crater floor savanna herd movement", aspect: "portrait" },
  { id: "ng6", category: "predators", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1200&auto=format&fit=crop", alt: "Elephant bull crater floor Ngorongoro", aspect: "landscape", review: { name: "James K.", initials: "JK", flag: "🇺🇸", quote: "The old bulls down here are something else. Huge, patient, and completely unafraid.", rating: 5 } },
  { id: "ng7", category: "camp", image: "https://images.unsplash.com/photo-1716206701107-55b7f1f2c0e0?q=80&w=1200&auto=format&fit=crop", alt: "Ngorongoro rim camp sunset view", aspect: "landscape" },
  { id: "ng8", category: "flamingos", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop", alt: "Buffalo herd crater lake flamingo background", aspect: "portrait", review: { name: "Lena S.", initials: "LS", flag: "🇳🇱", quote: "Buffalo in the foreground, flamingos behind them, lions beyond. One frame, three Big Five.", rating: 5 } },
  { id: "ng9", category: "camp", image: "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=1200&auto=format&fit=crop", alt: "Rim lodge Ngorongoro evening light", aspect: "landscape" },
];

const FILTERS: { value: Category; label: string }[] = [
  { value: "all", label: "All" }, { value: "predators", label: "Big Five" },
  { value: "crater", label: "The Crater" }, { value: "flamingos", label: "Lake & Birds" }, { value: "camp", label: "Camp" },
];
const PROOF = [{ value: "100 mi²", label: "Wildlife enclosed in the crater" }, { value: "4.9★", label: "Average guest rating" }, { value: "Year-round", label: "Wildlife access — no migration needed" }];
const COL_OFFSETS = ["", "mt-10", "mt-5"] as const;
const ASPECT_CLASS: Record<"portrait" | "landscape", string> = { portrait: "aspect-[3/4]", landscape: "aspect-[4/3]" };

function Stars({ count }: { count: number }) {
  return <div className="flex gap-0.5">{Array.from({ length: count }).map((_, i) => <RiStarFill key={i} className="size-2.5 text-[#00b67a]" />)}</div>;
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className={cn("group relative w-full overflow-hidden rounded-xl", ASPECT_CLASS[item.aspect])}>
      <img alt={item.alt} src={item.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute top-3 left-3"><span className="font-label text-[9px] uppercase tracking-widest text-white/60 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">{item.category.replace("-", " ")}</span></div>
      {!item.review && <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><RiCameraLine className="size-4 text-white/40" /></div>}
      {item.review && (
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
          <p className="font-headline text-white text-base leading-snug italic mb-3">&ldquo;{item.review.quote}&rdquo;</p>
          <Separator className="bg-white/10 mb-3" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Avatar className="size-7 border border-white/20 shrink-0"><AvatarFallback className="bg-primary-container/20 text-primary text-[10px] font-bold">{item.review.initials}</AvatarFallback></Avatar>
              <div className="min-w-0"><p className="font-label text-[11px] font-bold text-white truncate">{item.review.name} <span className="text-xs">{item.review.flag}</span></p><Stars count={item.review.rating} /></div>
            </div>
            <Badge variant="outline" className="border-primary/30 text-primary/70 font-label text-[9px] uppercase tracking-widest shrink-0">Verified</Badge>
          </div>
        </div>
      )}
    </div>
  );
}

export default function NgorongoroGallerySection() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? ITEMS : ITEMS.filter((i) => i.category === active);
  const columns: GalleryItem[][] = [[], [], []];
  filtered.forEach((item, i) => columns[i % 3].push(item));

  return (
    <section className="mb-32 md:mb-48">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
        <div>
          <Badge variant="outline" className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4">Inside the Crater</Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">Shot Through the <span className="italic text-primary">Roof Hatch.</span></h2>
        </div>
        <p className="text-on-surface-variant text-sm font-light max-w-xs leading-relaxed sm:text-right">Real guests, real Land Cruisers, real encounters — unedited.</p>
      </div>
      <ToggleGroup type="single" value={active} onValueChange={(v) => v && setActive(v as Category)} variant="outline" size="sm" className="flex-wrap justify-start gap-2 mb-8" spacing={2}>
        {FILTERS.map(({ value, label }) => (
          <ToggleGroupItem key={value} value={value} className={cn("font-label uppercase tracking-widest text-[10px] font-bold border-outline-variant/20 text-on-surface-variant data-[state=on]:border-primary data-[state=on]:text-primary data-[state=on]:bg-primary/10")}>{label}</ToggleGroupItem>
        ))}
      </ToggleGroup>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.map((col, ci) => (<div key={ci} className={cn("flex flex-col gap-4", COL_OFFSETS[ci])}>{col.map((item) => <GalleryCard key={item.id} item={item} />)}</div>))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 rounded-xl border border-outline-variant/10 bg-surface-container"><p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant/50">No photos in this category yet.</p></div>
      )}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10">
        {PROOF.map(({ value, label }) => (<div key={label} className="bg-surface-container px-8 py-7 flex flex-col gap-1.5 items-center text-center"><span className="font-headline text-3xl text-primary">{value}</span><span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">{label}</span></div>))}
      </div>
      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
