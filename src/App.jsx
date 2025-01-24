/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import User from "./Users";
import NotFound from "./NotFound";
import Apropos from "./Apropos";
import { Collapse } from "bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="User/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Apropos" element={<Apropos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
