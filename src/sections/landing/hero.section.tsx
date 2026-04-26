import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiSearchLine } from "@remixicon/react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Savannah Sunrise"
          className="w-full h-full object-cover"
          src="/images/wallpaper.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/10 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="font-label text-primary uppercase tracking-[0.4em] mb-6 block text-[0.75rem]">
          A Legacy of Adventure
        </span>
        <h1 className="text-6xl md:text-9xl font-headline font-bold text-white mb-12 tracking-tight leading-none text-shadow-hero">
          Unearth the <br />
          <span className="italic text-stroke-primary font-normal">
            Extraordinary
          </span>
        </h1>

        <div className="max-w-2xl mx-auto bg-surface-container/60 backdrop-blur-xl p-2 rounded-xl flex flex-col md:flex-row items-center gap-2 border border-outline-variant/30 shadow-2xl">
          <div className="flex-1 w-full px-4 flex items-center gap-3 md:border-r border-outline-variant/30">
            <RiSearchLine className="text-primary shrink-0" />
            <Input
              className="bg-transparent border-none shadow-none focus-visible:ring-0 text-on-surface placeholder:text-outline font-body text-sm h-auto py-2"
              placeholder="Explore destinations..."
            />
          </div>
          <Button className="w-full md:w-auto bg-primary text-on-primary hover:bg-primary-container tracking-widest text-xs font-bold uppercase px-10">
            Discover
          </Button>
        </div>
      </div>
    </section>
  );
}
