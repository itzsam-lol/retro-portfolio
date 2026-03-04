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
      company: "Fam (formerly FamPay)",
      role: "Software Testing Intern",
      duration: "May 2024 - July 2024",
      description: "Streamlined the bug-reporting workflow, reducing resolution time by 15% across the team. Collaborated cross-functionally to execute rigorous user-flow testing, ensuring a seamless CX and identifying critical bottlenecks in the payment gateway.",
      skills: ["Testing", "Quality Assurance", "Process Optimization", "Bug Reporting"]
    },
    {
      company: "CoSY Lab, IIIT Delhi",
      role: "Research Intern",
      duration: "May 2025 - July 2025",
      description: "Managed the end-to-end product lifecycle for the Foodoscope frontend, focusing on data accessibility. Translated complex research data into actionable visual dashboards using first-principles design thinking.",
      skills: ["Product Lifecycle", "Data Visualization", "Design Thinking", "Frontend"]
    },
    {
      company: "IIIT Delhi",
      role: "Teaching Assistant - Data Structures and Algorithms",
      duration: "Jan 2026 - Present",
      description: "Managing academic operations and logistics for a batch of 100+ students. Coordinating grading workflows and mentoring students in analytical problem-solving.",
      skills: ["Mentoring", "Academic Operations", "Problem Solving", "Logistics"]
    },
    {
      company: "IEEE-IIITD Student Branch",
      role: "Vice Chairperson",
      duration: "Nov 2024 - Aug 2025",
      description: "Led strategy and operations for the largest student branch; boosted event turnout by 20% through process improvements. Managed a team of 50+ volunteers, delegating tasks effectively to ensure operational excellence.",
      skills: ["Leadership", "Strategy", "Operations", "Team Management"]
    },
    {
      company: "Hack The Flame (National Hackathon)",
      role: "Organizer",
      duration: "Sept 2025 - Dec 2025",
      description: "Managed logistics and vendor operations for a national event, coordinating on-ground execution for 500+ participants. Oversaw the budget allocation and sponsor deliverables, ensuring zero operational downtime.",
      skills: ["Vendor Operations", "Logistics", "Budget Allocation", "Event Management"]
    },
    {
      company: "Odyssey (Cultural Fest) & E-Summit",
      role: "PR Team Lead",
      duration: "Aug 2024 - Mar 2025",
      description: "Handled stakeholder management and external communications for footfalls exceeding 50,000. Resolved real-time operational crises during events to ensure smooth scheduling.",
      skills: ["Stakeholder Management", "Public Relations", "Crisis Management", "Communications"]
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
            <div key={index} className="experience-card" style={{ animationDelay: `${index * 0.2}s` }}>
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
