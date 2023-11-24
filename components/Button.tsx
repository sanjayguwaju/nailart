import React from 'react';
import Image from 'next/image';
import styles from './AnimatedButton.module.css'; // Create a CSS module for styling

const AnimatedButton = () => {
    return (
        <button className={styles.animatedButton}>
            <div className={styles.animationWrapper}>
                <Image
                    src="/images/wave.svg"
                    alt="My SVG Image"
                    width={1264}
                    height={1264}
                />
            </div>
            <span>Click me</span>
        </button>
    );
};

export default AnimatedButton;