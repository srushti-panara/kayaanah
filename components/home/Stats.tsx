export default function Stats() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">

        <Stat number="98.2%" label="Accuracy" />

        <Stat number="99.5%" label="Precision" />

        <Stat number="97.8%" label="Recall" />

        <Stat number="AI" label="Research Backed" />

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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">

      <h2 className="text-4xl font-black text-cyan-400">
        {number}
      </h2>

      <p className="mt-2 text-slate-400">
        {label}
      </p>

    </div>
  );
}