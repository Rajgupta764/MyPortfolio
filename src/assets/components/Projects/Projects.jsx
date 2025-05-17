import React from "react";
import "./Projects.css";
import portfolio from '../../asset/portfolio.png';
import calculator from '../../asset/calculator.png';
import res from '../../asset/res.png';
import count from '../../asset/count.png';

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and styled-components.",
      image: portfolio,
      link: "#",
    },
    {
      title: "Restaurant Table Booking",
      description: "A full-stack system using MERN for restaurant table reservation.",
      image: res,
      link: "#",
    },
    {
      title: "CountDown Application",
      description: "A real-time countdown application using html css and js.",
      image: count,
      link: "https://countdowns-timers.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My <span>Projects</span></h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="view-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
