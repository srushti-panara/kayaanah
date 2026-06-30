import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-r from-cyan-600 to-sky-500 text-center text-white">

      <h2 className="text-5xl font-black">
        Ready to Experience AI Dermatology?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg">
        Begin your AI-assisted skin analysis with Kāyaanah.
      </p>

      <Link
        href="/detect"
        className="mt-10 inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-black"
      >
        Start Analysis
      </Link>

    </section>
  );
}