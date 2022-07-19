import React from "react";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resume from "../Body/Resume";
import GitHub from "../Body/GitHub";
import Contact from "../Body/Contact";
import Home from "../Body/Home";
import Portflio from "../Body/Portflio";

function Header() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Portflio" element={<Portflio />} />
          <Route path="/GitHub" element={<GitHub />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Header;
