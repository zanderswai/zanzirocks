import { RiWhatsappLine, RiInstagramLine, RiLinkedinBoxFill, RiArrowRightLine } from "@remixicon/react";
import { Separator } from "@/components/ui/separator";

const CHANNELS = [
  {
    icon: RiWhatsappLine,
    label: "WhatsApp",
    handle: "+255 750 908 776",
    desc: "Fastest way to reach us. Voice notes welcome.",
    href: "https://wa.me/+255750908776",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400/5 border-emerald-400/20 hover:bg-emerald-400/10 hover:border-emerald-400/40",
  },
  {
    icon: RiInstagramLine,
    label: "Instagram",
    handle: "@okungcwele",
    desc: "Behind-the-scenes, travel stories, and wildlife moments.",
    href: "https://www.instagram.com/okungcwele",
    accent: "text-pink-400",
    accentBg: "bg-pink-400/5 border-pink-400/20 hover:bg-pink-400/10 hover:border-pink-400/40",
  },
  {
    icon: RiLinkedinBoxFill,
    label: "LinkedIn",
    handle: "Alexander Swai",
    desc: "Connect with our founder for partnerships and B2B enquiries.",
    href: "https://www.linkedin.com/in/alexander-cuthbert-swai/",
    accent: "text-sky-400",
    accentBg: "bg-sky-400/5 border-sky-400/20 hover:bg-sky-400/10 hover:border-sky-400/40",
  },
];

export default function ContactChannelsSection() {
  return (
    <section className="mb-24 md:mb-32">
      <Separator className="mb-14 bg-outline-variant/10" />

      <div className="mb-10">
        <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-3">
          Other ways to reach us
        </p>
        <h2 className="font-headline text-3xl md:text-4xl leading-tight">
          Prefer to{" "}
          <span className="italic text-primary">skip the form?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CHANNELS.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <a
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col gap-4 rounded-2xl border p-7 transition-all duration-200 ${channel.accentBg}`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`size-6 ${channel.accent}`} />
                <RiArrowRightLine className="size-4 text-on-surface-variant/20 group-hover:text-on-surface-variant/60 transition-colors duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50 mb-1">
                  {channel.label}
                </p>
                <p className={`font-headline text-xl mb-2 ${channel.accent}`}>
                  {channel.handle}
                </p>
                <p className="text-on-surface-variant text-xs font-light leading-relaxed">
                  {channel.desc}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
