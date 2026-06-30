export default function Architecture() {
  const flow = [
    "Input Skin Image",
    "Image Preprocessing",
    "EfficientNet-B4",
    "Transformer Encoder",
    "Feature Fusion",
    "Classification Head",
    "Prediction",
  ];

  return (
    <section className="py-20">

      <h2 className="mb-14 text-center text-4xl font-bold text-white">
        Model Architecture
      </h2>

      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5">

        {flow.map((step) => (

          <div
            key={step}
            className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-8 py-6 text-lg text-white"
          >
            {step}
          </div>

        ))}

      </div>

    </section>
  );
}