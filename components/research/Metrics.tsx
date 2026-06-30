export default function Metrics() {
  const metrics = [
    ["Accuracy", "98.2%"],
    ["Precision", "99.58%"],
    ["Recall", "97.73%"],
    ["ROC-AUC", "99.98%"],
  ];

  return (
    <section className="py-20">

      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Model Performance
      </h2>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">

        {metrics.map(([title, value]) => (

          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >

            <h3 className="text-5xl font-black text-cyan-400">
              {value}
            </h3>

            <p className="mt-4 text-slate-400">
              {title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}