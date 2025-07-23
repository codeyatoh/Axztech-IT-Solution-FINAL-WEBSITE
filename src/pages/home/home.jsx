import React from 'react';
import { motion } from 'framer-motion';
import Hero from './hero/hero';
import OurServices from './OurServices/OurServices';
import WhyChoose from './WhyChoose/Whychoose';
import Ready from './ready/Ready';
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' },
  viewport: { once: true, amount: 0.2 }
};
const Home = () => {
  return (
    <>
      <motion.div {...fadeInUp}><Hero /></motion.div>
      <motion.div {...fadeInUp}><OurServices /></motion.div>
      <motion.div {...fadeInUp}><WhyChoose /></motion.div>
      <motion.div {...fadeInUp}><Ready /></motion.div>
    </>
  );
};

export default Home; 