import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { RiArrowRightLine, RiSearchLine, RiMapPinLine, RiTimeLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type PackageType = "safari" | "island" | "day-trip" | "combo";

type ZanziPackage = {
  id: string;
  slug: string;
  badge: string;
  title: string;
  duration: string;
  durationDays: number;
  price: string;
  priceNum: number;
  category: string;
  type: PackageType;
  circuit: string;
  highlights: [string, string, string];
  image: string;
};

const ALL_PACKAGES: ZanziPackage[] = [
  {
    id: "nyerere-fly-in-3d",
    slug: "nyerere-fly-in-safari-3-days",
    badge: "Most Popular",
    title: "Nyerere National Park Fly-In Safari",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: "From $620",
    priceNum: 620,
    category: "Southern Safari",
    type: "safari",
    circuit: "southern",
    highlights: [
      "Fly-in direct from Zanzibar — 45 min",
      "Rufiji River boat safari: hippos & crocs",
      "Maasai village cultural experience",
    ],
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "serengeti-ngorongoro-fly-3d",
    slug: "serengeti-ngorongoro-safari-3-days",
    badge: "Top Rated",
    title: "Serengeti & Ngorongoro Safari",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: "From $1,589",
    priceNum: 1589,
    category: "Northern Safari",
    type: "safari",
    circuit: "northern",
    highlights: [
      "Fly into Central Serengeti (Seronera)",
      "Full-day game drives on the endless plains",
      "600m descent into Ngorongoro Crater",
    ],
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mafia-whale-shark-day",
    slug: "mafia-island-whale-shark-adventure-day-trip",
    badge: "Bucket List",
    title: "Mafia Island Whale Shark Adventure",
    duration: "Day Trip",
    durationDays: 1,
    price: "From $550",
    priceNum: 550,
    category: "Coastal Island",
    type: "day-trip",
    circuit: "coastal",
    highlights: [
      "50-min scenic flight Zanzibar → Mafia",
      "Snorkel alongside the world's largest fish",
      "Shore BBQ lunch + Kilindoni city tour",
    ],
    image:
      "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "nyerere-drive-dar-3d",
    slug: "nyerere-selous-safari-from-dar-3-days",
    badge: "Budget Value",
    title: "Nyerere Safari from Dar es Salaam",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: "From $620",
    priceNum: 620,
    category: "Southern Safari",
    type: "safari",
    circuit: "southern",
    highlights: [
      "5-hour overland drive through wild Tanzania",
      "Rufiji River sandbank sunset watching",
      "Early morning walking safari with armed rangers",
    ],
    image:
      "https://images.unsplash.com/photo-1588445599591-efe468e9c3ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "southern-safari-zanzibar-3d",
    slug: "southern-safari-zanzibar-selous-3-days",
    badge: "Southern Classic",
    title: "Southern Safari — Zanzibar to Selous",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: "From $1,200",
    priceNum: 1200,
    category: "Southern Safari",
    type: "safari",
    circuit: "southern",
    highlights: [
      "Fly Zanzibar → Dar, then road into Selous",
      "Full-day game drive across all Big Five territory",
      "Return flight from Dar to Zanzibar",
    ],
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tarangire-ngorongoro-manyara-3d",
    slug: "tarangire-ngorongoro-lake-manyara-3-days",
    badge: "Best Variety",
    title: "Tarangire, Ngorongoro & Lake Manyara",
    duration: "3 Days / 2 Nights",
    durationDays: 3,
    price: "On Request",
    priceNum: 0,
    category: "Northern Safari",
    type: "safari",
    circuit: "northern",
    highlights: [
      "Tarangire: Africa's largest elephant herds",
      "Ngorongoro Crater — Big Five in one caldera",
      "Lake Manyara's famous tree-climbing lions",
    ],
    image:
      "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "northern-circuit-4d",
    slug: "northern-circuit-4-days-tarangire-serengeti-ngorongoro",
    badge: "Adventure Pick",
    title: "4-Day Northern Safari Circuit",
    duration: "4 Days / 3 Nights",
    durationDays: 4,
    price: "On Request",
    priceNum: 0,
    category: "Northern Safari",
    type: "safari",
    circuit: "northern",
    highlights: [
      "Private Land Cruiser — window seat guaranteed",
      "Tarangire → Serengeti → Ngorongoro in one trip",
      "Optional hot air balloon over the Serengeti",
    ],
    image:
      "https://images.unsplash.com/photo-1716206701107-55b7f1f2c0e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "grand-safari-zanzibar-6d",
    slug: "grand-safari-zanzibar-6-days",
    badge: "Premium Experience",
    title: "Grand Safari & Zanzibar Town",
    duration: "6 Days / 5 Nights",
    durationDays: 6,
    price: "From $2,555",
    priceNum: 2555,
    category: "Combo",
    type: "combo",
    circuit: "northern",
    highlights: [
      "Ndutu — wildebeest migration calving grounds",
      "Ngorongoro Crater: lion, leopard & rhino",
      "Bonus 1 night in Zanzibar Stone Town",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=1200&auto=format&fit=crop",
  },
];

const TYPE_TABS = [
  { value: "all", label: "All" },
  { value: "safaris", label: "Safaris" },
  { value: "island", label: "Island Trips" },
  { value: "day-trips", label: "Day Trips" },
  { value: "budget", label: "Budget" },
  { value: "premium", label: "Premium" },
] as const;

type TypeTab = (typeof TYPE_TABS)[number]["value"];

function matchesType(pkg: ZanziPackage, tab: TypeTab): boolean {
  if (tab === "all") return true;
  if (tab === "safaris") return pkg.type === "safari";
  if (tab === "island") return pkg.type === "island";
  if (tab === "day-trips") return pkg.durationDays === 1;
  if (tab === "budget") return pkg.priceNum > 0 && pkg.priceNum <= 700;
  if (tab === "premium") return pkg.priceNum >= 1500;
  return true;
}

function matchesPrice(pkg: ZanziPackage, price: string): boolean {
  if (price === "all") return true;
  if (price === "request") return pkg.priceNum === 0;
  if (price === "under-700") return pkg.priceNum > 0 && pkg.priceNum < 700;
  if (price === "700-1500") return pkg.priceNum >= 700 && pkg.priceNum <= 1500;
  if (price === "over-1500") return pkg.priceNum > 1500;
  return true;
}

function matchesDuration(pkg: ZanziPackage, duration: string): boolean {
  if (duration === "all") return true;
  if (duration === "1") return pkg.durationDays === 1;
  if (duration === "2-3") return pkg.durationDays >= 2 && pkg.durationDays <= 3;
  if (duration === "4plus") return pkg.durationDays >= 4;
  return true;
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function PackageCard({ pkg }: { pkg: ZanziPackage }) {
  return (
    <div className="group flex flex-col rounded-lg overflow-hidden bg-surface-container border border-outline-variant/10 hover:border-primary/20 transition-colors">
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          alt={pkg.title}
          src={pkg.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent" />
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 font-label uppercase tracking-widest text-[10px]"
        >
          {pkg.badge}
        </Badge>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1 font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            <RiMapPinLine className="size-3 text-primary" />
            {pkg.category}
          </span>
          <span className="text-outline-variant/40">·</span>
          <span className="flex items-center gap-1 font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
            <RiTimeLine className="size-3 text-primary" />
            {pkg.duration}
          </span>
        </div>

        <h3 className="font-headline text-xl text-white leading-snug flex-1">{pkg.title}</h3>

        <ul className="flex flex-col gap-1.5">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[11px] text-on-surface-variant font-light">
              <span className="mt-0.5 size-1.5 rounded-full bg-primary shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-2 border-t border-outline-variant/10 mt-auto">
          <span className="font-label text-primary font-bold text-sm tracking-wider">{pkg.price}</span>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-primary hover:text-primary hover:bg-primary/10 gap-1.5 px-2 font-bold uppercase tracking-widest text-[10px]"
          >
            <Link to={`/packages/${pkg.slug}`}>
              Book Now
              <RiArrowRightLine data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const COL_OFFSETS = ["", "md:mt-12", "md:mt-6"] as const;

export default function PackagesSection() {
  const [query, setQuery] = useState("");
  const [typeTab, setTypeTab] = useState<TypeTab>("all");
  const [price, setPrice] = useState("all");
  const [duration, setDuration] = useState("all");

  const filtered = useMemo(
    () =>
      ALL_PACKAGES.filter(
        (pkg) =>
          matchesType(pkg, typeTab) &&
          matchesPrice(pkg, price) &&
          matchesDuration(pkg, duration) &&
          (!query ||
            [pkg.title, pkg.category, pkg.circuit, ...pkg.highlights]
              .join(" ")
              .toLowerCase()
              .includes(query.toLowerCase())),
      ),
    [query, typeTab, price, duration],
  );

  // Split into 3 columns for staggered masonry layout
  const columns = useMemo(() => {
    const cols: ZanziPackage[][] = [[], [], []];
    filtered.forEach((pkg, i) => cols[i % 3].push(pkg));
    return cols;
  }, [filtered]);

  return (
    <section className="py-16 md:py-32 mb-32 md:mb-48">
      {/* Heading */}
      <div className="text-center mb-16 md:mb-20">
        <span className="font-label text-primary uppercase tracking-widest mb-4 block text-xs">
          Curated Experiences
        </span>
        <h2 className="font-headline text-5xl md:text-6xl leading-tight">
          Pick Your <br />
          <span className="text-primary italic">Wild</span>
        </h2>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 mb-10">
        {/* Row 1: Search + Selects */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-outline pointer-events-none" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations, safaris, islands…"
              className="pl-9 bg-surface-container border-outline-variant/20 text-on-surface placeholder:text-outline font-body text-sm"
            />
          </div>

          <Select value={price} onValueChange={setPrice}>
            <SelectTrigger className="w-full sm:w-44 bg-surface-container border-outline-variant/20 font-body text-sm text-on-surface">
              <SelectValue placeholder="All Prices" />
            </SelectTrigger>
            <SelectContent className="bg-surface-dim border-outline-variant/20">
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="under-700">Under $700</SelectItem>
              <SelectItem value="700-1500">$700 – $1,500</SelectItem>
              <SelectItem value="over-1500">$1,500+</SelectItem>
              <SelectItem value="request">On Request</SelectItem>
            </SelectContent>
          </Select>

          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-full sm:w-44 bg-surface-container border-outline-variant/20 font-body text-sm text-on-surface">
              <SelectValue placeholder="Any Duration" />
            </SelectTrigger>
            <SelectContent className="bg-surface-dim border-outline-variant/20">
              <SelectItem value="all">Any Duration</SelectItem>
              <SelectItem value="1">Day Trip</SelectItem>
              <SelectItem value="2-3">2 – 3 Days</SelectItem>
              <SelectItem value="4plus">4+ Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Row 2: Type filter tabs */}
        <ToggleGroup
          type="single"
          value={typeTab}
          onValueChange={(v) => v && setTypeTab(v as TypeTab)}
          variant="outline"
          size="sm"
          className="flex-wrap justify-start gap-2 w-full"
          spacing={2}
        >
          {TYPE_TABS.map(({ value, label }) => (
            <ToggleGroupItem
              key={value}
              value={value}
              className={cn(
                "font-label uppercase tracking-widest text-[10px] font-bold border-outline-variant/20 text-on-surface-variant data-[state=on]:border-primary data-[state=on]:text-primary data-[state=on]:bg-primary/10",
              )}
            >
              {label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Results count */}
      {filtered.length > 0 && (
        <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-8">
          {filtered.length} package{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {/* Staggered Grid */}
      {filtered.length === 0 ? (
        <Empty className="py-24 border-outline-variant/10 bg-surface-container">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <RiSearchLine />
            </EmptyMedia>
            <EmptyTitle className="font-headline text-xl text-white">No packages match</EmptyTitle>
            <EmptyDescription>Try adjusting your filters or search term.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className={cn("flex flex-col gap-6", COL_OFFSETS[colIdx])}>
              {col.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-16">
        <Button
          asChild
          variant="outline"
          className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary tracking-widest text-xs font-bold uppercase px-10"
        >
          <Link to="/packages">View All Packages</Link>
        </Button>
      </div>
    </section>
  );
}
