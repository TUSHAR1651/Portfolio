import './header.css';
import React from 'react';
import signature from './signature.png'; 
import Education from '../../Education/education';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
            <img src={signature} alt="signature" style={{width: '400px', height: '90px'}} /> 
            </div>
            <div className="header-right">
                <div> <a href="Education" className='Education'>Home</a></div>
                <div><a href="#">Education</a></div>
                <div><a href="#">Skills</a></div>
                <div><a href="#">Projects</a></div>
                <div><a href="#">Contact Me</a></div>
            </div>
        </div>
    );
}
export default Header;