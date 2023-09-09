import React from 'react'
import { useEffect } from 'react';
import Hero from '../HomePage/Hero';
import HomeAbout from './HomeAbout';
import CTA from './CTA';

function Home() {
    useEffect(() => {
        document.title = "Shop - Home"
      }, []);

    return (
        <div>
            <Hero/>
            <HomeAbout/>
            <CTA/>
        </div>
    )
}

export default Home
