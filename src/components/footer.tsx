import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TripAdvisor", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full pt-16 pb-10 px-8 md:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
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
