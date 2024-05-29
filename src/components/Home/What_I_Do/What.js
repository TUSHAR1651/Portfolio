// i want to write a component in left there is a image and in right there are some logos and links under which there is a paragraph
import './What.css';
import React from 'react';
import Right2 from'./Right2.png';
import Right3 from'./Right3.png';
import Right4 from'./Right4.png';
import left from './left.png';
import html from './html.jpg';
import css from './css.jpg';
import js from './js.jpeg';
import react from './react.jpg';
import web from './webright.svg';
import Programming from './Programming.svg';
import Dsa from './Dsa.svg';
import Leetcode from './Leetcode.jpg';
import Codechef from './codechef.jpg';
import Codeforces from './codeforces.jpg';
import CodingNinja from './codingNinja.jpg';
const What = () => {
    return (
        <div>
            <div><h1>What I Do ?</h1></div>
            <div className="what">
                <div className="what-left">
                    <img src={left} alt="left" style={{ width: '300', height: '300px' }} />
                </div>
                <div className="what-right">
                    <h2>Data analytics and ML</h2>
                    <div>
                        <img src={Right2} alt="right" style={{ width: '200px', height: '100px' }} />
                        <img src={Right3} alt="right" style={{ width: '200px', height: '100px' }} />
                        <img src={Right4} alt="right" style={{ width: '200px', height: '100px' }} />
                    </div>
                    <div>
                        <p>💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.</p>
                        <p>💥 Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Web Development</h2>
                <div className = "web-development">
                    <div className="web-development-left">
                    <img src={html} alt="left" style={{ width: '100px', height: '100px' }} />
                    <img src={css} alt="right" style={{ width: '150px', height: '100px' }} />
                    <img src={js} alt="right" style={{ width: '100px', height: '100px' }} />
                    <img src={react} alt="right" style={{ width: '100px', height: '100px' }} />
                    <p>💥 Building Fully responsive website frontend using HTML, CSS, Bootstrap and Javascript.</p>
                    <p>💥 As of now I have knowledge only of frontend but in near future I will learn more skills and excited to explore React, NodeJS, Django, Flask and many more.</p>
                    <p>💥 I have also used Abode Photoshop, Illustrator and Figma to design User interface of websites and mobile applications and designed logos.</p>
                    </div>
                    <div>
                        <img src={web} alt="left" style={{ width: '500px', height: '500px' }} />
                    </div>
                </div>
            </div>
            <div>
            <h1>Logical Thinking</h1>
            <div className="Data">
                <div>
                    <img src={Dsa} alt="right" style={{ width: '500px', height: '500px' }} />
                </div>
                
                <div className="Data-right">
                <h2>Data Structures and algorithms</h2>
                    <p>💥 I have solved more than 300 problems on LeetCode, Codeforces and HackerRank.</p>
                    <p>💥 I have also participated in many coding contests and have good knowledge of Data Structures and Algorithms.</p>
                    <p>💥 I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently.</p>
                </div>
            </div>
            <div>
                <h2>Competitve Programming</h2>
                <div  className = "CP">
                <div>
                    <img src = {Programming} alt ="programming" style ={{width: '500px' , height: '500px'}}></img>
                </div>
                <div className = "image">
                    <a href="https://leetcode.com/tushar1651/" className='ico'>
                        <img src={Leetcode} alt="leetcode" style={{width: '120px', height: '100px'}} />
                    </a>
                    <a className= "ico" href ="https://www.codechef.com/users/tushar1651">
                        <img src={Codechef} alt = "leetcode" style= {{width : '120px'  , height : '100px'}}></img>
                    </a>
                    <a href ="https://www.naukri.com/code360/profile/c43c8dd6-ac04-4e42-a7aa-f41f30c2974b" className='ico'>
                    <img src={CodingNinja} alt = "leetcode" style= {{width : '120px'  , height : '100px'}}></img>
                    </a>
                    <a className ="ico" href = "https://codeforces.com/profile/tusharkhurana526">
                    <img src={Codeforces} alt = "leetcode" style= {{width : '120px'  , height : '100px'}}></img>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default What;