import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='germania-font'>Kris Chamberlin</div>
      <ul>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
