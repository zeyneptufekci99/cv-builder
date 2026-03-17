// import { useState } from "react";

// const initialData: CVData = {
//   name: "",
//   email: "",
//   phone: "",
//   summary: "",
// };

// export function useCVForm() {
//   const [cvData, setCvData] = useState<CVData>(initialData);

//   const updateField = (name: keyof CVData, value: string) => {
//     setCvData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return { cvData, updateField };
// }
