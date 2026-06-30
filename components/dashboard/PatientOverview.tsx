export default function PatientOverview() {
  const cards = [
    ["Last Prediction", "Psoriasis"],
    ["Confidence", "98.2%"],
    ["Health Score", "84/100"],
    ["Reports", "3"],
  ];

  return (
    <section className="py-12">
      <h2 className="mb-8 text-4xl font-bold text-white">
        Patient Dashboard
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {cards.map(([title, value]) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-slate-400">{title}</p>

            <h3 className="mt-3 text-3xl font-black text-cyan-400">
              {value}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
        <h3 className="mb-4 text-2xl font-bold text-white">
          Recent Analysis
        </h3>

        <div className="flex justify-between border-b border-white/10 py-3">
          <span>Psoriasis Screening</span>
          <span className="text-emerald-400">Completed</span>
        </div>

        <div className="flex justify-between py-3">
          <span>Report Download</span>
          <span className="text-cyan-400">Available</span>
        </div>
      </div>
    </section>
  );
}