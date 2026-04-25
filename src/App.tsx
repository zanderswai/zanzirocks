export default function App() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* Top NavBar */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md">
        <div className="flex justify-between items-center px-8 md:px-12 py-6 max-w-[1920px] mx-auto h-24">
          <span className="text-2xl font-bold text-primary tracking-tighter font-headline">ZanziRocks</span>
          <div className="hidden md:flex items-center gap-12">
            <a className="text-primary border-b-2 border-primary pb-1 font-body text-sm tracking-widest uppercase font-semibold" href="#">The Experience</a>
            <a className="text-white/60 hover:text-primary transition-colors font-body text-xs tracking-[0.2em] uppercase font-semibold" href="#">Safari</a>
            <a className="text-white/60 hover:text-primary transition-colors font-body text-xs tracking-[0.2em] uppercase font-semibold" href="#">Mountain</a>
            <a className="text-white/60 hover:text-primary transition-colors font-body text-xs tracking-[0.2em] uppercase font-semibold" href="#">Legal</a>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-bold tracking-widest text-[0.75rem] uppercase hover:scale-105 transition-transform duration-300">
            Book Now
          </button>
        </div>
      </nav>
      
      <main>
                {/* Section 1: Immersive Hero */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Savannah Sunrise"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1591129250837-b40afb3609e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/40 to-surface"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <span className="font-label text-primary uppercase tracking-[0.4em] mb-6 block text-[0.75rem]">A Legacy of Adventure</span>
            <h1 className="text-6xl md:text-9xl font-headline font-bold text-white mb-12 tracking-tight leading-none text-shadow-hero">
              Unearth the <br />
              <span className="italic text-stroke-primary font-normal">Extraordinary</span>
            </h1>
            <div className="max-w-2xl mx-auto bg-surface-container/60 backdrop-blur-xl p-2 rounded-xl flex flex-col md:flex-row items-center gap-2 border border-outline-variant/30 shadow-2xl">
              <div className="flex-1 w-full px-6 py-2 flex items-center gap-4 border-r border-outline-variant/0 md:border-outline-variant/30">
                <span className="material-symbols-outlined text-primary">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-outline font-body text-sm"
                  placeholder="Explore destinations..."
                  type="text"
                />
              </div>
              <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-lg font-bold hover:bg-primary-container transition-colors tracking-widest text-xs">
                DISCOVER
              </button>
            </div>
          </div>
        </section>

              <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
         {/* Section 2: Tourism Packages */}
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

        {/* Section 3: The Pillars */}
        <section className="mb-32 md:mb-48">
          <div className="text-center mb-20">
            <span className="font-label text-primary uppercase tracking-widest mb-4 block text-xs">The Pillars of Experience</span>
            <h2 className="font-headline text-5xl">Choose Your Horizon</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
            <div className="relative group overflow-hidden rounded-lg h-[600px]">
              <img
                alt="Island Holidays"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-12 left-10">
                <p className="font-label text-primary tracking-[0.2em] text-[10px] uppercase mb-2">Destination 01</p>
                <h2 className="text-4xl font-headline text-white">Island Holidays</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg h-[600px]">
              <img
                alt="Safari"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-12 left-10">
                <p className="font-label text-primary tracking-[0.2em] text-[10px] uppercase mb-2">Destination 02</p>
                <h2 className="text-4xl font-headline text-white">Safari</h2>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg h-[600px]">
              <img
                alt="Mountain"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1588445599591-efe468e9c3ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-12 left-10">
                <p className="font-label text-primary tracking-[0.2em] text-[10px] uppercase mb-2">Destination 03</p>
                <h2 className="text-4xl font-headline text-white">Mountain</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3b: The Pulse of Tanzania */}
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

        {/* Section 4: Our Curations */}
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

        {/* Section 5: The Collective Echo */}
        <section className="mb-32 md:mb-48">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-headline mb-6">The Collective Echo</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto font-light">Explore moments captured by our guests across the landscapes of Tanzania.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                alt="Safari Guest"
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="p-6 flex-1">
                <p className="text-sm text-on-surface-variant italic mb-6 font-light">"A world beyond my wildest imagination. The Serengeti breathes life."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container/20 overflow-hidden">
                    <img alt="avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-QvVpE6E_F_2N_z1p4R1v0G5X_H6D7W7-R_E_S_P_X_L_V_N_M_K_J_I_H_G_F_E_D_C_B_A_0_1_2_3_4_5_6_7_8_9_" />
                  </div>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest">@TheVagabond</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                alt="Stone Town"
                className="w-full h-64 object-cover"
                src="https://plus.unsplash.com/premium_photo-1697730083060-f024eecacd48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="p-6 flex-1">
                <p className="text-sm text-on-surface-variant italic mb-6 font-light">"The spices of Stone Town stay with you long after you leave."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container/20"></div>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest">@ClaraTravels</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                alt="Luxury Dining"
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1517016006573-2eefaa2f5b63?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="p-6 flex-1">
                <div className="flex gap-1 text-primary mb-4">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                </div>
                <p className="text-sm text-on-surface-variant italic mb-6 font-light">"Flawless execution from start to finish. Truly luxury service at every meal."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container/20"></div>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest">@TheGourmet</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img
                alt="Kilimanjaro"
                className="w-full h-64 object-cover"
                src="https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="p-6 flex-1">
                <p className="text-sm text-on-surface-variant italic mb-6 font-light">"Reaching Uhuru Peak was the challenge of a lifetime. Incredible guides!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-container/20"></div>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest">@PeakSeeker</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Tanzanian Pulse */}
        <section className="mb-32 md:mb-48">
          <div className="bg-surface-container-low rounded-lg p-8 md:p-16 overflow-hidden relative border border-outline-variant/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="font-label text-primary tracking-[0.3em] text-[10px] uppercase mb-4 block font-bold">Navigation &amp; Geography</span>
                <h2 className="text-5xl font-headline mb-12 leading-tight">The Pulse of <br />Tanzania</h2>
                <ul className="space-y-10">
                  <li className="flex items-start gap-6 border-l-2 border-primary-container pl-6 py-2">
                    <div>
                      <h4 className="text-xl font-headline text-white mb-2">Serengeti Plains</h4>
                      <p className="text-on-surface-variant text-sm font-light">The epicenter of the Great Migration and untamed wildlife.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6 border-l-2 border-outline-variant pl-6 py-2 hover:border-primary transition-colors cursor-pointer">
                    <div>
                      <h4 className="text-xl font-headline text-white mb-2">Mount Kilimanjaro</h4>
                      <p className="text-on-surface-variant text-sm font-light">Africa's highest peak, a testament to human resilience.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6 border-l-2 border-outline-variant pl-6 py-2 hover:border-primary transition-colors cursor-pointer">
                    <div>
                      <h4 className="text-xl font-headline text-white mb-2">Zanzibar Archipelago</h4>
                      <p className="text-on-surface-variant text-sm font-light">Turquoise waters and the storied streets of Stone Town.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden bg-surface-container-highest shadow-2xl">
                <img
                  alt="Topographic Map"
                  className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
                  src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-[40%] left-[30%]">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_20px_#f2ca50]"></div>
                  </div>
                  <div className="absolute top-[20%] right-[35%]">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse delay-150 shadow-[0_0_20px_#f2ca50]"></div>
                  </div>
                  <div className="absolute bottom-[30%] right-[15%]">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse delay-300 shadow-[0_0_20px_#f2ca50]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Sightseeing Postcards */}
        <section className="mb-32 md:mb-48">
          <div className="flex justify-between items-end mb-24">
            <div>
              <h2 className="text-5xl font-headline mb-4">Sightseeing Postcards</h2>
              <p className="text-on-surface-variant italic font-light">Hover to bring the memories to life.</p>
            </div>
            <span className="font-label text-outline tracking-widest text-[10px] uppercase hidden md:block font-bold">Vintage Archives // Vol 01</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="relative group cursor-pointer">
              <div className="bg-white p-3 pb-8 shadow-2xl rotate-[-2deg] transition-all group-hover:rotate-0 duration-500">
                <div className="overflow-hidden aspect-[3/4] mb-4">
                  <img
                    alt="Stone Town"
                    className="w-full h-full object-cover postcard-filter"
                    src="https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <p className="font-handwritten text-surface-dim text-xl leading-none text-center px-2">The spice of life is in Stonetown alleys.</p>
                <div className="mt-4 border-t border-black/10 pt-2 font-headline text-surface-dim text-right pr-2 text-[10px] uppercase tracking-tighter">Stone Town</div>
              </div>
            </div>
            <div className="relative group cursor-pointer pt-8">
              <div className="bg-white p-3 pb-8 shadow-2xl rotate-[3deg] transition-all group-hover:rotate-0 duration-500">
                <div className="overflow-hidden aspect-[3/4] mb-4">
                  <img
                    alt="Serengeti"
                    className="w-full h-full object-cover postcard-filter"
                    src="https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <p className="font-handwritten text-surface-dim text-xl leading-none text-center px-2">Where the horizon never truly ends.</p>
                <div className="mt-4 border-t border-black/10 pt-2 font-headline text-surface-dim text-right pr-2 text-[10px] uppercase tracking-tighter">Serengeti Wild</div>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="bg-white p-3 pb-8 shadow-2xl rotate-[-1deg] transition-all group-hover:rotate-0 duration-500">
                <div className="overflow-hidden aspect-[3/4] mb-4">
                  <img
                    alt="Coral Reefs"
                    className="w-full h-full object-cover postcard-filter"
                    src="https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <p className="font-handwritten text-surface-dim text-xl leading-none text-center px-2">Azure dreams and quiet tides.</p>
                <div className="mt-4 border-t border-black/10 pt-2 font-headline text-surface-dim text-right pr-2 text-[10px] uppercase tracking-tighter">Coral Reefs</div>
              </div>
            </div>
            <div className="relative group cursor-pointer pt-12">
              <div className="bg-white p-3 pb-8 shadow-2xl rotate-[2deg] transition-all group-hover:rotate-0 duration-500">
                <div className="overflow-hidden aspect-[3/4] mb-4">
                  <img
                    alt="Luxury Camp"
                    className="w-full h-full object-cover postcard-filter"
                    src="https://images.unsplash.com/photo-1527871899604-f1425bcce779?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <p className="font-handwritten text-surface-dim text-xl leading-none text-center px-2">Sundowners under a billion stars.</p>
                <div className="mt-4 border-t border-black/10 pt-2 font-headline text-surface-dim text-right pr-2 text-[10px] uppercase tracking-tighter">Luxury Outpost</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Trust Section */}
        <section className="mb-32 md:mb-48 flex flex-col items-center justify-center bg-surface-container-low py-32 rounded-lg text-center px-8 border border-outline-variant/5">
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-green-500" style={{ fontVariationSettings: '"FILL" 1' }}>star_rate</span>
            <span className="font-label text-white tracking-[0.4em] uppercase text-xs font-bold">Trustpilot Excellent</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline italic mb-12 max-w-3xl leading-relaxed">
            "An unparalleled standard of service. ZanziRocks doesn't just show you Tanzania; they let you feel it."
          </h2>
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-primary"></div>
            <span className="font-label text-primary tracking-widest uppercase text-[10px] font-bold">Jameson Thorne, Forbes Travel</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="mb-32 md:mb-48 py-48 relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-0">
            <img
              alt="Sunset Beach"
              className="w-full h-full object-cover scale-110 blur-[2px]"
              src="https://images.unsplash.com/photo-1766402221171-44041c8293b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-surface/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent"></div>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
            <h2 className="text-6xl md:text-7xl font-headline font-bold text-white mb-10 leading-tight">
              Define your <br /><span className="text-primary italic font-normal">own legacy.</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-16 max-w-xl mx-auto font-light">
              The journey of a lifetime begins with a single conversation. Let our curators craft your next masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary text-on-primary px-12 py-5 rounded-lg font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-xl shadow-primary/10">
                Start Your Journey
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-white/20 transition-all">
                Request a Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
        
       
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] w-full py-24 px-8 md:px-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end w-full max-w-[1440px] mx-auto">
          <div className="w-full md:w-auto mb-12 md:mb-0">
            <span className="text-2xl font-bold text-primary mb-8 block font-headline">ZanziRocks</span>
            <nav className="flex flex-wrap gap-8">
              <a className="font-body uppercase tracking-[0.2em] text-[10px] text-primary/60 hover:text-primary transition-colors font-bold" href="#">Instagram</a>
              <a className="font-body uppercase tracking-[0.2em] text-[10px] text-primary/60 hover:text-primary transition-colors font-bold" href="#">Facebook</a>
              <a className="font-body uppercase tracking-[0.2em] text-[10px] text-primary/60 hover:text-primary transition-colors font-bold" href="#">LinkedIn</a>
              <a className="font-body uppercase tracking-[0.2em] text-[10px] text-primary/60 hover:text-primary transition-colors font-bold" href="#">Privacy Policy</a>
            </nav>
          </div>
          <div className="text-right">
            <p className="font-body uppercase tracking-[0.2em] text-[10px] text-primary/40 mb-4 font-bold">© 2024 ZanziRocks. All rights reserved.</p>
            <div className="flex gap-4 justify-end items-center">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">Curated in Tanzania</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
