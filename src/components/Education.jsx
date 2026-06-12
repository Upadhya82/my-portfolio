import React from 'react';
import { education } from '../portfolioData';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <p className={styles.sectionLabel}>Education</p>
      <h2 className={styles.heading}>Academic background</h2>

      <div className={styles.list}>
        {education.map(item => (
          <div key={item.degree} className={styles.item}>
            <div
              className={`${styles.iconBox} ${
                item.color === 'success' ? styles.iconSuccess : styles.iconAccent
              }`}
              aria-hidden="true"
            >
              {item.icon}
            </div>

            <div className={styles.content}>
              <p className={styles.degree}>{item.degree}</p>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.period}>{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
