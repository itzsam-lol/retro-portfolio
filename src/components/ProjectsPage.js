import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, ExternalLink } from 'lucide-react';
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
      name: "Ignite Room Community Website",
      tech: "React + Firebase",
      duration: "Jan 2026 - Present",
      description: "Designed and built the official website for Ignite Room, a student tech community. Features community showcases, events, and member profiles with a modern and responsive UI.",
      githubLink: null,
      liveLink: "https://igniteroom.in",
      status: "Active"
    },
    {
      name: "Ignite Room — Source Code",
      tech: "React + Firebase",
      duration: "Jan 2026 - Present",
      description: "The open-source codebase behind igniteroom.in — a community website for student tech enthusiasts. Built with React and Firebase.",
      githubLink: "https://github.com/itzsam-lol/ignite-hub",
      liveLink: "https://igniteroom.in",
      status: "Active"
    },
    {
      name: "Retro Portfolio",
      tech: "React + Firebase",
      duration: "Feb 2026 - Present",
      description: "This very portfolio site! Built with a retro-gaming aesthetic using React, custom CSS animations, glassmorphism cards, and beam background effects. Deployed on Firebase.",
      githubLink: "https://github.com/itzsam-lol/retro-portfolio",
      liveLink: null,
      status: "Active"
    },
    {
      name: "HackArena Website",
      tech: "React + Firebase",
      duration: "Mar 2025 - Present",
      description: "Designed the website for a flagship national level hackathon conducted in IIIT Delhi with proper login and project submission features.",
      githubLink: "https://github.com/itzsam-lol/HackArena",
      liveLink: "https://hackarenaa.web.app/home",
      status: "Active"
    },
    {
      name: "F1 Race Prediction Application",
      tech: "Python + Streamlit + ML",
      duration: "June 2025",
      description: "Developed a Python-based Formula 1 race prediction application using machine learning algorithms and Streamlit web framework. Integrated OpenF1 API for real-time data collection and implemented multiple ML models (Random Forest, XGBoost) to predict race outcomes based on historical performance, driver statistics, and circuit data. Created an interactive F1-themed web interface with data visualizations and analytics dashboard.",
      githubLink: "https://github.com/itzsam-lol/F1-PREDICTION-APP",
      liveLink: "https://itzsam-lol-f1-prediction-app-app-8gdkif.streamlit.app/",
      status: "Completed"
    },
    {
      name: "RISC-V Simulator and Assembler",
      tech: "Python",
      duration: "Jan 2024 - Apr 2024",
      description: "Designed a Python-based framework to test an assembler and simulator by translating assembly code into machine code and simulating program execution.",
      githubLink: "https://github.com/itzsam-lol/RISCV_Assembler_Simulator",
      liveLink: null,
      status: "Completed"
    },
    {
      name: "Course Registration System (ERP)",
      tech: "Java + GUI",
      duration: "Sept 2024 - Nov 2024",
      description: "Designed a GUI-based Java course registration system with distinct functionalities for Students, Professors, and Administrators.",
      githubLink: "https://github.com/itzsam-lol/university-course-registration-system",
      liveLink: null,
      status: "Completed"
    },
    {
      name: "Plagiarism Checker Application",
      tech: "Python + Flask",
      duration: "Sept 2024 - Jan 2025",
      description: "Designed a Python-based application and developed a web application using flask through which students can check for plagiarism in their assignments.",
      githubLink: "https://github.com/itzsam-lol/iiitdmadeeasy",
      liveLink: null,
      status: "Completed"
    },
    {
      name: "PokeWiki",
      tech: "HTML + CSS + JavaScript",
      duration: "Dec 2023",
      description: "My first Web-Dev project made in a Hackathon using API integration. This project gave me a kickstart into web development.",
      githubLink: "https://github.com/itzsam-lol/PokeWiki",
      liveLink: null,
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
            <div key={index} className="project-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className={`status-badge ${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
              <div className="tech-stack">{project.tech}</div>
              <div className="project-duration">{project.duration}</div>
              <p className="project-description">{project.description}</p>

              <div className="project-links" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <Code size={18} className="link-icon" />
                    VIEW CODE
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <ExternalLink size={18} className="link-icon" />
                    LIVE DEMO
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
