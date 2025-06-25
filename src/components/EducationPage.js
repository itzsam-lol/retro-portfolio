import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Beams from './Beams';
import './PageStyles.css';

const EducationPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  const education = [
    {
      institution: "Indraprastha Institute of Information and Technology, Delhi",
      degree: "B.Tech (CSE)",
      duration: "2023 - 2027 (Present)",
      grade: "CGPA: 5.60 (till 3rd Semester)",
      courses: ["Introduction to Intelligent Systems", "Competitive Programming-I", "Advanced Programming", "Data Structures and Algorithm"]
    },
    {
      institution: "Mira Model School, Delhi",
      degree: "CBSE 12th",
      duration: "2023",
      grade: "Percentage: 88.8%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    },
    {
      institution: "Mira Model School, Delhi",
      degree: "CBSE 10th",
      duration: "2020",
      grade: "CGPA: 8.0",
      courses: ["Science", "Mathematics", "Social Science", "English"]
    }
  ];

  const achievements = [
    "1600+ Rating on Codeforces",
    "Creative Student Award, Mira Model School",
    "Academic Excellence Award, Mira Model School",
    "Chemistry Olympiad Qualifier, Royal Australian Chemistry Institute",
    "Inter School Maths Competition Runner Up, Mothers International School",
    "Cracked National Maths Olympiad up to State level"
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
          beamWidth={2}
          beamHeight={22}
          beamNumber={10}
          lightColor="#ffff00"
          speed={1.5}
          noiseIntensity={1.2}
          scale={0.2}
          rotation={90}
        />
      </div>

      <div className={`page-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="page-header">
          <h1 className="page-title">EDUCATION_SYSTEM.EDU</h1>
          <p className="page-subtitle">Academic Journey & Achievements</p>
        </div>

        <div className="education-section">
          <h2 className="section-title">ACADEMIC RECORDS</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card" style={{animationDelay: `${index * 0.2}s`}}>
                <h3 className="institution-name">{edu.institution}</h3>
                <h4 className="degree-title">{edu.degree}</h4>
                <div className="education-details">
                  <span className="duration">{edu.duration}</span>
                  <span className="grade">{edu.grade}</span>
                </div>
                <div className="courses-container">
                  {edu.courses.map((course, courseIndex) => (
                    <span key={courseIndex} className="course-tag">{course}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h2 className="section-title">ACHIEVEMENTS_LOG</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item" style={{animationDelay: `${(index + 3) * 0.1}s`}}>
                <span className="achievement-icon">🏆</span>
                <span className="achievement-text">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
