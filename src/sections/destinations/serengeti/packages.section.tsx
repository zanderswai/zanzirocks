import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiTimeLine, RiMapPinLine } from "@remixicon/react";

type SgtPackage = {
  slug: string;
  badge: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  highlights: [string, string, string];
};

const PACKAGES: SgtPackage[] = [
  {
    slug: "serengeti-ngorongoro-safari-3-days",
    badge: "Top Rated",
    title: "Serengeti & Ngorongoro",
    duration: "3 Days / 2 Nights",
    price: "From $1,589",
    image: "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=800&auto=format&fit=crop",
    highlights: ["Fly direct from Zanzibar to Serengeti", "Full-day Serengeti game drives", "600m descent into Ngorongoro Crater"],
  },
  {
    slug: "grand-safari-zanzibar-6-days",
    badge: "Premium",
    title: "Grand Safari & Zanzibar Town",
    duration: "6 Days / 5 Nights",
    price: "From $2,555",
    image: "https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=800&auto=format&fit=crop",
    highlights: ["Full northern circuit + bonus Zanzibar night", "Ndutu calving season (Dec–Mar)", "Ngorongoro: lion, leopard, rhino in one descent"],
  },
  {
    slug: "northern-circuit-4-days-tarangire-serengeti-ngorongoro",
    badge: "Best Value",
    title: "4-Day Northern Circuit",
    duration: "4 Days / 3 Nights",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    highlights: ["Private Land Cruiser — your own vehicle", "Tarangire → Serengeti → Ngorongoro", "Optional balloon safari over the plains"],
  },
  {
    slug: "tarangire-ngorongoro-lake-manyara-3-days",
    badge: "Wildlife Focus",
    title: "Tarangire, Ngorongoro & Lake Manyara",
    duration: "3 Days / 2 Nights",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=800&auto=format&fit=crop",
    highlights: ["Tarangire elephant herds", "Full-day Ngorongoro Crater descent", "Lake Manyara flamingo flocks"],
  },
];

function PackageCard({ pkg }: { pkg: SgtPackage }) {
  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className="group relative block rounded-xl overflow-hidden h-[380px]"
      aria-label={pkg.title}
    >
      <img
        alt={pkg.title}
        src={pkg.image}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Badge variant="secondary" className="absolute top-4 left-4 font-label uppercase tracking-widest text-[9px]">
        {pkg.badge}
      </Badge>
      <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5">
            <RiMapPinLine className="size-3 text-primary" />
            <span className="font-label text-[9px] uppercase tracking-widest text-white/45">Northern Circuit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <RiTimeLine className="size-3 text-primary" />
            <span className="font-label text-[9px] uppercase tracking-widest text-white/45">{pkg.duration}</span>
          </div>
        </div>
        <h3 className="font-headline text-xl text-white leading-tight">{pkg.title}</h3>
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
          <ul className="overflow-hidden flex flex-col gap-1.5">
            {pkg.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-[11px] text-white/60 font-light leading-snug">
                <span className="mt-[3px] size-1.5 rounded-full bg-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
          <span className="font-label text-primary font-bold text-sm">{pkg.price}</span>
          <span className="flex items-center gap-1.5 font-label text-[9px] uppercase tracking-widest text-white/35 group-hover:text-primary font-bold transition-colors duration-300">
            Book Now <RiArrowRightLine className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function SerengetiPackagesSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            Packages Featuring the Serengeti
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            The Migration Starts{" "}
            <span className="italic text-primary">With a Call.</span>
          </h2>
        </div>
        <Button
          asChild
          variant="outline"
          className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary tracking-widest text-xs font-bold uppercase shrink-0 gap-2"
        >
          <Link to="/packages">
            All Packages <RiArrowRightLine />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
