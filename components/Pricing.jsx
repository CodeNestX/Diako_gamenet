const plans = [
  {
    title: "STANDARD",
    price: "۶۰",
    description: "مناسب بازی‌های روزمره",
    features: [
      "سیستم گیمینگ",
      "مانیتور حرفه‌ای",
      "هدست و تجهیزات کامل",
    ],
  },
  {
    title: "PRO",
    price: "۸۰",
    description: "مناسب گیمرهای حرفه‌ای",
    popular: true,
    features: [
      "سیستم قدرتمندتر",
      "مانیتور High Refresh",
      "تجهیزات حرفه‌ای",
      "اولویت رزرو",
    ],
  },
  {
    title: "VIP",
    price: "۱۲۰",
    description: "تجربه کامل و اختصاصی",
    features: [
      "سیستم VIP",
      "فضای اختصاصی",
      "تجهیزات Premium",
      "سرویس اختصاصی",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#070b08] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold text-[#00ff66]">
            PRICING
          </p>

          <h2 className="text-3xl font-black text-white sm:text-4xl">
            تعرفه استفاده
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            پلن مناسب خودت رو انتخاب کن و وارد بازی شو.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl border p-7 text-center md:text-right ${
                plan.popular
                  ? "border-[#00ff66]/50 bg-[#0d160f] shadow-[0_0_35px_rgba(0,255,102,0.08)]"
                  : "border-white/5 bg-[#0b100d]"
              }`}
            >

              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-[#00ff66] px-3 py-1 text-[10px] font-black text-black">
                  محبوب‌ترین
                </div>
              )}

              <p className="text-sm font-black tracking-widest text-[#00ff66]">
                {plan.title}
              </p>

              <div className="mt-7 flex items-end justify-center gap-2 md:justify-start">
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

              <div className="my-7 h-px bg-white/5" />

              <ul className="mx-auto w-fit space-y-4 text-right md:mx-0">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300"
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
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-black transition ${
                  plan.popular
                    ? "bg-[#00ff66] text-black hover:bg-[#39ff88]"
                    : "border border-white/10 bg-white/5 text-white hover:border-[#00ff66]/30 hover:text-[#00ff66]"
                }`}
              >
                انتخاب پلن
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}