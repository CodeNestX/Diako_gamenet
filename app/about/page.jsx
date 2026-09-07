export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">
      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            ABOUT DIAKO
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            درباره{" "}
            <span className="text-[#00ff66]">
              دیاکو
            </span>
          </h1>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border border-white/5 bg-[#0b100d] p-7 text-center md:text-right sm:p-10">

          <h2 className="text-2xl font-black text-white">
            جایی برای گیمرها
          </h2>

          <p className="mt-6 text-sm leading-9 text-gray-400">
            DIAKO ARENA با هدف ایجاد یک محیط حرفه‌ای، راحت و هیجان‌انگیز
            برای گیمرها ایجاد شده است. در دیاکو تلاش می‌کنیم بهترین تجهیزات
            سخت‌افزاری، سیستم‌های قدرتمند و فضای مناسب برای بازی‌های
            رقابتی و دوستانه را فراهم کنیم.
          </p>

          <p className="mt-5 text-sm leading-9 text-gray-400">
            از یک بازی دوستانه با رفیق‌ها گرفته تا مسابقات حرفه‌ای،
            دیاکو جایی است که می‌توانی بازی را همان‌طور که دوست داری تجربه کنی.
          </p>

          {/* Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <div className="rounded-xl bg-black/30 p-6 text-center">
              <div className="text-3xl font-black text-[#00ff66]">
                20+
              </div>

              <p className="mt-2 text-xs text-gray-500">
                سیستم گیمینگ
              </p>
            </div>

            <div className="rounded-xl bg-black/30 p-6 text-center">
              <div className="text-3xl font-black text-[#00ff66]">
                24/7
              </div>

              <p className="mt-2 text-xs text-gray-500">
                آماده سرویس
              </p>
            </div>

            <div className="rounded-xl bg-black/30 p-6 text-center">
              <div className="text-3xl font-black text-[#00ff66]">
                100%
              </div>

              <p className="mt-2 text-xs text-gray-500">
                گیمینگ
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}