import React from 'react';
import './About.css';
import myPhoto from '../../asset/Raj.jpg'; // Make sure the path is correct

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="spacer"></div>
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Raj Kumar" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am Raj Kumar, a passionate and dedicated full-stack web developer.
            With strong problem-solving skills and a deep interest in software
            development, I have been on a journey of continuous learning and
            innovation.
          </p>
          <div className="about-highlights">
            <div><span>1200+</span>Hours Coding</div>
            <div><span>500+</span>DSA Problems</div>
            <div><span>5+</span>Projects Completed</div>
          </div>

          {/* Education Section */}
          <div className="about-subsection">
            <h3>Education</h3>
            <ul>
              <li>
                <strong>Bachelor of Technology in Computer Science</strong><br />
                Jodhpur Institute Of Engineering and Technology, 2023–2027
              </li>
              <li>
                <strong>Intermediate (12th Grade)</strong><br />
                Makdum Senior Secondary School, 2021–2023
              </li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="about-subsection">
            <h3>Experience</h3>
            <ul>
              <li>
                <strong>Web Development Intern</strong> – Hex Softwares<br />
                Built responsive web apps using React and RESTful APIs.
              </li>
              <li>
                <strong>Restaurant Table Booking Sysytem</strong><br />
                Completed responsive websites involving front-end and back-end work.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
