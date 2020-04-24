import React from 'react';
import styles from './App.module.css';
import Home from './components/sections/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/sections/Projects/Projects'
import Skills from './components/sections/Skills/Skills'
import Education from './components/sections/Education/Education'
import Employment from './components/sections/Employment/Employment'
import WorkExperience from './components/sections/WorkExperience/WorkExperience'

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.center}>
        <Home />
        <hr class={styles.line}/>
        <Projects />
        <hr class={styles.line}/>
        <Skills />
        <hr class={styles.line}/>
        <Education />
        <hr class={styles.line}/>
        <Employment />
        <hr class={styles.line}/>
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
