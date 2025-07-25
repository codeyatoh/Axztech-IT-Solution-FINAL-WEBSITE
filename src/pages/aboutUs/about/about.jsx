import React from 'react'
import { motion } from 'framer-motion'
import styles from './about.module.css'
import { Code2Icon, BarChartIcon, TrendingUpIcon } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, type: 'spring', bounce: 0.3 }
};

const About = () => {
  return (
    <div className={styles.aboutOuter}>
      <div className={styles.aboutBg}>
        <motion.div className={styles.aboutSection} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}>
          <div className={styles.heading}>
            <h2>About Axztech IT Solutions</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.intro}>
            We are a leading provider of innovative IT solutions dedicated to helping 
            businesses succeed in the digital age.
          </p>
          <div className={styles.features}>
            {[{
              icon: <Code2Icon size={32} />, title: 'Custom Solutions', desc: 'Tailored software development for your specific business needs'
            }, {
              icon: <BarChartIcon size={32} />, title: 'Data Analytics', desc: 'Transform your data into actionable business insights'
            }, {
              icon: <TrendingUpIcon size={32} />, title: 'Digital Growth', desc: 'Strategies to boost your online presence and market reach'
            }].map((f, i) => (
              <motion.div
                className={styles.feature}
                key={f.title}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 + i * 0.15 }}
              >
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About