import type { ICVData } from "@/types/cv";

interface Props {
  data: ICVData;
}

export default function CVPreview({ data }: Props) {
  return (
    <div className="p-6 border rounded-lg">
      <h1 className="text-2xl font-bold">{data.personal.name}</h1>

      <p>{data.personal.email}</p>
      <p>{data.personal.phone}</p>
    </div>
  );
}
