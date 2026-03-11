import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import Preview from "./pages/preview";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/preview" element={<Preview />} />
    </Routes>
  );
}
