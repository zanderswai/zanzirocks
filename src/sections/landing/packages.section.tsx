import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";

const packages = [
  {
    id: "nyerere-fly-in-3d",
    slug: "nyerere-fly-in-safari-3-days",
    badge: "Most Popular",
    title: "Nyerere National Park Fly-In Safari",
    subtitle: "3 Days / 2 Nights — Southern Wild Experience",
    price: "From $620",
    category: "Southern Safari",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2670&auto=format&fit=crop",
    span: "full",
  },
  {
    id: "serengeti-ngorongoro-fly-3d",
    slug: "serengeti-ngorongoro-safari-3-days",
    badge: "Top Rated",
    title: "Serengeti & Ngorongoro Safari",
    subtitle: "3 Days / 2 Nights — Classic Northern Circuit",
    price: "From $1,589",
    category: "Northern Safari",
    image:
      "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=1335&auto=format&fit=crop",
    span: "half",
  },
  {
    id: "mafia-whale-shark-day",
    slug: "mafia-island-whale-shark-adventure-day-trip",
    badge: "Bucket List",
    title: "Mafia Island Whale Shark Adventure",
    subtitle: "Day Trip — Fly from Zanzibar & Swim With Giants",
    price: "From $550",
    category: "Island",
    image:
      "https://images.unsplash.com/photo-1588445599591-efe468e9c3ce?q=80&w=2670&auto=format&fit=crop",
    span: "half",
  },
  {
    id: "grand-safari-zanzibar-6d",
    slug: "grand-safari-zanzibar-6-days",
    badge: "Premium Experience",
    title: "Grand Safari & Zanzibar Town",
    subtitle: "5 Days Safari + 1 Night in Town",
    price: "From $2,555",
    category: "Combo",
    image:
      "https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=1287&auto=format&fit=crop",
    span: "full",
  },
] as const;

function PackageCard({ pkg }: { pkg: (typeof packages)[number] }) {
  const height = pkg.span === "full" ? "h-[300px] md:h-[400px]" : "h-[320px]";

  return (
    <div className={pkg.span === "full" ? "md:col-span-2 group" : "group"}>
      <div className={`relative overflow-hidden rounded-lg ${height} bg-surface-container`}>
        <img
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={pkg.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="font-label uppercase tracking-widest text-[10px]">
              {pkg.badge}
            </Badge>
            <Badge variant="outline" className="font-label uppercase tracking-widest text-[10px] border-primary/40 text-primary/80">
              {pkg.category}
            </Badge>
          </div>
          <h3 className="text-2xl md:text-3xl font-headline text-white">{pkg.title}</h3>
          <p className="text-on-surface-variant text-sm font-light">{pkg.subtitle}</p>
          <div className="flex items-center justify-between">
            <span className="font-label text-primary font-bold text-sm tracking-wider">{pkg.price}</span>
            <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary hover:bg-primary/10 gap-2 px-0 font-bold uppercase tracking-widest text-xs">
              <Link to={`/packages/${pkg.slug}`}>
                Explore
                <RiArrowRightLine data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PackagesSection() {
  return (
    <section className="py-16 md:py-32 mb-32 md:mb-48">
      <div className="text-center mb-16 md:mb-24">
        <span className="font-label text-primary uppercase tracking-widest mb-4 block text-xs">
          Curated Experiences
        </span>
        <h2 className="font-headline text-5xl md:text-6xl leading-tight">
          Pick Your <br />
          <span className="text-primary italic">Wild</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary tracking-widest text-xs font-bold uppercase px-10">
          <Link to="/packages">View All Packages</Link>
        </Button>
      </div>
    </section>
  );
}
