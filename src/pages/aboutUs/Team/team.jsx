import React from 'react'
import { motion } from 'framer-motion'
import styles from './Team.module.css'
import rioImg from '../../../assets/images/Rio-Al-Di-Dompol.jpg';
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, type: 'spring', bounce: 0.3 }
};
const Team = () => {
  const teamMember = {
    name: 'Rio Al-Di Dompol',
    role: 'FULLSTACK WEB & MOBILE DEVELOPER',
    image: rioImg,
  }
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div className={styles.header} {...fadeInUp}>
          <h2 className={styles.title}>Meet Our Team</h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Our talented professionals are dedicated to delivering innovative IT
            solutions for businesses of all sizes.
          </p>
        </motion.div>
        <motion.div className={styles.cardContainer} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
          <motion.div className={styles.card} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }}>
            <div className={styles.imageContainer}>
              {teamMember.image && (
                <img
                  src={teamMember.image}
                  alt={teamMember.name}
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.name}>{teamMember.name}</h3>
              <p className={styles.role}>{teamMember.role}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
export default Team
