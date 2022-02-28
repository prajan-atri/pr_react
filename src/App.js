import { Route, Routes } from "react-router-dom";
import Layout from "./layoutComponents/Layout";
import "./cssComponents/styles.css";
import Welcome from "./layoutComponents/Welcome";

export default function App() {
  return (
    <div className="app">
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="*" element={<Layout />} />
        </Routes>
    </div>
  );
}
