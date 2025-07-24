import React from 'react'
import { motion } from 'framer-motion'
import styles from './about.module.css'
import { Code2Icon, BarChartIcon, TrendingUpIcon } from 'lucide-react'

const featureVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.6, type: 'spring', bounce: 0.3 } })
};

const About = () => {
  return (
    <div className={styles.aboutOuter}>
      <div className={styles.aboutBg}>
        <motion.div className={styles.aboutSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}>
          <motion.div className={styles.heading} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2>About Axztech IT Solutions</h2>
            <div className={styles.underline}></div>
          </motion.div>
          <motion.p className={styles.intro} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}>
            We are a leading provider of innovative IT solutions dedicated to helping 
            businesses succeed in the digital age.
          </motion.p>
          <motion.div className={styles.features} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}>
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
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={featureVariants}
              >
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About