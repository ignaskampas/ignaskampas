import React from 'react';
import styles from './App.module.css';
import Home from './components/sections/Home/Home'
import Navbar from './components/Navbar/Navbar'
import DevelopmentProjects from './components/sections/DevelopmentProjects/DevelopmentProjects'
import DesignProjectCards from './components/sections/DesignProjectCards/DesignProjectCards'
import Skills from './components/sections/Skills/Skills'
import Education from './components/sections/Education/Education'
import Employment from './components/sections/Employment/Employment'
// import WorkExperience from './components/sections/WorkExperience/WorkExperience'
import PocketBook from './components/designProjects/PocketBook/PocketBook'
import StudyCrew from './components/designProjects/StudyCrew/StudyCrew'
import InteriorDesign from './components/designProjects/InteriorDesign/InteriorDesign'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={(
          <div className={styles.center}>
            <Home />
            <hr className={styles.line}/>
            <DesignProjectCards />
            <hr className={styles.line}/>
            <DevelopmentProjects />
            <hr className={styles.line}/>
            <Skills />
            <hr className={styles.line}/>
            <Employment />
            <hr className={styles.line}/>
            <Education />
            {/* <hr className={styles.line}/>
            <WorkExperience /> */}
          </div>
        )} />
        <Route path="/designproject/1" element={<PocketBook />} />
        <Route path="/designproject/2" element={<StudyCrew />} />
        <Route path="/designproject/3" element={<InteriorDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
