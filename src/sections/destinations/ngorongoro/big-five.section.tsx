import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Rarity = "iconic" | "rare" | "common";

type Animal = {
  name: string;
  latin: string;
  desc: string;
  rarity: Rarity;
  image: string;
  alt: string;
};

const BIG_FIVE: Animal[] = [
  {
    name: "Lion",
    latin: "Panthera leo",
    desc: "The crater holds one of the highest concentrations of lions in Africa. Six or more prides share the floor, and daylight sightings are almost guaranteed.",
    rarity: "iconic",
    image: "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=800&auto=format&fit=crop",
    alt: "Lion Ngorongoro Crater",
  },
  {
    name: "Elephant",
    latin: "Loxodonta africana",
    desc: "The bulls that roam the crater floor are often among the largest in Tanzania — old, tusked, and utterly unhurried. A different experience to the herds you see elsewhere.",
    rarity: "iconic",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=800&auto=format&fit=crop",
    alt: "Elephant Ngorongoro Crater floor",
  },
  {
    name: "Black Rhino",
    latin: "Diceros bicornis",
    desc: "One of Africa's rarest wildlife encounters. The crater is one of the last places on earth where black rhino sightings remain relatively consistent — still a privilege, never guaranteed.",
    rarity: "rare",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800&auto=format&fit=crop",
    alt: "Black rhino Ngorongoro Crater",
  },
  {
    name: "Buffalo",
    latin: "Syncerus caffer",
    desc: "Enormous herds — sometimes thousands strong — move across the crater grasslands. One of the most impressive sights the crater produces, and a key part of the predator-prey cycle.",
    rarity: "common",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop",
    alt: "Buffalo herd Ngorongoro",
  },
  {
    name: "Leopard",
    latin: "Panthera pardus",
    desc: "Elusive even by leopard standards. Forest edges and the crater walls are their territory. A sighting here is among the most coveted in East Africa — our guides know exactly where to look.",
    rarity: "rare",
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=800&auto=format&fit=crop",
    alt: "Leopard Ngorongoro Crater",
  },
];

const RARITY_STYLE: Record<Rarity, string> = {
  iconic: "border-primary/30 text-primary/70",
  rare:   "border-rose-500/30 text-rose-400/70",
  common: "border-sky-500/25 text-sky-400/65",
};
const RARITY_LABEL: Record<Rarity, string> = {
  iconic: "Iconic",
  rare:   "Rare Sighting",
  common: "Common",
};

export default function NgorongoroBigFiveSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          The Permanent Residents
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          The Big Five.{" "}
          <span className="italic text-primary">All Year. Every Year.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-md mx-auto leading-relaxed">
          No migration windows. No "wrong season." The crater's walls keep the
          wildlife in — and the crowds out.
        </p>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {BIG_FIVE.map((animal) => (
          <div
            key={animal.name}
            className="group flex flex-col rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-colors duration-300"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                alt={animal.alt}
                src={animal.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <Badge
                variant="outline"
                className={cn(
                  "absolute top-3 left-3 font-label uppercase tracking-widest text-[9px]",
                  RARITY_STYLE[animal.rarity],
                  "bg-black/30 backdrop-blur-sm",
                )}
              >
                {RARITY_LABEL[animal.rarity]}
              </Badge>
            </div>

            {/* Text */}
            <div className="bg-surface-container flex flex-col gap-2 p-5 flex-1">
              <h3 className="font-headline text-xl text-white leading-tight">{animal.name}</h3>
              <p className="font-label text-[10px] text-primary/60 italic">{animal.latin}</p>
              <Separator className="bg-outline-variant/10 my-1" />
              <p className="text-on-surface-variant text-xs leading-relaxed font-light">{animal.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bonus species strip */}
      <div className="mt-8 p-5 rounded-xl border border-outline-variant/10 bg-surface-container flex flex-wrap items-center gap-3">
        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">
          Also in the crater:
        </span>
        {["Flamingo", "Hippo", "Wildebeest", "Zebra", "Jackal", "Cheetah", "Hyena", "Warthog"].map((s) => (
          <span
            key={s}
            className="font-label text-[10px] text-on-surface-variant/70 border border-outline-variant/20 rounded-full px-3 py-1"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
