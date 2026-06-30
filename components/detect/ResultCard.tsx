export default function ResultCard() {
  return (
    <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-10">

      <h2 className="text-4xl font-black text-emerald-400">
        Analysis Complete
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <Info title="Prediction" value="Psoriasis" />

        <Info title="Confidence" value="98.2%" />

        <Info title="Risk" value="High" />

        <Info
          title="Recommendation"
          value="Consult a dermatologist."
        />

      </div>

      <div className="mt-10 rounded-2xl bg-yellow-500/10 p-6">

        <p className="text-yellow-200">
          This prediction is AI-assisted and should not replace
          professional medical diagnosis.
        </p>

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-black/30 p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}