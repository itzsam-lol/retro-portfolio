import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Beams from './Beams';
import './PageStyles.css';

const SkillsPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 85 },
        { name: "MATLAB", level: 75 }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Flask", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Docker", level: 75 },
        { name: "SQLAlchemy", level: 80 },
        { name: "Arduino", level: 85 }
      ]
    },
    {
      category: "Embedded Systems",
      skills: [
        { name: "STM32", level: 80 },
        { name: "STM32CubeMX", level: 75 },
        { name: "Arduino Libraries", level: 85 },
        { name: "Assembly", level: 70 },
        { name: "Microcontrollers", level: 80 }
      ]
    }
  ];

  const interests = [
    "Competitive Programming",
    "Microcontrollers",
    "Embedded Systems",
    "Generative AI Models",
    "Bug Finding on Open Source Projects",
    "Playing Snooker and Chess",
    "Reading Sci-Fi Books"
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
          beamHeight={18}
          beamNumber={14}
          lightColor="#ff8000"
          speed={1.8}
          noiseIntensity={1.6}
          scale={0.15}
          rotation={120}
        />
      </div>

      <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="page-header">
          <h1 className="page-title">SKILLS_MATRIX.JSON</h1>
          <p className="page-subtitle">Technical Expertise & Proficiency Levels</p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category" style={{animationDelay: `${categoryIndex * 0.2}s`}}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item" style={{animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`}}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="interests-section">
          <h2 className="section-title">INTERESTS & HOBBIES</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item" style={{animationDelay: `${(index + 20) * 0.1}s`}}>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
