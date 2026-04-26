import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiStarFill, RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: "sarah",
    name: "Sarah M.",
    country: "UK",
    flag: "🇬🇧",
    package: "Serengeti & Ngorongoro Safari",
    quote:
      "I'd been to Africa three times before. This was the first time I forgot to check my phone for three whole days. Our guide read the land like a story — every track, every rustle meant something.",
    stars: 5,
    initials: "SM",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
  },
  {
    id: "james",
    name: "James K.",
    country: "USA",
    flag: "🇺🇸",
    package: "Nyerere Fly-In Safari",
    quote:
      "I woke up at 5am not because of an alarm — but because something enormous was moving just outside my tent. That sound. That morning. That's the ZanziRocks difference.",
    stars: 5,
    initials: "JK",
    image:
      "https://plus.unsplash.com/premium_photo-1697730083060-f024eecacd48?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "anna",
    name: "Anna L.",
    country: "Germany",
    flag: "🇩🇪",
    package: "Mafia Island Whale Shark Day Trip",
    quote:
      "The whale shark was the length of a school bus and I was in the water alongside it. I've dived across three oceans. Nothing has come close to that moment.",
    stars: 5,
    initials: "AL",
    image:
      "https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1287&auto=format&fit=crop",
  },
  {
    id: "marcus",
    name: "Marcus T.",
    country: "Canada",
    flag: "🇨🇦",
    package: "4-Day Northern Circuit Safari",
    quote:
      "Reaching the crater rim at sunrise, with a sea of mist below and lions in the distance — that image will never leave me. Incredible guides, every single day.",
    stars: 5,
    initials: "MT",
    image:
      "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=2679&auto=format&fit=crop",
  },
] as const;

// ─── Dot ──────────────────────────────────────────────────────────────────────

function Dot({ active, index, onClick }: { active: boolean; index: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Go to review ${index + 1}`}
      className={cn(
        "rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300",
        active ? "w-6 h-1.5 bg-primary hover:bg-primary" : "size-1.5",
      )}
    />
  );
}

// ─── Review card ──────────────────────────────────────────────────────────────

type Review = (typeof reviews)[number];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="group relative rounded-xl overflow-hidden h-[390px] md:h-[410px]">
      {/* Full-bleed image */}
      <img
        alt={`${review.name}'s review`}
        src={review.image}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Gradient stack — heavier mid-veil than PackageCard, no amber wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/70 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      {/* Hover: cool silver shimmer (distinct from packages' amber) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top-left: stars + package */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <div className="flex gap-0.5" aria-label={`${review.stars} out of 5 stars`}>
          {Array.from({ length: review.stars }).map((_, i) => (
            <RiStarFill key={i} className="size-3 text-primary" aria-hidden="true" />
          ))}
        </div>
        <Badge
          variant="outline"
          className="w-fit border-white/20 text-white/60 font-label uppercase tracking-[0.12em] text-[9px] backdrop-blur-sm"
        >
          {review.package}
        </Badge>
      </div>

      {/* Decorative quote mark — top-right watermark */}
      <span
        className="absolute top-3 right-5 font-headline text-[5.5rem] leading-none text-white/8 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Bottom: quote + reviewer */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
        <blockquote className="font-headline text-xl text-white leading-snug italic">
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        <div className="flex items-center gap-3 pt-2.5 border-t border-white/10">
          <Avatar className="size-7 shrink-0">
            <AvatarFallback className="bg-primary-container/30 text-primary text-[10px] font-bold">
              {review.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <span className="font-label text-[11px] font-bold text-white truncate">
              {review.name}
            </span>
            <span className="text-white/45 text-[10px] font-light">
              {review.flag} {review.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function CollectiveEchoSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const count = reviews.length;

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <section className="mb-32 md:mb-48" aria-label="Guest reviews">
      {/* Heading */}
      <div className="text-center mb-16">
        <Badge
          variant="secondary"
          className="gap-2 mb-6 font-label uppercase tracking-[0.35em] text-xs font-bold"
        >
          <RiStarFill className="text-primary size-3" aria-hidden="true" />
          500+ Adventures · Zero Regrets
        </Badge>
        <h2 className="font-headline text-5xl mb-4">You Don't Have to Take Our Word for It</h2>
        <p className="text-on-surface-variant text-sm max-w-md mx-auto font-light leading-relaxed">
          Over 500 travellers have made the leap from beach to bush. Here's what they came back saying.
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        aria-label="Guest review carousel"
        aria-roledescription="carousel"
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, i) => (
            <CarouselItem
              key={review.id}
              className="pl-4 basis-full sm:basis-[85%] md:basis-1/2 lg:basis-1/3 group"
              aria-label={`Review ${i + 1} of ${count} by ${review.name}`}
              aria-roledescription="slide"
            >
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8 px-1">
          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Review slides">
            {reviews.map((_, i) => (
              <Dot
                key={i}
                index={i}
                active={i === current}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => api?.scrollPrev()}
              className="rounded-full border-outline-variant/30 hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <RiArrowLeftLine aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => api?.scrollNext()}
              className="rounded-full border-outline-variant/30 hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <RiArrowRightLine aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
