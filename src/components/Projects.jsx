import React from 'react';
import { projects } from '../portfolioData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <p className={styles.sectionLabel}>Projects</p>
      <h2 className={styles.heading}>Things I've built</h2>

      <div className={styles.grid}>
        {projects.map(project => (
          <div key={project.title} className={styles.card}>
            <div className={styles.iconBox} aria-hidden="true">
              {project.icon}
            </div>

            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>

            <div className={styles.footer}>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  View ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
