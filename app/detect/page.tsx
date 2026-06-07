"use client";

import { useState } from "react";

export default function DetectPage() {
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-4xl">

        <h1 className="mb-4 text-5xl font-bold">
          AI Detection
        </h1>

        <p className="mb-10 text-slate-400">
          Upload a skin image and receive AI-powered analysis.
        </p>

        <div className="rounded-3xl border border-slate-800 p-12">

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="mb-6"
          />

          {image && (
            <div className="space-y-6">

              <img
                src={image}
                alt="preview"
                className="mx-auto max-h-96 rounded-2xl"
              />

              <div className="text-center">
                <button className="rounded-xl bg-sky-600 px-8 py-3 font-semibold hover:bg-sky-500">
                  Analyze Image
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </main>
  );
}