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
    title: "Arusha → Tarangire",
    location: "Tarangire National Park",
    items: [
      "Depart Arusha (or domestic flight from Zanzibar + road transfer)",
      "Arrive Tarangire mid-morning — first game drive from the gate",
      "Afternoon: follow the Tarangire River — elephant herds converge at waterholes",
      "Baobab grove stop — ancient trees, yellow-collared lovebirds",
      "Overnight at tented camp inside Tarangire",
    ],
  },
  {
    day: "Day 2",
    title: "Tarangire → Serengeti",
    location: "Tarangire → Serengeti",
    highlight: true,
    items: [
      "Early morning game drive (best elephant light)",
      "Optional: Maasai village visit en route",
      "Road transfer via Ngorongoro highlands (scenic rim views)",
      "Afternoon arrival in Serengeti — immediate game drive from the gate",
      "Overnight lodge in the heart of Seronera",
    ],
  },
  {
    day: "Day 3",
    title: "Full Day — Serengeti",
    location: "Serengeti National Park",
    highlight: true,
    items: [
      "Pre-dawn departure (05:30) — lions active on the open plains",
      "Follow the migration: wildebeest, zebra, and what hunts them",
      "Optional: Balloon safari at dawn (pre-booking essential, extra cost)",
      "Picnic lunch at a kopje viewpoint",
      "Afternoon drive: cheetah families, leopard in acacia, wild dogs",
      "Last sunset on the Serengeti plains",
    ],
  },
  {
    day: "Day 4",
    title: "Ngorongoro Crater Descent",
    location: "Ngorongoro → Arusha",
    items: [
      "Transfer from Serengeti to Ngorongoro Crater rim",
      "Scenic viewpoint stop — the scale of the caldera from above",
      "600m descent to the crater floor via 4WD",
      "Full crater floor game drive: lion, elephant, buffalo, hippo, flamingo",
      "Optional: Olduvai Gorge stop (cradle of humankind)",
      "Ascend the rim · Transfer to Arusha or return flight to Zanzibar",
    ],
  },
];

export default function NorthernCircuitItinerarySection() {
  return (
    <section className="mb-32 md:mb-48" id="itinerary">
      <div className="mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          4-Day Itinerary
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          Day by Day.{" "}
          <span className="italic text-primary">Park by Park.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {DAYS.map((day) => (
          <div
            key={day.day}
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
              {day.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-on-surface-variant font-light">
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
