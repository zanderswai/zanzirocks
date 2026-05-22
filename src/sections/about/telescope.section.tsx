import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PRINCIPLES = [
  {
    label: "Simplified",
    desc: "One conversation. One team. From first enquiry to final transfer — no handoffs, no friction.",
  },
  {
    label: "Unified",
    desc: "Safari, coast, and culture in a single itinerary. We design the whole journey, not just the park days.",
  },
  {
    label: "Authentic",
    desc: "Every guide was born here. Every recommendation comes from lived experience, not a commission.",
  },
];

export default function AboutTelescopeSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: editorial text */}
        <div className="flex flex-col gap-8">
          <div>
            <Badge
              variant="outline"
              className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-6"
            >
              Our Purpose
            </Badge>
            <h2 className="font-headline text-5xl md:text-6xl leading-none tracking-tight mb-6">
              Telescope.
            </h2>
            <p className="text-on-surface-variant/50 font-label text-[10px] uppercase tracking-widest mb-6">
              Why we do this
            </p>
          </div>

          <blockquote className="border-l-2 border-primary/40 pl-6">
            <p className="font-headline text-2xl md:text-3xl text-on-surface leading-snug italic">
              "Tanzania is extraordinary.
              Finding your way through it
              shouldn't have to be."
            </p>
          </blockquote>

          <p className="text-on-surface-variant text-sm font-light leading-relaxed">
            The best wildlife experiences on earth are right here — but they're
            buried under complexity. Multiple operators, conflicting advice, and
            itineraries built around what's easy to sell rather than what's
            worth seeing.
          </p>
          <p className="text-on-surface-variant text-sm font-light leading-relaxed">
            Telescope is how we think about our work. We take the sprawling,
            magnificent chaos of Tanzania and bring it into focus — simplified,
            unified, and exactly right for you.
          </p>
        </div>

        {/* Right: image + principle cards */}
        <div className="flex flex-col gap-4">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop"
              alt="Wide open Serengeti plains — the scale Tanzania offers"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="font-headline text-white text-xl italic">
                The whole picture, in focus.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 gap-px bg-outline-variant/10 rounded-xl overflow-hidden">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="bg-surface-container px-6 py-5 flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-label text-[8px] uppercase tracking-widest text-primary/60">0{i + 1}</span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface font-bold">{p.label}</span>
                </div>
                <p className="text-on-surface-variant text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="mt-0 bg-outline-variant/10" />
    </section>
  );
}
