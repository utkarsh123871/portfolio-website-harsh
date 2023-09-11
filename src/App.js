import React from 'react';
import './styles/styles.css'; // Adjust the path as needed
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
