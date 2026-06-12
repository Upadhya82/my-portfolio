import React from 'react';
import { meta } from '../portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>{meta.badge}</span>
      <h1 className={styles.name}>{meta.name}</h1>
      <p className={styles.role}>{meta.role}</p>
      <p className={styles.bio}>{meta.bio}</p>

      <div className={styles.btnRow}>
        <a href="#projects" className={styles.btnPrimary}>
          View my work
        </a>
        <a href={meta.github} target="_blank" rel="noreferrer" className={styles.btnOutline}>
          GitHub ↗
        </a>
        <a href={meta.linkedin} target="_blank" rel="noreferrer" className={styles.btnOutline}>
          LinkedIn ↗
        </a>
      </div>

      <div className={styles.stats}>
        {meta.stats.map(s => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statVal}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
