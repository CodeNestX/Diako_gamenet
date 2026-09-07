export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">

        {/* Header */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            CONTACT US
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            تماس با{" "}
            <span className="text-[#00ff66]">
              ما
            </span>
          </h1>

          <p className="mt-5 text-sm text-gray-500">
            سوالی داری؟ با ما در ارتباط باش.
          </p>

        </div>

        {/* Content */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-white/5 bg-[#0b100d] p-7 text-center md:text-right">

            <h2 className="text-xl font-black text-white">
              اطلاعات تماس
            </h2>

            <div className="mt-8 space-y-5">

              {/* Address */}
              <div className="flex flex-col items-center gap-4 rounded-xl bg-black/30 p-5 text-center md:flex-row md:text-right">

                <span className="text-2xl">
                  📍
                </span>

                <div>
                  <p className="text-xs text-gray-600">
                    آدرس
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    آدرس گیم نت دیاکو
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-4 rounded-xl bg-black/30 p-5 text-center md:flex-row md:text-right">

                <span className="text-2xl">
                  📞
                </span>

                <div>
                  <p className="text-xs text-gray-600">
                    تلفن
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    ۰۹۱۲ ۱۲۳ ۴۵۶۷
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className="flex flex-col items-center gap-4 rounded-xl bg-black/30 p-5 text-center md:flex-row md:text-right">

                <span className="text-2xl">
                  📧
                </span>

                <div>
                  <p className="text-xs text-gray-600">
                    ایمیل
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    info@diakoarena.ir
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Message Form */}
          <div className="rounded-2xl border border-white/5 bg-[#0b100d] p-7 text-center md:text-right">

            <h2 className="text-xl font-black text-white">
              پیام برای ما
            </h2>

            <form className="mt-7 space-y-5">

              <input
                type="text"
                placeholder="نام شما"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-white outline-none placeholder:text-gray-700 focus:border-[#00ff66]/50 md:text-right"
              />

              <input
                type="tel"
                placeholder="شماره تماس"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-white outline-none placeholder:text-gray-700 focus:border-[#00ff66]/50 md:text-right"
              />

              <textarea
                rows="6"
                placeholder="پیام شما..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-center text-sm text-white outline-none placeholder:text-gray-700 focus:border-[#00ff66]/50 md:text-right"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#00ff66] py-4 text-center text-sm font-black text-black transition hover:bg-[#39ff88]"
              >
                ارسال پیام
              </button>

            </form>

          </div>

        </div>

      </section>
    </main>
  );
}