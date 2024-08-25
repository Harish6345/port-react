import Navbar from "../Navbar/Navbar";
import "./Skills.css";
import React from "react";

const Skills = () => {
  return (
    <div className="skill-part" id="#aboutme">
     
      <div className="skills-part">
        <div className="content1">
          <p>My Skills</p>
          <h1>
            Why Hire Me For Your <br /> Next{" "}
            <span className="hure">Project ?</span>{" "}
          </h1>
          <p className="normal">
            I’m a UX designer who has recently embarked on my professional
            journey, specializing in creating intuitive and user-centered
            designs. I bring a unique perspective to my work, blending technical
            understanding with a strong focus on user experience.
          </p>
          <a href="/">Hire ME</a>
        </div>

        <div className="content2">
          <div className="side-content">
            <div className="main-design1">
              <i class="fa-regular fa-gem"></i>
              <h2>Visual Design</h2>
              <p>
                Create User Interface design With <br />
                Unique & modren ideas
              </p>
            </div>
            <div className="main-design2">
              <i class="fa-solid fa-wave-square"></i>
              <h2>Design Prototype</h2>
              <p>
                Create advance design prototype <br />
                with Figma apps
              </p>
            </div>
          </div>
          <div className="main-design3">
            <i class="fas fa-graduation-cap graduation-cap"></i>
            <h2>UX Research</h2>
            <p>
              Create digital user products with <br />
              updated ideas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
