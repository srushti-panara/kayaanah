import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-400">
          PsoriaScan AI
        </h1>

        <div className="flex gap-6 text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/detect">Detect</Link>
        </div>
      </div>
    </nav>
  );
}