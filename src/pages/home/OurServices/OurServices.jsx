import React from 'react';
import { FaServer, FaMobileAlt, FaCode } from 'react-icons/fa';
import styles from './OurServices.module.css';
import Button from '../../../common/button/button';

function OurServices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.description}>
          We provide comprehensive IT solutions to help your business thrive in
          the digital age.
        </p>
        <div className={styles.cardsContainer}>
          {/* First card */}
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <FaServer size={48} color="#7F8CAA" />
            </div>
            <div className={styles.cardDate}>For Businesses</div>
            <div className={styles.cardTitle}>Solutions System Portal</div>
            <div className={styles.cardSubtitle}>Our flagship SSP product provides a comprehensive system portal that integrates and streamlines your business operations.</div>
            <Button primary>Learn More</Button>
          </div>
          {/* Second card */}
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <FaMobileAlt size={48} color="#7F8CAA" />
            </div>
            <div className={styles.cardDate}>Custom Mobile</div>
            <div className={styles.cardTitle}>Applications</div>
            <div className={styles.cardSubtitle}>Tailored mobile app solutions designed to meet your specific business or community needs perfect for service efficiency, real-time tracking, and user engagement.</div>
            <Button primary>Learn More</Button>
          </div>
          {/* Third card */}
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <FaCode size={48} color="#7F8CAA" />
            </div>
            <div className={styles.cardDate}>Custom Software</div>
            <div className={styles.cardTitle}>Development</div>
            <div className={styles.cardSubtitle}>Tailored software solutions designed to meet your specific business requirements and challenges.</div>
            <Button primary>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;