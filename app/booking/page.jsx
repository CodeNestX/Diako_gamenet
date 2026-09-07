const systems = [
  "Diako Beast",
  "Diako Pro",
  "Diako Elite",
  "Console Zone",
];

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            BOOK YOUR SYSTEM
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            رزرو{" "}
            <span className="text-[#00ff66]">
              سیستم
            </span>
          </h1>

          <p className="mt-5 text-sm text-gray-500">
            سیستم مورد نظر، تاریخ و ساعت بازی خود را انتخاب کنید.
          </p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-[#0b100d] p-6 text-center sm:p-9 md:text-right">

          <form className="space-y-6">

            {/* Name + Phone */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  نام و نام خانوادگی
                </label>

                <input
                  type="text"
                  placeholder="مثلاً علی یداللهی"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-white outline-none placeholder:text-gray-700 focus:border-[#00ff66]/50 md:text-right"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  شماره موبایل
                </label>

                <input
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-white outline-none placeholder:text-gray-700 focus:border-[#00ff66]/50 md:text-right"
                />
              </div>

            </div>

            {/* System + Date */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  انتخاب سیستم
                </label>

                <select
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-gray-300 outline-none focus:border-[#00ff66]/50 md:text-right"
                  defaultValue=""
                >
                  <option value="" disabled>
                    سیستم را انتخاب کنید
                  </option>

                  {systems.map((system) => (
                    <option key={system} value={system}>
                      {system}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  تاریخ
                </label>

                <input
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-gray-300 outline-none focus:border-[#00ff66]/50 md:text-right"
                />
              </div>

            </div>

            {/* Time + Duration */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  ساعت شروع
                </label>

                <input
                  type="time"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-gray-300 outline-none focus:border-[#00ff66]/50 md:text-right"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-300">
                  مدت استفاده
                </label>

                <select
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-gray-300 outline-none focus:border-[#00ff66]/50 md:text-right"
                >
                  <option>۱ ساعت</option>
                  <option>۲ ساعت</option>
                  <option>۳ ساعت</option>
                  <option>۴ ساعت</option>
                  <option>۵ ساعت</option>
                  <option>بیشتر از ۵ ساعت</option>
                </select>
              </div>

            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-300">
                توضیحات
              </label>

              <textarea
                rows="4"
                placeholder="اگر توضیح خاصی دارید اینجا بنویسید..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-white outline-none placeholder:text-gray-700 focus:border-[#00ff66]/50 md:text-right"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[#00ff66] py-4 text-center font-black text-black transition hover:bg-[#39ff88] hover:shadow-[0_0_30px_rgba(0,255,102,0.2)]"
            >
              ثبت درخواست رزرو
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}