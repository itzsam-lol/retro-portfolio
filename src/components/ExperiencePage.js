import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Beams from './Beams';
import './PageStyles.css';

const ExperiencePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const experiences = [
    {
      company: "Fam (FamPay)",
      role: "Application Tester Intern",
      duration: "May 2024 - July 2024",
      description: "Worked as an Application Tester intern, collaborating with a team of 6 to identify and resolve software issues, ensuring optimal performance and user experience.",
      skills: ["Testing", "Quality Assurance", "Team Collaboration", "Bug Reporting"]
    },
    {
      company: "IEEE-IIITD Student Branch",
      role: "Vice Chairperson",
      duration: "Nov 2024 - Present",
      description: "Leading technical initiatives and managing student activities for the IEEE student branch at IIIT Delhi.",
      skills: ["Leadership", "Event Management", "Technical Coordination", "Team Management"]
    },
    {
      company: "Odyssey (Cultural Fest)",
      role: "PR Team Lead",
      duration: "Dec 2024 - Present",
      description: "Leading public relations and marketing efforts for IIIT Delhi's cultural festival.",
      skills: ["Public Relations", "Marketing", "Event Promotion", "Social Media"]
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
          beamWidth={2.5}
          beamHeight={16}
          beamNumber={12}
          lightColor="#8000ff"
          speed={1.2}
          noiseIntensity={1.8}
          scale={0.12}
          rotation={30}
        />
      </div>

      <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="page-header">
          <h1 className="page-title">EXPERIENCE_LOG.EXE</h1>
          <p className="page-subtitle">Professional Journey & Leadership Roles</p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="card-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              <h4 className="role-title">{exp.role}</h4>
              <p className="description">{exp.description}</p>
              <div className="skills-container">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
