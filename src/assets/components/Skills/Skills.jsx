import React from "react";
import "./Skills.css";

// Import logos
import html from '../../asset/html.svg'
import css from '../../asset/css.svg'
import js from '../../asset/js.svg'
import node from '../../asset/node.svg'
import mysql from '../../asset/mysql.svg'
import react from '../../asset/react.svg'

const Skills = () => {
  const skills = [
    { logo: html, level: 100, alt: "HTML" },
    { logo: css, level: 85, alt: "CSS" },
    { logo: js, level: 75, alt: "JavaScript" },
    { logo: react, level: 70, alt: "React" },
    { logo: node, level: 65, alt: "Node.js" },
    { logo: mysql, level: 80, alt: "MySQL" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <img src={skill.logo} alt={skill.alt} className="skill-icon" />
              <span className="percentage">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
