import React, { useEffect, useState } from 'react';
import './PageStyles.css'; // Make sure this CSS contains the cursor styles

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Update CSS variables for the glass card spotlight effect globally
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };

        const updateHoverState = (e) => {
            const target = e.target;
            const isClickable = target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.classList.contains('glass-card') ||
                target.classList.contains('project-card') ||
                target.classList.contains('experience-card') ||
                target.classList.contains('education-card') ||
                target.classList.contains('nav-button') ||
                target.classList.contains('action-button');

            setIsHovering(isClickable);
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', updateHoverState);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateHoverState);
        };
    }, []);

    // Also inject spotlight variables onto specific cards on hover for relative tracking
    useEffect(() => {
        const handleCardMouseMove = (e) => {
            const cards = document.querySelectorAll('.glass-card, .project-card, .experience-card, .education-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        window.addEventListener('mousemove', handleCardMouseMove);
        return () => window.removeEventListener('mousemove', handleCardMouseMove);
    }, []);

    return (
        <>
            <div
                className={`custom-cursor-dot ${isHovering ? 'hovering' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
