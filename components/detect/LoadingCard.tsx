export default function LoadingCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-12 text-center">

      <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />

      <h2 className="mt-8 text-3xl font-bold text-white">
        Kāyaanah AI is analyzing...
      </h2>

      <p className="mt-4 text-slate-400">
        Running EfficientNet-B4 + Transformer...
      </p>

    </div>
  );
}