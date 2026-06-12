import React from 'react';
import { skillGroups } from '../portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.sectionLabel}>Skills</p>
      <h2 className={styles.heading}>What I work with</h2>

      <div className={styles.grid}>
        {skillGroups.map(group => (
          <div key={group.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon} aria-hidden="true">{group.icon}</span>
              <span className={styles.groupTitle}>{group.title}</span>
            </div>
            <div className={styles.tags}>
              {group.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
