export interface ICVData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
  };

  experience: {
    company: string;
    role: string;
    start: string;
    end: string;
    description: string;
  }[];

  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];

  skills: string[];
}
