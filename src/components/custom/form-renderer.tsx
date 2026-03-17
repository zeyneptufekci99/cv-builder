import { useState } from "react";
import { PersonalForm } from "./personal-form";
import type {
  IEducationData,
  IExperienceData,
  IPersonalData,
} from "@/types/cv";
import { ExperienceForm } from "./experience-form";
import { EducationForm } from "./education-form";

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

const emptyeducationData: IEducationData = {
  id: "",
  school: "",
  degree: "",
  start: "",
  end: "",
  educationLevel: "",
};

export function FormRenderer() {
  const [personalData, setPersonalData] =
    useState<IPersonalData>(emptyPersonal);

  const [experienceData, setExperienceData] = useState<IExperienceData[]>([]);
  const [educationData, setEducationData] = useState<IEducationData[]>([]);

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

  const handleSaveEducation = (
    index: number,
    updatedEducation: IEducationData,
  ) => {
    setEducationData((prev) =>
      prev.map((item, i) => (i === index ? updatedEducation : item)),
    );
  };

  const handleCreateNewExperience = () => {
    setExperienceData((prev) => [...prev, emptyExperience]);
  };

  const handleCreateNewEducation = () => {
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

      <EducationForm
        data={educationData}
        onSave={handleSaveEducation}
        onCreateNew={handleCreateNewEducation}
      />
    </div>
  );
}
