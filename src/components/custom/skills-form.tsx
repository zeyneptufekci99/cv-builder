import type { ISkillData } from "@/types/cv";
import { SkillContainer } from "./skill-container";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";

interface SkillFormData {
  skills: ISkillData[];
  onClickClose: (id: string) => void;
  onAddNewSkill: (item: ISkillData) => void;
}
export function SkillsForm({
  skills,
  onClickClose,
  onAddNewSkill,
}: SkillFormData) {
  const [skill, setSkill] = useState<string>("");
  return (
    <div>
      <SkillContainer skills={skills} onClickClose={onClickClose} />
      <Input
        placeholder="Skill"
        onChange={(e) => setSkill(e.target.value)}
        value={skill}
      />
      <Button
        disabled={!skill}
        onClick={() =>
          onAddNewSkill({
            id: crypto.randomUUID(),
            skill: skill,
          })
        }
      >
        Add
      </Button>
    </div>
  );
}
