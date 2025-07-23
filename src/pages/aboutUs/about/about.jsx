import React from 'react'
import styles from './about.module.css'
import { Code2Icon, BarChartIcon, TrendingUpIcon } from 'lucide-react'

const About = () => {
  return (
    <div className={styles.aboutOuter}>
      <div className={styles.aboutBg}>
        <div className={styles.aboutSection}>
          <div className={styles.heading}>
            <h2>About Axztech IT Solutions</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.content}>
            <p>
              We are a leading provider of innovative IT solutions dedicated to helping 
              businesses succeed in the digital age.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <Code2Icon size={32} />
                <h3>Custom Solutions</h3>
                <p>Tailored software development for your specific business needs</p>
              </div>
              <div className={styles.feature}>
                <BarChartIcon size={32} />
                <h3>Data Analytics</h3>
                <p>Transform your data into actionable business insights</p>
              </div>
              <div className={styles.feature}>
                <TrendingUpIcon size={32} />
                <h3>Digital Growth</h3>
                <p>Strategies to boost your online presence and market reach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About