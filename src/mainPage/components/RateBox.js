import React from 'react';
import './ratebox.css';

const RateBox = () => {
  return (
    <div className="rate-block">
      <div className="rate-content">
        <img className="rate-image" src="img/Image-8.png" width="50px" height="50px" alt="" />
        <div>
          <h1>Alpamys Moldashev</h1>
          <h2>Graphic Designer</h2>
        </div>
      </div>
      <div className="rate-bottom">
        <h3>
          With the Move messenger I can correspond with clients from all over the world and never forget about important
          meetings.
        </h3>
        <img className="rate-icon" src="img/Icon_Star-2.png" width="222.951px" height="42.951px" alt="" />
      </div>
    </div>
  );
};

export default RateBox;
