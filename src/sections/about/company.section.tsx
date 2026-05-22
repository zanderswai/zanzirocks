import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const STATS = [
  { value: "6", label: "Destinations" },
  { value: "100%", label: "Local guides" },
  { value: "4.9★", label: "Guest rating" },
  { value: "Zanzibar", label: "Home base" },
];

export default function AboutCompanySection() {
  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-end">
        {/* Left: headline block */}
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-6"
          >
            Est. Zanzibar · Tanzania
          </Badge>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-[6.5rem] leading-none tracking-tight mb-8">
            Tanzania through the eyes{" "}
            <span className="italic text-primary">of people who live here.</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-outline-variant/10 rounded-xl overflow-hidden mt-12">
            {STATS.map((stat, i) => (
              <div key={i} className="bg-surface-container px-6 py-5 flex flex-col gap-1">
                <span className="font-headline text-2xl text-primary">{stat.value}</span>
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: editorial column */}
        <div className="lg:w-80 flex flex-col gap-5">
          <p className="text-on-surface-variant text-sm font-light leading-relaxed">
            ZanziRocks started as a question: why is planning a Tanzania safari
            so complicated? Dozens of operators, conflicting information,
            packages built around margins rather than moments.
          </p>
          <p className="text-on-surface-variant text-sm font-light leading-relaxed">
            We built something different. A Zanzibar-based operation run by
            Tanzanians, for people who want to see this country the way we see
            it — honestly, deeply, and without the noise.
          </p>
          <div className="pt-2 border-t border-outline-variant/10">
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40">
              Northern circuit · Southern parks · Indian Ocean coast
            </p>
          </div>
        </div>
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
