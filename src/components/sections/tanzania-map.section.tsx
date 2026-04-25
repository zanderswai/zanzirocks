export default function TanzaniaMapSection() {
  return (
    <section className="py-16 md:py-32 mb-32 md:mb-48">
      <div className="text-center mb-16 md:mb-24">
        <span className="font-label text-primary uppercase tracking-widest mb-4 block text-xs">Geographic Journey</span>
        <h2 className="font-headline text-5xl md:text-6xl leading-tight">
          The Pulse of <br />
          <span className="text-primary italic">Tanzania</span>
        </h2>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl group">
        <img
          alt="Tanzania Tourism Map"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="/generated-1777077748791.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40"></div>
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
          <p className="text-on-surface-variant text-sm mb-2 font-light">Explore our key destinations with glowing markers highlighting must-visit locations from the snow-capped peaks of Kilimanjaro to the pristine shores of Zanzibar.</p>
        </div>
      </div>
    </section>
  );
}
