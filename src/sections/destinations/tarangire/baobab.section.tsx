import { Separator } from "@/components/ui/separator";

const BAOBAB_FACTS = [
  { value: "1,000+", label: "Years old", desc: "The largest baobabs in Tarangire are estimated to be over a millennium old." },
  { value: "28m", label: "Max height", desc: "Ancient baobabs tower over the surrounding savanna, visible from kilometres away." },
  { value: "500 lit.", label: "Water stored", desc: "A single baobab trunk can store thousands of litres of water inside its spongy wood." },
];

export default function TarangireBaobabSection() {
  return (
    <section className="mb-32 md:mb-48">
      {/* Cinematic poster */}
      <div className="relative rounded-2xl overflow-hidden h-[60vh] mb-12">
        <img
          src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=2000&auto=format&fit=crop"
          alt="Ancient baobab tree silhouetted against an African sunset in Tarangire"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p className="font-label text-[9px] uppercase tracking-[0.4em] text-primary/70 mb-4">The Baobab Forests</p>
          <h2 className="font-headline text-4xl md:text-6xl text-white leading-tight max-w-2xl">
            Trees That Predate{" "}
            <span className="italic text-primary">Civilisation.</span>
          </h2>
          <p className="text-white/55 text-sm font-light max-w-lg mt-6 leading-relaxed">
            Tarangire's baobabs are not a backdrop — they are the ecosystem.
            Ancient, hollow, and inhabited by everything from hornbills to bat
            colonies, they have outlasted empires and will outlast us all.
          </p>
        </div>
      </div>

      {/* Fact grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/10 rounded-xl overflow-hidden">
        {BAOBAB_FACTS.map((fact, i) => (
          <div key={i} className="bg-surface-container px-8 py-8 flex flex-col gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-4xl text-primary">{fact.value}</span>
              <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/50">{fact.label}</span>
            </div>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed">{fact.desc}</p>
          </div>
        ))}
      </div>

      {/* Editorial strip */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
        <p className="text-on-surface-variant text-sm font-light leading-relaxed">
          Unlike any other park in the northern circuit, Tarangire's landscape is defined by
          its baobab groves. These "upside-down trees" — so called because their bare branches
          look like roots — appear throughout the park in clusters that can feel almost primordial.
          Walking among them (on a guided bush walk) is a Tarangire experience that no game drive
          can replicate.
        </p>
        <Separator orientation="vertical" className="hidden md:block bg-outline-variant/10 self-stretch" />
        <p className="text-on-surface-variant text-sm font-light leading-relaxed">
          Elephant bulls are often found sheltering in the shade of the largest baobabs during the
          midday heat. Yellow-collared lovebirds nest in their cavities. Vervet monkeys raid the
          fruit. Every baobab is its own small community — a multi-storey habitat that has been
          occupied without interruption for centuries longer than most of human recorded history.
        </p>
      </div>

      <Separator className="mt-20 bg-outline-variant/10" />
    </section>
  );
}
