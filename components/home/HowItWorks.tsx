export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Image",
      description:
        "Upload a clear image of the affected skin area for AI analysis.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our EfficientNet-B4 + Transformer model extracts deep visual features.",
    },
    {
      number: "03",
      title: "Prediction",
      description:
        "Receive a confidence score with an AI-assisted screening result.",
    },
    {
      number: "04",
      title: "Consult a Doctor",
      description:
        "Use the result as supporting information before consulting a dermatologist.",
    },
  ];

  return (
    <section className="py-28 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-black">
          How Kāyaanah Works
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
          Simple, intelligent and research-backed skin analysis.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="text-5xl font-black text-cyan-400">
                {step.number}
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {step.description}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}