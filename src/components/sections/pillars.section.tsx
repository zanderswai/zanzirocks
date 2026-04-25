export default function PillarsSection() {
  return (
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
  );
}
