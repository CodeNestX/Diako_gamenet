const systems = [
  {
    name: "Diako Beast",
    type: "GAMING PC",
    cpu: "Intel Core i7",
    gpu: "RTX 4070",
    ram: "32GB DDR5",
    monitor: "240Hz",
    price: "۸۰",
    status: "آماده",
  },
  {
    name: "Diako Pro",
    type: "GAMING PC",
    cpu: "Intel Core i5",
    gpu: "RTX 4060",
    ram: "16GB DDR5",
    monitor: "180Hz",
    price: "۷۰",
    status: "آماده",
  },
  {
    name: "Diako Elite",
    type: "GAMING PC",
    cpu: "Ryzen 7",
    gpu: "RTX 4070 SUPER",
    ram: "32GB DDR5",
    monitor: "240Hz",
    price: "۹۰",
    status: "آماده",
  },
  {
    name: "Console Zone",
    type: "PLAYSTATION 5",
    cpu: "AMD Zen 2",
    gpu: "RDNA 2",
    ram: "16GB GDDR6",
    monitor: "120Hz",
    price: "۱۰۰",
    status: "آماده",
  },
];

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-[#050805] pt-28">

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-[#00ff66]">
            GAMING SYSTEMS
          </p>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            سیستم‌های{" "}
            <span className="text-[#00ff66]">
              گیمینگ
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-gray-500">
            سیستم مورد علاقه‌ات را انتخاب کن و آماده ورود به بازی شو.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {systems.map((system) => (
            <div
              key={system.name}
              className="rounded-2xl border border-white/5 bg-[#0b100d] p-7 text-center transition hover:border-[#00ff66]/30 md:text-right"
            >

              {/* Header */}
              <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:justify-between md:text-right">

                <div>
                  <p className="text-xs font-bold text-[#00ff66]">
                    {system.type}
                  </p>

                  <h2 className="mt-2 text-2xl font-black text-white">
                    {system.name}
                  </h2>
                </div>

                <span className="rounded-full border border-[#00ff66]/20 bg-[#00ff66]/5 px-3 py-1 text-xs text-[#00ff66]">
                  ● {system.status}
                </span>

              </div>

              {/* Specs */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-[10px] text-gray-600">
                    CPU
                  </p>

                  <p className="mt-2 text-xs font-bold text-gray-300">
                    {system.cpu}
                  </p>
                </div>

                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-[10px] text-gray-600">
                    GPU
                  </p>

                  <p className="mt-2 text-xs font-bold text-gray-300">
                    {system.gpu}
                  </p>
                </div>

                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-[10px] text-gray-600">
                    RAM
                  </p>

                  <p className="mt-2 text-xs font-bold text-gray-300">
                    {system.ram}
                  </p>
                </div>

                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-[10px] text-gray-600">
                    MONITOR
                  </p>

                  <p className="mt-2 text-xs font-bold text-gray-300">
                    {system.monitor}
                  </p>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-7 flex flex-col items-center gap-4 border-t border-white/5 pt-5 text-center md:flex-row md:justify-between md:text-right">

                <div>
                  <span className="text-2xl font-black text-white">
                    {system.price}
                  </span>

                  <span className="mr-2 text-xs text-gray-500">
                    هزار تومان / ساعت
                  </span>
                </div>

                <a
                  href="/booking"
                  className="rounded-xl bg-[#00ff66] px-5 py-3 text-xs font-black text-black transition hover:bg-[#39ff88]"
                >
                  رزرو سیستم
                </a>

              </div>

            </div>
          ))}

        </div>
      </section>
    </main>
  );
}