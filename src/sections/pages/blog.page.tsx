import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RiArrowLeftLine, RiArrowRightLine, RiLeafLine, RiMapPinLine, RiCameraLine, RiCompassLine } from "@remixicon/react";

const TOPICS = [
  { icon: RiLeafLine, label: "Wildlife & Migration", desc: "The Serengeti's rhythms — month by month, species by species." },
  { icon: RiMapPinLine, label: "Route Guides", desc: "How to sequence Tanzania's parks for maximum impact." },
  { icon: RiCameraLine, label: "Field Notes", desc: "Unfiltered accounts from our guides and guests in the field." },
  { icon: RiCompassLine, label: "Planning Advice", desc: "When to go, what to pack, and what nobody tells you beforehand." },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <main>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Back nav */}
        <div className="pt-12 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors"
          >
            <RiArrowLeftLine className="size-3" />
            Back to ZanziRocks
          </Link>
        </div>

        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-36 border-b border-outline-variant/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-6"
              >
                The Journal
              </Badge>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
                Stories from{" "}
                <span className="italic text-primary">the wild.</span>
              </h1>
              <p className="text-on-surface-variant font-light text-base leading-relaxed max-w-sm mb-8">
                Field notes, migration calendars, route guides, and honest
                travel advice — written by people who spend their lives in these
                parks. Coming soon.
              </p>

              {/* Email capture */}
              {submitted ? (
                <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 max-w-sm">
                  <span className="size-2 rounded-full bg-primary animate-pulse shrink-0" />
                  <p className="font-label text-[10px] uppercase tracking-widest text-primary">
                    You're on the list — we'll let you know.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-surface-container-high border-outline-variant/20 focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-on-surface-variant/30 text-sm flex-1"
                  />
                  <Button
                    type="submit"
                    className="bg-primary text-on-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px] px-5 shrink-0 gap-1.5"
                  >
                    Notify Me <RiArrowRightLine className="size-3" />
                  </Button>
                </form>
              )}
              <p className="mt-3 font-label text-[9px] uppercase tracking-widest text-on-surface-variant/30">
                No spam. One email when we launch.
              </p>
            </div>

            {/* Decorative editorial block */}
            <div className="hidden lg:grid grid-rows-3 gap-3 h-[480px]">
              <div className="rounded-2xl bg-surface-container border border-outline-variant/10 flex items-end p-6 overflow-hidden relative row-span-2">
                <img
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop"
                  alt="Safari at dawn"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative z-10">
                  <p className="font-label text-[9px] uppercase tracking-widest text-white/40 mb-1">Coming Soon</p>
                  <p className="font-headline text-white text-xl leading-tight">
                    The Great Migration:<br />
                    <span className="italic text-primary">A Month-by-Month Guide</span>
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-surface-container border border-outline-variant/10 flex items-center px-6 gap-4">
                <span className="font-headline text-5xl text-primary/20">01</span>
                <div>
                  <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-0.5">First issue</p>
                  <p className="font-headline text-lg text-on-surface leading-tight">
                    Where to be in July
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics preview */}
        <section className="py-20 md:py-24">
          <div className="mb-12">
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-3">
              What's coming
            </p>
            <h2 className="font-headline text-3xl md:text-4xl leading-tight">
              Intelligent writing about{" "}
              <span className="italic text-primary">East Africa.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {TOPICS.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-outline-variant/10 bg-surface-container p-7 flex flex-col gap-4"
                >
                  <Icon className="size-5 text-primary/60" />
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface mb-2">
                      {topic.label}
                    </p>
                    <p className="text-on-surface-variant text-xs font-light leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Separator className="mb-14 bg-outline-variant/10" />

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-2">
                While you wait
              </p>
              <p className="font-headline text-2xl md:text-3xl leading-tight">
                Ready to experience it{" "}
                <span className="italic text-primary">yourself?</span>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button asChild variant="outline" className="border-outline-variant/20 font-label uppercase tracking-widest text-[10px] gap-2">
                <Link to="/destinations">
                  Explore Destinations
                </Link>
              </Button>
              <Button asChild className="bg-primary text-on-primary hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px] px-6 gap-2">
                <Link to="/contact">
                  Plan My Trip <RiArrowRightLine className="size-3" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
