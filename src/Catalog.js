import { Route, Routes } from "react-router-dom";
import Content from "./Content";
import Nav from "./Nav";

export default function Catalog() {
  return (
    <div className="two-column">
      <Nav />
      <div className="content">
        <Routes>
          <Route path=":id" element={<Content />} />
          <Route
            index
            element={<p>Use the left nav to select a catalog item</p>}
          />
        </Routes>
      </div>
    </div>
  );
}
