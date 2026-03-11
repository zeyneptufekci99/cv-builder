import type { ICVData } from "@/types/cv";

interface Props {
  data: ICVData;
  onChange: (data: keyof ICVData, value: string) => void;
}

export default function CVForm({ data, onChange }: Props) {
  return (
    <form className="flex flex-col gap-4">
      <input
        placeholder="Name"
        value={data.personal.name}
        onChange={(e) => onChange("data.personal.name", e.target.value)}
        className="border p-2"
        required
      />

      <input
        placeholder="Email"
        type="email"
        value={data.personal.email}
        onChange={(e) => onChange("data.personal.email", e.target.value)}
        className="border p-2"
        required
      />

      <input
        placeholder="Phone"
        value={data.personal.phone}
        onChange={(e) => onChange("data.personal.phone", e.target.value)}
        className="border p-2"
      />
    </form>
  );
}
