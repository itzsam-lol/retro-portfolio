import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Beams from './Beams';
import './PageStyles.css';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const projects = [
    {
      name: "HackArena Website",
      tech: "React + Firebase",
      duration: "Mar 2025 - Present",
      description: "Designed the website for a flagship national level hackathon conducted in IIIT Delhi with proper login and project submission features.",
      link: "https://hackarenaa.web.app/home",
      status: "Active"
    },
    {
      name: "RISC-V Simulator and Assembler",
      tech: "Python",
      duration: "Jan 2024 - Apr 2024",
      description: "Designed a Python-based framework to test an assembler and simulator by translating assembly code into machine code and simulating program execution.",
      link: "#",
      status: "Completed"
    },
    {
      name: "Course Registration System (ERP)",
      tech: "Java + GUI",
      duration: "Sept 2024 - Nov 2024",
      description: "Designed a GUI-based Java course registration system with distinct functionalities for Students, Professors, and Administrators.",
      link: "#",
      status: "Completed"
    },
    {
      name: "Railway Reservation Application",
      tech: "Python + Flask + Next.js",
      duration: "Dec 2024",
      description: "Developed a railway reservation web app using Python, SQL, and Flask for backend operations, integrated with a modern frontend built with Next.js and Tailwind CSS.",
      link: "#",
      status: "Completed"
    },
    {
      name: "Plagiarism Checker Application",
      tech: "Python + Flask",
      duration: "Sept 2024 - Jan 2025",
      description: "Designed a Python-based application and developed a web application using flask through which students can check for plagiarism in their assignments.",
      link: "#",
      status: "Completed"
    }
  ];

  return (
    <div className="page-container">
      <div className="retro-grid"></div>
      <div className="scanlines"></div>
      
      <button className="nav-button" onClick={() => navigate('/menu')}>
        ← MENU
      </button>

      <div className="beams-background">
        <Beams
          beamWidth={3}
          beamHeight={14}
          beamNumber={18}
          lightColor="#00ffff"
          speed={0.8}
          noiseIntensity={2.2}
          scale={0.08}
          rotation={60}
        />
      </div>

      <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="page-header">
          <h1 className="page-title">PROJECTS_DATABASE.SQL</h1>
          <p className="page-subtitle">Innovative Solutions & Creative Builds</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <div className="tech-stack">{project.tech}</div>
              <div className="project-duration">{project.duration}</div>
              <p className="project-description">{project.description}</p>
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  VIEW PROJECT →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
