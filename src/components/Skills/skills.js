import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css';
// import './Footer.css';
// import { Icon } from '@iconify/react';
// import cIcon from '@iconify/icons-logos/c';
// import pythonIcon from '@iconify/icons-logos/python';
// import html5Icon from '@iconify/icons-logos/html-5';
// import css3Icon from '@iconify/icons-logos/css-3';
// import javascriptIcon from '@iconify/icons-logos/javascript';
// import skillImage from '../Assets/Skills.svg';

const skills = () => {
  return (
    <div className="container-fluid body_section">
        <section className="Section1">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* <img className="skill-img" src={skillImage} alt="Skills" /> */}
          </div>
          <div className="col-lg-6 col-md-6">
            <div id="SkillBox">
              <center className="Skill-heading">Proficiency</center>
              <div className="SkillBar">
                <div id="Skill-C">
                  {/* <Icon className="progress-icon" icon={cIcon} width="35" height="35" /> */}
                </div>
              </div>
              <div className="SkillBar">
                <div id="Skill-Python">
                  {/* <Icon className="progress-icon" icon={pythonIcon} width="35" height="35" /> */}
                </div>
              </div>
              <div className="SkillBar">
                <div id="Skill-HTML">
                  {/* <Icon className="progress-icon" icon={html5Icon} width="35" height="35" /> */}
                </div>
              </div>
              <div className="SkillBar">
                <div id="Skill-CSS">
                  {/* <Icon className="progress-icon" icon={css3Icon} width="35" height="35" /> */}
                </div>
              </div>
              <div className="SkillBar">
                <div id="Skill-JS">
                  {/* <Icon className="progress-icon" icon={javascriptIcon} width="35" height="35" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default skills;