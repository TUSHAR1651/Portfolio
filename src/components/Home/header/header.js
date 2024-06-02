import './header.css';
import React, { useRef } from 'react';
import signature from './signature.png'; 
import Education from '../../Education/education';
import Skills from '../../Skills/skills';
import Projects from '../../Projects/Project';
import Introduction from '../Introduction/introduction';
import What from '../What_I_Do/What';

const Header = () => {
    const introductionRef = useRef(null);
    const whatRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="header">
                <div className="header-left">
                    <img src={signature} alt="signature" style={{width: '400px', height: '90px'}} /> 
                </div>
                <div className="header-right">
                    <div><a href="#" onClick={() => scrollToSection(introductionRef)}>Home</a></div>
                    <div><a href="#" onClick={() => scrollToSection(whatRef)}>About me</a></div>
                    <div><a href="#" onClick={() => scrollToSection(educationRef)}>Education</a></div>
                    <div><a href="#" onClick={() => scrollToSection(skillsRef)}>Skills</a></div>
                    <div><a href="#" onClick={() => scrollToSection(projectsRef)}>Projects</a></div>
                    <div><a href="#" onClick={() => scrollToSection(contactRef)}>Contact Me</a></div>
                </div>
            </div>

            <div ref={introductionRef}>
                <Introduction />
            </div>
            <div ref={whatRef}>
            <What />
            </div>
            <div ref={educationRef} >
                <Education />
            </div>
            <div ref={skillsRef}>
                <Skills />
            </div>
            <div ref={projectsRef} >
                <Projects />
            </div>
            <div ref={contactRef}>
            </div>
        </>
    );
}

export default Header;
