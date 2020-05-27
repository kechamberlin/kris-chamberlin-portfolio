import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Projects />
      {/* <header className='App-header'>Kris Chamberlin's Portfolio</header> */}
    </div>
  );
}

export default App;
