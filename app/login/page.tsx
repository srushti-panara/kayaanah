export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 via-black to-slate-950">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10">

        <h1 className="text-center text-4xl font-black text-white">
          Welcome to Kāyaanah
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Choose your account type
        </p>

        <div className="mt-10 space-y-5">

          <button className="w-full rounded-2xl bg-cyan-500 py-4 text-lg font-semibold text-black">
            Patient Login
          </button>

          <button className="w-full rounded-2xl border border-cyan-500 py-4 text-lg text-cyan-400">
            Doctor Login
          </button>

        </div>

      </div>

    </main>
  );
}