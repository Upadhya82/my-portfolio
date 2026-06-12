import React from 'react';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Skills    from './components/Skills';
import Projects  from './components/Projects';
import Education from './components/Education';
import Footer    from './components/Footer';
import styles    from './App.module.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Footer />
        </div>
      </main>
    </>
  );
}
