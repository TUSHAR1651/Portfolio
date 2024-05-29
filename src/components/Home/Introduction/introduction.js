import './introduction.css';
import React from 'react';
import portfolio from './portfolioImge.gif';
import SvgIcon1 from './linkedin.js';
import SvgIcon2 from './instagram.js';
import SvgIcon3 from './gmail.js';
import SvgIcon4 from './github.js';

//  I want to write some introduction in the left and image in the right and also some links in the bottom of the introduction
const Introduction = () => {
    return (
        <div className="introduction">
            <div className="introduction-left">
                <div>
                    <h1>Hi, I am <span style={{color: 'blue'}}>Tushar Khurana <span className="handshake">👋</span></span></h1>
                    <p>A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact</p>
                </div>
                <div className="introduction-bottom">
                    <SvgIcon1 />
                    <SvgIcon2 />
                    <SvgIcon3 />
                    <SvgIcon4 />
                </div>
            </div>
            <div className="introduction-right">
                <img src={portfolio} alt="avatar" style={{width: '700px', height: '500px'}} />
            </div>
            
        </div>
    );
}
export default Introduction;