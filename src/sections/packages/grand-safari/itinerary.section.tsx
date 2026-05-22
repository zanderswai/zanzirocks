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
    title: "Fly-In & First Light on the Plains",
    location: "Zanzibar → Serengeti (Ndutu)",
    items: [
      "Morning light aircraft from Zanzibar (~07:30)",
      "Land at Ndutu airstrip in the southern Serengeti",
      "Immediate game drive — wildebeest calves visible from the airstrip",
      "Check in to your tented camp on the Ndutu plains",
      "Afternoon game drive: cheetah families, lion prides, newborn calves",
      "Sundowner on the open grassland · dinner under a sky full of stars",
    ],
  },
  {
    day: "Day 2",
    title: "The Calving Season",
    location: "Serengeti — Ndutu Plains",
    highlight: true,
    items: [
      "Pre-dawn departure (05:30) — golden light across 500,000 wildebeest",
      "Follow a cheetah hunt on the short-grass plains",
      "Picnic breakfast in the field — no camps, no roads, just you and the animals",
      "Mid-morning: lion pride with cubs near the lake shoreline",
      "Afternoon: wild dog pack territory (highest sighting rate of the year)",
      "Return to camp for sundowner and debrief with your guide",
    ],
  },
  {
    day: "Day 3",
    title: "The Crater Descent",
    location: "Serengeti → Ngorongoro Crater",
    highlight: true,
    items: [
      "Morning game drive before transfer",
      "Road transfer to Ngorongoro — scenic rim viewpoint stop",
      "600m descent to the crater floor via 4WD",
      "Full day on the crater floor: lion, elephant, buffalo, hippo pool",
      "Black rhino sighting opportunity (one of Africa's most critically endangered)",
      "Flamingo flocks on Lake Magadi · ascend the rim at dusk",
    ],
  },
  {
    day: "Day 4",
    title: "Tarangire — Elephants & Baobabs",
    location: "Ngorongoro → Tarangire",
    items: [
      "Morning transfer to Tarangire National Park",
      "Arrive mid-morning — game drive from the gate",
      "Follow the Tarangire River: elephant herds converge at the water's edge",
      "Walk among the baobabs on a guided bush walk (late afternoon)",
      "Overnight tented camp inside the park boundary",
    ],
  },
  {
    day: "Day 5",
    title: "Full Day Tarangire → Stone Town",
    location: "Tarangire → Zanzibar",
    highlight: true,
    items: [
      "Pre-dawn elephant drive — bulls at the river before the heat rises",
      "Final Tarangire game drive (morning)",
      "Transfer to airstrip · fly back to Zanzibar (~midday)",
      "Stone Town check-in at boutique heritage hotel",
      "Evening guided walk through the UNESCO old town: carved doors, spice traders, call to prayer",
      "Dinner at Forodhani Night Market — fresh seafood, Zanzibar pizza, sugarcane juice",
    ],
  },
  {
    day: "Day 6",
    title: "Stone Town & the Indian Ocean",
    location: "Zanzibar",
    items: [
      "Spice tour or Old Fort cultural visit (morning)",
      "Lunch at a rooftop restaurant overlooking the harbour",
      "Afternoon on the beach — Nungwi or Kendwa (optional transfer)",
      "Return to Stone Town for departure",
    ],
  },
];

export default function GrandSafariItinerarySection() {
  return (
    <section className="mb-32 md:mb-48" id="itinerary">
      <div className="mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          6-Day Itinerary
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          Six Days.{" "}
          <span className="italic text-primary">Every Icon.</span>
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
