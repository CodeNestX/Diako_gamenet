import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="grid gap-10 text-center md:grid-cols-4 md:text-right">

          <div className="md:col-span-2">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00ff66]/30 bg-[#00ff66]/5 text-xl font-black text-[#00ff66]">
                D
              </div>

              <div className="text-right">
                <div className="font-black tracking-wider text-white">
                  DIAKO
                </div>

                <div className="text-[10px] font-bold tracking-[0.3em] text-[#00ff66]">
                  ARENA
                </div>
              </div>
            </Link>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-500 md:mx-0">
              دیاکو آرنا؛ جایی برای گیمرهایی که بازی را جدی می‌گیرند.
              بهترین سیستم‌ها، تجهیزات حرفه‌ای و فضای مناسب رقابت.
            </p>

          </div>

          <div>
            <h3 className="mb-5 font-bold text-white">
              دسترسی سریع
            </h3>

            <div className="flex flex-col items-center gap-3 text-sm text-gray-500 md:items-start">

              <Link
                href="/games"
                className="hover:text-[#00ff66]"
              >
                بازی‌ها
              </Link>

              <Link
                href="/systems"
                className="hover:text-[#00ff66]"
              >
                سیستم‌ها
              </Link>

              <Link
                href="/pricing"
                className="hover:text-[#00ff66]"
              >
                تعرفه‌ها
              </Link>

              <Link
                href="/tournaments"
                className="hover:text-[#00ff66]"
              >
                تورنمنت‌ها
              </Link>

            </div>
          </div>

          <div>

            <h3 className="mb-5 font-bold text-white">
              ارتباط با ما
            </h3>

            <div className="space-y-3 text-sm text-gray-500">
              <p>📍 آدرس گیم نت دیاکو</p>
              <p>📞 ۰۹۱۲ ۱۲۳ ۴۵۶۷</p>
              <p>📧 info@diakoarena.ir</p>
            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-center text-xs text-gray-600 sm:flex-row">

          <p>
            © 2026 Diako Arena. All rights reserved.
          </p>

          <p>
            Made for Gamers 🎮
          </p>

        </div>

      </div>
    </footer>
  );
}