"use client";

import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/home/Footer";

import DiseaseSelector from "../../components/detect/DiseaseSelector";
import UploadBox from "../../components/detect/UploadBox";
import LoadingCard from "../../components/detect/LoadingCard";
import ResultCard from "../../components/detect/ResultCard";

export default function DetectPage() {
  const [disease, setDisease] = useState("Psoriasis");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  function analyze() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2500);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 pt-32 text-white">

        <div className="mx-auto max-w-6xl px-6">

          {/* Hero */}

          <div className="text-center">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Kāyaanah AI
            </p>

            <h1 className="mt-6 text-6xl font-black">
              Intelligent Skin Analysis
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Upload a skin image and receive an AI-assisted prediction.
              Today, Kāyaanah supports Psoriasis detection, with additional
              skin conditions planned in future releases.
            </p>

          </div>

          {/* Disease */}

          <div className="mt-16">
            <DiseaseSelector
              value={disease}
              onChange={setDisease}
            />
          </div>

          {/* Upload */}

          {!image && (
            <UploadBox
              onUpload={setImage}
            />
          )}

          {/* Preview */}

          {image && !loading && !showResult && (

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="mb-8 text-3xl font-bold">
                Image Preview
              </h2>

              <img
                src={image}
                alt="preview"
                className="mx-auto max-h-[500px] rounded-3xl"
              />

              <div className="mt-10 text-center">

                <button
                  onClick={analyze}
                  className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
                >
                  Analyze Image
                </button>

              </div>

            </div>

          )}

          {/* Loading */}

          {loading && (
            <div className="mt-10">
              <LoadingCard />
            </div>
          )}

          {/* Result */}
          
          {showResult && (
            <div className="mt-10">
              <ResultCard
                prediction="Psoriasis"
                confidence={98.2}
                risk="High"
                recommendation="The uploaded skin image shows characteristics commonly associated with psoriasis. Please consult a certified dermatologist for further clinical evaluation."
                onReset={() => {
                  setImage(null);
                  setShowResult(false);
                }}
              />
            </div>
          )}

        </div>

      </main>

      <Footer />

    </>
  );
}