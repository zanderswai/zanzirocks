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
  { time: "05:30", title: "Hotel Pickup", desc: "Your driver collects you from your Stone Town hotel or Nungwi beach accommodation." },
  { time: "07:00", title: "Speedboat Departs", desc: "Depart Stone Town harbour. The crossing to Mafia takes approximately 90 minutes depending on sea conditions. Breakfast snacks and coffee on board." },
  { time: "08:30", title: "Arrive Mafia Island", desc: "Check in at the marine park office. Full safety and marine park rules briefing from your guide. Snorkel gear distributed and fitted." },
  { time: "09:00", title: "Whale Shark Encounter", desc: "The crew begin spotting from the boat. Once a shark is located, you slip quietly into the water. Encounters typically last 15–45 minutes.", highlight: true },
  { time: "11:30", title: "Coral Reef Snorkelling", desc: "Move to a pristine reef site within the marine park — 500+ species of fish, hard and soft corals, sea turtles, and rays.", highlight: true },
  { time: "13:00", title: "Lunch on the Beach", desc: "Fresh Swahili seafood lunch on the beach. Time to relax, swim, or explore the shore." },
  { time: "14:30", title: "Return Speedboat", desc: "Board the boat for the return crossing to Zanzibar. Light refreshments on board." },
  { time: "16:30", title: "Arrive Stone Town", desc: "Return to Stone Town harbour. Transfer back to your hotel." },
];

export default function WhaleSharkItinerarySection() {
  return (
    <section className="mb-32 md:mb-48" id="itinerary">
      <div className="mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          Day Itinerary
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          Your Day,{" "}
          <span className="italic text-primary">Hour by Hour.</span>
        </h2>
      </div>

      <div className="flex flex-col">
        {STEPS.map((step, i) => (
          <div
            key={step.time}
            className={cn(
              "grid grid-cols-[4rem_auto_1fr] sm:grid-cols-[5rem_auto_1fr] gap-x-4 sm:gap-x-6",
              i < STEPS.length - 1 ? "pb-8" : "",
            )}
          >
            {/* Time */}
            <div className="pt-0.5 text-right">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/40 tabular-nums">
                {step.time}
              </span>
            </div>

            {/* Dot + line */}
            <div className="flex flex-col items-center">
              <div className={cn(
                "size-2.5 rounded-full mt-0.5 shrink-0",
                step.highlight ? "bg-primary ring-2 ring-primary/30 ring-offset-1 ring-offset-background" : "bg-outline-variant/40",
              )} />
              {i < STEPS.length - 1 && (
                <div className="w-px flex-1 bg-outline-variant/15 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className={cn(
              "pb-1 rounded-xl",
              step.highlight ? "bg-primary/4 border border-primary/10 px-4 py-3 -mt-0.5 mb-1" : "",
            )}>
              <p className={cn(
                "font-label text-[11px] uppercase tracking-widest font-bold mb-1",
                step.highlight ? "text-primary" : "text-on-surface-variant/60",
              )}>
                {step.title}
              </p>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Separator className="mt-8 bg-outline-variant/10" />
    </section>
  );
}
