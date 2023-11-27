import React from 'react';

interface AnimatedButtonProps {
    label: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ label }) => {
    return (
        <button className="wave bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8">
            {label}
        </button>
    );
};

export default AnimatedButton;