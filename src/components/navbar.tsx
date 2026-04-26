import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuLine, RiArrowRightLine } from "@remixicon/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const featuredPackage = {
  label: "Grand Safari & Zanzibar Town",
  desc: "6 Days · Wildebeest Migration · Ngorongoro · $2,555",
  href: "/packages/grand-safari-zanzibar-6-days",
  image:
    "https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=800&auto=format&fit=crop",
} as const;

const packageItems = [
  {
    label: "Nyerere Fly-In Safari",
    desc: "Rufiji River boat safari · 3 Days",
    badge: "Most Popular",
    href: "/packages/nyerere-fly-in-safari-3-days",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=160&auto=format&fit=crop",
  },
  {
    label: "Serengeti & Ngorongoro",
    desc: "The Great Migration · 3 Days",
    badge: "Top Rated",
    href: "/packages/serengeti-ngorongoro-safari-3-days",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=160&auto=format&fit=crop",
  },
  {
    label: "Mafia Island Whale Sharks",
    desc: "Swim with giants · Day Trip",
    badge: "Bucket List",
    href: "/packages/mafia-island-whale-shark-adventure-day-trip",
    image:
      "https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=160&auto=format&fit=crop",
  },
  {
    label: "4-Day Northern Circuit",
    desc: "Tarangire · Serengeti · Ngorongoro",
    badge: undefined,
    href: "/packages/northern-circuit-4-days-tarangire-serengeti-ngorongoro",
    image:
      "https://images.unsplash.com/photo-1716206701107-55b7f1f2c0e0?q=80&w=160&auto=format&fit=crop",
  },
] as const;

const destinationItems = [
  {
    label: "Zanzibar Island",
    desc: "Your Gateway to Everything",
    href: "/destinations/zanzibar",
    image:
      "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Nyerere Park",
    desc: "Africa's Largest National Park",
    href: "/destinations/nyerere",
    image:
      "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Serengeti",
    desc: "The Great Migration",
    href: "/destinations/serengeti",
    image:
      "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Ngorongoro Crater",
    desc: "World's Largest Intact Caldera",
    href: "/destinations/ngorongoro",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Tarangire",
    desc: "Land of the Giants",
    href: "/destinations/tarangire",
    image:
      "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=400&auto=format&fit=crop",
  },
  {
    label: "Mafia Island",
    desc: "Swim With Giants",
    href: "/destinations/mafia-island",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=400&auto=format&fit=crop",
  },
] as const;

const simpleLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const allMobileLinks = [
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destinations" },
  ...simpleLinks,
] as const;

// ─── Mega menu panels ─────────────────────────────────────────────────────────

function PackagesMenu() {
  return (
    <div className="w-[400px] p-3 flex flex-col gap-2">
      {/* Featured card */}
      <NavigationMenuLink asChild>
        <Link
          to={featuredPackage.href}
          className="group/feat relative block rounded-lg overflow-hidden h-28 shrink-0"
        >
          <img
            alt={featuredPackage.label}
            src={featuredPackage.image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/feat:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-4 gap-0.5">
            <span className="font-label text-primary text-[9px] uppercase tracking-[0.3em] font-bold">
              Premium Experience
            </span>
            <span className="font-headline text-white text-lg leading-tight">
              {featuredPackage.label}
            </span>
            <span className="font-label text-white/50 text-[10px] font-light">
              {featuredPackage.desc}
            </span>
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover/feat:opacity-100 transition-opacity">
            <RiArrowRightLine className="size-4 text-primary" />
          </div>
        </Link>
      </NavigationMenuLink>

      {/* Package list */}
      <div className="flex flex-col gap-0.5">
        {packageItems.map((pkg) => (
          <NavigationMenuLink key={pkg.href} asChild>
            <Link
              to={pkg.href}
              className="group/item flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-surface-container transition-colors"
            >
              <img
                alt={pkg.label}
                src={pkg.image}
                className="w-[68px] h-[44px] object-cover rounded shrink-0"
              />
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-on-surface text-[12px] font-semibold truncate">
                    {pkg.label}
                  </span>
                  {pkg.badge && (
                    <Badge
                      variant="secondary"
                      className="font-label uppercase tracking-widest text-[8px] shrink-0 py-0 h-4"
                    >
                      {pkg.badge}
                    </Badge>
                  )}
                </div>
                <span className="text-on-surface-variant text-[10px] font-light">
                  {pkg.desc}
                </span>
              </div>
              <RiArrowRightLine className="size-3.5 text-on-surface-variant/0 group-hover/item:text-primary shrink-0 transition-colors" />
            </Link>
          </NavigationMenuLink>
        ))}
      </div>

      <Separator className="bg-outline-variant/10" />

      <NavigationMenuLink asChild>
        <Link
          to="/packages"
          className="flex items-center gap-1.5 px-2 py-1.5 text-primary font-label text-[10px] font-bold uppercase tracking-widest hover:bg-primary/8 rounded transition-colors"
        >
          View All Packages
          <RiArrowRightLine className="size-3" />
        </Link>
      </NavigationMenuLink>
    </div>
  );
}

function DestinationsMenu() {
  return (
    <div className="w-[480px] p-3 flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {destinationItems.map((dest) => (
          <NavigationMenuLink key={dest.href} asChild>
            <Link
              to={dest.href}
              className="group/dest relative block rounded-lg overflow-hidden h-[78px]"
            >
              <img
                alt={dest.label}
                src={dest.image}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/dest:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2">
                <div className="font-headline text-white text-[12px] leading-tight">
                  {dest.label}
                </div>
                <div className="text-white/50 text-[9px] font-light leading-tight truncate">
                  {dest.desc}
                </div>
              </div>
            </Link>
          </NavigationMenuLink>
        ))}
      </div>

      <Separator className="bg-outline-variant/10" />

      <NavigationMenuLink asChild>
        <Link
          to="/destinations"
          className="flex items-center gap-1.5 px-2 py-1.5 text-primary font-label text-[10px] font-bold uppercase tracking-widest hover:bg-primary/8 rounded transition-colors"
        >
          Explore All Destinations
          <RiArrowRightLine className="size-3" />
        </Link>
      </NavigationMenuLink>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

