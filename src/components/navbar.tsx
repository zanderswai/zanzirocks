import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { RiMenuLine } from "@remixicon/react";

const megaMenus = [
  {
    label: "Packages",
    href: "/packages",
    items: [
      { label: "All Packages", href: "/packages" },
      { label: "Southern Safari (Nyerere)", href: "/packages/nyerere-fly-in-safari-3-days" },
      { label: "Northern Circuit (Serengeti)", href: "/packages/serengeti-ngorongoro-safari-3-days" },
      { label: "Mafia Island Day Trip", href: "/packages/mafia-island-whale-shark-adventure-day-trip" },
      { label: "Grand Safari — 6 Days", href: "/packages/grand-safari-zanzibar-6-days" },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    items: [
      { label: "Zanzibar", href: "/destinations/zanzibar" },
      { label: "Nyerere / Selous", href: "/destinations/nyerere" },
      { label: "Serengeti", href: "/destinations/serengeti" },
      { label: "Ngorongoro Crater", href: "/destinations/ngorongoro" },
      { label: "Tarangire", href: "/destinations/tarangire" },
      { label: "Lake Manyara", href: "/destinations/lake-manyara" },
      { label: "Mafia Island", href: "/destinations/mafia-island" },
    ],
  },
] as const;

const simpleLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 md:px-12 max-w-[1920px] mx-auto h-24">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tighter font-headline">
          ZanziRocks
        </Link>

        {/* Desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {megaMenus.map(({ label, items }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuTrigger className="bg-transparent text-white/60 hover:text-primary text-xs tracking-[0.2em] uppercase font-semibold font-body">
                  {label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-1 p-3 w-52 bg-surface-dim border border-outline-variant/20">
                    {items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block px-3 py-2 text-xs font-body tracking-widest uppercase text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors rounded"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            {simpleLinks.map(({ label, href }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    to={href}
                    className="text-white/60 hover:text-primary transition-colors font-body text-xs tracking-[0.2em] uppercase font-semibold px-4 py-2 inline-block"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 font-bold tracking-widest text-[0.75rem] uppercase hover:scale-105 transition-transform duration-300"
          >
            <Link to="/contact">Book Now</Link>
          </Button>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-primary hover:bg-transparent">
                <RiMenuLine />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface-dim border-outline-variant/20">
              <SheetTitle className="text-primary font-headline text-2xl">ZanziRocks</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {[...megaMenus, ...simpleLinks].map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="text-white/80 hover:text-primary transition-colors font-body text-sm tracking-widest uppercase font-semibold"
                  >
                    {label}
                  </Link>
                ))}
                <Button asChild className="mt-2 bg-primary text-on-primary hover:bg-primary-container tracking-widest text-xs font-bold uppercase">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
