import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiArrowRightLine, RiTimeLine, RiMapPinLine, RiGroupLine, RiStarFill } from "@remixicon/react";
import { cn } from "@/lib/utils";

type Package = {
  id: string;
  slug: string;
  badge: string;
  badgeVariant?: "default" | "secondary" | "outline";
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  destinations: string[];
  highlights: [string, string, string];
  image: string;
  imageAlt: string;
  accentClass: string;
  rating?: number;
};

const PACKAGES: Package[] = [
  {
    id: "premium",
    slug: "packages/grand-safari-zanzibar-6-days",
    badge: "Premium Experience",
    title: "Grand Safari & Zanzibar Town",
    subtitle: "The complete Tanzania story — migration, crater, coast, and culture.",
    duration: "6 Days / 5 Nights",
    price: "From $2,555",
    destinations: ["Serengeti", "Ngorongoro", "Zanzibar"],
    highlights: ["Wildebeest calving season (Dec–Mar)", "Ngorongoro: lion, leopard, rhino in one descent", "Zanzibar Stone Town night cap"],
    image: "https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Luxury tented camp at sunset on the Serengeti plains",
    accentClass: "from-amber-900/50",
    rating: 5,
  },
  {
    id: "3-day",
    slug: "packages/serengeti-ngorongoro-safari-3-days",
    badge: "Top Rated",
    title: "Serengeti & Ngorongoro",
    subtitle: "The Great Migration meets the world's largest caldera.",
    duration: "3 Days / 2 Nights",
    price: "From $1,589",
    destinations: ["Serengeti", "Ngorongoro"],
    highlights: ["Fly direct from Zanzibar to Serengeti", "Full-day Serengeti game drives", "600m descent into Ngorongoro Crater"],
    image: "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Wildebeest herd crossing the Serengeti plains at golden hour",
    accentClass: "from-amber-900/40",
    rating: 5,
  },
  {
    id: "nyerere",
    slug: "packages/nyerere-fly-in-safari-3-days",
    badge: "Most Popular",
    title: "Nyerere Fly-In Safari",
    subtitle: "Africa's most remote wilderness — accessed by light aircraft.",
    duration: "3 Days / 2 Nights",
    price: "From $1,200",
    destinations: ["Nyerere National Park"],
    highlights: ["Light aircraft from Zanzibar", "Rufiji River boat safaris", "Largest wild dog population in Africa"],
    image: "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Boat safari on the Rufiji River in Nyerere National Park",
    accentClass: "from-emerald-900/40",
    rating: 5,
  },
  {
    id: "4-day",
    slug: "packages/northern-circuit-4-days-tarangire-serengeti-ngorongoro",
    badge: "Adventure Pick",
    title: "4-Day Northern Circuit",
    subtitle: "Three iconic parks. One private Land Cruiser. No compromises.",
    duration: "4 Days / 3 Nights",
    price: "On Request",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro"],
    highlights: ["Tarangire elephant herds + baobabs", "Full-day Serengeti game drives", "Ngorongoro crater descent"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Private Land Cruiser on the plains of the northern circuit",
    accentClass: "from-stone-900/40",
    rating: 5,
  },
  {
    id: "day-trips",
    slug: "packages/mafia-island-whale-shark-adventure-day-trip",
    badge: "Bucket List",
    title: "Mafia Island Whale Sharks",
    subtitle: "The only protected marine park on earth where you can swim with whale sharks.",
    duration: "1 Day (from Zanzibar)",
    price: "From $550",
    destinations: ["Mafia Island"],
    highlights: ["Whale sharks up to 10m in length", "Pristine coral reef snorkelling", "Protected Mafia Island Marine Park"],
    image: "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Whale shark swimming in the crystal clear Indian Ocean off Mafia Island",
    accentClass: "from-blue-900/50",
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <RiStarFill key={i} className="size-2.5 text-primary" />
      ))}
    </div>
  );
}

