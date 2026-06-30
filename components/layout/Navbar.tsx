"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex flex-col">

          <h1 className="text-3xl font-black tracking-wide text-cyan-400">
            Kāyaanah
          </h1>

          <p className="text-xs text-slate-400">
            Where every spot tells a story.
          </p>

        </Link>

        {/* Navigation */}

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">

          <Link href="/" className="transition hover:text-cyan-400">
            Home
          </Link>

          <Link href="/detect" className="transition hover:text-cyan-400">
            Detect
          </Link>

          <Link href="/research" className="transition hover:text-cyan-400">
            Research
          </Link>

          <Link href="/about" className="transition hover:text-cyan-400">
            About
          </Link>

          <Link href="/dashboard" className="transition hover:text-cyan-400">
            Dashboard
          </Link>

        </div>

        {/* Right Side */}

        <div className="hidden items-center gap-3 lg:flex">

          <button className="rounded-xl border border-cyan-500 px-5 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black">
            🌍 EN
          </button>

          <Link
            href="/login"
            className="rounded-xl border border-cyan-500 px-5 py-2 text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            Patient Login
          </Link>

          <Link
            href="/login"
            className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
          >
            Doctor Login
          </Link>

        </div>

      </div>
    </nav>
  );
}