import React from 'react';
import './AnimatedButton.css';

interface AnimatedButtonProps {
    label: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ label }) => {
    return (
        <button className="button">
            <span className="button-text">{label}</span>
            <div className="fill-container"></div>
        </button>
    );
};

export default AnimatedButton;