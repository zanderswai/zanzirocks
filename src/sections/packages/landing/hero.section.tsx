import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const PILLS = [
  { label: "Day Trips", href: "#day-trips" },
  { label: "3-Day Safaris", href: "#3-day" },
  { label: "4-Day Safaris", href: "#4-day" },
  { label: "Premium Packages", href: "#premium" },
  { label: "Custom Safari", href: "#custom" },
];

export default function PackagesHeroSection() {
  return (
    <section className="pt-16 pb-16">
      <div className="max-w-4xl">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-6"
        >
          Safari Packages · Tanzania
        </Badge>

        <h1 className="font-headline text-6xl md:text-7xl lg:text-[6rem] leading-none tracking-tight mb-6">
          Choose your{" "}
          <span className="italic text-primary">adventure.</span>
        </h1>

        <p className="text-on-surface-variant text-base font-light max-w-xl leading-relaxed mb-10">
          From a single day swimming with whale sharks to a week-long sweep of
          Tanzania's greatest parks — every package is operated by local experts
          who live here year-round.
        </p>

        <div className="flex flex-wrap gap-2">
          {PILLS.map((pill, i) => (
            <Link
              key={i}
              to={pill.href}
              className="font-label text-[9px] uppercase tracking-widest border border-outline-variant/20 text-on-surface-variant/60 hover:border-primary/50 hover:text-primary rounded-full px-3 py-1.5 transition-colors duration-200"
            >
              {pill.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
