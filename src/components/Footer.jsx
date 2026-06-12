import React from 'react';
import { meta } from '../portfolioData';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.note}>
        © {year} {meta.name} · Built with React
      </p>
      <div className={styles.links}>
        <a href={`mailto:${meta.email}`}>Email</a>
        <a href={meta.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={meta.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
