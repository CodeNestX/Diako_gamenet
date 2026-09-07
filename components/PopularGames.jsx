import Link from "next/link";

const games = [
  {
    name: "VALORANT",
    genre: "FPS / Competitive",
    image: "/images/games/valorant.jpg",
  },
  {
    name: "CS2",
    genre: "FPS / Competitive",
    image: "/images/games/cs2.jpg",
  },
  {
    name: "FC 26",
    genre: "Football / Sports",
    image: "/images/games/fc26.jpg",
  },
  {
    name: "GTA V",
    genre: "Action / Open World",
    image: "/images/games/gta5.jpg",
  },
];

export default function PopularGames() {
  return (
    <section className="bg-[#050805] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mb-12 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-right">

          <div>
            <p className="mb-3 text-sm font-bold text-[#00ff66]">
              POPULAR GAMES
            </p>

            <h2 className="text-3xl font-black text-white sm:text-4xl">
              بازی‌های محبوب
            </h2>
          </div>

          <Link
            href="/games"
            className="text-sm font-bold text-gray-400 transition hover:text-[#00ff66]"
          >
            مشاهده همه بازی‌ها ←
          </Link>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {games.map((game) => (
            <div
              key={game.name}
              className="group relative min-h-55 overflow-hidden rounded-2xl border border-white/5 bg-[#0b100d] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/30 md:text-right"
            >

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00ff66]/5 blur-2xl transition group-hover:bg-[#00ff66]/10" />

              <div className="relative">

                <div className="mx-auto mb-10 text-5xl md:mx-0">
                 <img
                    src={game.image}
                    alt={game.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-black text-white">
                  {game.name}
                </h3>

                <p className="mt-2 text-xs text-gray-500">
                  {game.genre}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}