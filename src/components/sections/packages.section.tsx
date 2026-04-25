export default function PackagesSection() {
  return (
    <section className="py-16 md:py-32 mb-32 md:mb-48">
      <div className="text-center mb-16 md:mb-24">
        <span className="font-label text-primary uppercase tracking-widest mb-4 block text-xs">Curated Experiences</span>
        <h2 className="font-headline text-5xl md:text-6xl leading-tight">
          Handpicked <br />
          <span className="text-primary italic">Package Journeys</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Card 1 - Full width top */}
        <div className="md:col-span-2 group">
          <div className="relative overflow-hidden rounded-lg h-[300px] md:h-[400px] bg-surface-container">
            <img
              alt="Serengeti Migration Safari"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block font-label text-primary uppercase tracking-widest text-[10px] mb-3">Featured</span>
              <h3 className="text-4xl font-headline text-white mb-3">Serengeti Migration Safari</h3>
              <p className="text-on-surface-variant max-w-2xl mb-4 font-light">Witness the greatest show on earth with guided wildlife encounters and luxury camp experiences in the heart of the Serengeti.</p>
              <a className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-bold" href="#">
                <span className="font-label text-[10px] uppercase tracking-widest">Explore</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 - Left */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg h-[320px] bg-surface-container transform md:translate-y-4">
            <img
              alt="Zanzibar Island Escape"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block font-label text-primary uppercase tracking-widest text-[10px] mb-2">Island</span>
              <h3 className="text-2xl font-headline text-white mb-2">Zanzibar Island Escape</h3>
              <p className="text-on-surface-variant text-sm mb-3 font-light">Pristine beaches, spice markets, and Stone Town culture.</p>
              <a className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-xs font-bold" href="#">
                <span>Details</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 - Right */}
        <div className="group">
          <div className="relative overflow-hidden rounded-lg h-[320px] bg-surface-container transform md:-translate-y-4">
            <img
              alt="Kilimanjaro Summit Challenge"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1588445599591-efe468e9c3ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block font-label text-primary uppercase tracking-widest text-[10px] mb-2">Adventure</span>
              <h3 className="text-2xl font-headline text-white mb-2">Kilimanjaro Summit Challenge</h3>
              <p className="text-on-surface-variant text-sm mb-3 font-light">Conquer Africa's highest peak with expert guides.</p>
              <a className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-xs font-bold" href="#">
                <span>Details</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 - Full width bottom */}
        <div className="md:col-span-2 group">
          <div className="relative overflow-hidden rounded-lg h-[280px] md:h-[320px] bg-surface-container">
            <img
              alt="Lake Victoria Wildlife & Culture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://plus.unsplash.com/premium_photo-1661894639801-a671abf61b43?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-8 right-8">
              <span className="inline-block font-label text-primary uppercase tracking-widest text-[10px] mb-2">Cultural</span>
              <h3 className="text-3xl font-headline text-white mb-2">Lake Victoria Wildlife & Culture</h3>
              <p className="text-on-surface-variant text-sm mb-3 font-light max-w-2xl">Explore local communities, fishing villages, and abundant birdlife around Africa's largest freshwater lake.</p>
              <a className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-bold" href="#">
                <span className="font-label text-[10px] uppercase tracking-widest">Discover</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
