import React from 'react';
import './smallbox.css';
import { Image } from '../../components/components';

const SmallBox = () => {
  return (
    <div className="small-box-container">
      <div className="small-box">
        <div className="icon">
          <Image src="icon-2" width="80px" height="80px" />
        </div>
        <div className="text">
          <span>Notification</span>
          <h2>
            Try the messenger <br />
            features!
          </h2>
        </div>
      </div>
      <img className="smallbox-image" alt="" src="img/Image-18.png" width="600px" height="500px" />
    </div>
  );
};

export default SmallBox;
