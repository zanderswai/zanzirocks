import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const DIMENSIONS = [
  { value: "100",    unit: "sq mi",  label: "Caldera floor area",        note: "Larger than Greater London" },
  { value: "600m",   unit: "",       label: "Descent to crater floor",    note: "Sheer volcanic wall" },
  { value: "~25,000",unit: "",       label: "Animals permanently resident",note: "No seasonal migration needed" },
  { value: "2.5M",   unit: "yrs",   label: "Since the volcano collapsed", note: "Oldest caldera in East Africa" },
];

export default function NgorongoroCraterSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Numbers-first bar — leads the section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10 mb-16">
        {DIMENSIONS.map(({ value, unit, label, note }) => (
          <div
            key={label}
            className="bg-surface-container px-6 py-10 flex flex-col gap-2 hover:bg-surface-container-high transition-colors duration-200"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-headline text-5xl md:text-6xl text-primary leading-none">{value}</span>
              {unit && <span className="font-label text-sm text-primary/60 font-bold">{unit}</span>}
            </div>
            <p className="font-label text-[11px] font-bold text-white uppercase tracking-wide leading-tight">{label}</p>
            <p className="font-label text-[10px] text-on-surface-variant/50">{note}</p>
          </div>
        ))}
      </div>

      {/* Editorial — two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-5"
          >
            A World Unto Itself
          </Badge>
          <h2 className="font-headline text-4xl leading-tight mb-6">
            When the Volcano Collapsed, <br />
            <span className="italic text-primary">a Paradise Was Born.</span>
          </h2>
          <div className="flex flex-col gap-4 text-on-surface-variant text-sm leading-relaxed font-light">
            <p>
              Two and a half million years ago, one of the largest volcanoes
              on earth erupted — and then collapsed inward on itself. What
              remained was a crater 19 kilometres across and 600 metres deep,
              ringed by walls that form a natural enclosure unlike anywhere else
              on the planet.
            </p>
            <p>
              Inside, a permanent ecosystem evolved in near-total isolation.
              The Big Five — lion, elephant, leopard, buffalo, and the rare
              black rhino — live here year-round. There are no seasonal
              migrations because the crater floor provides everything: fresh
              water, grassland, forest, and prey. Animals that leave are the
              exception, not the rule.
            </p>
          </div>
        </div>

        {/* Image + quote */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              alt="Ngorongoro Crater floor — flamingos on crater lake"
              src="https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="p-6 rounded-xl border border-outline-variant/10 bg-surface-container">
            <p className="font-headline text-xl italic text-white/80 leading-snug mb-3">
              &ldquo;The highest density of predators anywhere in Africa.
              In one morning's drive, we saw six lion prides.&rdquo;
            </p>
            <Separator className="bg-outline-variant/10 mb-3" />
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/50">
              Marcus T. 🇨🇦 · 4-Day Northern Circuit Safari
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
