import React from 'react';
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

const Products = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#fafbfc', padding: 0, margin: 0 }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '16px 0 0 0',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 24,
          justifyContent: 'center',
        }}
        className={styles.responsiveRow}
      >
        {/* Left: Content */}
        <div style={{ flex: 2, minWidth: 320, maxWidth: 650 }}>
          <h1
            style={{ fontSize: '2.7rem', fontWeight: 800, textAlign: 'left', marginBottom: 6, color: '#23272F', letterSpacing: '-1px', lineHeight: 1.1 }}
            className={styles.responsiveTitle}
          >
            Solutions Server Portal <span style={{ color: '#3B82F6', fontWeight: 800 }} className={styles.responsiveTitle}>(SSP)</span>
          </h1>
          <div
            style={{ textAlign: 'left', fontSize: '1.18rem', color: '#4B5563', fontWeight: 400, marginBottom: 16, maxWidth: 600, lineHeight: 1.5 }}
            className={styles.responsiveDesc}
          >
            Elevate your business operations with our enterprise-grade platform designed for modern organizations seeking reliability, protection, and growth.
          </div>
          {/* Feature Cards Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 650 }}>
            {features.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  padding: '12px 14px 10px 14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  opacity: 1,
                  transform: 'none',
                  animation: `fadeInCard 0.7s ${0.1 + idx * 0.13}s forwards`
                }}
              >
                <div style={{ flexShrink: 0 }}>{feature.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem', color: '#23272F', marginBottom: 2 }}>{feature.title}</div>
                  <div style={{ color: '#4B5563', fontSize: '0.99rem', fontWeight: 400, lineHeight: 1.5 }}>{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Logo */}
        <div style={{ flex: 1, minWidth: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
         className={styles.responsiveLogo}
        >
          <img
            src={logoImg}
            alt="AXZTECH IT SOLUTION"
            style={{ width: 200, maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0 4px 16px rgba(59,130,246,0.08))' }}
          />
        </div>
      </div>
      {/* Key Features Section */}
      <FeaturesSection />
      {/* Pricing Section */}
      <div style={{ marginTop: 40 }}>
        <PricingSelection />
      </div>
      <CustomSolution />
    </div>
  );
};

export default Products; 