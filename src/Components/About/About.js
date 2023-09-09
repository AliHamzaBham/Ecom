import React from 'react'
import { useEffect } from 'react';
import AboutHero from './AboutHero'

function About() {

  useEffect(() => {
    document.title = "Store - About"
  }, []);

  return (
    <div>
        <AboutHero/>
    </div>
  )
}

export default About
