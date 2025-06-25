import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Beams from './Beams';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const handleContinue = () => {
    navigate('/menu');
  };

  return (
    <div className="home-container">
      <div className="retro-grid"></div>
      <div className="scanlines"></div>
      
      <div className="beams-background">
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={15}
          lightColor="#00ff41"
          speed={1.5}
          noiseIntensity={2}
          scale={0.15}
          rotation={45}
        />
      </div>

      <div className={`home-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="glitch-container">
          <h1 className="main-title" data-text="SATYAM">SATYAM</h1>
        </div>
        
        <div className="subtitle-container">
          <h2 className="subtitle">COMPETITIVE PROGRAMMER</h2>
          <h3 className="tagline">& EMBEDDED SYSTEMS ENTHUSIAST</h3>
        </div>

        <div className="description">
          <p>Computer Science Student at IIIT Delhi</p>
          <p>1600+ Codeforces Rating • IEEE Vice Chairperson</p>
          <p>Building the future, one algorithm at a time</p>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">1600+</span>
            <span className="stat-label">Codeforces</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Coding</span>
          </div>
        </div>

        <button className="continue-button" onClick={handleContinue}>
          <span className="button-text">ENTER PORTFOLIO</span>
          <div className="button-glow"></div>
        </button>
      </div>

      <div className="floating-elements">
        <div className="floating-cube cube-1"></div>
        <div className="floating-cube cube-2"></div>
        <div className="floating-cube cube-3"></div>
      </div>
    </div>
  );
};

export default HomePage;
