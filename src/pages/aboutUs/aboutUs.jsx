import React from 'react'
import About from './about/about'
import History from './history/history'
import Team from './Team/team'
import WhyChooseUs from './whyChooseUs/whyChooseUs'
import MissionVision from './MissionVision/MissionVision'
import { useLocation } from 'react-router-dom';
function AboutUs() {
  const location = useLocation();
  return (
    <div key={location.pathname}>
      <About />
      <History />
      <MissionVision />
      <Team />
      <WhyChooseUs />
    </div>
  )
}

export default AboutUs
