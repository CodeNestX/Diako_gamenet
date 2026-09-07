"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { title: "خانه", href: "/" },
    { title: "بازی‌ها", href: "/games" },
    { title: "سیستم‌ها", href: "/systems" },
    { title: "تعرفه‌ها", href: "/pricing" },
    { title: "تورنمنت‌ها", href: "/tournaments" },
    { title: "گالری", href: "/gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-green-400/10 bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/30 bg-green-400/5 text-xl font-black text-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.12)] transition duration-300 group-hover:border-green-400/70 group-hover:shadow-[0_0_25px_rgba(0,255,102,0.25)]">
            D
          </div>

          <div>
            <div className="text-lg font-black tracking-wider text-white">
              DIAKO
            </div>

            <div className="text-[10px] font-bold tracking-[0.3em] text-[#00ff66]">
              ARENA
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition duration-300 hover:text-[#00ff66]"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <Link
          href="/booking"
          className="hidden rounded-xl bg-[#00ff66] px-5 py-3 text-sm font-black text-black transition duration-300 hover:bg-[#39ff88] hover:shadow-[0_0_25px_rgba(0,255,102,0.3)] lg:block"
        >
          رزرو سیستم
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
        >
          <span className="text-xl">
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-green-400/10 bg-black px-5 py-5 lg:hidden">
          <div className="flex flex-col items-center gap-2">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-xl px-4 py-3 text-center text-gray-300 transition hover:bg-green-400/5 hover:text-[#00ff66]"
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full rounded-xl bg-[#00ff66] px-4 py-3 text-center font-black text-black"
            >
              رزرو سیستم
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}