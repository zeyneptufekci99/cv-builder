import type { IPersonalData } from "@/types/cv";
import { Input } from "../ui/input";

interface CvFormProps {
  data: IPersonalData;
  onChange: (data: keyof IPersonalData, value: string) => void;
}

export function CVForm({ data, onChange }: CvFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        value={data.name}
        onChange={(e) => onChange("name", e.target.value)}
        className="border p-2"
        required
      />

      <Input
        placeholder="Title"
        type="title"
        value={data.email}
        onChange={(e) => onChange("title", e.target.value)}
        className="border p-2"
        required
      />

      <Input
        placeholder="Email"
        type="email"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="border p-2"
        required
      />
      <Input
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        className="border p-2"
      />

      <Input
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        className="border p-2"
      />

      <Input
        placeholder="Location"
        value={data.location}
        onChange={(e) => onChange("location", e.target.value)}
        className="border p-2"
      />
    </form>
  );
}
