import { useForm, useFieldArray } from "react-hook-form";
import type { IEducationData } from "@/types/cv";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect } from "react";

interface EducationFormProps {
  data: IEducationData[];
  onSave: (data: IEducationData[]) => void;
}

interface FormValues {
  educations: IEducationData[];
}

export function EducationForm({ data, onSave }: EducationFormProps) {
  const { control, register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      educations:
        data.length > 0
          ? data
          : [
              {
                school: "",
                degree: "",
                start: "",
                end: "",
                educationLevel: "",
              },
            ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
  });

  useEffect(() => {
    reset({
      educations:
        data.length > 0
          ? data
          : [
              {
                id: "",
                school: "",
                degree: "",
                start: "",
                end: "",
                educationLevel: "",
              },
            ],
    });
  }, [data, reset]);

  const onSubmit = (values: FormValues) => {
    onSave(values.educations);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border p-4 rounded-lg flex flex-col gap-3"
        >
          <Input
            placeholder="School"
            {...register(`educations.${index}.school`)}
            defaultValue={field.school}
            required
          />

          <Input
            placeholder="Degree"
            {...register(`educations.${index}.degree`)}
            defaultValue={field.degree}
            required
          />

          <Input
            placeholder="Start"
            {...register(`educations.${index}.start`)}
            defaultValue={field.start}
            required
          />

          <Input
            placeholder="End"
            {...register(`educations.${index}.end`)}
            defaultValue={field.end}
          />

          <Input
            placeholder="Education Level"
            {...register(`educations.${index}.educationLevel`)}
            defaultValue={field.educationLevel}
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
              school: "",
              degree: "",
              start: "",
              end: "",
              educationLevel: "",
            })
          }
        >
          Yeni Eğitim Ekle
        </Button>

        <Button type="submit">Kaydet</Button>
      </div>
    </form>
  );
}
