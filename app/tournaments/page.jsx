const tournaments = [
  {
    game: "VALORANT",
    title: "Diako Valorant Cup",
    date: "۲۵ شهریور ۱۴۰۵",
    teams: "16 تیم",
    prize: "۱۰ میلیون تومان",
    status: "ثبت‌نام باز",
  },
  {
    game: "CS2",
    title: "Diako CS2 Championship",
    date: "۱۰ مهر ۱۴۰۵",
    teams: "16 تیم",
    prize: "۱۵ میلیون تومان",
    status: "به‌زودی",
  },
  {
    game: "FC 26",
    title: "Diako FC Tournament",
    date: "۱۸ مهر ۱۴۰۵",
    teams: "32 بازیکن",
    prize: "۵ میلیون تومان",
    status: "ثبت‌نام باز",
  },
];

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            ESPORTS
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            تورنمنت‌های{" "}
            <span className="text-[#00ff66]">
              دیاکو
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-gray-500">
            رقابت کن، برنده شو و جایزه بگیر.
          </p>

        </div>

        {/* Tournament List */}
        <div className="space-y-5">

          {tournaments.map((tournament) => (
            <div
              key={tournament.title}
              className="rounded-2xl border border-white/5 bg-[#0b100d] p-6 text-center transition hover:border-[#00ff66]/30 sm:p-7 md:text-right"
            >

              <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-right">

                {/* Tournament Info */}
                <div>

                  <span className="text-xs font-bold text-[#00ff66]">
                    {tournament.game}
                  </span>

                  <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    {tournament.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 lg:justify-start">

                    <span>
                      📅 {tournament.date}
                    </span>

                    <span>
                      👥 {tournament.teams}
                    </span>

                    <span>
                      💰 {tournament.prize}
                    </span>

                  </div>

                </div>

                {/* Status + Button */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-bold ${
                      tournament.status === "ثبت‌نام باز"
                        ? "bg-[#00ff66]/10 text-[#00ff66]"
                        : "bg-white/5 text-gray-500"
                    }`}
                  >
                    {tournament.status}
                  </span>

                  <button
                    disabled={tournament.status !== "ثبت‌نام باز"}
                    className="rounded-xl bg-[#00ff66] px-5 py-3 text-xs font-black text-black transition hover:bg-[#39ff88] disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-gray-600"
                  >
                    ثبت‌نام
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>
    </main>
  );
}