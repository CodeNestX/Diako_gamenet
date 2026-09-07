const galleryItems = [
  {
    title: "Gaming Room",
    image: "/images/gallery/gaming-room.jpg",
  },
  {
    title: "PC Zone",
    image: "/images/gallery/pc-zone.jpg",
  },
  {
    title: "Tournament",
    image: "/images/gallery/tournament.jpg",
  },
  {
    title: "VIP Zone",
    image: "/images/gallery/vip-zone.jpg",
  },
  {
    title: "Console Zone",
    image: "/images/gallery/console-zone.jpg",
  },
  {
    title: "Gaming Setup",
    image: "/images/gallery/gaming-setup.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            GALLERY
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            گالری{" "}
            <span className="text-[#00ff66]">
              دیاکو
            </span>
          </h1>

          <p className="mt-5 text-sm text-gray-500">
            فضای DIAKO ARENA را ببین.
          </p>

        </div>

        {/* Gallery */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#0b100d] text-center transition hover:border-[#00ff66]/30"
            >

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,102,0.08),transparent_60%)]" />

              <div className="relative flex flex-col items-center justify-center text-center">

               <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
               />

                <p className="mt-4 text-sm font-bold text-gray-400">
                  {item.title}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}