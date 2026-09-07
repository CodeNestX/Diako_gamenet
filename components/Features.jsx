const features = [
  {
    icon: "🖥️",
    title: "سیستم‌های قدرتمند",
    description:
      "سیستم‌های گیمینگ مجهز به سخت‌افزار قدرتمند برای اجرای جدیدترین بازی‌ها.",
  },
  {
    icon: "🎧",
    title: "تجهیزات حرفه‌ای",
    description:
      "موس، کیبورد، هدست و مانیتور حرفه‌ای برای تجربه‌ای دقیق و سریع.",
  },
  {
    icon: "⚡",
    title: "اینترنت پرسرعت",
    description:
      "اتصال پایدار و سریع برای تجربه بهتر بازی‌های آنلاین و رقابتی.",
  },
  {
    icon: "🏆",
    title: "تورنمنت و مسابقه",
    description:
      "شرکت در مسابقات جذاب و رقابت با بهترین گیمرهای مجموعه.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#070b08] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold text-[#00ff66]">
            WHY DIAKO?
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl">
            چرا{" "}
            <span className="text-[#00ff66]">
              دیاکو
            </span>{" "}
           ؟
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            همه چیز برای یک تجربه واقعی و حرفه‌ای گیمینگ آماده است.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="glow-box group rounded-2xl border border-white/5 bg-[#0b100d] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/30 hover:bg-[#0e150f] md:text-right"
            >

              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00ff66]/5 text-2xl transition duration-300 group-hover:bg-[#00ff66]/10 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.12)] md:mx-0">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-lg font-black text-white">
                {feature.title}
              </h3>

              <p className="text-sm leading-7 text-gray-500">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}