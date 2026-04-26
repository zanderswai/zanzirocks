import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RiWhatsappLine } from "@remixicon/react";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TripAdvisor", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full border-t border-white/5">
      {/* ── Compact CTA strip ── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-white/5">
        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="font-headline text-2xl text-white leading-tight">
            The Wild Won't Wait.
          </h3>
          <p className="text-on-surface-variant text-xs font-light max-w-sm leading-relaxed">
            Tanzania's greatest moments are tied to the calendar — tell us when you're here.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            asChild
            size="sm"
            className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-[10px] px-6 shadow-lg shadow-primary/10"
          >
            <Link to="/contact">Plan My Safari</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white font-bold uppercase tracking-widest text-[10px] px-5 gap-2 backdrop-blur-sm"
          >
            <a href="https://wa.me/255777415192" target="_blank" rel="noopener noreferrer">
              <RiWhatsappLine data-icon="inline-start" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 pt-10 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary mb-8 block font-headline">
              ZanziRocks
            </Link>
            <nav className="flex flex-wrap gap-1">
              {socials.map(({ label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="font-body uppercase tracking-[0.2em] text-[10px] text-primary/60 hover:text-primary hover:bg-transparent px-3 h-7 font-bold"
                >
                  <a href={href}>{label}</a>
                </Button>
              ))}
            </nav>
          </div>

          <div className="text-right">
            <p className="font-body uppercase tracking-[0.2em] text-[10px] text-primary/40 mb-4 font-bold">
              © 2026 ZanziRocks. All rights reserved.
            </p>
            <div className="flex gap-4 justify-end items-center">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">
                Curated in Tanzania
              </span>
            </div>
          </div>
        </div>

        <Separator className="bg-outline-variant/10" />

        <p className="mt-6 font-body text-[10px] text-outline uppercase tracking-widest text-center">
          Wonderful Zanzibar Tours &amp; Safaris · Stone Town, Zanzibar, Tanzania
        </p>
      </div>
    </footer>
  );
}
