import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";
import myResume from "../../asset/Raj-Resume.pdf";
import image from "../../asset/image.png";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-wrapper">
        <div className="image-container">
          <img src={image} alt="Raj Kumar Coding" className="profile-image" />
        </div>

        <div className="content">
          <h1 className="animated-text">
            Hi, I am <span>Raj Kumar</span>
          </h1>
          <p className="sub-text">A Web Developer</p>

          <div className="icons">
            <a
              href="https://github.com/rajkumar764"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/raj-kumar-cse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <a href={myResume} download className="download-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
