import React from 'react';
import Me from '../images/my-picture.jpeg';

function About() {
  return (
    <div className='about'>
      <p>About</p>
      <img src={Me} alt='me with my coding certificate' />
    </div>
  );
}

export default About;
