export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full border border-cyan-500/30 px-5 py-2 text-sm text-cyan-400">
          ✨ AI-Powered Psoriasis Detection
        </div>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Early Detection.
          <br />
          Better Outcomes.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-400 md:text-xl">
          Upload a skin image and receive AI-assisted psoriasis
          screening powered by our EfficientNetB4 + Transformer
          architecture.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-sky-600 px-8 py-4 font-semibold hover:bg-sky-500">
            📸 Upload Image
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 hover:border-sky-500">
            📊 Research Dashboard
          </button>
        </div>

        {/* Metrics */}
        <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-5">

          <div className="rounded-2xl border border-slate-800 p-5">
            <h3 className="text-2xl font-bold text-sky-400">98.27%</h3>
            <p className="text-slate-400">Accuracy</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-5">
            <h3 className="text-2xl font-bold text-emerald-400">99.58%</h3>
            <p className="text-slate-400">Precision</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-5">
            <h3 className="text-2xl font-bold text-amber-400">97.73%</h3>
            <p className="text-slate-400">Recall</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-5">
            <h3 className="text-2xl font-bold text-violet-400">3755</h3>
            <p className="text-slate-400">Images</p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-5">
            <h3 className="text-2xl font-bold text-pink-400">AI</h3>
            <p className="text-slate-400">Research Model</p>
          </div>

        </div>
      </div>
    </section>
  );
}