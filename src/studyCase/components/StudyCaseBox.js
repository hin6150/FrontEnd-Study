import React from 'react';

const StudyCaseBox = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <img className="image" src="src\assets\Image-51.png" width="458px" height="305px"></img>
      <div className="buttonbox">
        <button className="button">
          <img className="image1" src="src\assets\kyan.png" width="100px" height="36px"></img>
        </button>
      </div>
      <br></br>
      <p className="kyan">Kyan Management</p>
      <br></br>
      <p className="content">
        One of the most important tasks<br></br> in management is the proper<br></br> distribution of responsibilities.
      </p>
    </div>
  );
};

export default StudyCaseBox;
