"use client";

type Props = {
  onUpload: (url: string) => void;
};

export default function UploadBox({
  onUpload,
}: Props) {

  function handleImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    onUpload(URL.createObjectURL(file));
  }

  return (
    <label className="mt-8 block cursor-pointer rounded-3xl border-2 border-dashed border-cyan-500/30 bg-slate-950 p-16 text-center transition hover:border-cyan-400">

      <div className="text-6xl">
        📤
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Upload Skin Image
      </h2>

      <p className="mt-3 text-slate-400">
        Drag & Drop coming soon
      </p>

      <div className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black">

        Browse Files

      </div>

      <input
        hidden
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

    </label>
  );
}