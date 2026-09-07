import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-gradient green-grid relative flex min-h-screen items-center overflow-hidden pt-20">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff66]/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#00ff66]/20 bg-[#00ff66]/5 px-4 py-2 text-sm text-[#00ff66]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00ff66]" />
            گیم نت حرفه‌ای دیاکو
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            ENTER
            <br />
            <span className="glow-text text-[#00ff66]">
              THE GAME
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-center text-base leading-8 text-gray-400 sm:text-lg">
            آماده‌ای وارد دنیای رقابت بشی؟
            <br />
            بهترین سیستم‌ها، تجهیزات حرفه‌ای و یک محیط
            کاملاً گیمینگ در{" "}
            <span className="font-bold text-white">
              DIAKO ARENA
            </span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/booking"
              className="group w-full rounded-xl bg-[#00ff66] px-8 py-4 text-center font-black text-black transition duration-300 hover:bg-[#39ff88] hover:shadow-[0_0_35px_rgba(0,255,102,0.35)] sm:w-auto"
            >
              رزرو سیستم

              <span className="mr-2 transition group-hover:mr-3">
                ←
              </span>
            </Link>

            <Link
              href="/systems"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center font-bold text-white backdrop-blur transition duration-300 hover:border-[#00ff66]/40 hover:bg-[#00ff66]/5 sm:w-auto"
            >
              مشاهده سیستم‌ها
            </Link>

          </div>

          <div className="mx-auto mt-20 grid max-w-2xl grid-cols-3 border-y border-white/5 py-7 text-center">

            <div>
              <div className="text-2xl font-black text-[#00ff66] sm:text-3xl">
                20+
              </div>

              <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                سیستم گیمینگ
              </div>
            </div>

            <div className="border-x border-white/5">
              <div className="text-2xl font-black text-[#00ff66] sm:text-3xl">
                24/7
              </div>

              <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                آماده بازی
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-[#00ff66] sm:text-3xl">
                100%
              </div>

              <div className="mt-1 text-xs text-gray-500 sm:text-sm">
                تجربه گیمینگ
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}