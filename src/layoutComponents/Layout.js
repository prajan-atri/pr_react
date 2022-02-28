import { Route, Routes } from "react-router-dom";
import GridView from "../ViewTable";
import Game from "../Game";
import Catalog from "../Catalog";
import Register from "../Register";
import Footer from "./Footer";
import Header from "./Header";
import Home from "../Home";

export default function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/game/*" element={<Game />} />
        <Route path="/players/*" element={<GridView />} />
        <Route path="/catalog/*" element={<Catalog />} />
        <Route path="/register/*" element={<Register />} />
        <Route index element={<Home />} />
      </Routes>
      {/*<Footer />*/}
    </>
  );
}
