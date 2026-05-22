import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Cat = {
  name: string;
  latin: string;
  tag: string;
  tagClass: string;
  stat: string;
  statLabel: string;
  desc: string;
  bestFor: string;
  image: string;
  imageAlt: string;
  accent: string;
};

const CATS: Cat[] = [
  {
    name: "Lion",
    latin: "Panthera leo",
    tag: "Most Sightings",
    tagClass: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    stat: "3,000+",
    statLabel: "In the ecosystem",
    desc: "The Serengeti holds one of Africa's densest lion populations. Prides of 20+ are common. During the migration, lions follow the herds — you will find them feasting on wildebeest on the open plains, often visible from a kilometre away.",
    bestFor: "Year-round. Kopjes (granite outcrops) are favourite resting spots.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Male lion resting on rock in Serengeti",
    accent: "from-amber-900/60",
  },
  {
    name: "Leopard",
    latin: "Panthera pardus",
    tag: "Elusive",
    tagClass: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    stat: "1,000+",
    statLabel: "Estimated population",
    desc: "Serengeti's leopards are famously difficult to find — and all the more extraordinary when you do. They drape kills over acacia branches to keep them from lions and hyenas. The Seronera River Valley is legendary for sightings.",
    bestFor: "Seronera Valley at dawn. Patient, slow-moving game drives.",
    image: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Leopard draped over acacia tree branch",
    accent: "from-rose-900/60",
  },
  {
    name: "Cheetah",
    latin: "Acinonyx jubatus",
    tag: "Open Plains Icon",
    tagClass: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    stat: "1,000+",
    statLabel: "In the Serengeti",
    desc: "The fastest land animal needs open space — and the Serengeti's short-grass plains deliver. Cheetahs hunt by sight, sprinting at 120 km/h. Mothers with cubs on the Ndutu plains during calving season create some of the most dramatic predator-prey moments in Africa.",
    bestFor: "Ndutu plains Jan–Mar. Seronera in the dry season.",
    image: "https://images.unsplash.com/photo-1567608198472-6796ad9466a2?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Cheetah scanning the Serengeti plains",
    accent: "from-sky-900/60",
  },
];

function CatCard({ cat, reversed }: { cat: Cat; reversed: boolean }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden",
        "border border-outline-variant/10",
      )}
    >
      {/* Image */}
      <div className={cn("relative h-72 lg:h-auto min-h-[340px]", reversed && "lg:order-last")}>
        <img
          src={cat.image}
          alt={cat.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t", cat.accent, "to-transparent")} />
        <div className="absolute bottom-5 left-5">
          <p className="font-label text-[9px] uppercase tracking-widest text-white/40 mb-1">{cat.latin}</p>
          <p className="font-headline text-3xl text-white">{cat.name}</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-surface-container p-8 md:p-10 flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className={cn("font-label text-[9px] uppercase tracking-widest border rounded-full px-2.5 py-1", cat.tagClass)}>
              {cat.tag}
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-headline text-4xl text-primary">{cat.stat}</span>
            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">{cat.statLabel}</span>
          </div>

          <Separator className="bg-outline-variant/10" />

          <p className="text-on-surface-variant text-sm leading-relaxed font-light">{cat.desc}</p>
        </div>

        <div className="rounded-lg bg-surface-container-high p-4">
          <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-1">Best viewing window</p>
          <p className="text-on-surface-variant text-xs font-light leading-snug">{cat.bestFor}</p>
        </div>
      </div>
    </div>
  );
}

export default function SerengetiPredatorsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          Apex Predators
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          The Big Cats of{" "}
          <span className="italic text-primary">the Serengeti.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-lg mx-auto leading-relaxed">
          Nowhere on earth offers more consistent big cat sightings. Lions,
          leopards, and cheetahs share this ecosystem in extraordinary density —
          often visible in a single morning drive.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {CATS.map((cat, i) => (
          <CatCard key={i} cat={cat} reversed={i % 2 !== 0} />
        ))}
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
