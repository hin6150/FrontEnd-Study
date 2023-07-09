import React from 'react';
import './studylinkbox.css';

const StudyLinkBox = () => {
  return (
    <div className="studylink-rectangle">
      <div className="studylink-content">
        <button className="studylink-logo">
          <img className="studylink-slack" src="img/slack.png" width="133px" height="34px" alt="" />
        </button>
        <img className="studylink-image" src="img/Image-39.png" width="392px" height="300px" alt="" />
      </div>
      <h1>Slack</h1>
      <h2>Think about how many people and different companies our corporate messenger brings together.</h2>
      <div>
        <button className="readstory">Read story</button>
        <img className="studylink-icon" src="img/icon-arrow-right-3.png" width="19px" height="19px" alt="" />
      </div>
    </div>
  );
};

export default StudyLinkBox;
