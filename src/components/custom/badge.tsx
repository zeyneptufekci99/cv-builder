import { X } from "lucide-react";
import { Badge as SDNBadge, type BadgeProps } from "../ui/badge";
import { Button } from "../ui/button";

interface IBadge extends BadgeProps {
  label: string;
  isCloseActive?: boolean;
  onClose?: () => void;
}

export const Badge = ({ label, onClose, isCloseActive, ...props }: IBadge) => {
  return (
    <SDNBadge {...props}>
      <div className="flex flex-row gap-2 items-center justify-center">
        {label}
        {isCloseActive && (
          <Button onClick={onClose} variant="ghost" className="p-0">
            <X size={16}></X>
          </Button>
        )}
      </div>
    </SDNBadge>
  );
};
