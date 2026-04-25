export default function CTASection() {
  return (
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
  );
}
