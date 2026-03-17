import { useState } from "react";
import { PersonalForm } from "./personal-form";
import type { IExperienceData, IPersonalData } from "@/types/cv";
import { ExperienceForm } from "./experience-form";

const emptyPersonal: IPersonalData = {
  name: "",
  title: "",
  email: "",
  phone: "",
  location: "",
};

const emptyExperience: IExperienceData = {
  id: "",
  company: "",
  role: "",
  start: "",
  end: "",
  description: "",
};

export function FormRenderer() {
  const [personalData, setPersonalData] =
    useState<IPersonalData>(emptyPersonal);

  const [experienceData, setExperienceData] = useState<IExperienceData[]>([]);

  const handleSavePersonal = (updated: IPersonalData) => {
    setPersonalData(updated);
  };

  const handleSaveExperience = (
    index: number,
    updatedExperience: IExperienceData,
  ) => {
    setExperienceData((prev) =>
      prev.map((item, i) => (i === index ? updatedExperience : item)),
    );
  };

  const handleCreateNewExperience = () => {
    setExperienceData((prev) => [...prev, emptyExperience]);
  };

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <PersonalForm onSave={handleSavePersonal} />

      <ExperienceForm
        data={experienceData}
        onSave={handleSaveExperience}
        onCreateNew={handleCreateNewExperience}
      />
    </div>
  );
}
