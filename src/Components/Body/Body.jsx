import React, { useEffect } from "react";
import "./Body.css";
import Typewriter from "typewriter-effect/dist/core";

const Body = () => {
  useEffect(() => {
    const typewriterElement = document.getElementById("typewriter");

    if (typewriterElement) {
      const typewriter = new Typewriter(typewriterElement, {
        strings: ["Web Developer", "UX Designer", "Product Designer"],
        autoStart: true,
        loop: true, // Add this line to make the effect loop continuously
        delay: 75, // Adjust the typing delay (in ms) if needed
        deleteSpeed: 70, // Adjust the deletion speed (in ms) if needed
      });
    }
  }, []);
  return (
    <div className="main-body">
      <p>HI,i am</p>
      <h6>Meduru Harish</h6>
      <h1 id="typewriter" style={{ fontFamily: "Anton, sans-serif", fontSize: "90px", fontWeight: "bolder" }}>
  Web Developer
</h1>

      <p>
        I’m a software developer who has recently embarked on my professional
        journey, specializing in the MERN stack (MongoDB, Express.js, React,
        Node.js). With a background in Electronics and Communication Engineering
        (ECE), I bring a unique perspective to my work, combining technical
        skills with a strong problem-solving mindset.
      </p>

      <a href="/">Hire ME</a>
    </div>
  );
};

export default Body;
