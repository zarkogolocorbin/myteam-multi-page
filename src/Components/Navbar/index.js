import React, { useState } from "react";
import { Nav } from "./style/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="container">
      <Nav>
        <div className="logo">
          <img src="/assets/logo.svg" alt="logo" />
        </div>
        <div className="links">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </div>
        <button className="btn btn-white">
          <Link to="/contact">contact us</Link>
        </button>
        <div
          className="hamburger-menu"
          onClick={() => setIsVisible(!isVisible)}
        >
          <img src="/assets/icon-hamburger.svg" alt="hamburger-menu" />
        </div>
      </Nav>

      <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}
