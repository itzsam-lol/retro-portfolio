import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteMenu from './InfiniteMenu';
import Beams from './Beams';
import './MenuPage.css';

const MenuPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      link: '/experience',
      title: 'EXPERIENCE',
      description: 'Professional journey and internships'
    },
    {
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop',
      link: '/projects',
      title: 'PROJECTS',
      description: 'Innovative solutions and creations'
    },
    {
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=400&fit=crop',
      link: '/education',
      title: 'EDUCATION',
      description: 'Academic background and achievements'
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop',
      link: '/skills',
      title: 'SKILLS',
      description: 'Technical expertise and tools'
    },
    {
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=400&fit=crop',
      link: '/contact',
      title: 'CONTACT',
      description: 'Get in touch and connect'
    }
  ];

  return (
    <div className="menu-container">
      <div className="retro-grid"></div>
      <div className="scanlines"></div>
      
      <button className="nav-button" onClick={() => navigate('/')}>
        ← HOME
      </button>

      <div className="beams-background">
        <Beams
          beamWidth={2}
          beamHeight={18}
          beamNumber={20}
          lightColor="#ff0080"
          speed={1}
          noiseIntensity={1.5}
          scale={0.1}
          rotation={0}
        />
      </div>

      <div className="menu-header">
        <h1 className="menu-title">NAVIGATION MATRIX</h1>
        <p className="menu-subtitle">Select your destination</p>
      </div>

      <div className="infinite-menu-wrapper">
        <InfiniteMenu items={menuItems} />
      </div>
    </div>
  );
};

export default MenuPage;
