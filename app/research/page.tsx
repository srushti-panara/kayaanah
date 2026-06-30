import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/home/Footer";

import ResearchHero from "../../components/research/ResearchHero";
import Metrics from "../../components/research/Metrics";
import Architecture from "../../components/research/Architecture";
import FutureRoadmap from "../../components/research/FutureRoadmap";

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 px-6 pt-32">

        <ResearchHero />

        <Metrics />

        <Architecture />

        <FutureRoadmap />

      </main>

      <Footer />
    </>
  );
}