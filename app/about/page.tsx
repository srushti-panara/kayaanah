import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/home/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 pt-32 text-white">

        <section className="mx-auto max-w-6xl px-6">

          <h1 className="text-center text-6xl font-black">
            About Kāyaanah
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-slate-400">
            Kāyaanah is an AI-powered dermatology platform built to help
            people understand their skin better through intelligent image
            analysis, research-backed machine learning and compassionate
            healthcare technology.
          </p>

        </section>

        <section className="mx-auto mt-24 grid max-w-6xl gap-8 px-6 md:grid-cols-3">

          <Card
            title="Mission"
            text="To give every skin concern a voice."
          />

          <Card
            title="Vision"
            text="A world where no spot goes misunderstood."
          />

          <Card
            title="Promise"
            text="We listen. We understand. We guide."
          />

        </section>

        <section className="mx-auto mt-24 max-w-5xl rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-12">

          <h2 className="text-4xl font-bold">
            Research Foundation
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-300">

            Kāyaanah Vision is built upon our research on psoriasis
            detection using EfficientNet-B4 combined with Transformer
            architecture for intelligent feature extraction and
            classification.

          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

function Card({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h3 className="text-3xl font-bold text-cyan-400">
        {title}
      </h3>

      <p className="mt-5 text-slate-300 leading-8">
        {text}
      </p>

    </div>
  );
}