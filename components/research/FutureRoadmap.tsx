export default function FutureRoadmap() {
  const roadmap = [
    "Eczema Detection",
    "Vitiligo Detection",
    "Melanoma Detection",
    "Doctor Dashboard",
    "Telemedicine",
    "Grad-CAM Explainability",
    "AI Chat Assistant",
    "Mobile App",
  ];

  return (
    <section className="py-20">

      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Future Roadmap
      </h2>

      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">

        {roadmap.map((item) => (

          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >

            <span className="text-cyan-400">✓</span>

            <span className="ml-3 text-white">
              {item}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}