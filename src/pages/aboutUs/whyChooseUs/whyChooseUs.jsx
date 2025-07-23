import React from 'react'
import { motion } from 'framer-motion'
import styles from './WhyChooseUs.module.css'
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
        <motion.div className={styles.header} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <div className={styles.divider}></div>
          <motion.p className={styles.subtitle} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}>We deliver exceptional value through our expertise and commitment to excellence</motion.p>
        </motion.div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.id}
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, type: 'spring', bounce: 0.3 }}
            >
              <div className={styles.iconContainer}>
                <span className={styles.checkIcon}>✓</span>
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className={styles.imageSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.2, type: 'spring', bounce: 0.3 }}>
          <div className={styles.imageText}>
            <h3 className={styles.imageTitle}>Trusted by businesses worldwide</h3>
            <p className={styles.imageDescription}>
              Our team works tirelessly to ensure your IT infrastructure runs smoothly and efficiently.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Professional IT team" 
              className={styles.image}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default WhyChooseUs