"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const diseases = [
  { name: "Psoriasis", enabled: true },
  { name: "Eczema", enabled: false },
  { name: "Vitiligo", enabled: false },
  { name: "Melanoma", enabled: false },
  { name: "Acne", enabled: false },
];

export default function DiseaseSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Select Disease
      </h2>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl bg-slate-900 p-4 text-white outline-none"
      >
        {diseases.map((d) => (
          <option
            key={d.name}
            value={d.name}
            disabled={!d.enabled}
          >
            {d.enabled ? d.name : `${d.name} (Coming Soon)`}
          </option>
        ))}
      </select>

    </div>
  );
}