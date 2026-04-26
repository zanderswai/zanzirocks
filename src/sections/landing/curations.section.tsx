import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiArrowRightLine } from "@remixicon/react";

const services = [
  {
    id: "curators",
    label: "Private Curators",
    desc: "Your personal architect of experience, available 24/7 to refine every nuance of your journey.",
    cta: "Learn More",
    image:
      "https://images.unsplash.com/photo-1716206701107-55b7f1f2c0e0?q=80&w=2670&auto=format&fit=crop",
    offset: false,
  },
  {
    id: "itineraries",
    label: "Tailored Itineraries",
    desc: "Bespoke paths designed around your unique interests, from hidden spice markets to private sundowners.",
    cta: "Explore Paths",
    image:
      "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=2574&auto=format&fit=crop",
    offset: true,
  },
  {
    id: "transport",
    label: "Luxury Transport",
    desc: "Seamless transitions with private charters, Land Cruisers, and chauffeur-driven exploration.",
    cta: "View Fleet",
    image:
      "https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=1287&auto=format&fit=crop",
    offset: false,
  },
] as const;

export default function CurationsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4">
        <h2 className="text-5xl font-headline max-w-xl leading-tight">
          Masterful Curation for the{" "}
          <span className="italic text-primary">Discerning Voyager.</span>
        </h2>
        <div className="hidden lg:block h-px bg-outline-variant/30 flex-grow mx-12" />
        <p className="font-label text-primary tracking-widest text-[10px] uppercase">The Service Suite</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {services.map(({ id, label, desc, cta, image, offset }) => (
          <div key={id} className={`group ${offset ? "md:pt-12" : ""}`}>
            <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 relative">
              <img
                alt={label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src={image}
              />
              <div className="absolute inset-0 border-[20px] border-surface/0 group-hover:border-surface/20 transition-all duration-500" />
            </div>
            <h3 className="text-2xl font-headline mb-4">{label}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">{desc}</p>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary hover:bg-transparent px-0 gap-2 font-label text-[10px] uppercase tracking-widest font-bold"
            >
              {cta}
              <RiArrowRightLine data-icon="inline-end" />
            </Button>
          </div>
        ))}
      </div>

      <Separator className="mt-24 bg-outline-variant/10" />
    </section>
  );
}
