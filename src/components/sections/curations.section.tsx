export default function CurationsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-4">
        <h2 className="text-5xl font-headline max-w-xl leading-tight">
          Masterful Curation for the <span className="italic text-primary">Discerning Voyager.</span>
        </h2>
        <div className="h-px bg-outline-variant/30 flex-grow mx-12 hidden lg:block"></div>
        <p className="font-label text-primary tracking-widest text-[10px] uppercase">The Service Suite</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="group">
          <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 relative">
            <img
              alt="Private Curators"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://images.unsplash.com/photo-1716206701107-55b7f1f2c0e0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 border-[20px] border-surface/0 group-hover:border-surface/20 transition-all duration-500"></div>
          </div>
          <h3 className="text-2xl font-headline mb-4">Private Curators</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">Your personal architect of experience, available 24/7 to refine every nuance of your journey.</p>
          <a className="inline-flex items-center gap-2 text-primary group-hover:gap-4 transition-all" href="#">
            <span className="font-label text-[10px] uppercase tracking-widest font-bold">Learn More</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="group md:pt-12">
          <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 relative">
            <img
              alt="Tailored Itineraries"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 border-[20px] border-surface/0 group-hover:border-surface/20 transition-all duration-500"></div>
          </div>
          <h3 className="text-2xl font-headline mb-4">Tailored Itineraries</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">Bespoke paths designed around your unique interests, from hidden spice markets to private sundowners.</p>
          <a className="inline-flex items-center gap-2 text-primary group-hover:gap-4 transition-all" href="#">
            <span className="font-label text-[10px] uppercase tracking-widest font-bold">Explore Paths</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="group">
          <div className="aspect-[4/5] overflow-hidden rounded-lg mb-8 relative">
            <img
              alt="Luxury Transport"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 border-[20px] border-surface/0 group-hover:border-surface/20 transition-all duration-500"></div>
          </div>
          <h3 className="text-2xl font-headline mb-4">Luxury Transport</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">Experience seamless transitions with private charters, luxury yachts, and chauffeur-driven exploration.</p>
          <a className="inline-flex items-center gap-2 text-primary group-hover:gap-4 transition-all" href="#">
            <span className="font-label text-[10px] uppercase tracking-widest font-bold">View Fleet</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
