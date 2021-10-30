import React, { useEffect, useRef } from 'react'
import './About.css'
import Transition from './Transition'
import gsap from 'gsap';
function About() {
    const about = gsap.timeline();
    const abouth1 = useRef(null);
    const aboutimg = useRef(null);
    useEffect(() => {
        about.from(abouth1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0
        },"-=3.5")
        about.from(aboutimg.current, {
            duration: .5,
            y: -200,
            opacity: 0
        },"-=3")
    })
    return (
        <div>
        <Transition timeline={about}/>
            <div className="about-image about-overlay" ref={aboutimg}></div>
            <div className="container-about">
                <h1 ref={abouth1}>about Page</h1>
            </div>
        </div>
    )
}

export default About
