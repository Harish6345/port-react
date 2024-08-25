import React from "react";
import "./Projects.css";
import { Assets } from "../../assets/assets";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quis
        saepe temporibus ipsam voluptatibus nemo.
      </h4>
      <div className="buttons-container">
        <a href="">All</a>
        <a href="">Ui/UX</a>
        <a href="">Web Design</a>
        <a href="">Graphic Design</a>
      </div>

      <div className="flex-container">
         <div className="flex-box flex-box1">
          <img src={Assets.flipcart} alt="" />
          <h4>Flipcart</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus minima tempora.</p>
          <span>Veiw in Github <span><i class="fas fa-arrow-right tilted-arrow"></i></span></span>
         </div>
         <div className="flex-box flex-box2">
         <img src={Assets.meesho} alt="" />
      <h4>Meesho</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus minima tempora.</p>
      <span>Veiw in Github <span><i class="fas fa-arrow-right tilted-arrow"></i></span></span>
         </div>
         <div className="flex-box flex-box3">
         <img src={Assets.myntra} alt="" />
         <h4>Myntra</h4>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus minima tempora.</p>
   <span>Veiw in Github <span><i class="fas fa-arrow-right tilted-arrow"></i></span></span>
         </div>
   
      </div>
          <div className="contact-form">
          <h1>Lets's Design Together</h1>
          <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />  Tenetur nostrum blanditiis, tempore quasi voluptatem alias eaque cupiditate?</p> 
          <div className="form-submit">
          <input type="text" placeholder="Enter your email" />
          <a href="/">Contact me</a>
         </div>
         </div>
        
    </div>
  );
};

export default Projects;
