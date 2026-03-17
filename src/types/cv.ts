import type { UUID } from "crypto";

export interface IPersonalData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export interface IExperienceData {
  id: UUID;
  company: string;
  role: string;
  start: string;
  end: string;
  description: string;
}

export interface IEducationData {
  id: UUID;
  school: string;
  degree: string;
  start: string;
  end: string;
  educationLevel: string; // Bachelor, Master, Doctorate, Other level
}

export interface ICVData {
  personal: IPersonalData;
  experience: IExperienceData[];
  education: IEducationData[];
  skills: string[];
}
