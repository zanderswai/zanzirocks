export default function Footer() {
  return (
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
  );
}
