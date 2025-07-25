import React from 'react'
import { motion } from 'framer-motion'
import styles from './WhyChooseUs.module.css'
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, type: 'spring', bounce: 0.3 }
};
const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      title: "Certified Professionals", 
      description: "Dedicated team of certified IT professionals with years of experience"
    },
    {
      id: 2,
      title: "Customized Solutions",
      description: "Tailored solutions designed specifically for your business needs"
    },
    {
      id: 3,
      title: "Ongoing Support",
      description: "Comprehensive maintenance and support services available 24/7"
    },
    {
      id: 4,
      title: "Latest Technologies",
      description: "Commitment to implementing cutting-edge technologies"
    },
    {
      id: 5,
      title: "Proven Track Record",
      description: "History of successful implementations across various industries"
    }
  ]
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div className={styles.header} {...fadeInUp}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <div className={styles.divider}></div>
          <motion.p className={styles.subtitle} {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>We deliver exceptional value through our expertise and commitment to excellence</motion.p>
        </motion.div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.id}
              className={styles.benefitCard}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.15 + i * 0.12 }}
            >
              <div className={styles.iconContainer}>
                <span className={styles.checkIcon}>✓</span>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Removed the imageSection with 'Trusted by businesses worldwide' */}
      </div>
    </section>
  )
}
export default WhyChooseUs