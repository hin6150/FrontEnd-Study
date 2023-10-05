import React from 'react';
import './studycasebox.css';

const StudyCaseBox = () => {
  return (
    <div>
      <div className="casebox-container">
        <img className="casebox-image" src="img/Image-51.png" width="240px" height="260px" alt="" />
        <div className="casebox-content">
          <div className="buttonbox">
            <button className="casebutton">
              <img className="casebutton-image" src="img/kyan.png" width="100px" height="36px" alt="" />
            </button>
            <h1>Kyan Management</h1>
            <h2>One of the most important tasks in management is the proper distribution of responsibilities.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCaseBox;