const CONTENT_CLS =
  "!bg-surface-dim/95 !backdrop-blur-2xl !border !border-outline-variant/15 !shadow-2xl !rounded-xl !ring-0 overflow-hidden p-0";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav
        className="flex items-center h-12 px-3 gap-1 rounded-2xl bg-black/25 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/30"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-primary font-headline tracking-tighter px-2 shrink-0"
        >
          ZanziRocks
        </Link>

        {/* Divider */}
        <div className="hidden md:block h-4 w-px bg-white/10 mx-1 shrink-0" />

        {/* Desktop navigation */}
        <NavigationMenu viewport={false} className="hidden md:flex flex-1">
          <NavigationMenuList className="gap-0">
            {/* Packages */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/6 text-white/60 hover:text-white data-[state=open]:bg-white/6 data-[state=open]:text-white text-[11px] tracking-[0.15em] uppercase font-semibold h-8 px-3 rounded-lg transition-colors">
                Packages
              </NavigationMenuTrigger>
              <NavigationMenuContent className={CONTENT_CLS}>
                <PackagesMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Destinations */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/6 text-white/60 hover:text-white data-[state=open]:bg-white/6 data-[state=open]:text-white text-[11px] tracking-[0.15em] uppercase font-semibold h-8 px-3 rounded-lg transition-colors">
                Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent className={CONTENT_CLS}>
                <DestinationsMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple links */}
            {simpleLinks.map(({ label, href }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    to={href}
                    className="inline-flex items-center text-white/60 hover:text-white transition-colors font-body text-[11px] tracking-[0.15em] uppercase font-semibold px-3 h-8 rounded-lg hover:bg-white/6"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Book Now + mobile toggle */}
        <div className="flex items-center gap-2 ml-auto pl-2 shrink-0">
          <Button
            asChild
            size="sm"
            className="hidden md:inline-flex h-8 px-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold tracking-widest text-[10px] uppercase hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/20"
          >
            <Link to="/contact">Book Now</Link>
          </Button>

          {/* Mobile sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white/70 hover:text-primary hover:bg-white/6 size-8"
                aria-label="Open menu"
              >
                <RiMenuLine />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface-dim border-outline-variant/20 w-72">
              <SheetTitle className="text-primary font-headline text-2xl">
                ZanziRocks
              </SheetTitle>
              <nav className="flex flex-col gap-1 mt-8">
                {allMobileLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="px-3 py-2.5 rounded-lg text-white/70 hover:text-primary hover:bg-primary/8 transition-colors font-body text-sm tracking-widest uppercase font-semibold"
                  >
                    {label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-primary text-on-primary hover:bg-primary-container tracking-widest text-xs font-bold uppercase"
                >
                  <Link to="/contact">Book Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