function PackageCard({ pkg, featured = false }: { pkg: Package; featured?: boolean }) {
  return (
    <Link
      to={`/${pkg.slug}`}
      id={pkg.id}
      className={cn(
        "group relative block rounded-2xl overflow-hidden",
        featured ? "h-[500px] lg:h-[560px]" : "h-[380px]",
      )}
      aria-label={pkg.title}
    >
      <img
        src={pkg.image}
        alt={pkg.imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className={cn("absolute inset-0 bg-gradient-to-t", pkg.accentClass, "to-transparent opacity-60")} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

      {/* Top */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <Badge variant="secondary" className="font-label uppercase tracking-widest text-[8px] bg-black/40 backdrop-blur-sm border-white/10 text-white/70">
          {pkg.badge}
        </Badge>
        <span className="font-label text-[9px] font-bold text-primary bg-black/40 backdrop-blur-sm border border-primary/30 rounded-full px-2.5 py-0.5">
          {pkg.price}
        </span>
      </div>

      {/* Bottom */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <RiTimeLine className="size-3 text-primary" />
            <span className="font-label text-[8px] uppercase tracking-widest text-white/40">{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RiMapPinLine className="size-3 text-primary" />
            <span className="font-label text-[8px] uppercase tracking-widest text-white/40">
              {pkg.destinations.join(" · ")}
            </span>
          </div>
        </div>

        <h2 className={cn("font-headline text-white leading-tight", featured ? "text-3xl md:text-4xl" : "text-2xl")}>
          {pkg.title}
        </h2>

        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-white/55 text-xs font-light leading-relaxed pt-1.5 pb-3 max-w-sm">
              {pkg.subtitle}
            </p>
            <ul className="flex flex-col gap-1.5 mb-3">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-[11px] text-white/55 font-light">
                  <span className="mt-[3px] size-1.5 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            {pkg.rating && <StarRow count={pkg.rating} />}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-0.5">
          <span className="font-label text-[8px] uppercase tracking-widest text-white/30">View package</span>
          <span className="flex items-center gap-1 font-label text-[8px] uppercase tracking-widest text-white/30 group-hover:text-primary transition-colors font-bold">
            Book <RiArrowRightLine className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function CustomSafariCard() {
  return (
    <div
      id="custom"
      className="lg:col-span-3 rounded-2xl overflow-hidden border border-outline-variant/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] h-[280px]">
        {/* Content */}
        <div className="bg-surface-container p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-3">
              Custom Package
            </p>
            <h3 className="font-headline text-3xl md:text-4xl leading-tight mb-3">
              Nothing fits?{" "}
              <span className="italic text-primary">We'll build it.</span>
            </h3>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed max-w-md">
              Every itinerary we've ever sold started with a conversation. Tell
              us your dates, your budget, and what you want to feel — and we'll
              design the rest.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button
              asChild
              className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-7 gap-2"
            >
              <Link to="/contact">
                Start Planning <RiArrowRightLine className="size-3" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <RiGroupLine className="size-4 text-on-surface-variant/40" />
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40">
                Solo · Couples · Groups · Families
              </span>
            </div>
          </div>
        </div>

        {/* Image grid */}
        <div className="hidden lg:grid grid-cols-2 gap-px bg-outline-variant/10">
          {[
            "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=400&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=400&auto=format&fit=crop",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PackagesGridSection() {
  const [featured, ...rest] = PACKAGES;

  return (
    <section className="pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Row 1: Featured (2 cols) + second package (1 col) */}
        <div className="lg:col-span-2">
          <PackageCard pkg={featured} featured />
        </div>
        <div>
          <PackageCard pkg={rest[0]} />
        </div>

        {/* Row 2: remaining 3 packages */}
        {rest.slice(1).map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}

        {/* Custom safari */}
        <CustomSafariCard />
      </div>

      {/* Trust strip */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/10 rounded-xl overflow-hidden">
        {[
          { value: "100%", label: "Private vehicles" },
          { value: "Local", label: "Expert guides, born here" },
          { value: "No hidden fees", label: "Price includes park entries" },
          { value: "24/7", label: "In-country support" },
        ].map((item) => (
          <div key={item.label} className="bg-surface-container px-6 py-5">
            <p className="font-headline text-xl text-primary mb-0.5">{item.value}</p>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">{item.label}</p>
          </div>
        ))}
      </div>

      <Separator className="mt-16 bg-outline-variant/10" />
    </section>
  );
}
