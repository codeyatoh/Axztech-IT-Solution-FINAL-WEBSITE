import React from 'react';
import styles from './PricingCard.module.css';
import PricingButton from '../PricingButton/PricingButton';
const PricingCard = ({ 
  title, 
  subtitle, 
  price, 
  period, 
  description, 
  features, 
  isPopular, 
  color,
  icon: Icon 
}) => {
  const cardClass = `${styles.card} ${styles[color]}`;
  return (
    <div className={cardClass}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>{subtitle}</p>
      </div>
      <div className={styles.pricing}>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>{period}</span>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <Icon className={styles.featureIcon} size={18} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <PricingButton isPopular={isPopular} color={color} />
    </div>
  );
};
export default PricingCard;