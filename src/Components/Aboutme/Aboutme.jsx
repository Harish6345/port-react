import "./Aboutme.css";
import React from "react";

const Aboutme = () => {
  return (
    <div className="about-mes">
   
    <div className="about-me">
      
      <p>My skills</p>
      <h1 className="main-h2">My Expertise</h1>

      <div className="main-container">
        <div className="contents">
          <div className="img-container">
          <i class="fa-solid fa-leaf"></i>
          </div>
          <h2>UI & UX Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde ipsam ex error aliquid debitis impedit culpa, nemo amet officia.</p>
        </div>
        <div className="contents">
        <div className="img-container">
        <i class="fa-solid fa-code"></i>
          </div>
          <h2>Web Devlopment</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde ipsam ex error aliquid debitis impedit culpa, nemo amet officia.</p>
        </div>
        <div className="contents">
        <div className="img-container">
        <i class="fa-solid fa-tags"></i>
          </div>
          <h2>Branding & Logo</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde ipsam ex error aliquid debitis impedit culpa, nemo amet officia.</p>
        </div>
        <div className="contents">
        <div className="img-container">
        <i class="fa-brands fa-nfc-directional"></i>
          </div>
          <h2>Stratergy & Direction</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde ipsam ex error aliquid debitis impedit culpa, nemo amet officia.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aboutme;
