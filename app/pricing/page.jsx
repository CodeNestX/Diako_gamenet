const plans = [
  {
    title: "STANDARD",
    price: "۶۰",
    color: "normal",
    description: "برای بازی‌های روزمره و دوستانه",
    features: [
      "سیستم گیمینگ",
      "مانیتور حرفه‌ای",
      "هدست گیمینگ",
      "اینترنت پرسرعت",
    ],
  },
  {
    title: "PRO",
    price: "۸۰",
    color: "popular",
    description: "برای گیمرهای حرفه‌ای و رقابتی",
    features: [
      "سیستم قدرتمند",
      "مانیتور 240Hz",
      "تجهیزات حرفه‌ای",
      "اینترنت پرسرعت",
      "اولویت رزرو",
    ],
  },
  {
    title: "VIP",
    price: "۱۲۰",
    color: "vip",
    description: "تجربه اختصاصی و Premium",
    features: [
      "سیستم High-End",
      "مانیتور 240Hz",
      "تجهیزات Premium",
      "فضای اختصاصی",
      "سرویس اختصاصی",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            PRICING
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            تعرفه‌های{" "}
            <span className="text-[#00ff66]">
              دیاکو
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-gray-500">
            پلن مناسب خودت را انتخاب کن و تجربه گیمینگ خودت را شروع کن.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl border p-8 text-center ${
                plan.color === "popular"
                  ? "border-[#00ff66]/40 bg-[#0d160f] shadow-[0_0_40px_rgba(0,255,102,0.08)]"
                  : "border-white/5 bg-[#0b100d]"
              } md:text-right`}
            >

              {plan.color === "popular" && (
                <span className="absolute right-6 top-6 rounded-full bg-[#00ff66] px-3 py-1 text-[10px] font-black text-black">
                  محبوب‌ترین
                </span>
              )}

              <p className="text-sm font-black tracking-widest text-[#00ff66]">
                {plan.title}
              </p>

              <div className="mt-8 flex items-end justify-center gap-2 md:justify-start">
                <span className="text-5xl font-black text-white">
                  {plan.price}
                </span>

                <span className="mb-2 text-sm text-gray-500">
                  هزار تومان / ساعت
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                {plan.description}
              </p>

              <div className="my-8 h-px bg-white/5" />

              <ul className="mx-auto w-fit space-y-4 text-right md:mx-0">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-gray-300"
                  >
                    <span className="text-[#00ff66]">
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}

              </ul>

              <a
                href="/booking"
                className={`mt-9 block rounded-xl py-4 text-center text-sm font-black ${
                  plan.color === "popular"
                    ? "bg-[#00ff66] text-black hover:bg-[#39ff88]"
                    : "border border-white/10 text-white hover:border-[#00ff66]/30 hover:text-[#00ff66]"
                }`}
              >
                رزرو این پلن
              </a>

            </div>
          ))}

        </div>

        <div className="mt-10 rounded-2xl border border-[#00ff66]/10 bg-[#00ff66]/5 p-6 text-center">
          <p className="text-sm text-gray-400">
            🎮 برای رزرو چندساعته و دریافت تخفیف ویژه با ما تماس بگیرید.
          </p>
        </div>

      </section>
    </main>
  );
}