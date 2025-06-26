import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteMenu from './InfiniteMenu';
import Beams from './Beams';
import './MenuPage.css';

const MenuPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      image: '/exp.png', // Your custom experience dino image
      link: '/experience',
      title: 'EXPERIENCE',
      description: 'Professional journey and internships'
    },
    {
      image: '/project.png',
      link: '/projects', 
      title: 'PROJECTS',
      description: 'Innovative solutions and creations'
    },
    {
      image: '/skill.png', // Your custom skills dino image
      link: '/skills',
      title: 'SKILLS',
      description: 'Technical expertise and tools'
    },
    {
      image: '/edu.png', // Your custom education dino image
      link: '/education',
      title: 'EDUCATION', 
      description: 'Academic background and achievements'
    },
    {
      image: '/contact.png', // Your custom contact dino image
      link: '/contact',
      title: 'CONTACT',
      description: 'Get in touch and connect'
    }
  ];

  return (
    <div className="menu-container">
      {/* Background effects - lower z-index */}
      <div className="background-layer">
        <div className="retro-grid"></div>
        <div className="scanlines"></div>
        <div className="beams-background">
          <Beams
            beamWidth={1}
            beamHeight={25}
            beamNumber={30}
            lightColor="#ff0080"
            speed={0.5}
            noiseIntensity={1}
            scale={0.05}
            rotation={0}
          />
        </div>
      </div>

      {/* Navigation button - highest z-index */}
      <button className="nav-button" onClick={() => navigate('/')}>
        ← HOME
      </button>

      {/* Header - high z-index but below menu */}
      <div className="menu-header">
        <h1 className="menu-title">NAVIGATION MATRIX</h1>
        <p className="menu-subtitle">Select your destination</p>
      </div>

      {/* Fullscreen menu wrapper */}
      <div className="fullscreen-menu-wrapper">
        <InfiniteMenu items={menuItems} />
      </div>
    </div>
  );
};

export default MenuPage;
