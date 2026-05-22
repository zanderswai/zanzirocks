import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const CHIPS = [
  { value: "4 Days", label: "Duration" },
  { value: "On Request", label: "Pricing" },
  { value: "Private 4WD", label: "Vehicle" },
  { value: "3 Parks", label: "Destinations" },
];

export default function NorthernCircuitHeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Private Land Cruiser on the plains of the Northern Circuit at sunrise"
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1716206701107-55b7f1f2c0e0?q=80&w=2670&auto=format&fit=crop"
        />
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      {/* Breadcrumb */}
      <div className="relative z-10 flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-white/35 px-8 md:px-16 pt-8">
        <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
        <span className="text-white/20">/</span>
        <Link to="/packages" className="hover:text-white/60 transition-colors">Packages</Link>
        <span className="text-white/20">/</span>
        <span className="text-primary/70">4-Day Northern Circuit</span>
      </div>

      <div className="relative z-10 mt-auto px-8 md:px-16 pb-16">
        <div className="max-w-5xl">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Adventure Pick · 3 Parks · Private Vehicle
          </Badge>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-[6.5rem] text-white leading-none tracking-tight text-shadow-hero mb-6">
            The full{" "}
            <span className="italic text-primary">Northern Circuit.</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {CHIPS.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full px-3 py-1.5"
              >
                <span className="font-headline text-sm text-primary">{chip.value}</span>
                <span className="font-label text-[9px] uppercase tracking-wider text-white/40">{chip.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <p className="text-white/55 text-sm font-light max-w-md leading-relaxed">
              Tarangire's elephants. Serengeti's migration. Ngorongoro's crater.
              Your own private vehicle, your own guide, four days to go at your
              own pace.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0 sm:ml-auto">
              <Button
                asChild
                className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-8 gap-2"
              >
                <Link to="/contact">
                  Request Pricing <RiArrowRightLine data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm font-label uppercase tracking-widest text-xs px-8"
              >
                <Link to="#itinerary">See Itinerary</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
