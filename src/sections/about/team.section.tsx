import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RiLinkedinBoxFill, RiInstagramLine, RiArrowRightUpLine } from "@remixicon/react";

type TeamMember = {
  name: string;
  firstName: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  accentClass: string;
  social: {
    platform: "linkedin" | "instagram";
    label: string;
    href: string;
    icon: React.ElementType;
  };
};

const TEAM: TeamMember[] = [
  {
    name: "Alexander Swai",
    firstName: "Alexander",
    role: "Co-Founder · Operations",
    bio: "Born and raised in Tanzania, Alexander has spent his life learning this country's parks, rhythms, and people. He built ZanziRocks on a single principle: that a great safari should feel effortless from the first message to the final drive.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Alexander Swai — Co-Founder, ZanziRocks",
    accentClass: "from-amber-900/60",
    social: {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexander-cuthbert-swai/",
      icon: RiLinkedinBoxFill,
    },
  },
  {
    name: "Divine",
    firstName: "Divine",
    role: "Co-Founder · Brand & Experience",
    bio: "Divine shapes how ZanziRocks shows up in the world — from the first piece of content you see to the last detail of your stay. If something feels considered, that's by design.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Divine — Co-Founder, ZanziRocks",
    accentClass: "from-sky-900/60",
    social: {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/okungcwele",
      icon: RiInstagramLine,
    },
  },
];

export default function AboutTeamSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          The Team
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight">
          Built by people{" "}
          <span className="italic text-primary">who never left.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEAM.map((member, i) => {
          const SocialIcon = member.social.icon;
          return (
            <div key={i} className="group flex flex-col rounded-2xl overflow-hidden border border-outline-variant/10">
              {/* Portrait image */}
              <div className="relative overflow-hidden h-[540px] md:h-[600px]">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.accentClass} to-transparent opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Name overlay on image */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="font-label text-[9px] uppercase tracking-widest text-white/40 mb-1">{member.role}</p>
                  <h3 className="font-headline text-4xl text-white leading-none">{member.name}</h3>
                </div>
              </div>

              {/* Content panel */}
              <div className="bg-surface-container flex flex-col gap-5 p-7">
                <p className="text-on-surface-variant text-sm font-light leading-relaxed">{member.bio}</p>

                <Separator className="bg-outline-variant/10" />

                <a
                  href={member.social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group/link self-start"
                >
                  <SocialIcon className="size-5 text-on-surface-variant/40 group-hover/link:text-primary transition-colors duration-200" />
                  <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 group-hover/link:text-primary transition-colors duration-200">
                    {member.social.label}
                  </span>
                  <RiArrowRightUpLine className="size-3 text-on-surface-variant/20 group-hover/link:text-primary transition-colors duration-200" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
