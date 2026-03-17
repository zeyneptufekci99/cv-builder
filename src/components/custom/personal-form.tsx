import type { IPersonalData } from "@/types/cv";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

interface PersonalFormProps {
  onSave: (updatedPersonal: IPersonalData) => void;
}

export function PersonalForm({ onSave }: PersonalFormProps) {
  const { register, handleSubmit } = useForm<IPersonalData>();

  return (
    <form onSubmit={handleSubmit(onSave)} className="flex flex-col gap-4">
      <Input placeholder="Name" {...register("name")} />
      <Input placeholder="Title" {...register("title")} />
      <Input placeholder="Email" {...register("email")} />
      <Input placeholder="Phone" {...register("phone")} />
      <Input placeholder="Location" {...register("location")} />

      <button type="submit">Save</button>
    </form>
  );
}
