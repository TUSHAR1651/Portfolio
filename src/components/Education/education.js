import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css'; // Import your custom CSS

const Education = () => (
  <div className="Education">
    <h1 style={{ textAlign: 'center', color: 'rgb(33, 150, 243)' }}>Education</h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="2023 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<YourIcon />} // Uncomment and replace with an actual icon component if needed
      >
        <h3 className="vertical-timeline-element-title">Studying at Scaler School Of Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">Bengaluru, India</h4>
        <p>I am studying software engineering subjects like Data Structures, Algorithms, DBMS, OS, CA, CN, etc.</p>
        <hr className="vertical-timeline-line" />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="2020 - 2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Sant Gyaneshwar Model School</h3>
        <h4 className="vertical-timeline-element-subtitle">Delhi, India</h4>
        <p>For 11th-12th class</p>
        <hr className="vertical-timeline-line" />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
        date="2009 - 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Dyal Singh Public School</h3>
        <h4 className="vertical-timeline-element-subtitle">Karnal, Haryana, India</h4>
        <h5 className="vertical-timeline-element-subtitle">Till 10th class</h5>
        <hr className="vertical-timeline-line" />
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

export default Education;
