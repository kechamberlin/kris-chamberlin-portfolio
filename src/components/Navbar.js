import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function MyNavbar() {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <nav className='my-navbar'>
      <div onClick={scrollToTop} className='germania-font'>
        Kris Chamberlin
      </div>
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

export default MyNavbar;
