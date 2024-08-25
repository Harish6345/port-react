import React from "react";
import "./Navbar.css";

const Navbar = () => {
  

  return (
    <div className="nav-bar">
      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <a href="/"><i class="fa-solid fa-arrow-down"></i> Download CV</a>
    </div>
  );
};

export default Navbar;
