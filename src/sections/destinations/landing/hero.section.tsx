import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const PILLS = [
  { label: "Zanzibar Island", href: "#zanzibar" },
  { label: "Serengeti", href: "#serengeti" },
  { label: "Ngorongoro Crater", href: "#ngorongoro" },
  { label: "Nyerere Park", href: "#nyerere" },
  { label: "Tarangire", href: "#tarangire" },
  { label: "Mafia Island", href: "#mafia" },
];

export default function DestinationsHeroSection() {
  return (
    <section className="pt-16 pb-16">
      <div className="max-w-4xl">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-6"
        >
          All Destinations · Tanzania
        </Badge>

        <h1 className="font-headline text-6xl md:text-7xl lg:text-[6rem] leading-none tracking-tight mb-6">
          Tanzania,{" "}
          <span className="italic text-primary">in full.</span>
        </h1>

        <p className="text-on-surface-variant text-base font-light max-w-xl leading-relaxed mb-10">
          Six places that will change how you see the natural world. Each
          extraordinary on its own — together, the most complete safari
          experience in Africa.
        </p>

        {/* Destination pill anchors */}
        <div className="flex flex-wrap gap-2">
          {PILLS.map((pill) => (
            <Link
              key={pill.href}
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
