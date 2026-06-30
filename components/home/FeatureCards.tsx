export default function FeatureCards() {
  const features = [
    {
      title: "AI Detection",
      description:
        "Upload skin images and receive AI-assisted psoriasis screening.",
    },
    {
      title: "Research Backed",
      description:
        "Built on EfficientNetB4 + Transformer architecture.",
    },
    {
      title: "Fast Analysis",
      description:
        "Get predictions and confidence scores within seconds.",
    },
  ];

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why PsoriaScan AI?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-800 p-6 transition hover:border-cyan-500"
            >
              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}