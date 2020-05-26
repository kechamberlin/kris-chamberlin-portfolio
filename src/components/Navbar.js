import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='germania-font'>Kris Chamberlin</div>
      <ul>
        <li>About</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
