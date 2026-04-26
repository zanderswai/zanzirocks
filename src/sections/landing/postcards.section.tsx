const postcards = [
  {
    id: "stonetown",
    location: "Stone Town",
    quote: "The spice of life is in Stonetown alleys.",
    image:
      "https://images.unsplash.com/photo-1644968519459-884c0c8b47d4?q=80&w=2671&auto=format&fit=crop",
    rotate: "-2deg",
    offset: false,
  },
  {
    id: "serengeti",
    location: "Serengeti Wild",
    quote: "Where the horizon never truly ends.",
    image:
      "https://images.unsplash.com/photo-1721840432289-d0041522103d?q=80&w=2670&auto=format&fit=crop",
    rotate: "3deg",
    offset: true,
  },
  {
    id: "coral",
    location: "Coral Reefs",
    quote: "Azure dreams and quiet tides.",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=2574&auto=format&fit=crop",
    rotate: "-1deg",
    offset: false,
  },
  {
    id: "camp",
    location: "Luxury Outpost",
    quote: "Sundowners under a billion stars.",
    image:
      "https://images.unsplash.com/photo-1527871899604-f1425bcce779?q=80&w=2670&auto=format&fit=crop",
    rotate: "2deg",
    offset: true,
  },
  {
    id: "coral",
    location: "Coral Reefs",
    quote: "Azure dreams and quiet tides.",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=2574&auto=format&fit=crop",
    rotate: "-1deg",
    offset: false,
  },
  {
    id: "camp",
    location: "Luxury Outpost",
    quote: "Sundowners under a billion stars.",
    image:
      "https://images.unsplash.com/photo-1527871899604-f1425bcce779?q=80&w=2670&auto=format&fit=crop",
    rotate: "2deg",
    offset: true,
  },
  {
    id: "coral",
    location: "Coral Reefs",
    quote: "Azure dreams and quiet tides.",
    image:
      "https://plus.unsplash.com/premium_photo-1670349272577-58ee4aad079b?q=80&w=2574&auto=format&fit=crop",
    rotate: "-1deg",
    offset: false,
  },
] as const;

export default function PostcardsSection() {
  return (
    <section className="mb-32 md:mb-48">
      <div className="flex justify-between items-end mb-24">
        <div>
          <h2 className="text-5xl font-headline mb-4">Sightseeing Postcards</h2>
          <p className="text-on-surface-variant italic font-light">
            Hover to bring the memories to life.
          </p>
        </div>
        <span className="font-label text-outline tracking-widest text-[10px] uppercase hidden md:block font-bold">
          Vintage Archives // Vol 01
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center justify-items-center gap-10">
        {postcards.map(({ id, location, quote, image, rotate, offset }) => (
          <div
            key={id}
            className={`relative group cursor-pointer ${offset ? "pt-8 md:pt-12" : ""}`}
          >
            <div
              className="bg-white p-3 pb-8 shadow-2xl transition-all duration-500 group-hover:rotate-0"
              style={{ rotate }}
            >
              <div className="overflow-hidden aspect-[3/4] mb-4">
                <img
                  alt={location}
                  className="w-full h-full object-cover postcard-filter"
                  src={image}
                />
              </div>
              <p className="font-handwritten text-surface-dim text-xl leading-none text-center px-2">
                {quote}
              </p>
              <div className="mt-4 border-t border-black/10 pt-2 font-headline text-surface-dim text-right pr-2 text-[10px] uppercase tracking-tighter">
                {location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
