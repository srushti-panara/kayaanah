"use client";

import Link from "next/link";

type ResultCardProps = {
  prediction: string;
  confidence: number;
  risk: string;
  recommendation: string;
  model?: string;
  onReset?: () => void;
};

export default function ResultCard({
  prediction,
  confidence,
  risk,
  recommendation,
  model = "EfficientNet-B4 + Transformer",
  onReset,
}: ResultCardProps) {
  const percentage = Math.round(confidence);

  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-emerald-500/20 bg-white/5 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="border-b border-white/10 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 p-8">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>

            <h2 className="text-4xl font-black text-white">
              Analysis Complete
            </h2>

            <p className="mt-2 text-slate-300">
              AI-assisted skin screening result
            </p>

          </div>

          <span className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-black">
            Completed
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="grid gap-6 p-8 md:grid-cols-2">

        <InfoCard
          title="Prediction"
          value={prediction}
        />

        <InfoCard
          title="Risk Level"
          value={risk}
        />

        <InfoCard
          title="Model"
          value={model}
        />

        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

          <p className="text-sm text-slate-400">
            Confidence Score
          </p>

          <h3 className="mt-2 text-3xl font-bold text-cyan-400">
            {percentage}%
          </h3>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-700">

            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />

          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="px-8 pb-8">

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

          <h3 className="text-2xl font-bold text-cyan-400">
            Recommendation
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            {recommendation}
          </p>

        </div>

      </div>

      {/* Disclaimer */}

      <div className="mx-8 mb-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">

        <h4 className="font-semibold text-yellow-300">
          Medical Disclaimer
        </h4>

        <p className="mt-3 text-sm leading-7 text-yellow-100">

          This prediction is generated using an AI model and is intended
          for preliminary screening only. It should not be considered a
          medical diagnosis. Please consult a qualified dermatologist
          for professional evaluation.

        </p>

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 border-t border-white/10 p-8">

        <Link
          href="/report"
          className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
        >
          View Report
        </Link>

        <button
          onClick={onReset}
          className="rounded-xl border border-white/20 px-8 py-4 text-white transition hover:border-cyan-400"
        >
          Analyze Another Image
        </button>

      </div>

    </div>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}