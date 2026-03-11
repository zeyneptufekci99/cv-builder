import CVPreview from "@/components/custom/CVPreview";
import { useCVForm } from "../hooks/useCVForm";
import CVForm from "@/components/custom/CVForm";

export default function Builder() {
  const { cvData, updateField } = useCVForm();

  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-2 gap-10 p-10">
        <CVForm data={cvData} onChange={updateField} />
        <CVPreview data={cvData} />
      </div>
    </div>
  );
}
