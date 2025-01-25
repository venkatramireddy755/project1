import React from 'react';
import { FaBuilding, FaUserShield, FaHome, FaClipboardCheck, FaMoneyCheckAlt, FaBook } from 'react-icons/fa'; // Importing icons
import styles from './Features.module.css';

const Features = () => {
  const features = [
    { 
      title: 'Company Formation', 
      description: 'Hassle-free company registration to get your business up and running.', 
      icon: <FaBuilding size={40} color="#007BFF" /> 
    },
    { 
      title: 'Company Secretarial Services', 
      description: 'Expert services to handle corporate secretarial tasks.', 
      icon: <FaUserShield size={40} color="#007BFF" /> 
    },
    { 
      title: 'Virtual Office Address', 
      description: 'Premium virtual office addresses to enhance your business image.', 
      icon: <FaHome size={40} color="#007BFF" /> 
    },
    { 
      title: 'Annual Compliance Services', 
      description: 'Ensure compliance with legal and regulatory requirements.', 
      icon: <FaClipboardCheck size={40} color="#007BFF" /> 
    },
    { 
      title: 'Payroll Services', 
      description: 'Streamlined payroll management for your workforce.', 
      icon: <FaMoneyCheckAlt size={40} color="#007BFF" /> 
    },
    { 
      title: 'Bookkeeping Services', 
      description: 'Accurate bookkeeping to keep your finances in check.', 
      icon: <FaBook size={40} color="#007BFF" /> 
    },
  ];

  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <p>Discover the powerful tools and features we provide to make your business journey seamless.</p>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#Learn More" className={styles.learnMore}>Learn More</a> {/* Learn More link */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
