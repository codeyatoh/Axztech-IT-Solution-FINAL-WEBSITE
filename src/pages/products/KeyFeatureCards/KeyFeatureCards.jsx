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
      description: 'Military-grade protection system with advanced threat intelligence to neutralize unauthorized access attempts and sophisticated cyber threats in real-time.'
    },
    {
      id: 2,
      icon: <CloudUpload className={styles.featureIcon} />,
      title: 'Intelligent Data Backup Solution',
      description: 'Continuous automated backup orchestration with point-in-time recovery capabilities, ensuring zero data loss and rapid restoration during critical scenarios.'
    },
    {
      id: 3,
      icon: <Server className={styles.featureIcon} />,
      title: 'Dynamic Load Distribution',
      description: 'AI-powered traffic management system that optimally balances workloads across server infrastructure, preventing bottlenecks and maintaining peak performance.'
    },
    {
      id: 4,
      icon: <Cloud className={styles.featureIcon} />,
      title: 'Seamless Cloud Ecosystem Integration',
      description: 'Frictionless integration with leading cloud service providers, enabling efficient hybrid and multi-cloud deployment strategies with centralized management.'
    },
    {
      id: 5,
      icon: <ShieldAlert className={styles.featureIcon} />,
      title: 'Comprehensive DDoS Mitigation',
      description: 'Advanced traffic analysis and filtering technology that instantly identifies and neutralizes distributed attacks, keeping your mission-critical services operational.'
    },
    {
      id: 6,
      icon: <Clock className={styles.featureIcon} />,
      title: 'Proactive Infrastructure Monitoring',
      description: 'Continuous real-time surveillance with predictive analytics to identify potential vulnerabilities and resolve issues before they impact operational integrity.'
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