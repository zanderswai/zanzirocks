import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiTimeLine, RiFlightTakeoffLine, RiCarLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type DepartureMode = "fly-in" | "road" | "combo";

type NyererePackage = {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  mode: DepartureMode;
  modeLabel: string;
  image: string;
  highlights: [string, string, string];
};

const PACKAGES: NyererePackage[] = [
  {
    slug: "nyerere-fly-in-safari-3-days",
    badge: "Most Popular",
    title: "Nyerere Fly-In Safari",
    subtitle: "3 Days / 2 Nights",
    duration: "3 Days",
    price: "From $620",
    mode: "fly-in",
    modeLabel: "Fly from Zanzibar",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Direct 45-min fly-in from Zanzibar",
      "Rufiji River boat safari — hippos & crocs",
      "Guided walking safari with armed rangers",
    ],
  },
  {
    slug: "nyerere-selous-safari-from-dar-3-days",
    badge: "Budget Value",
    title: "Nyerere from Dar es Salaam",
    subtitle: "3 Days / 2 Nights",
    duration: "3 Days",
    price: "From $620",
    mode: "road",
    modeLabel: "Road from Dar es Salaam",
    image:
      "https://images.unsplash.com/photo-1588445599591-efe468e9c3ce?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "5-hour scenic overland drive",
      "Rufiji sandbank sunset watching",
      "Early morning walking safari",
    ],
  },
  {
    slug: "southern-safari-zanzibar-selous-3-days",
    badge: "Southern Classic",
    title: "Southern Safari — Zanzibar to Selous",
    subtitle: "3 Days / 2 Nights",
    duration: "3 Days",
    price: "From $1,200",
    mode: "combo",
    modeLabel: "Fly → Road combo",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Fly Zanzibar → Dar, road into Selous",
      "Full-day game drive: Big Five territory",
      "Return flight Dar → Zanzibar",
    ],
  },
];

const MODE_ICON: Record<DepartureMode, React.ComponentType<{ className?: string }>> = {
  "fly-in": RiFlightTakeoffLine,
  "road":   RiCarLine,
  "combo":  RiArrowRightLine,
};

const MODE_STYLE: Record<DepartureMode, string> = {
  "fly-in": "border-primary/30 text-primary/70",
  "road":   "border-sky-500/30 text-sky-400/70",
  "combo":  "border-emerald-500/30 text-emerald-400/70",
};

// Horizontal card — different from Zanzibar's vertical cards
function PackageRow({ pkg, index }: { pkg: NyererePackage; index: number }) {
  const ModeIcon = MODE_ICON[pkg.mode];
  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className={cn(
        "group relative flex flex-col sm:flex-row overflow-hidden rounded-xl border border-outline-variant/10",
        "hover:border-primary/20 transition-colors duration-300",
        index === 0 && "bg-surface-container",
      )}
      aria-label={`${pkg.title} — ${pkg.price}`}
    >
      {/* Image — left side on desktop */}
      <div className="relative w-full sm:w-72 shrink-0 h-52 sm:h-auto overflow-hidden">
        <img
          alt={pkg.title}
          src={pkg.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container/80 hidden sm:block" />
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 font-label uppercase tracking-widest text-[9px]"
        >
          {pkg.badge}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-4 p-6 sm:p-8 flex-1">
        <div className="flex flex-col gap-3">
          {/* Mode + duration */}
          <div className="flex flex-wrap items-center gap-3">
            <div className={cn("flex items-center gap-1.5 border rounded-full px-3 py-1", MODE_STYLE[pkg.mode])}>
              <ModeIcon className="size-3" />
              <span className="font-label text-[9px] uppercase tracking-widest font-bold">
                {pkg.modeLabel}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant/50">
              <RiTimeLine className="size-3 text-primary/50" />
              <span className="font-label text-[10px] uppercase tracking-widest">{pkg.duration}</span>
            </div>
          </div>

          <h3 className="font-headline text-2xl text-white leading-tight">{pkg.title}</h3>

          <ul className="flex flex-col gap-2">
            {pkg.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-[11px] text-on-surface-variant font-light leading-snug">
                <span className="mt-[3px] size-1.5 rounded-full bg-primary/60 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
          <span className="font-label text-primary font-bold text-base tracking-wider">{pkg.price}</span>
          <span className="flex items-center gap-1.5 font-label text-[10px] uppercase tracking-widest text-on-surface-variant/40 group-hover:text-primary font-bold transition-colors duration-300">
            View Package
            <RiArrowRightLine className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function NyererePackagesSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            Choose Your Route In
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Three Ways to Reach <br />
            <span className="italic text-primary">the Wild.</span>
          </h2>
        </div>
        <Button
          asChild
          variant="outline"
          className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary tracking-widest text-xs font-bold uppercase shrink-0 gap-2"
        >
          <Link to="/packages">
            All Packages
            <RiArrowRightLine />
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {PACKAGES.map((pkg, i) => (
          <PackageRow key={pkg.slug} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  );
}
