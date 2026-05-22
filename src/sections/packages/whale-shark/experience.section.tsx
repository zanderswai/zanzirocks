import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const FACTS = [
  { value: "Up to 10m", label: "Whale shark length", desc: "The largest fish alive. Despite their scale, they are filter feeders — completely docile around snorkellers." },
  { value: "20+ years", label: "Return visitors", desc: "The same individual whale sharks return to Mafia's waters each season, identified by their unique spot patterns." },
  { value: "500+ species", label: "Coral reef life", desc: "After the whale shark encounter, you'll snorkel a pristine reef — one of the most biodiverse in the Indian Ocean." },
];

export default function WhaleSharkExperienceSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Cinematic image */}
      <div className="relative rounded-2xl overflow-hidden h-[55vh] mb-12">
        <img
          src="https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=2000&auto=format&fit=crop"
          alt="Snorkeller swimming alongside a whale shark in Mafia Island Marine Park"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
          >
            The Encounter
          </Badge>
          <h2 className="font-headline text-4xl md:text-6xl text-white leading-tight max-w-2xl">
            Nothing prepares you{" "}
            <span className="italic text-primary">for the scale of it.</span>
          </h2>
        </div>
      </div>

      {/* Fact grid + editorial */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
        <div className="flex flex-col gap-8">
          {FACTS.map((fact, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-headline text-4xl text-primary">{fact.value}</span>
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">{fact.label}</span>
              </div>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">{fact.desc}</p>
              {i < FACTS.length - 1 && <Separator className="mt-8 bg-outline-variant/10" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-xl bg-surface-container border border-outline-variant/10 p-6">
            <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/40 mb-3">What to expect</p>
            <ul className="flex flex-col gap-3">
              {[
                "Whale sharks are spotted by our boat crew before you enter the water",
                "You'll snorkel (not scuba dive) — no experience necessary",
                "Encounters typically last 15–45 minutes per shark",
                "Multiple encounters are common during the season",
                "Your guide stays in the water with you at all times",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant font-light leading-snug">
                  <span className="mt-[5px] size-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-blue-500/5 border border-blue-500/15 p-6">
            <p className="font-label text-[9px] uppercase tracking-widest text-blue-400/70 mb-2">Marine Park Rules</p>
            <p className="text-on-surface-variant text-xs font-light leading-relaxed">
              Mafia Island is a designated Marine Protected Area. No touching,
              chasing, or flash photography. These rules exist to protect the
              animals — and to ensure the experience continues for future guests.
            </p>
          </div>
        </div>
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
