import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    id: "island",
    tag: "Destination 01",
    label: "Island Holidays",
    image:
      "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=1335&auto=format&fit=crop",
  },
  {
    id: "safari",
    tag: "Destination 02",
    label: "Safari",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "mountain",
    tag: "Destination 03",
    label: "Mountain",
    image:
      "https://images.unsplash.com/photo-1588445599591-efe468e9c3ce?q=80&w=2670&auto=format&fit=crop",
  },
] as const;

export default function PillarsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-20">
        <Badge variant="outline" className="border-primary/40 text-primary font-label uppercase tracking-widest text-xs mb-6">
          The Pillars of Experience
        </Badge>
        <h2 className="font-headline text-5xl">Choose Your Horizon</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map(({ id, tag, label, image }) => (
          <div key={id} className="relative group overflow-hidden rounded-lg h-[600px]">
            <img
              alt={label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-12 left-10 flex flex-col gap-1">
              <p className="font-label text-primary tracking-[0.2em] text-[10px] uppercase">{tag}</p>
              <h2 className="text-4xl font-headline text-white">{label}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
