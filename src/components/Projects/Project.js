//  i want a div in which there is an image in the left and text in the right
import React from 'react';
import './Project.css';
import Project from './Projects.svg';

const Projects = () => {
    return (
        <div className="project">
            <img src={Project} alt="project"  style = {{height: "500px" , width: "500px"}}/>
            <div className="project_info">
                <h1>Projects</h1>
                <p>My Project uses various technologies to make the model more accurate and stable. As of now, I haven't done many projects but in near future I will make more projects.</p>
            </div>
        </div>
    )

}
export default Projects;