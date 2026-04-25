export default function Navbar() {
  return (
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
  );
}
