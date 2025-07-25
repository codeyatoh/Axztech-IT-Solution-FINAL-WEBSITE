import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  CloudUpload, 
  Server, 
  Cloud, 
  ShieldAlert, 
  Clock 
} from 'lucide-react';
import styles from './KeyFeatureCards.module.css';

const FeatureCard = ({ icon, title, description, isActive, onMouseEnter, onMouseLeave, visible }) => {
  return (
    <div 
      className={
        `${styles.featureCard} ${isActive ? styles.featureCardActive : ''} ${visible ? styles.visible : ''}`
      }
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const features = [
    {
      id: 1,
      icon: <Shield className={styles.featureIcon} />,
      title: 'Enterprise-Grade Firewall Defense',
      description: 'Real-time protection that blocks unauthorized access and advanced cyber threats.'
    },
    {
      id: 2,
      icon: <CloudUpload className={styles.featureIcon} />,
      title: 'Intelligent Data Backup Solution',
      description: 'Automated backups with instant recovery to prevent data loss in any situation.'
    },
    {
      id: 3,
      icon: <Server className={styles.featureIcon} />,
      title: 'Dynamic Load Distribution',
      description: 'AI-driven system that balances server workloads to ensure peak performance.'
    },
    {
      id: 4,
      icon: <Cloud className={styles.featureIcon} />,
      title: 'Seamless Cloud Ecosystem Integration',
      description: 'Effortless connection with top cloud providers for unified, multi-cloud management.'
    },
    {
      id: 5,
      icon: <ShieldAlert className={styles.featureIcon} />,
      title: 'Comprehensive DDoS Mitigation',
      description: 'Instantly detects and stops distributed attacks to keep your services online.'
    },
    {
      id: 6,
      icon: <Clock className={styles.featureIcon} />,
      title: 'Proactive Infrastructure Monitoring',
      description: 'Real-time monitoring with predictive analytics to fix issues before they cause problems.'
    }
  ];

  useEffect(() => {
    const observers = [];
    cardRefs.current = cardRefs.current.slice(0, features.length);
    features.forEach((_, idx) => {
      if (!cardRefs.current[idx]) return;
      observers[idx] = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observers[idx].disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observers[idx].observe(cardRefs.current[idx]);
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresHeader}>
        <h2 className={styles.mainTitle}>Enterprise Security Infrastructure</h2>
        <p className={styles.mainSubtitle}>
          Our Secure Server Platform delivers industry-leading protection and performance with a comprehensive suite of enterprise-grade features designed for mission-critical operations.
        </p>
      </div>
      <div className={styles.featuresGrid}>
        {features.map((feature, idx) => (
          <div ref={el => cardRefs.current[idx] = el} key={feature.id}>
            <FeatureCard 
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={activeFeature === feature.id}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
              visible={!!visibleCards[idx]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;