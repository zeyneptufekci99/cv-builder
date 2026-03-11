import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-amber-600 w-full">
      <div className="text-foreground" onClick={() => navigate("/preview")}>
        {" "}
        click to create cv
      </div>
    </div>
  );
}
