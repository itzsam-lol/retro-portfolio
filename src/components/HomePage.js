import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Mail, ExternalLink, ChevronRight, Code2, Cpu, Trophy } from 'lucide-react';
import Beams from './Beams';
import './HomePage.css';

const roles = ['Software Developer', 'Web Developer', 'CS Student @ IIIT Delhi', 'Teaching Assistant'];

const HomePage = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [typedText, setTypedText] = useState('');

    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        document.title = "Satyam | Portfolio";
        setTimeout(() => setIsLoaded(true), 200);
    }, []);

    // Typewriter effect
    useEffect(() => {
        const current = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setTypedText(current.slice(0, charIndex + 1));
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                } else {
                    setCharIndex(c => c + 1);
                }
            } else {
                setTypedText(current.slice(0, charIndex - 1));
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex(r => (r + 1) % roles.length);
                    setCharIndex(0);
                } else {
                    setCharIndex(c => c - 1);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    const highlights = [
        { icon: <Code2 size={18} />, label: 'Intern @ Fam (FamPay)', color: 'blue' },
        { icon: <Cpu size={18} />, label: 'Research Intern @ CoSY Lab, IIIT D', color: 'violet' },
        { icon: <Trophy size={18} />, label: 'IEEE Vice Chairperson', color: 'blue' },
        { icon: <Code2 size={18} />, label: '300+ LeetCode Problems', color: 'violet' },
    ];

    const links = [
        { icon: <Github size={16} />, label: 'github.com/itzsam-lol', href: 'https://github.com/itzsam-lol' },
        { icon: <ExternalLink size={16} />, label: 'LeetCode', href: 'https://leetcode.com/u/samuraiiii' },
        { icon: <Mail size={16} />, label: 'satyam23495@iiitd.ac.in', href: 'mailto:satyam23495@iiitd.ac.in' },
    ];

    return (
        <div className="home-container">
            <div className="beams-background">
                <Beams
                    beamWidth={2}
                    beamHeight={25}
                    beamNumber={12}
                    lightColor="#3b82f6"
                    speed={0.8}
                    noiseIntensity={1.5}
                    scale={0.12}
                    rotation={35}
                />
            </div>

            {/* Subtle grid overlay */}
            <div className="home-grid-overlay" />

            <div className={`home-content ${isLoaded ? 'loaded' : ''}`}>
                {/* Left column */}
                <div className="hero-left">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        Available for opportunities
                    </div>

                    <div className="name-block">
                        <h1 className="hero-name">Satyam</h1>
                        <div className="typewriter-row">
                            <span className="typewriter-text">{typedText}</span>
                            <span className="typewriter-cursor">|</span>
                        </div>
                    </div>

                    <p className="hero-description">
                        B.Tech CSE student at <span className="highlight-text">IIIT Delhi</span>, building production-grade web apps, leading student communities, and doing applied research. I care deeply about clean code, great UX, and shipping things that work.
                    </p>

                    <div className="hero-links">
                        {links.map((link, i) => (
                            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="hero-link">
                                {link.icon}
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="hero-cta">
                        <button className="cta-primary" onClick={() => navigate('/menu')}>
                            <span>View Portfolio</span>
                            <ChevronRight size={18} />
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1zPxJ9QTM2IEUiay5O-KbJ5iRyG8w030J/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-secondary"
                        >
                            Resume
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>

                {/* Right column */}
                <div className="hero-right">
                    <div className="profile-card">
                        <div className="profile-avatar">
                            <img src="/profile.jpg" alt="Satyam" className="avatar-photo" />
                            <div className="avatar-ring" />
                        </div>

                        <div className="profile-info">
                            <div className="profile-name">Satyam</div>
                            <div className="profile-degree">B.Tech CSE · IIIT Delhi · 2023–27</div>
                        </div>

                        <div className="highlights-list">
                            {highlights.map((h, i) => (
                                <div key={i} className={`highlight-row accent-${h.color}`} style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
                                    <span className="highlight-icon">{h.icon}</span>
                                    <span className="highlight-label">{h.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="profile-footer">
                            <span className="location-dot" />
                            New Delhi, India
                        </div>
                    </div>

                    {/* Floating decorative cubes */}
                    <div className="floating-cubes">
                        <div className="f-cube cube-a" />
                        <div className="f-cube cube-b" />
                        <div className="f-cube cube-c" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
