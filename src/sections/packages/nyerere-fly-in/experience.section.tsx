import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const MODES = [
  {
    label: "The Fly-In",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Light aircraft over African savanna",
    desc: "A 6-seater light aircraft departs Zanzibar each morning. An hour and a half later, the airstrip appears in the middle of 30,000 km² of wilderness. Your guide is waiting on the grass.",
  },
  {
    label: "River Safaris",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Boat safari on the Rufiji River",
    desc: "The Rufiji River is the spine of Nyerere. Hippo pods surface metres from the boat. Crocodiles watch from sandbanks. Birds fill the canopy. This is safari from the water — a perspective no game drive can match.",
  },
  {
    label: "The Camp",
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=900&auto=format&fit=crop",
    imageAlt: "Luxury tented camp at night in Nyerere",
    desc: "You are the only guests at a small tented camp inside the park boundary. No fences. No other lodges in view. At night, sounds you cannot identify drift in from the darkness.",
  },
];

export default function NyerereExperienceSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          Three Safari Modes
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          By Air. By Boat.{" "}
          <span className="italic text-primary">On Foot.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-lg mx-auto leading-relaxed">
          Nyerere is the only national park in Tanzania where you can experience
          safari from three completely different perspectives in a single trip.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MODES.map((mode, i) => (
          <div
            key={mode.label}
            className="group relative rounded-2xl overflow-hidden h-[420px]"
          >
            <img
              src={mode.image}
              alt={mode.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-3">
              <span className="font-label text-[8px] uppercase tracking-widest text-primary/70">0{i + 1}</span>
              <h3 className="font-headline text-2xl text-white">{mode.label}</h3>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
                <p className="overflow-hidden text-white/60 text-xs font-light leading-relaxed">{mode.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-6">
        <p className="font-label text-[9px] uppercase tracking-widest text-emerald-400/70 mb-2">Wild Dogs</p>
        <p className="text-on-surface-variant text-sm font-light leading-relaxed max-w-3xl">
          Nyerere holds the largest population of African wild dogs in the world. Your guide knows the packs by name.
          A sighting is never guaranteed — but the odds here are better than anywhere else on the continent.
        </p>
      </div>

      <Separator className="mt-16 bg-outline-variant/10" />
    </section>
  );
}
