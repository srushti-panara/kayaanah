import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">

      <h1 className="text-8xl font-black text-cyan-400">
        404
      </h1>

      <p className="mt-6 text-xl text-slate-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black"
      >
        Back to Home
      </Link>

    </main>
  );
}