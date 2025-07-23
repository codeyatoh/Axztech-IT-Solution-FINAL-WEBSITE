import React from 'react';
import { motion } from 'framer-motion';
import Hero from './hero/hero';
import OurServices from './OurServices/OurServices';
import WhyChoose from './WhyChoose/Whychoose';
import Ready from './ready/Ready';

const sectionVariants = {
  initial: { opacity: 0, y: 64, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
};
const spring = {
  type: 'spring',
  bounce: 0.32,
  duration: 0.9,
};

const Home = () => {
  return (
    <>
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ ...spring, delay: 0 }}
        viewport={{ once: true, amount: 0.18 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ ...spring, delay: 0.12 }}
        viewport={{ once: true, amount: 0.18 }}
      >
        <OurServices />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ ...spring, delay: 0.24 }}
        viewport={{ once: true, amount: 0.18 }}
      >
        <WhyChoose />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="initial"
        whileInView="whileInView"
        transition={{ ...spring, delay: 0.36 }}
        viewport={{ once: true, amount: 0.18 }}
      >
        <Ready />
      </motion.div>
    </>
  );
};

export default Home; 