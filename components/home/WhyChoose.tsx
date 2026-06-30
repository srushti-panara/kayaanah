export default function WhyChoose() {

  const items = [
    "Research-backed AI model",
    "Modern healthcare interface",
    "Fast image analysis",
    "Privacy-first approach",
    "Future-ready architecture",
    "Built for accessibility",
  ];

  return (
    <section className="py-28 bg-slate-950 text-white">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-black">
          Why Choose Kāyaanah?
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {items.map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6"
            >

              <span className="mr-3 text-cyan-400">✓</span>

              {item}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}