import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiTimeLine } from "@remixicon/react";

type DeparturePackage = {
  slug: string;
  badge: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  highlight: string;
};

const PACKAGES: DeparturePackage[] = [
  {
    slug: "nyerere-fly-in-safari-3-days",
    badge: "Most Popular",
    title: "Nyerere Fly-In Safari",
    duration: "3 Days / 2 Nights",
    price: "From $620",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=800&auto=format&fit=crop",
    highlight: "45-min direct fly-in from Zanzibar",
  },
  {
    slug: "serengeti-ngorongoro-safari-3-days",
    badge: "Top Rated",
    title: "Serengeti & Ngorongoro",
    duration: "3 Days / 2 Nights",
    price: "From $1,589",
    image:
      "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=800&auto=format&fit=crop",
    highlight: "Fly direct to Central Serengeti",
  },
  {
    slug: "mafia-island-whale-shark-adventure-day-trip",
    badge: "Bucket List",
    title: "Mafia Whale Shark Day Trip",
    duration: "Day Trip",
    price: "From $550",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=800&auto=format&fit=crop",
    highlight: "50-min morning flight from here",
  },
  {
    slug: "grand-safari-zanzibar-6-days",
    badge: "Premium",
    title: "Grand Safari & Zanzibar Town",
    duration: "6 Days / 5 Nights",
    price: "From $2,555",
    image:
      "https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=800&auto=format&fit=crop",
    highlight: "Includes 1 night in Stone Town",
  },
];

function PackageCard({ pkg }: { pkg: DeparturePackage }) {
  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className="group relative block rounded-xl overflow-hidden h-[340px]"
      aria-label={`${pkg.title} — ${pkg.price}`}
    >
      <img
        alt={pkg.title}
        src={pkg.image}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Badge */}
      <Badge
        variant="secondary"
        className="absolute top-4 left-4 font-label uppercase tracking-widest text-[9px] shadow-md"
      >
        {pkg.badge}
      </Badge>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <RiTimeLine className="size-3 text-primary shrink-0" />
          <span className="font-label text-[9px] uppercase tracking-widest text-white/45">
            {pkg.duration}
          </span>
        </div>

        <h3 className="font-headline text-xl text-white leading-tight">
          {pkg.title}
        </h3>

        <p className="flex items-center gap-1.5 text-white/45 text-[11px] font-light">
          <span className="size-1 rounded-full bg-primary shrink-0" />
          {pkg.highlight}
        </p>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
          <span className="font-label text-primary font-bold text-sm tracking-wider">
            {pkg.price}
          </span>
          <span className="flex items-center gap-1.5 font-label text-[9px] uppercase tracking-widest text-white/35 group-hover:text-primary font-bold transition-colors duration-300">
            Book Now
            <RiArrowRightLine className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ZanzibarPackagesSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            Departing From Here
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Adventures That{" "}
            <span className="italic text-primary">Start Here.</span>
          </h2>
        </div>
        <Button
          asChild
          variant="outline"
          className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary tracking-widest text-xs font-bold uppercase shrink-0 gap-2"
        >
          <Link to="/packages">
            View All Packages
            <RiArrowRightLine />
          </Link>
        </Button>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
