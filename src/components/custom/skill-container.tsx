import type { ISkillData } from "@/types/cv";
import { Badge } from "./badge";

interface SkillContainerProps {
  skills: ISkillData[];
  onClickClose: (id: string) => void;
}

const colorClasses = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
  "bg-teal-400",
  "bg-orange-400",
  "bg-cyan-400",
  "bg-emerald-400",
  "bg-amber-400",
];

export const SkillContainer = ({
  skills,
  onClickClose,
}: SkillContainerProps) => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-x-1 gap-y-1 bg-white p-4 shadow-lg rounded-2xl min-h-28 h-fit max-h-96 overflow-y-auto">
      {skills.length > 0 ? (
        <>
          {skills.map((item, index) => {
            const colorClass = colorClasses[index % colorClasses.length];
            return (
              <Badge
                isCloseActive
                label={item.skill}
                key={item.id}
                onClose={() => onClickClose(item.id)}
                className={`${colorClass} h-fit rounded-xl`}
              />
            );
          })}
        </>
      ) : (
        <div className="text-muted-foreground">
          Henüz hiç malzemeniz bulunmuyor
        </div>
      )}
    </div>
  );
};
