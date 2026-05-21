import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Numbers lead the section — inverse of Zanzibar's editorial-first layout
const FIGURES = [
  { value: "30,893",  unit: "km²",   label: "Park Area",                sub: "Larger than Belgium" },
  { value: "2019",    unit: "",       label: "Year Established",          sub: "From northern Selous GR" },
  { value: "~45",     unit: "min",   label: "Flight from Zanzibar",      sub: "Via Mtemere Airstrip" },
  { value: "1,300+",  unit: "",      label: "Bird Species in Tanzania",   sub: "500+ within Nyerere" },
];

export default function NyerereOverviewSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* ── Numbers bar ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/10 mb-16">
        {FIGURES.map(({ value, unit, label, sub }) => (
          <div
            key={label}
            className="bg-surface-container px-6 py-8 flex flex-col gap-2 group hover:bg-surface-container-high transition-colors duration-200"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-headline text-4xl md:text-5xl text-primary leading-none">
                {value}
              </span>
              {unit && (
                <span className="font-label text-sm text-primary/60 font-bold">{unit}</span>
              )}
            </div>
            <p className="font-label text-[11px] font-bold text-white uppercase tracking-wide leading-tight">
              {label}
            </p>
            <p className="font-label text-[10px] text-on-surface-variant/50">{sub}</p>
          </div>
        ))}
      </div>

      {/* ── Editorial ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-0 lg:gap-0">
        <div className="pr-0 lg:pr-16 pb-10 lg:pb-0">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-5"
          >
            About the Park
          </Badge>
          <h2 className="font-headline text-3xl md:text-4xl leading-tight mb-6">
            Remote. Pristine. <br />
            <span className="italic text-primary">Undisturbed.</span>
          </h2>
          <div className="flex flex-col gap-4 text-on-surface-variant text-sm leading-relaxed font-light">
            <p>
              Nyerere National Park was carved from the northern portion of the
              Selous Game Reserve in 2019 and named after Tanzania's founding
              father, Julius Nyerere. At 30,893 square kilometres, it is the
              largest standalone national park in Africa — more than four times
              the size of the Serengeti.
            </p>
            <p>
              Unlike the northern circuit parks, Nyerere remains relatively
              uncrowded. Its remoteness is its greatest asset. Here, the ecology
              runs undisturbed: predator and prey cycles play out across open
              floodplains, riverine forests, and grasslands that few tourists
              will ever see.
            </p>
          </div>
        </div>

        {/* Vertical divider — desktop only */}
        <Separator orientation="vertical" className="hidden lg:block bg-outline-variant/10 self-stretch" />

        <div className="pl-0 lg:pl-16 pt-10 lg:pt-0">
          <Badge
            variant="outline"
            className="border-primary/40 text-primary font-label uppercase tracking-widest text-[10px] mb-5"
          >
            The Rufiji River
          </Badge>
          <h2 className="font-headline text-3xl md:text-4xl leading-tight mb-6">
            Tanzania's Greatest <br />
            <span className="italic text-primary">Wild River.</span>
          </h2>
          <div className="flex flex-col gap-4 text-on-surface-variant text-sm leading-relaxed font-light">
            <p>
              The Rufiji is the largest river in Tanzania, flowing through the
              northern heart of the park before emptying into the Indian Ocean.
              It is the lifeline of the entire ecosystem — drawing elephant
              herds, vast buffalo populations, and the hippo and crocodile
              communities that make Nyerere's boat safari so extraordinary.
            </p>
            <p>
              The Rufiji's channels, oxbow lagoons, and open sandbanks create a
              safari experience unlike any game drive. At dawn, with mist rising
              off the water and a hippo surfacing two metres from the bow, even
              seasoned Africa travellers fall silent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
