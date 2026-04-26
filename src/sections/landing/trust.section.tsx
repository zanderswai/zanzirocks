import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { RiStarFill, RiExternalLinkLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

type Review = {
  id: string;
  name: string;
  country: string;
  flag: string;
  initials: string;
  package: string;
  rating: number;
  preview: string;
  quote: string;
  date: string;
  image: string;
};

const reviews: Review[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    country: "United Kingdom",
    flag: "🇬🇧",
    initials: "SM",
    package: "Serengeti & Ngorongoro Safari",
    rating: 5,
    preview: "I forgot to check my phone for three whole days...",
    quote:
      "I'd been to Africa three times before. This was the first time I forgot to check my phone for three whole days. Our guide read the land like a story — every track, every rustle meant something.",
    date: "March 2026",
    image:
      "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "james",
    name: "James K.",
    country: "United States",
    flag: "🇺🇸",
    initials: "JK",
    package: "Nyerere Fly-In Safari",
    rating: 5,
    preview: "Something enormous was moving just outside my tent...",
    quote:
      "I woke up at 5am not because of an alarm — but because something enormous was moving just outside my tent. That sound. That morning. That's the ZanziRocks difference.",
    date: "February 2026",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "anna",
    name: "Anna L.",
    country: "Germany",
    flag: "🇩🇪",
    initials: "AL",
    package: "Mafia Island Whale Shark Day Trip",
    rating: 5,
    preview: "The whale shark was the length of a school bus...",
    quote:
      "The whale shark was the length of a school bus and I was in the water alongside it. I've dived across three oceans. Nothing has come close to that moment.",
    date: "January 2026",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "jameson",
    name: "Jameson T.",
    country: "Forbes Travel",
    flag: "✦",
    initials: "JT",
    package: "Grand Safari & Zanzibar Town",
    rating: 5,
    preview: "An unparalleled standard of service...",
    quote:
      "An unparalleled standard of service. ZanziRocks doesn't just show you Tanzania; they let you feel it. Every detail was considered, every moment curated — and yet nothing felt staged.",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
  },
  {
    id: "marcus",
    name: "Marcus T.",
    country: "Canada",
    flag: "🇨🇦",
    initials: "MT",
    package: "4-Day Northern Circuit Safari",
    rating: 5,
    preview: "Reaching the crater rim at sunrise with lions in the distance...",
    quote:
      "Reaching the crater rim at sunrise, with a sea of mist below and lions in the distance — that image will never leave me. Incredible guides, flawless logistics, and a depth of knowledge that made every hour richer.",
    date: "December 2025",
    image:
      "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=2574&auto=format&fit=crop",
  },
];

// ─── Star row ─────────────────────────────────────────────────────────────────

function Stars({ count, size = "size-3" }: { count: number; size?: string }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <RiStarFill key={i} className={cn(size, "text-[#00b67a]")} aria-hidden="true" />
      ))}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function TrustSection() {
  const [activeId, setActiveId] = useState<string>(reviews[0].id);
  const active = reviews.find((r) => r.id === activeId) ?? reviews[0];

  return (
    <section
      className="mb-32 md:mb-48 rounded-xl overflow-hidden border border-outline-variant/10 bg-surface-container-low"
      aria-label="Guest reviews"
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] min-h-[480px]">

        {/* ── Left: list ── */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-outline-variant/10">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 border-b border-outline-variant/10">
            <Badge
              variant="secondary"
              className="gap-2 mb-5 font-label uppercase tracking-[0.35em] text-[10px] font-bold"
            >
              <RiStarFill className="text-[#00b67a] size-3" aria-hidden="true" />
              Trustpilot Excellent
            </Badge>

            <h2 className="font-headline text-3xl md:text-4xl text-white leading-tight mb-3">
              What Our Guests Say
            </h2>

            {/* Rating summary */}
            <div className="flex items-center gap-3">
              <Stars count={5} size="size-3.5" />
              <span className="font-label text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">
                4.9 · 500+ Adventures
              </span>
            </div>
          </div>

          {/* Scrollable review list */}
          <div
            className="flex flex-col overflow-y-auto max-h-[320px] md:max-h-none md:flex-1 divide-y divide-outline-variant/10"
            role="listbox"
            aria-label="Select a review to read"
          >
            {reviews.map((review) => {
              const isActive = review.id === activeId;
              return (
                <button
                  key={review.id}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => setActiveId(review.id)}
                  className={cn(
                    "group w-full text-left px-8 py-5 flex flex-col gap-2 transition-colors duration-200 cursor-pointer",
                    isActive
                      ? "bg-primary/8 border-l-2 border-l-primary"
                      : "hover:bg-surface-container border-l-2 border-l-transparent",
                  )}
                >
                  {/* Name + stars */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[11px] font-bold text-on-surface font-label truncate">
                        {review.name}
                      </span>
                      <span className="text-sm leading-none" aria-hidden="true">{review.flag}</span>
                    </div>
                    <Stars count={review.rating} />
                  </div>

                  {/* Package */}
                  <Badge
                    variant="outline"
                    className={cn(
                      "w-fit font-label uppercase tracking-[0.12em] text-[9px] transition-colors",
                      isActive
                        ? "border-primary/30 text-primary/80"
                        : "border-outline-variant/20 text-on-surface-variant/60",
                    )}
                  >
                    {review.package}
                  </Badge>

                  {/* Preview text */}
                  <p className="text-[11px] text-on-surface-variant font-light leading-relaxed truncate">
                    &ldquo;{review.preview}&rdquo;
                  </p>
                </button>
              );
            })}
          </div>

          {/* Trustpilot link */}
          <div className="px-8 py-4 border-t border-outline-variant/10 mt-auto">
            <a
              href="https://www.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-label text-[10px] uppercase tracking-widest text-[#00b67a] hover:text-[#00b67a]/80 font-bold transition-colors"
            >
              View all on Trustpilot
              <RiExternalLinkLine className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Right: review preview ── */}
        <div className="relative overflow-hidden min-h-[360px] md:min-h-0">
          {/* Background image */}
          <img
            key={active.id}
            alt=""
            src={active.image}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Gradient stack */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-10 gap-5">
            {/* Decorative quote mark */}
            <span
              className="font-headline text-[6rem] leading-none text-primary/20 select-none absolute top-6 left-8"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Quote */}
            <blockquote
              key={active.id}
              className="font-headline text-2xl md:text-3xl text-white leading-snug italic max-w-lg animate-in fade-in duration-500"
            >
              {active.quote}
            </blockquote>

            <Separator className="bg-white/10 w-16" />

            {/* Reviewer */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <Avatar className="size-9 border border-white/20">
                  <AvatarFallback className="bg-primary-container/30 text-primary text-[11px] font-bold">
                    {active.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label text-[12px] font-bold text-white">
                    {active.name}
                  </span>
                  <span className="font-label text-[10px] text-white/50 uppercase tracking-widest">
                    {active.flag} {active.country} · {active.date}
                  </span>
                </div>
              </div>

              <Badge
                variant="outline"
                className="border-primary/30 text-primary/70 font-label uppercase tracking-[0.12em] text-[9px] shrink-0"
              >
                {active.package}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
