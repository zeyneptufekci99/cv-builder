import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="page bg-background">
      <Button onClick={() => navigate("/form")}>Click to create CV</Button>
    </div>
  );
}
