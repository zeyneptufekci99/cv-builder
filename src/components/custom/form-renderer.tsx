import { useState } from "react";
import { PersonalForm } from "./personal-form";
import type {
  IEducationData,
  IExperienceData,
  IPersonalData,
  ISkillData,
} from "@/types/cv";
import { ExperienceForm } from "./experience-form";
import { EducationForm } from "./education-form";
import { SkillContainer } from "./skill-container";
import { SkillsForm } from "./skills-form";

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
  const [skills, setSkills] = useState<ISkillData[]>([]);
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
      <SkillsForm
        onAddNewSkill={(item: ISkillData) =>
          setSkills((prev) => [...prev, item])
        }
        skills={skills}
        onClickClose={(id) => setSkills(skills.filter((i) => i.id === id))}
      />
    </div>
  );
}
