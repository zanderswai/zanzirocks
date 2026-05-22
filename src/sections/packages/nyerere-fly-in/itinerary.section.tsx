import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Step = {
  day: string;
  title: string;
  location: string;
  items: string[];
  highlight?: boolean;
};

const DAYS: Step[] = [
  {
    day: "Day 1",
    title: "Fly-In & First River Safari",
    location: "Zanzibar → Nyerere",
    items: [
      "Morning light aircraft departs Zanzibar (~07:30)",
      "Arrive Jongomero or Siwandu airstrip (~09:00)",
      "Camp check-in, briefing with your guide",
      "Afternoon boat safari on the Rufiji River",
      "Sundowner on the riverbank",
      "Dinner at camp — first night sounds",
    ],
  },
  {
    day: "Day 2",
    title: "Full Wilderness Day",
    location: "Nyerere National Park",
    highlight: true,
    items: [
      "Pre-dawn game drive (05:30) — best hours for predators",
      "Bush breakfast under an acacia",
      "Mid-morning guided walking safari",
      "Midday rest at camp",
      "Late afternoon game drive — wild dog territory",
      "Evening game drive: nocturnal species, eyes in the dark",
    ],
  },
  {
    day: "Day 3",
    title: "Final Morning & Fly-Out",
    location: "Nyerere → Zanzibar",
    items: [
      "Sunrise game drive (last chance — make it count)",
      "Return to camp for breakfast",
      "Check-out and transfer to airstrip",
      "Light aircraft departs (~10:00)",
      "Arrive Zanzibar by midday",
    ],
  },
];

export default function NyerereItinerarySection() {
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
          Three Days.{" "}
          <span className="italic text-primary">A Lifetime of Stories.</span>
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
            {/* Day label */}
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  "font-label text-[9px] uppercase tracking-widest",
                  day.highlight
                    ? "text-primary/70"
                    : "text-on-surface-variant/40",
                )}
              >
                {day.day}
              </span>
              <p className="font-headline text-2xl text-on-surface leading-tight">
                {day.title}
              </p>
              <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mt-1">
                {day.location}
              </p>
            </div>

            {/* Activities */}
            <ul className="flex flex-col gap-2.5">
              {day.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-on-surface-variant font-light"
                >
                  <span
                    className={cn(
                      "mt-[6px] size-1.5 rounded-full shrink-0",
                      day.highlight ? "bg-primary" : "bg-outline-variant/60",
                    )}
                  />
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
