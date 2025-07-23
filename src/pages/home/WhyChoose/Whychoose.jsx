import React from 'react'
import styles from './WhyChoose.module.css'
function WhyChoose() {
  return (
    <div className={styles.whyChooseContainer}>
      <h1 className={styles.whyChooseTitle}>Why Choose Axztech IT Solutions</h1>
      <p className={styles.whyChooseSubtitle}>
        With years of experience and a commitment to excellence, we deliver IT solutions
        that drive business success.
      </p>
      <div className={styles.whyChooseCards}>
        <div className={styles.whyChooseCard}>
          <h2 className={styles.cardTitle}>Expert IT Team</h2>
          <p className={styles.cardDescription}>
            Expert team of IT professionals with extensive knowledge and experience to handle all your technology needs.
          </p>
        </div>
        <div className={styles.whyChooseCard}>
          <h2 className={styles.cardTitle}>Customized Solutions</h2>
          <p className={styles.cardDescription}>
            Customized solutions for your business needs with cutting-edge technology that scales with your growth.
          </p>
        </div>
        <div className={`${styles.whyChooseCard} ${styles.accentCard}`}>
          <div className={styles.accentOverlay}></div>
          <div className={styles.badge}>
            <span>24/7</span>
          </div>
          <h2 className={styles.cardTitle}>Reliable Support</h2>
          <p className={styles.cardDescription}>
            24/7 technical support with a proven track record of success and affordable pricing plans.
          </p>
        </div>
      </div>
    </div>
  )
}
export default WhyChoose