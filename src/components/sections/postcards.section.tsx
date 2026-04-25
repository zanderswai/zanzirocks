export default function PostcardsSection() {
  return (
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
  );
}
