import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RiArrowLeftLine, RiWhatsappLine } from "@remixicon/react";

export default function NotFoundPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <img
        alt=""
        src="/images/404.JPG"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-xs mb-8"
        >
          404 · Page Not Found
        </Badge>

        <h1 className="font-headline text-7xl md:text-9xl text-white leading-none mb-4">
          Lost <br />
          <span className="italic font-normal text-primary">in the wild.</span>
        </h1>

        <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed mb-10 max-w-sm">
          This page isn't here yet — but it's coming. Like the Great Migration,
          some things arrive exactly when they're meant to.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-10 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          >
            <Link to="/">
              <RiArrowLeftLine data-icon="inline-start" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white font-bold uppercase tracking-widest text-xs px-8 gap-2"
          >
            <a
              href="https://wa.me/255777415192"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappLine data-icon="inline-start" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom coordinate strip */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-label text-[10px] text-white/25 uppercase tracking-[0.3em] select-none whitespace-nowrap">
        ZanziRocks · Stone Town, Zanzibar, Tanzania
      </p>
    </div>
  );
}
