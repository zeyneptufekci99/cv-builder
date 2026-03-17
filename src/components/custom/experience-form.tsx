import { useForm, useFieldArray } from "react-hook-form";
import type { IExperienceData } from "@/types/cv";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface ExperienceFormProps {
  data: IExperienceData[];
  onSave: (data: IExperienceData[]) => void;
}

interface FormValues {
  experiences: IExperienceData[];
}

export function ExperienceForm({ data, onSave }: ExperienceFormProps) {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      experiences:
        data.length > 0
          ? data
          : [
              {
                id: "",
                company: "",
                role: "",
                start: "",
                end: "",
                description: "",
              },
            ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const onSubmit = (values: FormValues) => {
    onSave(values.experiences);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border p-4 rounded-lg flex flex-col gap-3"
        >
          <Input
            placeholder="Company"
            {...register(`experiences.${index}.company`)}
            defaultValue={field.company}
            required
          />

          <Input
            placeholder="Role"
            {...register(`experiences.${index}.role`)}
            defaultValue={field.role}
            required
          />

          <Input
            placeholder="Start"
            {...register(`experiences.${index}.start`)}
            defaultValue={field.start}
            required
          />

          <Input
            placeholder="End"
            {...register(`experiences.${index}.end`)}
            defaultValue={field.end}
          />

          <Input
            placeholder="Description"
            {...register(`experiences.${index}.description`)}
            defaultValue={field.description}
          />

          <Button
            type="button"
            variant="destructive"
            onClick={() => remove(index)}
          >
            Sil
          </Button>
        </div>
      ))}

      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              id: "",
              company: "",
              role: "",
              start: "",
              end: "",
              description: "",
            })
          }
        >
          Yeni Deneyim Ekle
        </Button>

        <Button type="submit">Kaydet</Button>
      </div>
    </form>
  );
}
