import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      {/* <header className='App-header'>Kris Chamberlin's Portfolio</header> */}
    </div>
  );
}

export default App;
