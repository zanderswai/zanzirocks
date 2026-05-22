import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiWhatsappLine,
  RiArrowRightLine,
} from "@remixicon/react";

const PREVIEW_IMAGES = [
  "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=400&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=400&auto=format&fit=crop",
];

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@okungcwele",
    href: "https://www.instagram.com/okungcwele",
    icon: RiInstagramLine,
    desc: "Follow the journey",
  },
  {
    label: "LinkedIn",
    handle: "Alexander Swai",
    href: "https://www.linkedin.com/in/alexander-cuthbert-swai/",
    icon: RiLinkedinBoxFill,
    desc: "Connect professionally",
  },
  {
    label: "WhatsApp",
    handle: "Message us directly",
    href: "/contact",
    icon: RiWhatsappLine,
    desc: "Plan your trip",
    internal: true,
  },
];

export default function AboutSocialSection() {
  return (
    <section className="mb-24 md:mb-32">
      {/* Instagram-style image strip */}
      <div className="grid grid-cols-6 gap-1.5 mb-12">
        {PREVIEW_IMAGES.map((src, i) => (
          <a
            key={i}
            href="https://www.instagram.com/okungcwele"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt="ZanziRocks Tanzania — on Instagram"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <RiInstagramLine className="size-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        ))}
      </div>

      {/* Connect panel */}
      <div className="rounded-2xl border border-outline-variant/10 bg-surface-container overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 p-8 md:p-10 items-center">
          {/* Text */}
          <div>
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-3">
              Follow the journey
            </p>
            <h3 className="font-headline text-3xl md:text-4xl leading-tight mb-3">
              Tanzania looks better{" "}
              <span className="italic text-primary">
                when you're following along.
              </span>
            </h3>
            <p className="text-on-surface-variant text-sm font-light max-w-md leading-relaxed">
              Behind-the-scenes from the parks, honest travel advice, and the
              occasional wildebeest doing something extraordinary.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3 shrink-0 min-w-[220px]">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon;

              const Wrapper = social.internal ? Link : "a";
              const wrapperProps = social.internal
                ? { to: social.href }
                : {
                    href: social.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  };

              return (
                <Wrapper
                  key={i}
                  {...(wrapperProps as any)}
                  className="group/s flex items-center gap-3 rounded-xl border border-outline-variant/10 bg-surface-container-high hover:border-primary/30 hover:bg-primary/4 px-4 py-3 transition-all duration-200"
                >
                  <Icon className="size-5 text-on-surface-variant/50 group-hover/s:text-primary transition-colors shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface font-bold truncate">
                      {social.label}
                    </p>
                    <p className="font-label text-[9px] text-on-surface-variant/40 truncate">
                      {social.handle}
                    </p>
                  </div>
                  <RiArrowRightLine className="size-3.5 text-on-surface-variant/20 group-hover/s:text-primary transition-colors shrink-0" />
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="border-t border-outline-variant/10 px-8 md:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40">
            Ready to go? Let's plan your Tanzania trip.
          </p>
          <Button
            asChild
            className="bg-primary text-on-primary hover:bg-primary-container font-bold uppercase tracking-widest text-xs px-7 gap-2"
          >
            <Link to="/contact">
              Start Planning <RiArrowRightLine className="size-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
