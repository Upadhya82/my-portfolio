import React from 'react';
import { meta } from '../portfolioData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.sectionLabel}>About Me</p>
      <h2 className={styles.heading}>Who I am</h2>

      <div className={styles.card}>
        <p className={styles.bio}>{meta.bio}</p>
      </div>

      <div className={styles.statsGrid}>
        {meta.stats.map(s => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statVal}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
