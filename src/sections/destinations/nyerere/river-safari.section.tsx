import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  RiBoatLine,
  RiWalkLine,
  RiCameraLine,
  RiTeamLine,
  RiArrowRightLine,
} from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ACTIVITIES = [
  {
    icon: RiBoatLine,
    title: "Rufiji River Boat Safari",
    desc: "Two hours drifting through channels and lagoons — hippos surface metres away, crocodiles bask on sandy banks, and the sky erupts with bee-eaters and kingfishers.",
    duration: "2 hrs",
  },
  {
    icon: RiWalkLine,
    title: "Guided Bush Walk",
    desc: "Your armed ranger reads the land the way most people read a map — every track, every scent, every sound has a story. The bush walk turns the savannah into a conversation.",
    duration: "2–3 hrs",
  },
  {
    icon: RiCameraLine,
    title: "Full-Day Game Drive",
    desc: "Private Land Cruiser, pop-up roof, window seat guaranteed. The park's photographic zone designation means every game drive runs through pristine, unmarked wilderness.",
    duration: "Full day",
  },
  {
    icon: RiTeamLine,
    title: "Maasai Village Visit",
    desc: "A cultural immersion into one of East Africa's most iconic communities — traditional homesteads, warrior ceremonies, and the chance to understand a world-view shaped by generations of living alongside wild animals.",
    duration: "~1.5 hrs",
  },
];

export default function NyerereRiverSafariSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Full-bleed split panel */}
      <div className="rounded-xl overflow-hidden border border-outline-variant/10 grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* ── Left: image ── */}
        <div className="relative min-h-[360px] lg:min-h-0">
          <img
            alt="Rufiji River boat safari — hippos and crocodiles"
            src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=1400&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay gradient — right fade for seamless join on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 lg:bg-gradient-to-r lg:from-transparent lg:to-surface-container-low" />

          {/* Floating badge */}
          <div className="absolute bottom-6 left-6">
            <div className="flex flex-col gap-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-4">
              <span className="font-headline text-3xl text-primary leading-none">Rufiji</span>
              <span className="font-label text-[10px] uppercase tracking-widest text-white/50">
                Tanzania's longest river
              </span>
            </div>
          </div>
        </div>

        {/* ── Right: activities ── */}
        <div className="bg-surface-container-low flex flex-col justify-center px-8 md:px-12 py-12 gap-8">
          <div>
            <Badge
              variant="outline"
              className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
            >
              Signature Experiences
            </Badge>
            <h2 className="font-headline text-4xl md:text-5xl leading-tight">
              The River. The Bush. <br />
              <span className="italic text-primary">The Wild.</span>
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-outline-variant/10">
            {ACTIVITIES.map(({ icon: Icon, title, desc, duration }) => (
              <div key={title} className="group py-5 flex gap-4">
                <div className="pt-0.5 shrink-0">
                  <div className="p-2 rounded-lg bg-primary/8 border border-primary/15 group-hover:bg-primary/15 transition-colors duration-200">
                    <Icon className="size-4 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-label text-[13px] font-bold text-white uppercase tracking-wide">
                      {title}
                    </h3>
                    <span className="font-label text-[10px] text-primary/60 shrink-0">{duration}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="bg-outline-variant/10" />

          <Button
            asChild
            className="w-fit bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
          >
            <Link to="/packages/nyerere-fly-in-safari-3-days">
              See the Full Itinerary
              <RiArrowRightLine data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
