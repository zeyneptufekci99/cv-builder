import { useState } from "react";
import { CVData } from "../types/cv";

const initialData: CVData = {
  name: "",
  email: "",
  phone: "",
  summary: "",
};

export function useCVForm() {
  const [cvData, setCvData] = useState<CVData>(initialData);

  const updateField = (name: keyof CVData, value: string) => {
    setCvData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cvData, updateField };
}
