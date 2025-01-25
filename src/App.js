import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
