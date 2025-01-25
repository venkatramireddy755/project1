import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      
      <div className={styles.heroImage}>
        <img src="https://register-karo-front-end-development-internship-website.vercel.app/poster.png" alt="Hero Illustration" />
      </div>
    </section>
  );
};

export default Hero;
