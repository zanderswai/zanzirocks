import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type World = {
  label: string;
  days: string;
  headline: string;
  desc: string;
  image: string;
  imageAlt: string;
  accentClass: string;
  accentText: string;
  facts: string[];
};

const WORLDS: World[] = [
  {
    label: "The Wilderness",
    days: "Days 1 – 5",
    headline: "Three of Africa's greatest parks. Back to back.",
    desc: "From the Ndutu plains during calving season — half a million wildebeest calves born in three weeks — to the enclosed world of Ngorongoro Crater, to Tarangire's ancient baobab groves and elephant herds. Each park is a complete universe.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Lion pride resting on a kopje in the Serengeti at golden hour",
    accentClass: "from-amber-900/50",
    accentText: "text-amber-400",
    facts: ["Serengeti · Ngorongoro · Tarangire", "Calving season Dec–Mar", "Big Five on crater floor"],
  },
  {
    label: "The Coast",
    days: "Day 5 – 6",
    headline: "Stone Town. Spice. The Indian Ocean.",
    desc: "On the final evening, your light aircraft returns to Zanzibar. Stone Town greets you with narrow alleys, carved doorways, the smell of cloves, and the warmth of a people who have traded with the world for a thousand years. One night is never enough.",
    image: "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=1000&auto=format&fit=crop",
    imageAlt: "Zanzibar Stone Town harbour at sunset with dhow boats",
    accentClass: "from-sky-900/50",
    accentText: "text-sky-400",
    facts: ["Stone Town guided evening walk", "Forodhani Night Market", "Indian Ocean beach morning"],
  },
];

export default function GrandSafariWorldsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          Two Worlds. One Journey.
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          Wild Africa.{" "}
          <span className="italic text-primary">Then the Ocean.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-lg mx-auto leading-relaxed">
          No other package in our collection delivers this contrast — raw
          wilderness followed by the ancient coast of Zanzibar. The Grand Safari
          is Tanzania, complete.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {WORLDS.map((world) => (
          <div key={world.label} className="group relative rounded-2xl overflow-hidden h-[500px]">
            <img
              src={world.image}
              alt={world.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${world.accentClass} to-transparent opacity-70`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 md:p-8 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`font-label text-[8px] uppercase tracking-widest ${world.accentText}`}>{world.label}</span>
                  <span className="font-label text-[8px] uppercase tracking-widest text-white/30">{world.days}</span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl text-white leading-tight">{world.headline}</h3>
              </div>

              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                <div className="overflow-hidden">
                  <p className="text-white/60 text-xs font-light leading-relaxed pt-2 pb-3 max-w-sm">{world.desc}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {world.facts.map((fact) => (
                  <span
                    key={fact}
                    className="font-label text-[8px] uppercase tracking-widest border border-white/15 text-white/45 rounded-full px-2.5 py-1"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator className="mt-16 bg-outline-variant/10" />
    </section>
  );
}
