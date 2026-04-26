import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RiStarFill } from "@remixicon/react";

const reviews = [
  {
    id: "vagabond",
    handle: "@TheVagabond",
    initials: "TV",
    quote: "A world beyond my wildest imagination. The Serengeti breathes life.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
  },
  {
    id: "clara",
    handle: "@ClaraTravels",
    initials: "CT",
    quote: "The spices of Stone Town stay with you long after you leave.",
    stars: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1697730083060-f024eecacd48?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "gourmet",
    handle: "@TheGourmet",
    initials: "TG",
    quote: "Flawless execution from start to finish. Truly luxury service at every meal.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: "peakseeker",
    handle: "@PeakSeeker",
    initials: "PS",
    quote: "Reaching Uhuru Peak was the challenge of a lifetime. Incredible guides!",
    stars: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=2679&auto=format&fit=crop",
  },
] as const;

export default function CollectiveEchoSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-headline mb-6">The Collective Echo</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto font-light">
          Moments captured by our guests across the landscapes of Tanzania.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map(({ id, handle, initials, quote, stars, image }) => (
          <Card key={id} className="bg-surface-container border-outline-variant/10 overflow-hidden flex flex-col">
            <img
              alt={handle}
              className="w-full h-64 object-cover"
              src={image}
            />
            <CardContent className="flex-1 flex flex-col gap-4 pt-6">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: stars }).map((_, i) => (
                  <RiStarFill key={i} className="size-3" />
                ))}
              </div>
              <p className="text-sm text-on-surface-variant italic font-light flex-1">&ldquo;{quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarFallback className="bg-primary-container/20 text-primary text-[10px] font-bold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="font-label text-[10px] font-bold uppercase tracking-widest">{handle}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
