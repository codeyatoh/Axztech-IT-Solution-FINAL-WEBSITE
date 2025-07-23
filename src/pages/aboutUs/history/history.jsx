import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './history.module.css';
import { CodeIcon, BriefcaseIcon, LightbulbIcon, GlobeIcon } from 'lucide-react';

const milestoneData = [
  {
    date: '2023',
    title: 'Freelance Hobby',
    subtitle: 'Beginning of the Journey',
    description: 'Started as a freelance software development hobby. Initial concept development and first projects.',
    icon: <CodeIcon size={24} />, 
    color: '#0057FF' // Blue (logo)
  },
  {
    date: 'Early 2024',
    title: 'Formalized Business',
    subtitle: 'Official Registration',
    description: 'Established formal business structure. Registered as an official business entity.',
    icon: <BriefcaseIcon size={24} />, 
    color: '#FF2D2D' // Red (logo)
  },
  {
    date: 'Mid 2024',
    title: 'Pivot to MSMEs',
    subtitle: 'Strategic Shift',
    description: 'Identified local market needs. Focused on supporting local businesses.',
    icon: <LightbulbIcon size={24} />, 
    color: '#FFD600' // Yellow (logo)
  },
  {
    date: 'Present',
    title: 'SaaS Platform',
    subtitle: 'Current Phase',
    description: 'Launched digital platform for local communities. Supporting MSMEs and barangays through a SaaS PWA.',
    icon: <GlobeIcon size={24} />, 
    color: '#00C853' // Green (logo)
  }
];

const History = () => {
  return (
    <div className={styles.aboutOuter}>
      <div className={styles.aboutBg}>
        <section className={styles.history}>
          <div className={styles.heading}>
            <h2>AXZTECH HISTORY</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.content}>
            <p>
              AXZTECH began as a freelance software development hobby in 2023. In 2024, it was formalized into a business. 
              Facing the typical challenges of a new venture, the founder realized the absence of local IT service platforms 
              in Manolo Fortich specifically for MSMEs, prompting a rebrand and transition into a startup.
            </p>
            <p>
              Inspired by a failed master's project, AXZTECH refocused its mission on supporting local MSMEs and barangays 
              through a SaaS platform built as a Progressive Web App (PWA). This shift aligns with Sustainable Development 
              Goal #8: Decent Work and Economic Growth.
            </p>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <VerticalTimeline>
              {milestoneData.map((milestone, idx) => (
                <VerticalTimelineElement
                  key={idx}
                  date={milestone.date}
                  icon={milestone.icon}
                  iconStyle={{ background: milestone.color, color: '#fff' }}
                  contentStyle={{ borderTop: `6px solid ${milestone.color}` }}
                >
                  <h3 style={{ color: milestone.color, marginBottom: 4 }}>{milestone.title}</h3>
                  <h4 style={{ color: '#333446', fontWeight: 600, marginBottom: 8 }}>{milestone.subtitle}</h4>
                  <p style={{ color: '#7F8CAA', fontSize: 16 }}>{milestone.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;