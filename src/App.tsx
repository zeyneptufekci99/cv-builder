import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import Preview from "./pages/preview";
import "./App.css";
import "./index.css";
import Form from "./pages/form";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}
