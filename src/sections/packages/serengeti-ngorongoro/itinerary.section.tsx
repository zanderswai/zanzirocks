import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Day = {
  day: string;
  title: string;
  location: string;
  items: string[];
  highlight?: boolean;
};

const DAYS: Day[] = [
  {
    day: "Day 1",
    title: "Fly In & Into the Wild",
    location: "Zanzibar → Serengeti (Seronera)",
    items: [
      "Morning flight from Zanzibar (~07:30)",
      "Land at Seronera airstrip in the heart of the Serengeti",
      "Meet your guide — immediate game drive from the airstrip",
      "Lunch at your lodge",
      "Afternoon game drive: lion prides near the Seronera River",
      "Sundowner on the plains · Dinner under the stars",
    ],
  },
  {
    day: "Day 2",
    title: "Full Day on the Plains",
    location: "Serengeti National Park",
    highlight: true,
    items: [
      "Pre-dawn departure (05:30) — find the cats before the sun rises",
      "Follow the migration: wildebeest, zebra, and the predators that track them",
      "Picnic lunch in the Serengeti — your guide selects the view",
      "Afternoon drive: cheetah, wild dog, and crossing opportunities (Jul–Sep)",
      "Return to lodge · Debrief with your guide over dinner",
    ],
  },
  {
    day: "Day 3",
    title: "The Crater Descent",
    location: "Serengeti → Ngorongoro Crater",
    highlight: true,
    items: [
      "Early morning game drive (best light, fewer vehicles)",
      "Transfer to Ngorongoro Crater — scenic rim viewpoint stop",
      "600m descent to the crater floor via 4WD",
      "Full day on the crater floor: lion, elephant, buffalo, flamingo — rhino if you're lucky",
      "Ascend the crater rim at dusk",
      "Transfer to Arusha or return flight to Zanzibar",
    ],
  },
];

export default function SerengetiNgorongoroItinerarySection() {
  return (
    <section className="mb-32 md:mb-48" id="itinerary">
      <div className="mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          3-Day Itinerary
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          How Three Days{" "}
          <span className="italic text-primary">Become Unforgettable.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {DAYS.map((day, i) => (
          <div
            key={i}
            className={cn(
              "grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 rounded-2xl border p-7 md:p-8",
              day.highlight
                ? "border-primary/20 bg-primary/3"
                : "border-outline-variant/10 bg-surface-container",
            )}
          >
            <div className="flex flex-col gap-1">
              <span className={cn(
                "font-label text-[9px] uppercase tracking-widest",
                day.highlight ? "text-primary/70" : "text-on-surface-variant/40",
              )}>
                {day.day}
              </span>
              <p className="font-headline text-2xl text-on-surface leading-tight">{day.title}</p>
              <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mt-1">{day.location}</p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {day.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant font-light">
                  <span className={cn(
                    "mt-[6px] size-1.5 rounded-full shrink-0",
                    day.highlight ? "bg-primary" : "bg-outline-variant/60",
                  )} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator className="mt-16 bg-outline-variant/10" />
    </section>
  );
}
