import React from 'react'
import styles from './MissionVision.module.css'
import { EyeIcon, CompassIcon } from 'lucide-react'
import { motion } from 'framer-motion'
function MissionVision() {
  return (
    <section className={styles.missionVisionSection}>
      <div className={styles.container}>
        <div className={styles.missionVisionContainer}>
          <motion.div
            className={`${styles.card} ${styles.card1}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconContainer}>
              <EyeIcon size={48} className={styles.icon} />
            </div>
            <h2 className={styles.title}>VISION</h2>
            <p className={styles.content}>
              "Empowering local prosperity through digital unity."
            </p>
          </motion.div>
          <motion.div
            className={`${styles.card} ${styles.card2}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles.iconContainer}>
              <CompassIcon size={48} className={styles.icon} />
            </div>
            <h2 className={styles.title}>MISSION</h2>
            <p className={styles.content}>
              "Connecting local community businesses through digital transformation."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default MissionVision