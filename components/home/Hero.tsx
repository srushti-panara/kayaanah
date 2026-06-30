import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white">

      {/* Glow */}

      <div className="absolute left-1/2 top-36 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">

        {/* Badge */}

        <div className="rounded-full border border-cyan-500/30 px-5 py-2 text-sm text-cyan-400">

          AI-Powered Dermatology Platform

        </div>

        {/* Heading */}

        <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-7xl">

          Every Spot
          <br />
          Has A Story.

        </h1>

        {/* Subtitle */}

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">

          Kāyaanah combines artificial intelligence, computer vision,
          and dermatology research to assist early skin disease screening.

          Beginning with psoriasis detection, our platform is designed
          to evolve into a complete AI-powered dermatology ecosystem.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/detect"
            className="rounded-2xl bg-cyan-500 px-9 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
          >
            Start Detection
          </Link>

          <Link
            href="/research"
            className="rounded-2xl border border-slate-700 px-9 py-4 text-lg transition hover:border-cyan-500"
          >
            Read Research
          </Link>

        </div>

        {/* Trust Badges */}

        <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-slate-400">

          <span>✓ Research Backed</span>

          <span>✓ AI Powered</span>

          <span>✓ Privacy First</span>

          <span>✓ Future Ready</span>

        </div>

        {/* Stats */}

        <div className="mt-20 grid w-full max-w-5xl gap-5 md:grid-cols-4">

          <Stat
            number="98.2%"
            label="Accuracy"
          />

          <Stat
            number="99.5%"
            label="Precision"
          />

          <Stat
            number="97.8%"
            label="Recall"
          />

          <Stat
            number="AI"
            label="Research Model"
          />

        </div>

      </div>

    </section>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <h2 className="text-4xl font-black text-cyan-400">

        {number}

      </h2>

      <p className="mt-3 text-slate-400">

        {label}

      </p>

    </div>
  );
}