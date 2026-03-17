import type { IEducationData } from "@/types/cv";
import { Input } from "../ui/input";
import { useState } from "react"; // useEffect'i ekledik
import { Button } from "../ui/button";

interface EducationFormProps {
  data: IEducationData[];
  onSave: (index: number, updatedEducation: IEducationData) => void;
  onCreateNew: () => void;
}

export function EducationForm({
  data,
  onSave,
  onCreateNew,
}: EducationFormProps) {
  const [showForm, setShowForm] = useState(data.length === 0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [currentEducation, setCurrentEducation] = useState<IEducationData>(
    data[activeIndex] || {
      company: "",
      role: "",
      start: "",
      end: "",
      description: "",
    },
  );

  const handleInputChange = (field: keyof IEducationData, value: string) => {
    setCurrentEducation((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(activeIndex, currentEducation);
    setShowForm(false);
  };

  const handleAddNew = () => {
    onCreateNew();
    setActiveIndex(data.length);
    setShowForm(true);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setShowForm(true);
              }}
              className={`border p-2 cursor-pointer ${index === activeIndex ? "border-blue-500" : ""}`}
            >
              {item.school || `Deneyim ${index + 1}`}
            </div>
          ))}
          <Button onClick={handleAddNew} variant="outline">
            Yeni Ekle
          </Button>
        </div>
      )}

      {!showForm && data.length > 0 && (
        <Button onClick={() => setShowForm(true)}>Formu Göster</Button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="school"
            value={currentEducation.school}
            onChange={(e) => handleInputChange("school", e.target.value)}
            className="border p-2"
            required
          />

          <Input
            placeholder="degreee"
            value={currentEducation.degree}
            onChange={(e) => handleInputChange("degree", e.target.value)}
            className="border p-2"
            required
          />

          <Input
            placeholder="Start"
            value={currentEducation.start}
            onChange={(e) => handleInputChange("start", e.target.value)}
            className="border p-2"
            required
          />
          <Input
            placeholder="End"
            value={currentEducation.end}
            onChange={(e) => handleInputChange("end", e.target.value)}
            className="border p-2"
          />

          <Input
            placeholder="Education Level"
            value={currentEducation.educationLevel}
            onChange={(e) =>
              handleInputChange("educationLevel", e.target.value)
            }
            className="border p-2"
          />
          <Button type="submit">Kaydet</Button>
        </form>
      )}
    </div>
  );
}
