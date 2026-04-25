export default function GeographySection() {
  return (
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
  );
}
