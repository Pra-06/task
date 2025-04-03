import React from "react";
import { useLocation } from "react-router-dom";
import "./../styles/AboutUs.css";
import { FaBell } from "react-icons/fa";

export default function AboutUs() {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <img src="img.png" alt="Profile" />
          <div>
            <p>Hello, Welcome 🎉</p>
            <p><strong>{name || "John Weak"}</strong></p>
          </div>
          <FaBell className="bell-icon" />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <img 
            src="img.png" 
            alt="About Us" 
            className="about-image"
          />
          
         <div className="about-des"></div>
         <p >
            We are a team of dedicated professionals driven by creativity, innovation, 
            and a passion for exceptional design. With years of expertise in mobile 
            application and website design, we specialize in transforming ideas into 
            captivating digital experiences that seamlessly combine functionality and aesthetics.
          </p>
          <p><strong>Contact Details:</strong></p>
          <p >Name: {name || "John Weak"}</p>
          <p>Email: {email || "Johnweak@mail"}</p>
          <p >Message: {message || "Hi!I m satisfied with the Company"}</p>
        </div>
      </div>
    </div>
  );
}