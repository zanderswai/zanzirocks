import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type IconEntry = {
  label: string;
  icon?: string;
  highlight?: boolean;
};

const SERENGETI_ICONS: IconEntry[] = [
  { label: "Wildebeest crossing", highlight: true },
  { label: "Mara River crocs" },
  { label: "Lion pride sightings" },
  { label: "Cheetah on plains", highlight: true },
  { label: "Leopard in acacia" },
  { label: "Endless open sky" },
];

const NGORONGORO_ICONS: IconEntry[] = [
  { label: "600m crater descent", highlight: true },
  { label: "Black rhino sighting" },
  { label: "Lion families" },
  { label: "Crater floor elephants", highlight: true },
  { label: "Flamingo flocks" },
  { label: "Leopard + hippo pool" },
];

export default function SerengetiNgorongoroHighlightsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="text-center mb-14">
        <Badge
          variant="outline"
          className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-4"
        >
          Two Icons. One Package.
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl leading-tight mb-4">
          Nothing else in Africa{" "}
          <span className="italic text-primary">comes close.</span>
        </h2>
        <p className="text-on-surface-variant text-sm font-light max-w-lg mx-auto leading-relaxed">
          The Serengeti and Ngorongoro aren't just two parks — they're two
          completely different wildlife experiences that happen to sit two hours
          apart. In three days, you get both.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Serengeti panel */}
        <div className="group relative rounded-2xl overflow-hidden h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1672660534079-5aa7d27d55e6?q=80&w=1000&auto=format&fit=crop"
            alt="Wildebeest migration crossing the Serengeti"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col gap-4">
            <div>
              <p className="font-label text-[8px] uppercase tracking-widest text-amber-400/70 mb-1">
                Days 1 – 2
              </p>
              <h3 className="font-headline text-3xl text-white">
                The Serengeti
              </h3>
              <p className="text-white/55 text-xs font-light mt-1">
                The greatest wildlife show on earth
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {SERENGETI_ICONS.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`size-1.5 rounded-full shrink-0 ${item.highlight ? "bg-primary" : "bg-white/20"}`}
                  />
                  <span
                    className={`font-label text-[9px] uppercase tracking-wide ${item.highlight ? "text-white/70" : "text-white/35"}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ngorongoro panel */}
        <div className="group relative rounded-2xl overflow-hidden h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop"
            alt="Ngorongoro Crater panorama with wildlife on the crater floor"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col gap-4">
            <div>
              <p className="font-label text-[8px] uppercase tracking-widest text-primary/70 mb-1">
                Day 3
              </p>
              <h3 className="font-headline text-3xl text-white">
                Ngorongoro Crater
              </h3>
              <p className="text-white/55 text-xs font-light mt-1">
                260 km² of enclosed wildlife paradise
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {NGORONGORO_ICONS.map((item, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className={`size-1.5 rounded-full shrink-0 ${item.highlight ? "bg-primary" : "bg-white/20"}`}
                  />
                  <span
                    className={`font-label text-[9px] uppercase tracking-wide ${item.highlight ? "text-white/70" : "text-white/35"}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="mt-16 bg-outline-variant/10" />
    </section>
  );
}
