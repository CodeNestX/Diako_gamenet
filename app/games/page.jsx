const games = [
  {
    name: "VALORANT",
    category: "FPS / Competitive",
    players: "5v5",
    image: "/images/games/valorant.jpg",
    description: "رقابتی، سریع و تاکتیکی",
  },
  {
    name: "Counter-Strike 2",
    category: "FPS / Competitive",
    players: "5v5",
    image: "/images/games/cs2.jpg",
    description: "یکی از محبوب‌ترین بازی‌های رقابتی",
  },
  {
    name: "FC 26",
    category: "Sports / Football",
    players: "1v1 / 2v2",
    image: "/images/games/fc26.jpg",
    description: "رقابت فوتبالی با دوستان",
  },
  {
    name: "GTA V",
    category: "Action / Open World",
    players: "Multiplayer",
    image: "/images/games/gta5.jpg",
    description: "دنیای آزاد و سرگرمی بدون محدودیت",
  },
  {
    name: "Call of Duty",
    category: "FPS / Action",
    players: "Multiplayer",
    image: "/images/games/call-of-duty.jpg",
    description: "نبردهای سریع و هیجان‌انگیز",
  },
  {
    name: "Apex Legends",
    category: "Battle Royale",
    players: "Squad",
    image: "/images/games/apex.jpg",
    description: "رقابت تیمی در میدان نبرد",
  },
  {
    name: "Minecraft",
    category: "Adventure / Sandbox",
    players: "Multiplayer",
    image: "/images/games/minecraft.jpg",
    description: "ساخت، ماجراجویی و خلاقیت",
  },
  {
    name: "Dota 2",
    category: "MOBA",
    players: "5v5",
    image: "/images/games/dota2.jpg",
    description: "نبرد تیمی استراتژیک",
  },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            GAME LIBRARY
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            بازی‌های{" "}
            <span className="text-[#00ff66]">
              دیاکو
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-500">
            جدیدترین و محبوب‌ترین بازی‌ها را در محیط حرفه‌ای DIAKO ARENA
            تجربه کنید.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {games.map((game) => (
            <div
              key={game.name}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b100d] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/30 hover:shadow-[0_0_30px_rgba(0,255,102,0.06)] md:text-right"
            >

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#00ff66]/5 blur-3xl transition group-hover:bg-[#00ff66]/10" />

              <div className="relative">

                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#00ff66]/5 text-4xl md:mx-0">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <p className="mb-2 text-xs font-bold text-[#00ff66]">
                  {game.category}
                </p>

                <h2 className="text-xl font-black text-white">
                  {game.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {game.description}
                </p>

                <div className="mt-6 border-t border-white/5 pt-4 text-xs text-gray-500">
                  👥 {game.players}
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}