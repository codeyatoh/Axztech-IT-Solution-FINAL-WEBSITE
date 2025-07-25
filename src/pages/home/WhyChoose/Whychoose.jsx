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
          {/* SVG Icon: User (Blue, minimalist) */}
          <div className={styles.cardIcon}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1400fe" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
            </svg>
          </div>
          <h2 className={styles.cardTitle}>Expert IT Team</h2>
          <p className={styles.cardDescription}>
            Expert team of IT professionals with extensive knowledge and experience to handle all your technology needs.
          </p>
        </div>
        <div className={styles.whyChooseCard}>
          {/* SVG Icon: Lightbulb (Red, minimalist, user provided) */}
          <div className={styles.cardIcon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <path d="M10 19.5H14M10.6667 22H13.3333" stroke="#cd0600" strokeWidth="1.5" strokeLinecap="round"></path>
              <path d="M15 2.60222C14.0907 2.21646 13.0736 2 12 2C8.13401 2 5 4.8069 5 8.21807L5.00007 8.30193C5.00875 10.2984 5.86939 12.2187 7.41058 13.6805L8.51463 14.7196C8.82437 15.0112 9 15.4177 9 15.843C9 16.482 9.518 17 10.157 17H13.843C14.482 17 15 16.482 15 15.843C15 15.4177 15.1756 15.0112 15.4854 14.7196L16.5894 13.6805C18.1306 12.2187 18.9912 10.2984 18.9999 8.30193L19 8.21807C19 7.43838 18.8363 6.69025 18.5375 6" stroke="#cd0600" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
          </div>
          <h2 className={styles.cardTitle}>Customized Solutions</h2>
          <p className={styles.cardDescription}>
            Customized solutions for your business needs with cutting-edge technology that scales with your growth.
          </p>
        </div>
        <div className={`${styles.whyChooseCard} ${styles.accentCard}`}>
          {/* SVG Icon: Chat/Message (Text/Icon color, minimalist) */}
          <div className={styles.cardIcon}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
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