import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Step = {
  time: string;
  title: string;
  desc: string;
  highlight?: boolean;
};

const STEPS: Step[] = [
  {
    time: "~05:30",
    title: "Hotel Pick-Up",
    desc: "Our driver collects you from your Zanzibar hotel — coffee in hand recommended.",
  },
  {
    time: "~06:30",
    title: "Morning Flight to Mafia",
    desc: "50-minute scenic flight across the southern Tanzanian coast. Window seat views of the coastline from above.",
    highlight: false,
  },
  {
    time: "~07:30",
    title: "Arrival & Briefing",
    desc: "Met by the whale shark team on the airstrip. Transfer to base for a full safety and behavioural briefing before heading out.",
  },
  {
    time: "~08:30",
    title: "Boat Out & Whale Shark Search",
    desc: "Local spotter boats fan out across the protected area. When a shark is located, the crew positions the boat and you enter the water one at a time.",
    highlight: true,
  },
  {
    time: "~10:30",
    title: "Snorkelling with Whale Sharks",
    desc: "In the water alongside the world's largest fish. No cages, no constraints — just open ocean and a creature the size of a bus gliding beneath you.",
    highlight: true,
  },
  {
    time: "~13:00",
    title: "Shore BBQ Lunch",
    desc: "Fresh seafood BBQ on the beach at base. Snacks, soft drinks, and time to absorb what you just experienced.",
  },
  {
    time: "~14:30",
    title: "Kilindoni City Tour",
    desc: "Optional guided tour of Kilindoni — Mafia's only town. Local market, fishing harbour, and a slice of coastal Tanzanian life far off the tourist circuit.",
  },
  {
    time: "~16:30",
    title: "Return Flight to Zanzibar",
    desc: "Transfer to the airstrip and fly back to Zanzibar. Hotel transfer on arrival. Dinner reservation recommended — you'll be hungry and happy.",
  },
];

export default function MafiaItinerarySection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          The Day Trip
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          One Day.{" "}
          <span className="italic text-primary">A Lifetime's Memory.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-md mx-auto leading-relaxed">
          Every detail handled. You just show up. Here's what your day looks like.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-outline-variant/15 hidden sm:block" />

        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative flex gap-6 sm:gap-10">
              {/* Time column */}
              <div className="w-16 sm:w-16 shrink-0 pt-6 text-right">
                <span className="font-label text-[10px] text-on-surface-variant/40 tracking-wider">
                  {step.time}
                </span>
              </div>

              {/* Dot */}
              <div className="relative flex flex-col items-center shrink-0 hidden sm:flex">
                <div
                  className={cn(
                    "mt-6 size-2.5 rounded-full border-2 z-10 shrink-0",
                    step.highlight
                      ? "border-primary bg-primary"
                      : "border-outline-variant/40 bg-surface-dim",
                  )}
                />
              </div>

              {/* Content */}
              <div
                className={cn(
                  "flex-1 pb-8 pt-4",
                  step.highlight &&
                    "bg-primary/4 -mx-4 px-4 rounded-xl border border-primary/10",
                )}
              >
                <h3
                  className={cn(
                    "font-label text-[13px] font-bold uppercase tracking-wide mb-1.5",
                    step.highlight ? "text-primary" : "text-white",
                  )}
                >
                  {step.title}
                  {step.highlight && (
                    <span className="ml-2 font-label text-[9px] bg-primary/15 text-primary px-2 py-0.5 rounded-full uppercase tracking-widest">
                      Key moment
                    </span>
                  )}
                </h3>
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mt-12 bg-outline-variant/10" />
    </section>
  );
}
