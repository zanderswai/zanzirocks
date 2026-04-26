import { Badge } from "@/components/ui/badge";

const destinations = [
  {
    id: "serengeti",
    title: "Serengeti Plains",
    desc: "The epicenter of the Great Migration and untamed wildlife.",
    active: true,
  },
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro",
    desc: "Africa's highest peak, a testament to human resilience.",
    active: false,
  },
  {
    id: "zanzibar",
    title: "Zanzibar Archipelago",
    desc: "Turquoise waters and the storied streets of Stone Town.",
    active: false,
  },
] as const;

const mapPins = [
  { top: "40%", left: "30%", delay: "" },
  { top: "20%", right: "35%", delay: "delay-150" },
  { bottom: "30%", right: "15%", delay: "delay-300" },
] as const;

export default function GeographySection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="bg-surface-container-low rounded-lg p-8 md:p-16 overflow-hidden relative border border-outline-variant/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge variant="outline" className="border-primary/40 text-primary font-label uppercase tracking-[0.3em] text-[10px] mb-6">
              Navigation &amp; Geography
            </Badge>
            <h2 className="text-5xl font-headline mb-12 leading-tight">
              The Pulse of <br />Tanzania
            </h2>
            <ul className="flex flex-col gap-0">
              {destinations.map(({ id, title, desc, active }) => (
                <li
                  key={id}
                  className={`flex items-start gap-6 border-l-2 pl-6 py-5 transition-colors cursor-pointer ${
                    active
                      ? "border-primary-container"
                      : "border-outline-variant hover:border-primary"
                  }`}
                >
                  <div>
                    <h4 className="text-xl font-headline text-white mb-2">{title}</h4>
                    <p className="text-on-surface-variant text-sm font-light">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-surface-container-highest shadow-2xl">
            <img
              alt="Topographic Map"
              className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop"
            />
            <div className="absolute inset-0">
              {mapPins.map(({ delay, ...pos }, i) => (
                <div key={i} className="absolute" style={pos as React.CSSProperties}>
                  <div className={`size-4 bg-primary rounded-full animate-pulse ${delay} shadow-[0_0_20px_#f2ca50]`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
