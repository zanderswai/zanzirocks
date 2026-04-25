export default function TrustSection() {
  return (
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
  );
}
