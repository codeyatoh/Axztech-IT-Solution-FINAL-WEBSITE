import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import logoImg from '../../assets/images/axztech-logo.png';
import FeaturesSection from './KeyFeatureCards/KeyFeatureCards';
import PricingSelection from './PricingSelection/PricingSelection';
import CustomSolution from './CustomSolution/CustomSolution';
import styles from './products.module.css';

// Minimalist SVG icons for feature cards
const SecurityIcon = (
  <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
    <rect width="28" height="28" rx="8" fill="#E8F1FF"/>
    <path d="M14 7L21 10V14C21 18 17.5 20 14 21C10.5 20 7 18 7 14V10L14 7Z" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="14" cy="14" r="2.2" stroke="#3B82F6" strokeWidth="1.6"/>
  </svg>
);
const PerformanceIcon = (
  <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
    <rect width="28" height="28" rx="8" fill="#E8F1FF"/>
    <path d="M14 8V15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 15L17 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="14" cy="14" r="8" stroke="#3B82F6" strokeWidth="2"/>
  </svg>
);
const ScalabilityIcon = (
  <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
    <rect width="28" height="28" rx="8" fill="#E8F1FF"/>
    <path d="M9 17L14 11L19 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11V19" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const features = [
  {
    icon: SecurityIcon,
    title: 'Enterprise-Grade Security',
    description: 'Comprehensive protection with advanced threat detection, military-grade encryption, and real-time monitoring to safeguard your critical business data and applications.'
  },
  {
    icon: PerformanceIcon,
    title: 'Optimized Performance',
    description: 'Engineered for speed and reliability with intelligent resource allocation, ensuring your applications run seamlessly even during peak demand periods.'
  },
  {
    icon: ScalabilityIcon,
    title: 'Dynamic Scalability',
    description: 'Adapt instantly to changing business needs with flexible resources that scale automatically, supporting your growth without compromising performance or requiring infrastructure overhauls.'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, type: 'tween' }
};

const Products = () => {
  const location = useLocation();
  return (
    <div key={location.pathname}>
      <div className={styles.productsPageBg}>
        <div className={styles.productsRow}>
          {/* Left: Content */}
          <motion.div className={styles.productsContent} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, type: 'tween' }}>
            <h1 className={styles.productsTitle}>
              Solutions Server Portal <span className={styles.productsTitleAccent}>(SSP)</span>
            </h1>
            <div className={styles.productsDesc}>
              Elevate your business operations with our enterprise-grade platform designed for modern organizations seeking reliability, protection, and growth.
            </div>
            {/* Feature Cards Section */}
            <div className={styles.featureCardsSection}>
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className={styles.featureCard}
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: 0.25 + idx * 0.13 }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <div>
                    <div className={styles.featureTitle}>{feature.title}</div>
                    <div className={styles.featureDescription}>{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right: Logo */}
          <motion.div className={styles.productsLogoBox} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, type: 'tween' }}>
            <img
              src={logoImg}
              alt="AXZTECH IT SOLUTION"
              className={styles.productsLogo}
            />
          </motion.div>
        </div>
        {/* Key Features Section */}
        <FeaturesSection />
        {/* Pricing Section */}
        <div className={styles.productsPricingSection}>
          <PricingSelection />
        </div>
        <CustomSolution />
      </div>
    </div>
  );
};

export default Products; 