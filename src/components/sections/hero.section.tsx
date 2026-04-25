export default function HeroSection() {
  return (
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
  );
}
